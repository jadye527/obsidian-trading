# Obsidian Checkout — Setup Guide

## Files
| File | Purpose |
|------|---------|
| `checkout.html` | Frontend checkout + success page (Stripe Elements) |
| `checkout-handler.js` | Node.js/Express backend (payment intents, download tokens, webhook) |
| `package.json` | Node dependencies |
| `pdfs/` | Drop your PDF files here (see below) |

---

## 1. Get Your Stripe Keys

1. Go to [Stripe Dashboard → Developers → API Keys](https://dashboard.stripe.com/apikeys)
2. Copy your **Publishable key** (`pk_live_...`)
3. Copy your **Secret key** (`sk_live_...`)

---

## 2. Configure checkout.html

Open `checkout.html` and update the two config lines near the bottom:

```javascript
const STRIPE_PUBLISHABLE_KEY = 'pk_live_REPLACE_WITH_YOUR_KEY';
const BACKEND_URL = 'https://your-backend-url.com';
```

---

## 3. Add Your PDFs

Create a `pdfs/` folder next to `checkout-handler.js`:

```
website/
  pdfs/
    obsidian-starter-guide.pdf   ← Starter Guide ($29)
    obsidian-full-system.pdf     ← Full System ($99)
```

Or override paths with environment variables:
```
PDF_STARTER=/path/to/starter.pdf
PDF_FULL=/path/to/full-system.pdf
```

---

## 4. Deploy the Backend

### Option A: Railway (easiest, ~2 min)
```bash
cd website/
npm install
railway login
railway init
railway up
railway variables set STRIPE_SECRET_KEY=sk_live_...
railway variables set FRONTEND_URL=https://obsidian.ai
```

### Option B: Render
1. Push to GitHub
2. New Web Service → connect repo
3. Build: `npm install` | Start: `node checkout-handler.js`
4. Add environment variables in Render dashboard

### Option C: Local (dev/testing)
```bash
cd website/
npm install
STRIPE_SECRET_KEY=sk_test_... FRONTEND_URL=http://localhost node checkout-handler.js
```

---

## 5. Set Up Stripe Webhook (optional but recommended)

Webhooks provide a backup fulfillment path if the browser closes before the success page loads.

1. Stripe Dashboard → Developers → Webhooks → Add endpoint
2. URL: `https://your-backend-url.com/webhook`
3. Events: `payment_intent.succeeded`
4. Copy the signing secret (`whsec_...`)
5. Set env var: `STRIPE_WEBHOOK_SECRET=whsec_...`

---

## 6. Test with Stripe Test Mode

1. Switch to **Test mode** in Stripe Dashboard
2. Use `pk_test_...` and `sk_test_...` keys
3. Test card: `4242 4242 4242 4242` | Any future date | Any CVC

---

## Architecture

```
Browser (checkout.html)
    │
    ├── POST /create-payment-intent  → backend creates PaymentIntent → returns clientSecret
    │
    ├── Stripe.js handles payment UI + confirmation
    │
    └── On success: POST /get-download-link
            │
            ├── Backend verifies with Stripe API (pi.status === 'succeeded')
            ├── Creates signed download token (HMAC-SHA256, 24h TTL)
            └── Returns /download/:productId?token=...
                    │
                    └── Streams PDF to browser
```

## Security Notes

- Download tokens are cryptographically derived from Stripe's payment intent ID
- Token validity is verified server-side on every download request
- Token expires after 24 hours (configurable)
- CORS restricted to your frontend domain
- Payment amount is set server-side — client cannot override price
- Stripe webhook verifies signatures before processing

---

## Support Email

Update `support@obsidian.ai` in `checkout.html` to your actual support address.
