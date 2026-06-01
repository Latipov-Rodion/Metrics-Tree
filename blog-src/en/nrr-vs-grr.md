---
title: NRR vs GRR — what separates a $10B from a $100M SaaS company
description: Net Revenue Retention vs Gross Revenue Retention — formulas, top-decile benchmarks (>130%), and why NRR is the strongest indicator of product-market fit.
date: 2026-04-27
keywords: nrr, grr, net revenue retention, gross revenue retention, nrr formula
embed: nrr
---

# NRR vs GRR — what separates a $10B from a $100M SaaS company

Of all SaaS metrics, **NRR** (Net Revenue Retention) is the one that decides whether your company becomes a unicorn or stays in the middle league. Snowflake trades at premium multiples because their NRR is ~158%. Datadog — 130%. The average public SaaS — 105-110%.

That's not a correlation. It's a cause.

## Formulas

**GRR (Gross Revenue Retention):**
```
GRR = (Start MRR − Churn MRR − Contraction MRR) / Start MRR × 100%
```
Losses only. Doesn't count expansion. Always ≤100%.

**NRR (Net Revenue Retention):**
```
NRR = (Start MRR + Expansion MRR − Churn MRR − Contraction MRR) / Start MRR × 100%
```
Including expansion. Can be >100%.

## Benchmarks

| Tier | NRR | GRR |
|------|-----|-----|
| Top decile public SaaS | **>130%** | >95% |
| Top quartile | 115-130% | 92-95% |
| Median public SaaS | 105-115% | 88-92% |
| Bad | <100% | <85% |
| Catastrophe | <90% | <75% |

**NRR > 100% means:** your company grows even if it never lands another new customer. Existing-customer expansion > losses.

That's the **holy grail of SaaS**. Reach it and multiples × 2-3.

## Worked example

**A SaaS startup, ARR $5M at start of year:**
- Expansion ARR for the year: $800k (upgrades, seat growth)
- Churn ARR: $300k (10 customers left)
- Contraction ARR: $100k (5 downgrades)

**NRR** = (5000 + 800 − 300 − 100) / 5000 × 100% = 5400 / 5000 = **108%** → healthy

**GRR** = (5000 − 300 − 100) / 5000 × 100% = 4600 / 5000 = **92%** → ok

NRR − GRR = 108 − 92 = 16 percentage points of expansion. Better than 10pp, worse than 25pp.

## Why top SaaS have NRR of 130-150%

Three mechanisms:

### 1. Seat-based pricing with growing customers
Snowflake bills per data warehouse compute hour. A customer starts small ($50k/year) and over 3 years grows to $500k. 10× expansion on one customer = enormous NRR.

### 2. Tiered features with a natural upgrade path
HubSpot: Starter → Professional → Enterprise. Each tier is 2-3× the price. 30% of customers upgrade within 18 months = NRR +25-30pp.

### 3. Cross-sell additional products
Datadog started with Infrastructure Monitoring. Then APM, Logs, Security. Each additional product on an average existing customer = +20% to ARR per customer.

## Why GRR is useful separately from NRR

**GRR is product health.** NRR is account-team health.

- GRR <90% — customers don't like the product. Fix product, not sales.
- GRR >95% but NRR <105% — product is ok, but there's no expansion mechanic. Fix pricing.
- GRR <85% — you don't have PMF. Stop scaling.

## How to improve NRR — 5 levers

### 1. Customer Success function
Hire a CSM for every $500k-1M of ARR. Their sole KPI is the NRR of those accounts. Proactive QBRs, health monitoring, expansion identification.

### 2. Seat-based / usage-based pricing
If you have flat per-tenant pricing — switch to a growth-friendly model. Example: Slack ($8/user/mo) grows with the customer's team for free.

### 3. Health scoring
Track 5-10 product usage signals → red zone → CSM intervention 30 days before churn.

### 4. Annual prepay incentives
An annual contract (vs monthly) gives you:
- Mathematically cuts churn ×12
- Cash forward
- Locks the customer for a year — more time to expand

### 5. Multi-product strategy
A single product caps NRR at ~120% (pricing-tier expansion only). Multi-product = NRR 140%+.

## Bessemer's "Net Magic Number" metric

Less known, but powerful:

> **Net Magic Number = (Net New ARR − Churn ARR) × 4 / S&M spend**

If you spend $1 of S&M and a year later have $1.2 of new ARR but lost $0.5 to churn → the real gain is $0.7. Net Magic Number = 0.7. Worse than the gross Magic Number of 1.2.

Sequoia/Bessemer increasingly look at Net Magic Number instead of Gross.

## When NRR is MISLEADING

1. **Slow-burn churn models** — Annual contracts. A customer signs a $100k contract, plans not to renew, but you only see it after 12 months. NRR is optimistic until the moment of non-renewal.

2. **Large-account skew** — one enterprise customer is 30% of ARR. If they 2× — NRR looks beautiful. If they leave — NRR craters. Concentration risk.

3. **Price increases** — if you raised prices +20%, NRR will be 120%+ for a year, but that's not "expansion", that's inflation.

4. **Currency fluctuations** — for multi-currency businesses, USD-reported NRR drifts with FX.

## Bottom line

NRR is the **single most important metric** for SaaS valuation. Know it monthly. If it's below 100% — you have a fundamentally broken expansion strategy. If 110-115% — that's normal, keep going. If >130% — you're in the top decile, and investors will hunt for you.

**Calculate your NRR below** — built-in calculator + benchmark + Goal mode (what you need to hit a target NRR).

---

### Further resources

- [/en/grr](/en/grr) — GRR calculator on its own
- [/en/mrr](/en/mrr) — MRR, the base for NRR
- [/en/quickRatio](/en/quickRatio) — Quick Ratio, a related metric
- [/en/blog/quick-ratio-saas](/en/blog/quick-ratio-saas) — Quick Ratio deep dive
- [Bessemer State of the Cloud](https://www.bvp.com/atlas/state-of-the-cloud) — annual NRR benchmarks
