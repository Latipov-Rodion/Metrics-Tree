---
title: CAC Payback Period — why it matters more than LTV:CAC for cash management
description: CAC Payback = CAC / (MRR × Gross Margin). Benchmarks of 12-18 months for SaaS, and why a long payback kills companies even with a healthy LTV:CAC.
date: 2026-04-13
keywords: cac payback, cac payback period, cac payback formula, cac recovery
embed: cacPayback
---

# CAC Payback Period — why it matters more than LTV:CAC for cash management

LTV:CAC = 5 sounds like "a healthy company". But if CAC Payback = 36 months — you'll hit a cash crunch before the customer ever pays back.

**LTV:CAC shows long-term return. CAC Payback shows short-term cash mechanics.**

In 2026, post-ZIRP investors look at CAC Payback **first**, then LTV:CAC.

## The formula

> **CAC Payback Period (months) = CAC / (MRR per customer × Gross Margin)**

Example:
- CAC = $1,500
- MRR per customer = $200
- Gross Margin = 80%
- CAC Payback = 1500 / (200 × 0.80) = 1500 / 160 = **9.4 months**

The customer pays for themselves in 9.4 months. After that, all their MRR is profit.

## Benchmarks

| Segment | Healthy | Excellent |
|---------|---------|-----------|
| SMB SaaS | <12 months | <6 months |
| Mid-market SaaS | 12-18 months | <12 months |
| Enterprise SaaS | 18-24 months | <15 months |
| B2C / Mobile | <6 months | <3 months |
| E-commerce | <3 months | <1 month |

**>24 months for SaaS = warning.** >36 months = the model is unsustainable regardless of LTV.

## Why a long payback kills companies

Simple math:
- Customer pays $200/mo × 80% margin = $160 net/mo
- CAC = $5000 → payback 31 months
- If the customer churns after 24 months → you lost $1000 on that customer

LTV:CAC can be **5** on paper (if they stayed 5 years), but the **real** churn-adjusted LTV is below CAC = **a loss**.

## Real-world example: what killed MoviePass

MoviePass: $10/mo unlimited cinema films. CAC ~$15.
- The average customer cost $50/mo in reimbursed tickets (a $40/mo loss)
- "LTV" was "if they stay forever"
- Real payback: never
- Liquidated in 2019

The lesson: payback must be < typical churn time. Otherwise the model is broken.

## Why CAC Payback beats LTV:CAC in 2026

| Parameter | LTV:CAC | CAC Payback |
|-----------|---------|-------------|
| Calculated from | Predicted LTV (uncertain) | Known CAC + current MRR (certain) |
| Time-sensitivity | Ignores when | Accounts for time |
| Cash flow impact | Doesn't show it | Shows it directly |
| Manipulable | Easily (just extend assumed lifetime) | Hard (CAC and MRR are observable) |
| What VCs look at now | Second | **First** |

One top VC quote: "I don't trust LTV. I trust CAC Payback."

## 4 levers to reduce CAC Payback

### 1. Lower CAC (numerator)
- Organic channels (SEO, content, referrals) — payback there is often 3-6 months
- Conversion optimization — every +10% to funnel CR = -10% CAC payback
- Self-serve onboarding for SMB — removes sales costs

### 2. Raise MRR per customer (denominator)
- Pricing review — every 12 months
- Upsell premium tiers in the first deal
- Bundle multi-product offerings

### 3. Raise Gross Margin (denominator multiplier)
- Hosting optimization (AWS reserved, cache, CDN)
- Support deflection (docs, AI chatbot)
- Customer support automation

+10pp of gross margin (75%→85%) = -12% payback time. A big lever.

### 4. Annual prepay
Annual prepay collects 12 months upfront → payback **mathematically becomes 0** for cash purposes (though GAAP revenue is spread over 12 months).

## Pricing power as a hidden lever

The key insight: a +20% price increase usually adds +18-20% to Net New ARR with no proportional rise in CAC.

**Before the price increase:**
- CAC = $1500, MRR = $200, margin 75% → payback = 10 months

**After the price increase (+20%):**
- CAC = $1500 (same), MRR = $240, margin 80% (better gross because fixed costs are the same) → payback = 1500 / 192 = **7.8 months**

-22% payback time from a single pricing action. It's the cheapest lever.

## When a long CAC Payback is OK

CAC Payback doesn't always need to be <18 months:

1. **Enterprise multi-year contracts** — 5-year $500k contracts. Payback of 24 months is ok if annual churn <5%.

2. **Network-effects products** — each new customer brings 2 others organically. Initial CAC payback is long, but cohort payback is short.

3. **Strategic vendor relationship** — the customer becomes a key reference for the whole segment (HubSpot for marketing agencies).

In these cases **cohort payback** > customer payback. Calculate it separately.

## The link to fundraising

**VC term sheet check:**
- CAC Payback <18 months → they may invest
- CAC Payback <12 months → premium valuation
- CAC Payback <6 months → fire sale (everyone wants in)
- CAC Payback >24 months → you need to explain how you'll cut it, or they skip

## Bottom line

CAC Payback is the **cash version** of unit economics. LTV:CAC = long-term profitability. CAC Payback = survival over the next 12 months. Know both. Healthy SaaS: **LTV:CAC ≥ 3 AND CAC Payback < 18 months**. If only one holds — there's a problem, and fixing it is the priority.

**Calculate your CAC Payback below** + Goal mode to find the max CAC for a target payback.

---

### Further resources

- [/en/cac](/en/cac) — CAC calculator
- [/en/ltv_cac](/en/ltv_cac) — LTV:CAC ratio
- [/en/grossMargin](/en/grossMargin) — Gross Margin (one of the inputs)
- [/en/blog/ltv-cac-unit-economics](/en/blog/ltv-cac-unit-economics) — LTV:CAC deep dive
