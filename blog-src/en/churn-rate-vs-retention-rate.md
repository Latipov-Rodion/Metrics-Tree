---
title: Churn rate vs retention rate — customer churn vs revenue churn and what to track
description: Churn and retention aren't just 100% minus each other. Customer churn, revenue churn, GRR and NRR on one example, how monthly churn compounds into annual, industry benchmarks and common mistakes.
date: 2026-09-27
keywords: churn vs retention, churn rate vs retention rate, customer churn vs revenue churn, revenue churn, customer retention rate formula, churn rate formula, monthly vs annual churn
embed: churn
---

# Churn rate vs retention rate — customer churn vs revenue churn and what to track

"Churn is 3%, so retention is 97%" — technically true, but that's where the similarity ends. Retention can be calculated in a way that comes out above 100%. Customer churn can be low while revenue churn is high. And 97% monthly retention turns into less than 70% over a year. Let's look at which versions of these metrics exist and when to use each.

## Definitions and formulas

**Customer Churn Rate = Customers lost in the period / Customers at the start of the period × 100%**

New customers who joined during the period are not in the denominator.

**Customer Retention Rate (CRR) = (Customers at end − New customers in period) / Customers at start × 100%**

For a single period and a single base, CRR = 100% − customer churn. But only if you subtract new customers — otherwise "retention" gets mixed up with growth.

**Gross Revenue Churn = (Churned MRR + Contraction MRR) / Starting MRR × 100%**

The same thing in money: how much recurring revenue was lost to cancellations and downgrades. Its inverse is **GRR = 100% − Gross Revenue Churn**.

**NRR = (Starting MRR + Expansion − Churned − Contraction) / Starting MRR × 100%**

Also counts upsells to existing customers, so it can exceed 100%.

**Cohort retention** — the share of a cohort still active after N days or months. It's a product metric: it answers "do people come back?", not "do they renew?".

## Worked example: one month at a SaaS company

At the start of the month:
- Customers: **1,000**, MRR: **$100,000**

During the month:
- **30** customers left, with combined MRR of **$4,000**
- Downgrades (contraction): **$1,000**
- Upgrades (expansion): **$4,000**
- **60** new customers joined

Customers at month-end: 1,000 − 30 + 60 = **1,030**

Customer churn = 30 / 1,000 = **3%**
CRR = (1,030 − 60) / 1,000 = **97%**
"Naive" retention = 1,030 / 1,000 = 103% — wrong: new customers are hiding inside it
Gross revenue churn = (4,000 + 1,000) / 100,000 = **5%** → GRR = **95%**
NRR = (100,000 + 4,000 − 4,000 − 1,000) / 100,000 = **99%**

What these numbers say:
- Revenue churn (5%) is higher than customer churn (3%). The average churned customer paid $133/month versus $100 across the base: bigger accounts are leaving. Customer churn alone would hide that.
- Upsells almost offset the losses, but NRR is still below 100%: without new sales, revenue shrinks.
- By MetricTree's SaaS thresholds, 3% monthly churn is "poor" (>2%). Normal for SaaS is 0.5–2% per month, excellent is <0.5%. On the universal scale (<5% good) the same 3% would look fine — which is why you compare against your own industry.

## Monthly churn × 12 ≠ annual churn

Retention compounds:

**Annual retention = (1 − monthly churn)^12**

| Monthly churn | 12-month retention | Annual churn |
|---------------|--------------------|--------------|
| 1% | 88.6% | 11.4% |
| 2% | 78.5% | 21.5% |
| 3% | 69.4% | 30.6% |
| 5% | 54.0% | 46.0% |
| 10% | 28.2% | 71.8% |

In our example, 97% per month is under 70% per year. Average customer lifetime ≈ 1 / monthly churn = 1 / 0.03 ≈ **33 months** — this number feeds straight into [LTV](/en/ltv).

The same applies to revenue: GRR and NRR benchmarks are usually quoted annually. A 95% monthly GRR, if the pace holds, is roughly 0.95^12 ≈ 54% for the year — far below the SaaS norm of 85–95%.

## Comparison table

| Metric | What it measures | Can exceed 100%? | Used for |
|--------|------------------|------------------|----------|
| Customer churn | Share of customers lost | No | Health of the base, LTV |
| Customer retention (CRR) | Share of customers kept | No (if new customers are excluded) | The same, framed positively |
| Gross revenue churn / GRR | Revenue lost, excluding upsells | GRR — no | Product and retention quality in money |
| NRR | Revenue from the base including upsells | Yes | Growth without new sales, SaaS valuation |
| Cohort retention | Cohort activity after N days | No | Product, onboarding, habit |

## Benchmarks by industry

Monthly customer churn by MetricTree's thresholds:

| Industry | Excellent | Normal | Poor |
|----------|-----------|--------|------|
| **SaaS** | <0.5% | 0.5–2% | >2% |
| **E-commerce** | <3% | 3–8% | >8% |
| **Mobile apps** | <5% | 5–15% | >15% |
| **Media** | <2% | 2–7% | >7% |

GRR for SaaS: <85% poor, 85–95% normal, >95% good, >97% excellent. NRR for SaaS: <90% poor, 90–100% normal, 100–120% good, >130% excellent.

The [Retention](/en/retention) calculator has its own scale (<30% poor, 30–60% average, >60% good). It describes cohort retention over a period, not monthly CRR. Comparing a 97% monthly CRR against that scale is wrong — they're different metrics.

## When to use which

- **Customer churn** — B2C subscriptions and SMB SaaS with similar plans, where customers pay roughly the same. Needed for LTV.
- **Revenue churn and GRR** — when customer spend varies a lot (B2B, seat-based pricing). Shows whether you're losing money, not just logos.
- **NRR** — valuing a SaaS business and measuring upsell effectiveness.
- **Cohort retention** — product decisions: onboarding, activation, habit.

## Common mistakes

### 1. Calculating retention without removing new customers
End / start with a growing base produces "retention" above 100% and masks churn.

### 2. Looking only at customer churn in B2B
Ten churned customers at $50 and one churned customer at $5,000 are very different months, even though the second looks better on customer churn.

### 3. Multiplying monthly churn by 12
3% per month is 30.6% per year, not 36%. Converting annual back to monthly needs compounding too.

### 4. Blending segments
An average churn across a base with both enterprise and self-serve says nothing about either. Calculate by segment.

### 5. Confusing "cancelled" with "churned"
A customer on an annual contract who switched off auto-renewal is still paying. Define the moment a customer counts as churned, and don't change the rule.

## Bottom line

Churn and retention are two sides of the same coin only for customer counts and only within one period. Once money, upsells and longer horizons come in, you need separate metrics: revenue churn, GRR, NRR and cohort retention. Track customer churn and revenue churn together — the gap between them often matters more than either number.

**Calculate your churn in the calculator below**, then GRR and NRR. Formulas and thresholds for churn, retention, GRR, NRR and 65 more metrics are in the free [PDF cheat sheet](/benchmarks).

---

### Further resources

- [/en/retention](/en/retention) — Retention calculator
- [/en/grr](/en/grr) — Gross Revenue Retention
- [/en/nrr](/en/nrr) — Net Revenue Retention
- [/en/ltv](/en/ltv) — churn-based LTV
- [/en/blog/retention-rate-benchmarks](/en/blog/retention-rate-benchmarks) — retention benchmarks by industry
- [/en/blog/churn-reduction-saas](/en/blog/churn-reduction-saas) — how to reduce SaaS churn
