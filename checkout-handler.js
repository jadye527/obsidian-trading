/**
 * checkout-handler.js
 * Obsidian Trading Guides — Stripe Checkout Backend
 *
 * Stack: Node.js + Express
 * Deploy: Railway / Render / Fly.io / any Node host
 *
 * Setup:
 *   npm install express stripe cors crypto
 *   node checkout-handler.js
 *
 * Environment variables required:
 *   STRIPE_SECRET_KEY    — sk_live_... from Stripe Dashboard
 *   STRIPE_WEBHOOK_SECRET — whsec_... from Stripe Dashboard → Webhooks
 *   PORT                  — (optional, defaults to 3001)
 *   FRONTEND_URL          — Your checkout.html domain (for CORS)
 *
 *   PDF paths (place PDFs in ./pdfs/ or update paths below):
 *   PDF_STARTER           — Path to starter guide PDF
 *   PDF_FULL              — Path to full system PDF
 */

'use strict';

const express   = require('express');
const Stripe    = require('stripe');
const cors      = require('cors');
const crypto    = require('crypto');
const path      = require('path');
const fs        = require('fs');

// ============================================================
// Configuration
// ============================================================
const STRIPE_SECRET_KEY     = process.env.STRIPE_SECRET_KEY;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
const PORT                  = process.env.PORT || 3001;
const FRONTEND_URL          = process.env.FRONTEND_URL || 'https://obsidian.ai';

// PDF file paths — place your PDF files here
const PDF_PATHS = {
  starter: process.env.PDF_STARTER || path.join(__dirname, 'pdfs', 'obsidian-starter-guide.pdf'),
  full:    process.env.PDF_FULL    || path.join(__dirname, 'pdfs', 'obsidian-full-system.pdf'),
};

// Product catalog — matches checkout.html product cards
const PRODUCTS = {
  starter: {
    id: 'starter',
    name: 'Obsidian Starter Guide',
    amount: 2900,     // cents
    currency: 'usd',
    pdfKey: 'starter',
  },
  full: {
    id: 'full',
    name: 'Obsidian Full System',
    amount: 9900,     // cents
    currency: 'usd',
    pdfKey: 'full',
  },
};

// ============================================================
// Validation
// ============================================================
if (!STRIPE_SECRET_KEY) {
  console.error('❌  STRIPE_SECRET_KEY environment variable is required');
  process.exit(1);
}

// ============================================================
// Stripe + Express init
// ============================================================
const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2024-06-20' });
const app    = express();

// CORS — restrict to your frontend domain in production
app.use(cors({
  origin: [FRONTEND_URL, 'http://localhost:3000', 'http://127.0.0.1:5500'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Raw body needed for Stripe webhook verification
app.use('/webhook', express.raw({ type: 'application/json' }));

// JSON body for all other routes
app.use(express.json());

// ============================================================
// In-memory download token store
// Replace with Redis or database for multi-server deployments
// ============================================================
const downloadTokens = new Map(); // token → { productId, expiresAt, used }

function createDownloadToken(productId, paymentIntentId) {
  // Deterministic token from payment intent (idempotent across retries)
  const token = crypto
    .createHmac('sha256', STRIPE_SECRET_KEY)
    .update(`${paymentIntentId}:${productId}`)
    .digest('hex');

  const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
  downloadTokens.set(token, { productId, paymentIntentId, expiresAt, used: false });
  return token;
}

function validateDownloadToken(token) {
  const entry = downloadTokens.get(token);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    downloadTokens.delete(token);
    return null;
  }
  return entry;
}

// ============================================================
// Routes
// ============================================================

/**
 * GET /health
 * Health check
 */
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

/**
 * POST /create-payment-intent
 * Body: { productId: 'starter' | 'full', amount?: number }
 * Returns: { clientSecret: string }
 */
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { productId } = req.body;

    const product = PRODUCTS[productId];
    if (!product) {
      return res.status(400).json({ error: 'Invalid product ID' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount:   product.amount,
      currency: product.currency,
      automatic_payment_methods: { enabled: true },
      metadata: {
        productId: product.id,
        productName: product.name,
      },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('create-payment-intent error:', err);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});

/**
 * POST /get-download-link
 * Called client-side after payment confirmation (confirmPayment resolves)
 * Body: { paymentIntentId: string, productId: string }
 * Returns: { downloadUrl: string }
 *
 * Security note: We verify the payment intent status with Stripe
 * before issuing a download token — client cannot fake this.
 */
app.post('/get-download-link', async (req, res) => {
  try {
    const { paymentIntentId, productId } = req.body;

    if (!paymentIntentId || !productId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Verify payment with Stripe (don't trust client)
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== 'succeeded') {
      return res.status(402).json({ error: 'Payment not completed' });
    }

    // Verify product matches what was paid for
    if (paymentIntent.metadata.productId !== productId) {
      return res.status(400).json({ error: 'Product mismatch' });
    }

    const token = createDownloadToken(productId, paymentIntentId);
    const downloadUrl = `${req.protocol}://${req.get('host')}/download/${productId}?token=${token}`;

    res.json({ downloadUrl });
  } catch (err) {
    console.error('get-download-link error:', err);
    res.status(500).json({ error: 'Failed to generate download link' });
  }
});

/**
 * GET /download/:productId?token=...
 * Serves the PDF file to the user
 */
app.get('/download/:productId', (req, res) => {
  const { productId } = req.params;
  const { token } = req.query;

  if (!token) {
    return res.status(401).send('Access denied — missing token');
  }

  const entry = validateDownloadToken(token);
  if (!entry) {
    return res.status(401).send('Access denied — invalid or expired link. Please contact support@obsidian.ai');
  }

  if (entry.productId !== productId) {
    return res.status(400).send('Invalid download request');
  }

  const pdfPath = PDF_PATHS[productId];
  if (!pdfPath || !fs.existsSync(pdfPath)) {
    console.error(`PDF not found for product ${productId} at path ${pdfPath}`);
    return res.status(500).send('File not found. Please contact support@obsidian.ai');
  }

  const product = PRODUCTS[productId];
  const fileName = product.name.replace(/\s+/g, '-').toLowerCase() + '.pdf';

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
  res.setHeader('Cache-Control', 'no-store');

  const fileStream = fs.createReadStream(pdfPath);
  fileStream.on('error', (err) => {
    console.error('File stream error:', err);
    res.status(500).send('Download failed. Please contact support@obsidian.ai');
  });
  fileStream.pipe(res);
});

/**
 * POST /webhook
 * Stripe webhook handler — backup fulfillment path
 * Configure in Stripe Dashboard → Developers → Webhooks
 * Events to listen for: payment_intent.succeeded
 */
app.post('/webhook', (req, res) => {
  const sig = req.headers['stripe-signature'];

  if (!STRIPE_WEBHOOK_SECRET) {
    console.warn('⚠️  STRIPE_WEBHOOK_SECRET not set — webhook verification skipped');
    return res.sendStatus(200);
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case 'payment_intent.succeeded': {
      const pi = event.data.object;
      const productId = pi.metadata.productId;
      console.log(`✅ Payment succeeded: ${pi.id} | Product: ${productId} | Amount: $${pi.amount / 100}`);

      // Pre-create download token (so it's ready even if client-side call fails)
      if (productId && PRODUCTS[productId]) {
        const token = createDownloadToken(productId, pi.id);
        console.log(`📄 Download token created for ${pi.id}`);
        // TODO: Also send confirmation email via Resend with the download link
        // sendConfirmationEmail(pi.receipt_email, productId, token);
      }
      break;
    }

    case 'payment_intent.payment_failed': {
      const pi = event.data.object;
      console.log(`❌ Payment failed: ${pi.id}`);
      break;
    }

    default:
      // Ignore other events
  }

  res.sendStatus(200);
});

// ============================================================
// Start server
// ============================================================
app.listen(PORT, () => {
  console.log(`\n⚫ Obsidian Checkout Handler`);
  console.log(`   Running on port ${PORT}`);
  console.log(`   Mode: ${process.env.NODE_ENV || 'development'}`);
  console.log(`   CORS origin: ${FRONTEND_URL}`);
  console.log(`\n   Endpoints:`);
  console.log(`   POST /create-payment-intent`);
  console.log(`   POST /get-download-link`);
  console.log(`   GET  /download/:productId?token=...`);
  console.log(`   POST /webhook`);
  console.log(`   GET  /health\n`);

  // Warn about missing PDFs
  for (const [key, pdfPath] of Object.entries(PDF_PATHS)) {
    if (!fs.existsSync(pdfPath)) {
      console.warn(`   ⚠️  PDF not found for '${key}': ${pdfPath}`);
    } else {
      console.log(`   ✅ PDF found for '${key}': ${path.basename(pdfPath)}`);
    }
  }
});

module.exports = app;
