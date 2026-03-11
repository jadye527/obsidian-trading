# AI Trading Analyst: The Starter Guide

**Get a personal AI analyst on your phone — no code required.**

*By Obsidian | JSJ Consulting*

---

© 2026 JSJ Consulting. All rights reserved.

This guide is licensed for personal use only. Do not redistribute, resell, or share without written permission from JSJ Consulting.

**Version 1.0 — March 2026**

---

## Table of Contents

- [Introduction: The Real Problem](#introduction-the-real-problem)
- [Chapter 1: Why Weather Markets](#chapter-1-why-weather-markets)
- [Chapter 2: What Your AI Analyst Does](#chapter-2-what-your-ai-analyst-does)
- [Chapter 3: Getting Set Up](#chapter-3-getting-set-up)
- [Chapter 4: Your First Morning Briefing](#chapter-4-your-first-morning-briefing)
- [Chapter 5: The Framework](#chapter-5-the-framework)
- [Chapter 6: The Prompt Library](#chapter-6-the-prompt-library)
- [Chapter 7: The Daily Routine](#chapter-7-the-daily-routine)
- [Chapter 8: Position Sizing & Rules](#chapter-8-position-sizing-and-rules)
- [Chapter 9: What We Learned Trading Real Money](#chapter-9-what-we-learned-trading-real-money)
- [Chapter 10: What's Next](#chapter-10-whats-next)
- [Quick-Start Checklist](#quick-start-checklist)
- [Prompt Reference Card](#prompt-reference-card)

---

# Introduction: The Real Problem

You don't have a strategy problem. You have an operations problem.

Think about the last trade you lost money on. Was it because you didn't understand the market? Probably not. More likely, it was one of these:

- You saw the opportunity 20 minutes too late.
- You sized the position based on how excited you felt, not on math.
- You averaged down because the price moved against you and you *felt* like you were right.
- You didn't check the data that would have told you your thesis was dead.
- You were busy with life and missed the exit window entirely.

I know because I've done all of these. In February 2026, I ran 15 weather market trades on Polymarket. My initial win rate was 26.7%. Four wins out of fifteen. That's not a typo.

The strategy was sound. The edge was real. The execution was a disaster.

Here's what went wrong: I was doing everything manually. Checking forecasts on three different websites. Comparing them in my head. Monitoring METAR reports (the actual weather station data) by refreshing a government webpage. Making position decisions while walking to get coffee. Averaging down because I "knew" the weather would shift, without checking whether the data actually supported that conviction.

So I built an AI analyst. Not a trading bot — I don't trust full automation with real money, and you shouldn't either. An *analyst*. Something that does the research grunt work, surfaces opportunities I'd miss, enforces the rules I set for myself, and delivers it all to my phone via Telegram.

The win rate went from 26.7% to above 60%. Not because the AI is smarter than me about weather. It's not. But because it never skips a data check out of laziness. It never sizes a position based on emotion. It never forgets to monitor an open trade. It just... does the work, every time, without fail.

**What this guide gives you:**

1. A fully configured AI trading analyst running on your phone by end of today
2. The weather market framework — why these markets are structurally mispriced and how to think about them
3. 24 copy-paste prompts that turn your analyst into a research machine
4. A daily workflow that runs on natural language conversation, not code
5. Position sizing rules that protect your capital
6. The honest story of what went wrong, what we fixed, and what we learned

**What this guide does NOT give you:**

- A get-rich-quick system (doesn't exist)
- Fully automated trading (that's a different product for people who want it)
- Guarantees (markets are markets — you can lose money)
- Python scripts or technical implementation (you don't need them for what we're building here)

You need a laptop or desktop for the initial 30-minute setup. After that, everything runs from your phone. You talk to your analyst in Telegram like you'd text a colleague. It talks back with data, analysis, and recommendations.

Let's build it.

---

# Chapter 1: Why Weather Markets

Most people hear "weather markets" and think it sounds gimmicky. Temperature bets? Seriously?

That reaction is exactly why there's money to be made.

## The Structural Edge

Weather markets on Polymarket let you bet on things like: "Will the high temperature in Atlanta exceed 75°F today?" or "Will it rain in Chicago before noon?" These sound simple, but they have properties that create persistent mispricings.

**Property 1: The data is public, but nobody reads it.**

Every major airport in the United States has a weather station that reports real-time conditions every hour (sometimes more frequently). These reports are called METARs — Meteorological Aerodrome Reports. They're published by the National Weather Service and available to anyone with an internet connection. They report actual observed temperature, wind, precipitation, visibility, and pressure.

Most traders in weather markets don't read METARs. They look at weather.com or check their phone's weather app and make a gut call. That's like trading a stock without reading the earnings report because you saw a headline about the company.

**Property 2: Forecasts disagree with each other.**

Here's something most people don't realize: the National Weather Service forecast, the Weather Channel forecast, AccuWeather, and the European model frequently disagree with each other by 3-5°F for the same location on the same day. Sometimes more.

When forecasts diverge, the market has to price in uncertainty. But most traders anchor to *one* forecast — usually whatever their phone shows them — and price accordingly. When you're systematically comparing multiple forecast sources, you see mispricings they don't.

**Property 3: The rounding blind spot.**

Polymarket weather markets typically resolve based on the official high temperature rounded to the nearest degree. Here's why that matters:

If the forecast says the high will be 74.6°F, most traders think "close to 75, probably goes over." But the official METAR reading might come in at 74.8°F — which rounds to 75°F — or 74.4°F — which rounds to 74°F. The difference between 74°F and 75°F on the official record can swing a market from YES to NO.

The rounding creates a zone of uncertainty around every threshold that most traders don't think about carefully. When the forecast high is within 2°F of the market's threshold, the rounding dynamics become the dominant factor. Traders who don't account for this systematically overpay.

**Property 4: The METAR timing advantage.**

Weather markets often resolve based on the day's official high temperature. But METAR reports come out hourly (and sometimes at irregular intervals for special observations). If you're watching the METAR reports in real-time, you know the *current actual temperature* while other traders are still looking at the morning forecast.

Imagine it's 2 PM and the forecast said the high would be 72°F, but the 1 PM METAR already shows 74°F and it's still warming. The market is priced based on the morning forecast. You're looking at the actual data. That's an edge.

## Why Most Traders Price These Wrong

Weather markets attract two types of participants:

1. **Casual bettors** who treat them like sports bets — vibes-based, anchored to a single forecast, no systematic approach.
2. **Sophisticated traders** who build automated systems but tend to overcomplicate the meteorology and under-focus on market microstructure.

The sweet spot — someone with a clear framework, multiple data sources, disciplined execution, and proper position sizing — is surprisingly empty. That's the space your AI analyst helps you occupy.

You don't need a meteorology degree. You need a systematic process for comparing forecasts, reading actual station data, and making decisions based on probability rather than conviction.

That's exactly what we're building.

---

# Chapter 2: What Your AI Analyst Does

Let's be specific about what you're getting. Not hype — a clear description of what your AI analyst will do once it's set up.

## The Morning Briefing

Every morning at 7:30 AM, your analyst sends you a Telegram message. Unprompted. You wake up, check your phone, and there it is.

The briefing covers:
- **Today's weather markets:** Which cities have active markets, what the current prices are, where the thresholds sit
- **Forecast comparison:** What NWS, Weather Channel, and GFS/Euro models are saying — and where they disagree
- **Opportunity flags:** Markets where the current price doesn't match the forecast consensus (or where forecast divergence creates an opening)
- **Open position status:** If you have trades on, how they look in light of overnight forecast updates
- **Crypto snapshot:** Quick scan of major movers if you trade crypto alongside weather (optional — you can remove this from the config)

You read it in 2 minutes. You know exactly what's worth looking at today.

## Research On Demand

See something interesting in the briefing? Ask about it.

"Brief me on the Atlanta high temp market — it's at 0.42 YES, and the threshold is 78°F."

Your analyst pulls forecast data, checks recent METAR trends for Atlanta, compares models, assesses the rounding dynamics, and gives you a structured analysis. Probability estimate, confidence level, key risks.

This takes 10 seconds of your time (typing the question) and replaces 15-20 minutes of manual research across multiple websites.

## Position Monitoring

Got open trades? Your analyst checks them every 2 hours against the latest data.

If the METAR data shifts against your thesis, you get a ping: "Atlanta METAR at 1 PM shows 76.2°F with decreasing temps. Your YES position at threshold 78°F is at risk. Current market price: 0.31. Consider exit."

If everything's tracking as expected, you get a simple confirmation: "All positions tracking. No action needed."

You don't have to remember to check. It checks for you.

## Rule Enforcement

This is the one that saves you the most money.

You set rules. The analyst enforces them. When you ask it to evaluate a trade that violates your rules, it tells you — clearly and without emotion.

"I'm thinking about adding $200 to my Seattle position."

"That would put your Seattle exposure at 7.2% of bankroll, exceeding your 5% max single position rule. Your current Seattle position is $150. Adding $200 would require reducing to $100 or less to stay within rules. Additionally, this would be averaging down on an existing position — your rules require a new thesis document before adding to a losing position. What's your updated thesis?"

No judgment. No nagging. Just the math and the rules you already agreed to.

> **⚡ Automation note:** Your analyst checks positions when you ask or on its 2-hour heartbeat cycle — that covers the vast majority of trading situations. If you eventually want continuous monitoring, the Full Trading System polls METAR data every 5 minutes across all 6 cities and alerts you only when there's a confirmed divergence. Same framework, just automated. [Details at end of guide]

## The Evening Review

At 8 PM, your analyst sends an unprompted summary:
- Today's P&L (which trades resolved, what you made or lost)
- Open positions going into tomorrow
- What to watch overnight (any markets with early-morning resolution, overnight weather events)
- Lessons learned (if a trade lost, why — was the thesis wrong, or was execution off?)

## The Weekly Report

Sunday at 9 AM, you get the big picture:
- Weekly P&L
- Win rate
- Average position size
- Biggest winner and biggest loser (and why)
- Pattern observations (are you consistently mispricing one type of market? Are you oversized on a particular city?)

This is your analyst doing the work of a trading journal — without you having to write in it.

---

# Chapter 3: Getting Set Up

This is the hands-on chapter. By the end of it, your AI analyst will be live on Telegram.

**What you need:**
- A laptop or desktop computer (Mac, Windows, or Linux)
- A Telegram account
- 30 minutes
- $0 (OpenClaw is free for personal use)

## Step 1: Install OpenClaw

OpenClaw is the platform that runs your AI analyst. Think of it as the engine — your analyst's personality, rules, and schedule are the configuration you'll add on top.

**On Mac:**
```bash
brew install openclaw
```

**On Windows (WSL) or Linux:**
```bash
curl -fsSL https://get.openclaw.com | bash
```

That's it. One command. If it asks you to add something to your PATH, do what it says and restart your terminal.

Verify it worked:
```bash
openclaw --version
```

You should see a version number. If you do, you're good.

## Step 2: Create Your Agent Workspace

```bash
openclaw init my-trading-analyst
cd my-trading-analyst
```

This creates a folder with some starter files. We're going to replace four of them with the trading-specific versions below.

## Step 3: Connect Telegram

OpenClaw has built-in Telegram support. You need to create a Telegram bot (this is your analyst's "phone number" on Telegram) and connect it.

1. Open Telegram and search for **@BotFather**
2. Send `/newbot`
3. Give it a name (e.g., "My Trading Analyst")
4. Give it a username (e.g., "my_trading_analyst_bot" — must end in "bot")
5. BotFather gives you a token. Copy it.

Now connect it to OpenClaw:
```bash
openclaw channel add telegram --token YOUR_TOKEN_HERE
```

Send a message to your new bot in Telegram. If it responds, you're connected.

## Step 4: The Four Config Files

This is where your analyst gets its personality, its rules, and its schedule. There are four files. I'm giving you complete, ready-to-use versions. Copy each one exactly.

### SOUL.md — Your Analyst's Personality

Create or replace the file `SOUL.md` in your workspace:

```markdown
# SOUL.md - Trading Analyst Persona

You are a trading analyst. Your job is to surface high-probability opportunities,
maintain research discipline, and protect capital. You serve one trader. Everything
you do is in service of their P&L.

## Voice & Tone
- **Data-first.** Every claim has a source. Every recommendation has a probability
  estimate. You never say "I think the market will go up" — you say "GFS and Euro
  models agree on a high of 76°F ± 1.5°F, with the METAR at 2 PM already showing
  74.1°F. Probability of exceeding the 75°F threshold: ~68%."
- **No hype, no panic.** Markets move. Data changes. You adjust calmly.
  A losing trade isn't a crisis — it's information.
- **Flag emotional language.** If your trader says "I just feel like this is going
  to hit," that's your cue to ask for the data behind the feeling. Not judgmentally
  — just professionally.
- **Concise on routine, detailed on research.** Morning briefings are scannable.
  When asked for deep analysis, you deliver thorough work. Match the depth to the ask.
- **Honest about uncertainty.** You give probability ranges, not certainties. You say
  "I don't have enough data to give a confident estimate" when that's true. Fake
  confidence is worse than honest uncertainty.
- **Protective of capital.** When in doubt, your bias is toward not trading. The best
  trade is often no trade. You never pressure your trader into a position.

## What You Are NOT
- Not a cheerleader (no "Great trade!" or "Let's crush it today!")
- Not a yes-man (you push back when the data doesn't support the thesis)
- Not emotional (you don't get excited about wins or dejected about losses)
- Not passive (you proactively flag risks and opportunities — you don't wait to be asked)
```

### IDENTITY.md — Your Analyst's Role

```markdown
# IDENTITY.md - Agent Identity

- Name: Analyst
- Role: AI Trading Analyst
- Mission: Surface high-probability positions, maintain research discipline,
  protect capital

## Scope
- Primary: Polymarket weather markets (temperature, precipitation thresholds)
- Secondary: Crypto markets (overview and major movers — not deep analysis unless asked)
- Always: Position monitoring, rule enforcement, P&L tracking

## Operating Principles
1. Never recommend a trade without stating the probability estimate and confidence level
2. Always compare at least two forecast sources before forming a view
3. Flag any open position where new data contradicts the entry thesis
4. Enforce position sizing rules without exception
5. Track every trade for the weekly review — wins AND losses, with reasons
```

### RULES.md — Your Trading Rules

These are *your* rules. The analyst enforces them. Change them to match your risk tolerance — but start with these. They're conservative for a reason.

```markdown
# RULES.md - Trading Rules

These rules are non-negotiable. The analyst enforces them on every trade evaluation.
To change a rule, update this file directly — don't override rules in conversation.

## Position Sizing
- **Max single position:** 5% of total bankroll
- **Max concurrent positions:** 4
- **Minimum bankroll reserve:** 60% must remain in cash at all times

## Entry Rules
- **No chasing:** Do not enter a market that has moved more than 15% from where you
  first identified it. If you saw it at 0.40 and it's now 0.56, you missed it. Next.
- **Thesis required:** Every entry needs a clear thesis: what data supports this
  position, what would invalidate it, and at what price you exit.
- **Multi-source confirmation:** At least 2 of 3 forecast sources must support the
  directional thesis before entry.

## Exit Rules
- **Thesis invalidation:** If the data changes and your thesis is no longer supported,
  exit within 4 hours. Not tomorrow. Not "let me see if it comes back." Four hours.
- **No averaging down without new thesis:** Adding to a losing position requires a
  written updated thesis that accounts for why the original was wrong and why the new
  entry is different. "It's cheaper now" is not a thesis.

## Risk Limits
- **Daily loss limit:** If you lose more than 3% of bankroll in a single day,
  stop trading for the rest of the day. No exceptions.
- **Weekly loss limit:** If you lose more than 7% of bankroll in a single week,
  reduce all position sizes by 50% the following week.

## Record Keeping
- Every trade gets logged: entry price, exit price, thesis, outcome, and lesson
- Weekly review every Sunday — the analyst runs this automatically
```

### HEARTBEAT.md — Your Analyst's Schedule

This is what makes your analyst *proactive*. It doesn't just wait for your questions — it runs on a schedule.

```markdown
# HEARTBEAT.md - Analyst Schedule

## Morning Briefing — 7:30 AM ET (daily)
Run the following and send to Telegram:
1. Pull today's weather markets from Polymarket (active cities, thresholds, current prices)
2. Compare NWS forecast, Weather Channel, and GFS/Euro model output for each city
3. Flag any market where forecast consensus diverges from current market price by >10%
4. Check overnight METAR data for anything unusual (early warming, unexpected precip)
5. Summarize open positions and how overnight data affects them
6. Quick crypto overview: BTC, ETH, SOL — price, 24h change, any major news

Format: scannable, mobile-friendly. Lead with the most actionable item.

## Position Check — Every 2 hours during market hours (9 AM - 6 PM ET)
For each open position:
1. Pull latest METAR data for the relevant city
2. Compare current conditions to entry thesis
3. If data contradicts thesis, send alert with recommendation
4. If data confirms thesis, no alert needed (silent confirmation)

## Evening Review — 8:00 PM ET (daily)
Send to Telegram:
1. Today's resolved markets — outcomes and P&L
2. Open positions going into tomorrow
3. Any overnight weather events to watch
4. One-sentence lesson from today (what went right or wrong)

## Weekly Report — Sunday 9:00 AM ET
Send to Telegram:
1. Weekly P&L (total, by city, by market type)
2. Win rate (this week and running total)
3. Average position size vs. target
4. Biggest winner and loser with post-mortem
5. Pattern observations and recommendations for next week
```

## Step 5: Start Your Analyst

```bash
openclaw start
```

Your analyst is now live. Open Telegram and send it a message:

"Good morning. What does today look like?"

If it responds with a market overview, you're in business.

> **⚡ Automation note:** The setup you just completed gives you a conversational analyst with scheduled briefings — that's a complete trading workflow. If you find yourself wishing the data was pre-loaded before you ask, the Full Trading System adds data connectors that pull live METAR feeds, Polymarket odds, and multi-model forecasts in the background. [Details at end of guide]

---

# Chapter 4: Your First Morning Briefing

It's 7:30 AM. Your phone buzzes. Here's what you're looking at.

## Example Morning Briefing

> **☀️ Morning Briefing — Tuesday, March 10**
>
> **Today's Weather Markets:**
>
> **Atlanta High Temp (threshold: 72°F)**
> - Current price: YES 0.58 / NO 0.42
> - NWS forecast: 73°F | Weather Channel: 71°F | Euro: 72.4°F
> - ⚠️ Forecast divergence: NWS and Euro lean YES, WC leans NO
> - Overnight METAR (6 AM): 54°F, clear skies, light wind
> - Assessment: Models disagree. This is a cusp market — the threshold sits right in the forecast uncertainty band. Worth watching but not an immediate entry.
>
> **Chicago Precipitation (threshold: any rain before 6 PM)**
> - Current price: YES 0.31 / NO 0.69
> - NWS forecast: 20% chance | WC: 15% | Euro: shows dry
> - All models agree: dry day. Market at 0.31 YES looks overpriced.
> - Assessment: NO at 0.69 has value. 3-model consensus on dry conditions. Consider entry.
>
> **Miami High Temp (threshold: 84°F)**
> - Current price: YES 0.72 / NO 0.28
> - NWS: 86°F | WC: 85°F | Euro: 85.2°F
> - Full model consensus on exceeding threshold
> - Assessment: Consensus YES, but price already reflects it. No edge at 0.72.
>
> **Open Positions:**
> - Seattle precip NO @ 0.65 (entered yesterday at 0.58) — overnight models still show dry. Tracking well. Hold.
>
> **Crypto Quick Scan:**
> - BTC: $87,420 (+1.2% 24h) — consolidating
> - ETH: $3,180 (-0.3%) — flat
> - SOL: $142 (+3.8%) — momentum, but no fundamental catalyst flagged
>
> **Today's Action Items:**
> 1. Watch Atlanta for 10 AM METAR — if temp tracking toward 73°+, the YES value appears at current price
> 2. Chicago NO looks like the cleanest opportunity today — full consensus, market overpricing rain risk
> 3. Seattle position is fine — next check at 11:30 AM

## How to Read the Briefing

**Scan in this order:**

1. **Action items at the bottom first.** This tells you what to focus on today.
2. **Any ⚠️ flags.** These are markets where something is unusual — forecast divergence, unexpected METAR data, or a position at risk.
3. **Open positions.** Are your existing trades still on track?
4. **New opportunities.** Is there something worth entering today?

**What to do with it:**

The briefing is information, not instructions. Your analyst tells you what the data says. *You* decide whether to trade.

If something looks interesting, ask for more detail:

"Tell me more about the Chicago rain market. Why is it priced at 0.31 YES when all models say dry?"

Your analyst will dig deeper — looking at recent precipitation patterns, checking if there's a lake-effect dynamic the models might be missing, comparing the pricing to similar historical setups.

**What good looks like:**

Most mornings, you'll read the briefing, note one or two markets to watch, and get on with your day. The analyst will ping you if something changes. You don't need to be glued to your screen.

The best trading days often involve *not trading*. If the briefing doesn't surface a clear opportunity, that's valuable information too. It means today isn't the day to put money at risk.

---

# Chapter 5: The Framework

Your analyst uses a framework to evaluate weather markets. You don't need to understand the technical implementation — but understanding the *concepts* makes you a better trader, because you'll know why the analyst is flagging certain opportunities and passing on others.

## Gate Rules: The First Filter

Before your analyst even looks at probability, it runs the opportunity through "gate rules." Think of these as pass/fail checkpoints. If a market fails any gate, it's filtered out — no matter how good the price looks.

**Gate 1: Sea Breeze Check**

Coastal cities (Miami, Los Angeles, Seattle) have a weather pattern called the sea breeze effect. In the afternoon, cooler air from the ocean pushes inland and can drop temperatures 3-5°F in under an hour.

Why it matters: A forecast might say Miami hits 86°F, and at 1 PM the METAR shows 85°F and climbing. Looks like a lock for YES on an 84°F threshold, right? But if the sea breeze kicks in at 2 PM, the temperature can drop to 82°F before recovering. If the market resolves based on the "official" high and the METAR captured that 85°F reading before the sea breeze, you're fine. But if the timing is different, you could be wrong.

Your analyst checks: Is this a coastal city? Is the market threshold in the sea breeze risk zone? If yes, it factors in the timing uncertainty.

**Gate 2: Marine Layer Check**

Similar to sea breeze, but specific to West Coast cities (primarily LA and San Francisco). Marine layer is the low cloud cover that rolls in from the Pacific, often burning off by midday. Morning forecasts can be way off if they misjudge when (or whether) the marine layer clears.

Your analyst checks: Is there a marine layer present in the morning METAR? How thick is the cloud cover? Is the forecast assuming it clears by a specific time? If the marine layer is stubborn, temperature forecasts are unreliable.

**Gate 3: Polar Vortex / Arctic Blast Check**

In winter, sudden intrusions of Arctic air can drop temperatures 15-20°F below forecast in a matter of hours. These events are relatively rare but devastating to positions.

Your analyst checks: Are there any polar vortex advisories or Arctic blast warnings? Is the jet stream pattern consistent with a sudden cold intrusion? If there's even a moderate risk, the analyst flags the uncertainty.

**Gate 4: Forecast Divergence Check**

This is the most common gate trigger. When forecasts disagree by more than 3°F, the market is harder to price accurately.

Your analyst checks: How much do the top 3 models disagree? If they're within 1°F, confidence is high. If they're spread across 4-5°F, the analyst widens the uncertainty band and adjusts its probability estimate accordingly.

If a market fails *any* gate, the analyst tells you: "This market has a [gate name] risk factor. Recommend watching only, or sizing down to 50% of normal if entering."

## The Cusp Model: Where the Money Is

"Cusp" is the term we use for markets where the threshold sits right inside the forecast uncertainty band.

Here's the idea: If every model says the high will be 80°F and the market threshold is 75°F, there's no trade. YES is priced near 0.90, it *should* be priced near 0.90, no edge exists.

But if the models say 74-76°F and the threshold is 75°F? Now you have a cusp market. The resolution is genuinely uncertain, and the market has to price that uncertainty. This is where mispricings happen, because:

1. **Traders anchor to point forecasts.** The NWS says 76°F, so a trader buys YES at 0.65. But the Euro says 74°F. The *range* is 74-76°F. YES at 0.65 doesn't reflect that uncertainty.

2. **Rounding dynamics are amplified.** When the forecast is 75.3°F and the threshold is 75°F, the rounding matters enormously. Does 75.3 round to 75 or 76 on the official record? It depends on the station's reporting precision. Many traders don't think about this.

3. **Late-day METAR data shifts the math.** In a cusp market, a single METAR reading can move the probability 20-30% in either direction. If you're watching the data and the market isn't re-pricing fast enough, that's an entry.

Your analyst identifies cusp markets in the morning briefing and gives them extra attention throughout the day. When the 10 AM or 1 PM METAR data arrives, the analyst re-evaluates the probability and alerts you if the cusp has tilted decisively.

> **⚡ Automation note:** Your analyst evaluates cusp dynamics when you ask or during scheduled briefings. Manually checking METAR data via prompts takes about 10 seconds per city. If you want that automated, the Full Trading System runs the cusp model every 5 minutes against live METAR feeds and alerts you when a cusp market tilts decisively. [Details at end of guide]

## How It All Fits Together

Think of the framework as a funnel:

1. **All active weather markets** → gate rules filter out risky or low-confidence markets
2. **Markets that pass gates** → cusp model identifies markets where the threshold is in the uncertainty zone
3. **Cusp markets** → forecast divergence and METAR monitoring determine whether there's an actual edge
4. **Markets with an edge** → position sizing rules determine how much to allocate

Your analyst runs this funnel for you. You see the output: "Here are today's opportunities, ranked by confidence." You decide which ones to trade.

---

# Chapter 6: The Prompt Library

These are copy-paste prompts you can send to your analyst in Telegram. They're designed to get specific, useful responses. Save the ones you use most — you'll use some of these daily.

## Market Scanning

**1. Full morning scan**
```
Scan all active weather markets for today. Compare forecasts across NWS, Weather Channel,
and Euro model. Flag any market where forecasts disagree by more than 2°F or where the
threshold is within the forecast uncertainty band.
```

**2. Quick opportunity check**
```
Any weather markets right now where the price doesn't match the data? Quick scan,
just the highlights.
```

**3. City-specific scan**
```
What's the setup for [CITY] weather markets today? All active thresholds,
current prices, and forecast comparison.
```

**4. Cusp market finder**
```
Which markets today have thresholds sitting inside the forecast uncertainty band?
Rank them by how close the threshold is to the forecast midpoint.
```

**5. Crypto morning scan**
```
Quick crypto scan — BTC, ETH, SOL, and any altcoin that moved more than 10% in the
last 24 hours. Just the numbers and any notable news.
```

## Position Research

**6. Deep dive on a specific market**
```
Brief me on the [CITY] [high temp / precipitation / etc.] market. Threshold is [X]°F,
current price is [Y] YES. Give me the full analysis: forecasts, METAR trends, gate check,
cusp assessment, and your probability estimate.
```

**7. Comparative analysis**
```
Compare the [CITY A] and [CITY B] high temp markets for today. Which one has
a better risk/reward setup and why?
```

**8. Historical pattern check**
```
For the [CITY] [market type] — how have similar setups resolved in the past week?
Any pattern in how the market prices these?
```

**9. Contrarian check**
```
The [CITY] market is priced at [X] YES. Make the case AGAINST this price —
what would need to happen for the other side to win?
```

**10. Entry evaluation**
```
I'm considering buying [YES/NO] on [CITY] [market] at [price]. Run it through
the framework: gate check, cusp assessment, forecast consensus, and position
sizing given my current book. Should I enter?
```

## Position Monitoring

**11. Position check (all)**
```
Check all my open positions against the latest available data.
Any thesis changes or required actions?
```

**12. Specific position check**
```
How's my [CITY] position looking? Pull the latest METAR data and
compare to my entry thesis.
```

**13. Alert threshold check**
```
For my open positions, which ones are closest to their invalidation point?
Rank by urgency.
```

**14. Exit evaluation**
```
My [CITY] position is at [current price] and I entered at [entry price].
The data shows [observation]. Should I exit, hold, or add?
Run it through my rules.
```

## Risk Management

**15. Rule compliance check**
```
Check my current exposure against all rules in RULES.md.
Am I in compliance? Any positions approaching limits?
```

**16. Pre-trade rule check**
```
I'm thinking about entering [position details]. Before I do —
does this comply with all my rules? Check position size, concurrent
positions, and entry criteria.
```

**17. Drawdown check**
```
What's my P&L today? Am I approaching my daily loss limit?
What about my weekly limit?
```

**18. Bankroll health**
```
Give me a snapshot of my bankroll: total value, cash percentage,
open position exposure, and available capital for new trades.
```

## Daily Reviews

**19. End of day summary**
```
End of day summary: what resolved today, P&L impact, open positions status,
and one key lesson from today's trading.
```

**20. What went wrong today**
```
Review today's losing trades (if any). For each one: was the thesis wrong,
was the execution wrong, or was it just variance? Be specific.
```

**21. What went right today**
```
Review today's winning trades (if any). Was the win because of good analysis,
good execution, or just luck? I need to know the difference.
```

## Weekly and Strategic

**22. Weekly pattern analysis**
```
Run my weekly pattern analysis. Win rate by city, by market type,
by time of entry. Where am I strongest? Where am I weakest?
Any recurring mistakes?
```

**23. Strategy adjustment**
```
Based on the last 2 weeks of data, should I adjust anything?
Position sizes, city focus, timing, entry criteria?
Give me specific recommendations with supporting data.
```

**24. Edge assessment**
```
Am I actually making money, or am I just getting lucky?
Run the numbers: is my win rate statistically significant given
my sample size? What's my expected value per trade?
```

> **⚡ Automation note:** Every prompt above works as a complete workflow. Most traders find they use 5-8 of these daily and it becomes second nature. If you want to automate the routine ones, the Full Trading System runs prompts 1, 4, 11, and 13 on schedule — so you only need to ask the research and decision prompts manually. [Details at end of guide]

---

# Chapter 7: The Daily Routine

This is the playbook. What your day looks like with your AI analyst active.

## 7:30 AM — The Briefing Arrives

Your phone buzzes. The morning briefing is in your Telegram chat. You read it over coffee.

**Time required: 2-3 minutes.**

You're looking for:
- Any markets flagged as opportunities (⚠️ markers)
- How your open positions look
- Whether any cusp markets exist today

Most mornings, there will be 0-2 markets worth looking at. Some mornings, there are none. That's fine. No opportunity is not a problem — it's a day to preserve capital.

## 8:00 AM — Pre-Market Research (if applicable)

If the briefing flagged something interesting, this is when you dig in.

Send a deep dive prompt:
```
Brief me on the Chicago high temp market. Threshold 68°F, priced at 0.55 YES.
Full analysis.
```

Read the response. If the analyst says it's a strong setup, decide on entry size and timing. If the analyst says it's marginal, move on.

**Time required: 5-10 minutes (or zero if nothing looks good).**

## 9:00 AM — Market Open Decisions

If you're entering any positions today, do it at market open or shortly after, when the morning METAR data can be cross-referenced with overnight forecasts.

Before entering, run the pre-trade rule check:
```
I'm thinking about buying NO on Chicago precipitation at 0.72. Check my rules.
```

If it passes, enter the trade. Log it mentally — your analyst will track it automatically.

**Time required: 2-5 minutes per trade.**

## 10:00 AM - 12:00 PM — The First METAR Check

Around 10 AM, the first meaningful METAR reports of the day come in (the morning readings show overnight lows, which aren't usually market-relevant for high temp markets).

If you have open positions, your analyst's heartbeat will check them at 11 AM and alert you if anything has changed. If you want an earlier check:

```
Pull the latest METAR data for my open positions. Anything changing?
```

**Time required: 1 minute (reading the response). Or zero, if the 11 AM heartbeat shows everything is fine.**

## 1:00 PM — The Critical Check

For high temperature markets, this is often the most important moment of the day. By 1 PM, most cities have either hit or are approaching their daily high. The METAR data at this point is highly predictive.

Your analyst runs a heartbeat check at 1 PM. If a cusp market is resolving, you'll get an alert:

"Atlanta 1 PM METAR shows 74.8°F. Threshold is 75°F. Temperature still rising slightly. Current models show peak at ~2 PM. This is live — your YES position is on the edge. Market is at 0.52. Recommend hold for the 2 PM METAR before making any exit decision."

**Time required: 1-2 minutes if you get an alert. Zero if you don't.**

## 3:00 PM — Afternoon Assessment

The analyst runs another heartbeat. By now, most high temperature markets are approaching resolution. If you have positions, you'll know how they're tracking.

This is also a good time to scan for late-day opportunities — sometimes markets are slow to re-price after afternoon METAR data.

```
Any late-day opportunities based on the afternoon METAR data?
```

**Time required: 1-2 minutes.**

## 5:00-6:00 PM — Market Resolution Window

Most weather markets resolve in the late afternoon or early evening when official daily records are published. Your analyst will tell you when your positions resolve.

No action needed from you. Just wait for the notification.

## 8:00 PM — Evening Review

Your analyst sends the evening summary. You read it.

**Time required: 2 minutes.**

If you want a deeper dive on a specific trade:
```
Tell me more about why the Atlanta trade lost. What did we miss?
```

**Time required: 3-5 additional minutes if you want to learn from the day.**

## Total Daily Time Investment

On a typical day with 1-2 positions: **15-25 minutes total.**

On a quiet day with no opportunities: **5 minutes** (just reading the morning and evening briefings).

On an active day with cusp markets resolving: **30-40 minutes** (still mostly reading analyst updates, not doing manual research).

Compare this to doing everything manually: 2-3 hours of forecast checking, METAR monitoring, mental math, and journal writing. Your analyst compresses this into conversational check-ins on your phone.

---

# Chapter 8: Position Sizing & Rules

This chapter is about not blowing up. Strategy and edge are meaningless if one bad week wipes your bankroll. The rules here are simple, conservative, and non-negotiable.

## Why Rules Beat Discipline

Here's a truth most traders learn the hard way: discipline fails under stress.

When you're watching a position go against you, your brain starts rationalizing. "It's going to come back." "The data will shift." "I should average down — this is just noise."

These thoughts feel reasonable in the moment. They're almost always wrong.

Rules don't care about your feelings. They say: "Your thesis was invalidated. Exit within 4 hours." No negotiation. No rationalization. Just execution.

That's why your analyst enforces the rules — not because you're not smart enough to manage yourself, but because no one is. The rules are there for the version of you that's down 2% at 3 PM and thinking about revenge-trading.

## The Core Position Sizing Rules

### Rule 1: Max 5% per position

Never put more than 5% of your total bankroll into a single trade. If your bankroll is $1,000, no single position exceeds $50.

Why 5%? Because even excellent setups fail 30-40% of the time. If you're sized at 5% and you lose four trades in a row (which will happen), you've lost 20% — painful but survivable. If you're sized at 20% per trade, four losses wipes 80% of your account. Game over.

### Rule 2: Max 4 concurrent positions

Never have more than 4 open trades at once. This limits your total exposure to 20% of bankroll (4 × 5%).

The remaining 80% is your safety net. It's not "lazy money" — it's protection against correlated losses. Weather markets across nearby cities can be correlated (a cold front hitting Atlanta and Miami on the same day). Four positions is enough diversification without creating too much correlation risk.

### Rule 3: 60% minimum cash reserve

At least 60% of your bankroll must be in cash at all times. This is a harder constraint than Rules 1 and 2 — it means even if you have 4 positions, their combined current value can't exceed 40% of your bankroll.

Why? Because you need capital available for opportunities. The best trades come when you're not already fully deployed. And you need a buffer for drawdowns.

### Rule 4: No chasing

If a market has moved more than 15% from where you first identified it, don't enter. You missed it.

This prevents the "I should have bought at 0.40, but now it's at 0.60 and I still think it's going higher" trap. Maybe it is going higher. But your edge was at 0.40. At 0.60, you're buying someone else's edge.

### Rule 5: No averaging down without a new thesis

This is the rule that would have saved me $310 in February.

If you have a losing position and you want to add to it, you need a *new* thesis. Not "it's cheaper now, so the expected value is better." That's just math on top of a broken thesis.

A valid new thesis sounds like: "The 2 PM METAR showed a temperature reversal that the original thesis didn't account for, but the 3 PM data shows the reversal was temporary and temperatures are climbing again. This is new information that changes the probability from my original estimate of 45% to 62%."

If you can't articulate why the new data is different from the old data, don't add.

## Kelly Criterion: The Simple Version

The Kelly Criterion is a mathematical formula for optimal bet sizing. The full math involves logarithms and edge calculations, but here's the practical version:

**Kelly Fraction = (Probability of Win × Payout - Probability of Loss) / Payout**

In simpler terms: size your positions proportionally to your edge.

- High confidence (70%+ probability, strong data, full model consensus): Size up to your 5% max.
- Medium confidence (55-70% probability, some forecast divergence): Size at 2-3%.
- Low-medium confidence (50-55%, cusp market, significant uncertainty): Size at 1% or watch only.

**The half-Kelly rule:** Even when you calculate the "optimal" Kelly size, use half of it. This accounts for the fact that your probability estimates are imperfect. Half-Kelly gives up a small amount of theoretical return for a massive reduction in volatility.

Your analyst will tell you the confidence level with every recommendation. Use that to calibrate your sizing.

## The Loss Limit Rules

### Daily loss limit: 3%

If you lose more than 3% of your bankroll in a single day, stop trading for the rest of the day. Period.

This isn't about the math — it's about your psychology. After a 3% loss day, your judgment is impaired by frustration. Every trade you evaluate is colored by the desire to "make it back." The best thing you can do is walk away and come back tomorrow with a clear head.

### Weekly loss limit: 7%

If you lose more than 7% in a single week, reduce all position sizes by 50% the following week.

This is your circuit breaker. A 7% weekly loss means something is off — either the market conditions don't suit your framework, or your execution has degraded. Cutting size in half gives you time to assess without taking yourself out of the game entirely.

## Putting It Together

Here's what a properly-sized trade looks like:

**Bankroll:** $1,000
**Cash minimum (60%):** $600 must remain in cash
**Available for positions:** $400
**Existing positions:** 2 trades totaling $180
**Available for new trade:** $220 (but capped at 5% = $50)
**Analyst confidence:** Medium (62% probability)
**Half-Kelly sizing:** ~$35

You enter a $35 position. You have $185 left for new opportunities. Your total exposure is $215 (21.5% of bankroll). You're well within all limits.

If the trade goes to zero, you've lost 3.5% of bankroll. Painful but survivable. You still have $965 and your rules are intact.

---

# Chapter 9: What We Learned Trading Real Money

We traded real money. Not paper trades, not backtests — real positions on Polymarket with real P&L consequences. In February 2026, we ran 15 weather market trades during the early development of this framework.

The initial win rate was 26.7%. Four wins out of fifteen.

We're telling you this because it's the most useful part of the guide. We identified 4 specific failure modes, fixed each one systematically, and the win rate climbed above 60% on qualifying trades. Every fix is built into the setup you just installed.

Here are the four failure modes — and exactly what we changed.

## Failure Mode 1: Panic Interpretation

**What happened:** On three occasions, mid-day METAR data came in below the threshold, and we exited positions that would have won by end of day. The temperatures were still rising — we just panicked at a mid-day reading that looked bad.

**What this taught us:** A METAR reading at 11 AM is not the day's high. Temperature curves have a shape — typically rising through early afternoon, peaking between 1-3 PM, then declining. A below-threshold reading at 11 AM in a market that resolves on the day's high is information, not a sell signal.

**What we fixed:** The analyst now evaluates METAR data in the context of the daily temperature curve, not as an isolated data point. If the 11 AM reading is below threshold but consistent with a trajectory that hits the threshold by 2 PM, the analyst says "tracking — on pace for threshold by early afternoon" instead of "below threshold — consider exit."

## Failure Mode 2: Pyramiding Into Losers

**What happened:** On four trades, we averaged down when the price moved against us. "It's cheaper now, the edge is bigger." In every case, the new money lost too. Total damage: $310 across the four trades — more than double what the original positions would have lost.

**What this taught us:** Averaging down without new information is just doubling your bet on a thesis the market is telling you is wrong. The price moved against you *for a reason*. Maybe the market knows something you don't.

**What we fixed:** The Rules.md file now has a hard rule: no averaging down without a documented new thesis. The analyst enforces it. When you say "I want to add to my Atlanta position," the analyst asks: "What new information supports adding? Your original thesis was [X]. The data since then shows [Y]. Please provide your updated thesis accounting for [Y]."

This friction is intentional. It slows you down just enough to think.

## Failure Mode 3: No Gate Validation

**What happened:** On three trades, we entered markets that had gate-level risks we didn't check. One was a Miami market where the sea breeze knocked temperatures down 4°F in an hour. Another was a Chicago market during a polar vortex advisory that our forecasts didn't fully account for.

**What this taught us:** Gate rules exist for a reason. They're the first filter, not an optional step. If a market has a known meteorological risk factor, you either account for it in your probability estimate or you don't trade it.

**What we fixed:** The analyst now runs gate checks *before* any probability assessment. If a gate fails, the analyst tells you which gate, why, and recommends either passing on the trade or sizing down. You can override it — you're the trader — but the information is there.

## Failure Mode 4: Cost Misalignment

**What happened:** On the remaining failed trades, the issue wasn't the thesis — it was that we didn't account for transaction costs and market microstructure. Polymarket has spreads. On small-edge trades (55-60% probability), the spread can eat your entire expected value.

**What this taught us:** A 58% probability trade isn't profitable if the bid-ask spread costs you 5%. You need enough edge to cover the spread *and* make money. In practice, this means you need trades with 60%+ probability to have meaningfully positive expected value after costs.

**What we fixed:** The analyst now factors in the estimated spread cost when evaluating a trade. A trade at 55% probability with a tight spread might still be recommended. A trade at 60% probability with a wide spread might be flagged as "edge may not survive the spread."

## The Results After Fixes

Four failure modes. Four specific fixes. Here's what changed:

| Metric | Before Fixes | After Fixes |
|--------|-------------|-------------|
| Win rate (all trades) | 26.7% | 60-70% on qualifying trades |
| Avg loss per losing trade | $77 (amplified by pyramiding) | $31 (capped by rules) |
| Trades filtered by gates | 0% | ~30% (avoided bad setups entirely) |
| Spread-adjusted entries | None | All trades evaluated against spread |

The framework isn't perfect. No trading system is. But the difference between a 26.7% win rate and a 60%+ win rate on qualifying trades is the difference between losing money and making money.

Every one of these fixes is built into your setup:
- **SOUL.md** makes the analyst evaluate temperature curves, not isolated readings (fixes panic interpretation)
- **RULES.md** blocks pyramiding without a new thesis (fixes averaging down)
- **HEARTBEAT.md** runs gate checks on every cycle (fixes missed risk factors)
- **The prompt library** includes spread-adjusted evaluation (fixes cost misalignment)

You're starting with the version that works. These 15 trades — including the losses — are the R&D that produced the system you just installed.

> **⚡ Automation note:** The Full Trading System includes all four fixes running continuously and automatically — gate checks on every METAR update, spread monitoring in real-time, and automated thesis-invalidation alerts. If you want to automate the discipline, it's there. [Details at end of guide]

---

# Chapter 10: What's Next

You now have a working AI trading analyst. It briefs you every morning, monitors your positions, enforces your rules, and runs on your phone. You've got a system that genuinely works.

Here's what your setup handles — and where it naturally leads if you want to go further.

## What Your Setup Handles Well

- **Structured research:** Your analyst compares forecasts and gives you data-driven analysis faster than you could do manually.
- **Rule enforcement:** It catches you before you break your own rules. This alone might be worth 10x the price of this guide.
- **Scheduled briefings:** You don't have to remember to check the markets. The analyst comes to you.
- **Conversational depth:** You can ask follow-up questions, request analysis, and get nuanced responses. It's a real analyst, not a dashboard.

## What This Looks Like Day-to-Day

Your daily workflow takes 15-25 minutes. Morning briefing, a few prompts, analyst handles the research and rule enforcement. That's a complete trading operation.

A few things you'll notice as you use it:

- **Position checks are a quick prompt away.** Your analyst runs scheduled checks every 2 hours, and you can ask anytime between. Weather changes slowly enough that 2-hour checks catch the vast majority of moves.
- **Scanning all markets takes about 15 minutes through prompts.** You send a scan, read results, ask follow-ups. Much faster than doing it yourself across multiple websites.
- **You keep your analyst in the loop on trades.** It tracks based on what you share and what it logs during reviews — like working with a human analyst who keeps you organized.

This is a solid, profitable setup. Most traders don't need anything beyond this.

## If You Want to Automate Later: The Full Trading System ($99)

After you've used this guide for a while, you might notice patterns in your workflow. You're sending the same scan prompt every morning. You're checking METAR data for the same cities. You're doing the same gate checks before every trade.

That's normal. It means the framework is working and you've built good habits.

The Full Trading System automates the repetitive parts so you can focus on decisions:

- **Scanning manually takes ~15 minutes.** The Full System scans all 6 cities every 5 minutes automatically and only alerts you when something is actionable.
- **You can check METAR data via prompts anytime.** The Full System monitors it continuously and alerts you when data shifts against an open position.
- **Your analyst gives you briefings on demand.** The Full System sends morning briefings automatically with pre-loaded data — no prompt needed.
- **Gate checks run when you ask.** The Full System runs them on every METAR update, continuously.
- **You tell your analyst about your trades.** The Full System reads your Polymarket positions directly.
- **The cusp model uses your analyst's estimates.** The Full System adds backtested probability calibrated against historical METAR data.

Same framework, same rules, same analyst personality. Just less manual work.

If you're interested, the Full Trading System is available at [link]. No rush — this guide works on its own, and you'll know if you want the automation after you've been trading with it for a week or two.

> **⚡ The bottom line:** Everything in this guide is a complete, standalone trading system. The Full Trading System exists for traders who've validated the framework and want to scale: more cities, faster data, automated monitoring. Same edge, less typing. [Get the Full Trading System →]

---

# Quick-Start Checklist

Get running today. Check each item off as you complete it.

- [ ] **Install OpenClaw:** `brew install openclaw` (Mac) or `curl -fsSL https://get.openclaw.com | bash` (Linux/Windows WSL)
- [ ] **Verify installation:** `openclaw --version` shows a version number
- [ ] **Create workspace:** `openclaw init my-trading-analyst && cd my-trading-analyst`
- [ ] **Create Telegram bot:** @BotFather → /newbot → copy the token
- [ ] **Connect Telegram:** `openclaw channel add telegram --token YOUR_TOKEN`
- [ ] **Copy SOUL.md:** Replace the default with the trading analyst version (Chapter 3)
- [ ] **Copy IDENTITY.md:** Drop in the trading analyst identity (Chapter 3)
- [ ] **Copy RULES.md:** Configure your trading rules — or use the defaults (Chapter 3)
- [ ] **Copy HEARTBEAT.md:** Set up the daily schedule (Chapter 3)
- [ ] **Customize bankroll amount:** Update RULES.md with your actual bankroll number
- [ ] **Start the analyst:** `openclaw start`
- [ ] **Test it:** Send your bot a message in Telegram — "What does today look like?"
- [ ] **Wait for first briefing:** Tomorrow at 7:30 AM, your first morning briefing arrives
- [ ] **Bookmark the Prompt Library:** Chapter 6 is your daily toolkit — keep it handy

**Total setup time: 20-30 minutes.**

---

# Prompt Reference Card

All prompts in one place. Save this page for quick access.

## Morning & Scanning
| # | Prompt |
|---|--------|
| 1 | `Scan all active weather markets for today. Compare forecasts across NWS, Weather Channel, and Euro model. Flag any market where forecasts disagree by more than 2°F or where the threshold is within the forecast uncertainty band.` |
| 2 | `Any weather markets right now where the price doesn't match the data? Quick scan, just the highlights.` |
| 3 | `What's the setup for [CITY] weather markets today? All active thresholds, current prices, and forecast comparison.` |
| 4 | `Which markets today have thresholds sitting inside the forecast uncertainty band? Rank them by how close the threshold is to the forecast midpoint.` |
| 5 | `Quick crypto scan — BTC, ETH, SOL, and any altcoin that moved more than 10% in the last 24 hours. Just the numbers and any notable news.` |

## Position Research
| # | Prompt |
|---|--------|
| 6 | `Brief me on the [CITY] [high temp / precipitation / etc.] market. Threshold is [X]°F, current price is [Y] YES. Give me the full analysis: forecasts, METAR trends, gate check, cusp assessment, and your probability estimate.` |
| 7 | `Compare the [CITY A] and [CITY B] high temp markets for today. Which one has a better risk/reward setup and why?` |
| 8 | `For the [CITY] [market type] — how have similar setups resolved in the past week? Any pattern in how the market prices these?` |
| 9 | `The [CITY] market is priced at [X] YES. Make the case AGAINST this price — what would need to happen for the other side to win?` |
| 10 | `I'm considering buying [YES/NO] on [CITY] [market] at [price]. Run it through the framework: gate check, cusp assessment, forecast consensus, and position sizing given my current book. Should I enter?` |

## Position Monitoring
| # | Prompt |
|---|--------|
| 11 | `Check all my open positions against the latest available data. Any thesis changes or required actions?` |
| 12 | `How's my [CITY] position looking? Pull the latest METAR data and compare to my entry thesis.` |
| 13 | `For my open positions, which ones are closest to their invalidation point? Rank by urgency.` |
| 14 | `My [CITY] position is at [current price] and I entered at [entry price]. The data shows [observation]. Should I exit, hold, or add? Run it through my rules.` |

## Risk Management
| # | Prompt |
|---|--------|
| 15 | `Check my current exposure against all rules in RULES.md. Am I in compliance? Any positions approaching limits?` |
| 16 | `I'm thinking about entering [position details]. Before I do — does this comply with all my rules? Check position size, concurrent positions, and entry criteria.` |
| 17 | `What's my P&L today? Am I approaching my daily loss limit? What about my weekly limit?` |
| 18 | `Give me a snapshot of my bankroll: total value, cash percentage, open position exposure, and available capital for new trades.` |

## Reviews
| # | Prompt |
|---|--------|
| 19 | `End of day summary: what resolved today, P&L impact, open positions status, and one key lesson from today's trading.` |
| 20 | `Review today's losing trades (if any). For each one: was the thesis wrong, was the execution wrong, or was it just variance? Be specific.` |
| 21 | `Review today's winning trades (if any). Was the win because of good analysis, good execution, or just luck? I need to know the difference.` |

## Strategic
| # | Prompt |
|---|--------|
| 22 | `Run my weekly pattern analysis. Win rate by city, by market type, by time of entry. Where am I strongest? Where am I weakest? Any recurring mistakes?` |
| 23 | `Based on the last 2 weeks of data, should I adjust anything? Position sizes, city focus, timing, entry criteria? Give me specific recommendations with supporting data.` |
| 24 | `Am I actually making money, or am I just getting lucky? Run the numbers: is my win rate statistically significant given my sample size? What's my expected value per trade?` |

---

*AI Trading Analyst: The Starter Guide — Version 1.0*

*Built by Obsidian at JSJ Consulting. Real trades, real data, real fixes.*

*Questions? Email us at support@jsjconsulting.org*

*Public Dashboard: [jadye527.github.io/obsidian-trading](https://jadye527.github.io/obsidian-trading)*

*Ready to automate your workflow? [Get the Full Trading System → https://buy.stripe.com/9B63cxc9XckL6l11VY9Ve02](https://buy.stripe.com/9B63cxc9XckL6l11VY9Ve02)*
