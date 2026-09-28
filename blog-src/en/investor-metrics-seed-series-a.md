---
title: Startup metrics investors ask for at seed and Series A — and what counts as strong
description: Which metrics to show investors at seed and Series A: MRR growth, NRR, Burn Multiple, CAC Payback, gross margin, runway. Formulas, a worked SaaS example, benchmarks and pitch mistakes.
date: 2026-09-23
keywords: metrics investors look for, startup metrics for investors, seed round metrics, series a metrics, saas metrics for investors, pitch deck metrics, key startup kpis
embed: mrrGrowthRate
---

# Startup metrics investors ask for at seed and Series A — and what counts as strong

In a 20-minute pitch an investor is trying to understand three things: is the business growing, do customers stick, and how much cash burns for every dollar of growth. Everything else is detail. The good news: those three answers fit into 6–8 metrics, and you can calculate them in advance.

## What changes from stage to stage

**Pre-seed / seed** — you are selling potential. Investors look for signs of product-market fit:
- growth rate (MoM) and how consistent it is;
- retention of your first cohorts — does the curve flatten;
- early unit economics signals: what a customer costs and what they pay.

**Series A** — you are selling a repeatable growth engine. Now you also need:
- revenue scale (ARR) and growth trajectory;
- NRR and GRR — is revenue growing inside the existing base;
- efficiency: Burn Multiple, CAC Payback;
- gross margin that proves this is a software business, not services.

A commonly cited market rule of thumb for a SaaS Series A is roughly $1–2M ARR with fast growth, but the bar depends heavily on market, segment and year. The metrics below matter more than absolute ARR: strong efficiency at a smaller scale often convinces more than large but "expensive" ARR.

## 7 metrics you will definitely be asked about

| Metric | Formula | SaaS benchmarks |
|--------|---------|-----------------|
| **MRR growth (MoM)** | (End MRR − Start MRR) / Start MRR | <5% low, 5–10% normal, 10–20% good, >20% excellent |
| **NRR** | (Starting MRR + expansion − churn) / Starting MRR | <90% poor, 90–100% normal, 100–120% good, >130% excellent |
| **GRR** | (Starting MRR − churn and contraction) / Starting MRR | <85% poor, 85–95% normal, >95% good |
| **Burn Multiple** | Net Burn / Net New ARR | <1 excellent, 1–1.5 good, 1.5–2 normal, 2–3 poor, >3 very poor |
| **CAC Payback** | CAC / (MRR per customer × gross margin) | <12 mo good, 12–18 normal, >18 poor |
| **Gross margin** | (Revenue − COGS) / Revenue | <60% poor, 60–75% normal, 75–85% good, >85% excellent |
| **Runway** | Cash / monthly net burn | Seed: 18–24 months is normal; Series A+: >18 months |

These are the same thresholds the MetricTree calculators use for the SaaS industry. At later stages add the **Rule of 40** (growth + margin ≥ 40%) — [/en/ruleOf40](/en/ruleOf40).

The Burn Multiple scale is David Sacks' framework (Craft Ventures) that became standard after 2020. For growth trajectory, investors often reference **T2D3** (Neeraj Agrawal, Battery Ventures): triple ARR two years in a row, then double it for three.

## Example: a seed startup preparing for Series A

B2B SaaS, last quarter:
- MRR three months ago: **$60,000**, now: **$80,000**
- Net burn for the quarter: **$360,000** ($120,000 per month)
- Cash in the bank: **$2.4M**
- CAC: **$4,000**, MRR per customer: **$400**, gross margin **80%**
- Customers who were around a year ago paid **$30,000** MRR and now pay **$33,600** (expansion +$5,100, churn and contraction −$1,500)

The math:

**Growth.** MRR grew 33% over the quarter. Compound monthly growth (CMGR) = (80 / 60)^(1/3) − 1 ≈ **10.1% MoM** → "good".

**Burn Multiple.** Net New ARR for the quarter = (80,000 − 60,000) × 12 = $240,000. Burn Multiple = 360,000 / 240,000 = **1.5** → the good / normal boundary.

**NRR** = 33,600 / 30,000 = **112%** → "good". **GRR** = (30,000 − 1,500) / 30,000 = **95%** → the normal / good boundary.

**CAC Payback** = 4,000 / (400 × 0.8) = 4,000 / 320 = **12.5 months** → "normal".

**Runway** = 2,400,000 / 120,000 = **20 months** → normal for seed, with time to raise.

Takeaway for the pitch: growth and retention are the strengths — put them on the first metrics slide with numbers. Efficiency is "normal", so show a plan to bring CAC Payback under 12 months (pricing, annual prepay, organic channels).

## How to present metrics in a pitch

- **Monthly figures, not a cumulative chart.** Cumulative revenue always goes up — investors know this and read such charts as an attempt to hide a slowdown.
- **Cohorts, not averages.** A cohort retention table convinces more than a single churn number.
- **Definitions on the slide.** "ARR = subscription MRR × 12, excluding one-off services." One line removes half the questions in due diligence.
- **Market context.** Show where you sit relative to public benchmarks. Useful sources: Bessemer's State of the Cloud, OpenView's SaaS Benchmarks, the KeyBanc SaaS Survey; for definitions, a16z's "16 Startup Metrics" is a good reference.
- **Weak metric — with a plan.** The investor will find it anyway. Better to show you know about it and what you're doing about it.

## Common pitch mistakes

### 1. Vanity metrics instead of business metrics
Sign-ups, downloads, GMV without take rate. The investor will ask how much of that is revenue.

### 2. One-off revenue inside ARR
Implementation, consulting, an annual contract counted as one month's MRR × 12. It surfaces in due diligence and undermines trust in every other number.

### 3. Annual growth from one good month
One spike × 12 is not a trend. Show CMGR over 3–6 months.

### 4. Gross burn instead of net burn (or vice versa, unlabeled)
Burn Multiple and runway use net burn. Label what you are showing.

### 5. LTV:CAC without payback
LTV:CAC = 5 on a forecast LTV is weaker evidence than a 10-month CAC Payback on actuals. More in our [CAC Payback](/en/blog/cac-payback-period) breakdown.

### 6. No runway plan
"We have 20 months" without a scenario for a round that slips by six months is a red flag. See [when to raise](/en/blog/runway-when-fundraise).

## FAQ

### What growth rate do you need for a Series A?
Sustained MRR growth above 10% per month over several quarters is a strong signal; 5–10% is normal and will need to be backed by efficiency and retention.

### What matters more — growth or efficiency?
Since 2022, the balance. A Burn Multiple under 1.5 with good growth convinces more than growth at any cost.

## Bottom line

At seed investors want growth and retention; at Series A they also want efficiency. Calculate the seven metrics above in advance, compare them with your stage's norms, lead with your strengths, and present weak spots together with a fix.

**Calculate your MRR growth rate in the calculator below**, then check your [Burn Multiple](/en/burnMultiple), [NRR](/en/nrr), [CAC Payback](/en/cacPayback) and [runway](/en/runway). All formulas and thresholds in one document are in the free [PDF cheat sheet covering 69 metrics](/benchmarks) — handy while you build the deck.

---

### Further resources

- [/en/mrrGrowthRate](/en/mrrGrowthRate) — MRR growth rate
- [/en/burnMultiple](/en/burnMultiple) — Burn Multiple
- [/en/nrr](/en/nrr) — Net Revenue Retention
- [/en/grossMargin](/en/grossMargin) — gross margin
- [/en/blog/burn-multiple-saas-2026](/en/blog/burn-multiple-saas-2026) — Burn Multiple in 2026
