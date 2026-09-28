---
title: ARPU vs ARPPU — the difference, formulas and benchmarks by industry
description: ARPU = revenue / active users, ARPPU = revenue / paying users. How they connect through the paying user rate, worked examples for an app and a SaaS, benchmarks and common mistakes.
date: 2026-09-21
keywords: arpu, arppu, arpu vs arppu, difference between arpu and arppu, arpu formula, average revenue per user, average revenue per paying user
embed: arpu
---

# ARPU vs ARPPU — the difference, formulas and benchmarks by industry

ARPU and ARPPU differ by one letter but answer different questions. ARPU is how much an average active user brings in. ARPPU is how much each user who actually paid brings in. Mixing them up means misjudging both your monetization and how much CAC you can afford.

## Formulas

**ARPU = Revenue for the period / Active users in the period**

**ARPPU = Revenue for the period / Paying users in the period**

They are linked by the share of paying users — **PUR (Paying User Rate)**:

**ARPU = ARPPU × PUR**

This is the core monetization equation. You can raise ARPU in two ways: get payers to pay more (ARPPU goes up) or turn more people into payers (PUR goes up). These are different jobs, often for different teams.

## Worked example: mobile app

A freemium app, one month:
- Active users (MAU): **50,000**
- Paying users: **1,500** (PUR = 3%)
- Revenue: **$45,000**

ARPU = 45,000 / 50,000 = **$0.90**
ARPPU = 45,000 / 1,500 = **$30**

Check: $30 × 3% = $0.90 ✓

Now a hypothesis: introduce a cheap starter pack. Payers grow to **2,000** (PUR 4%), but ARPPU drops to **$26** because some of the new payers only buy the starter pack.

Revenue = 2,000 × $26 = $52,000 → ARPU = **$1.04** (+15.6%)

ARPPU fell, yet the business earned more. Judged on ARPPU alone, the experiment would look like a failure. That's why these metrics are always read together.

## Worked example: B2B SaaS

A product with a free plan:
- Active accounts: **800**, of which **200** are on the free plan
- Paying accounts: **600**
- MRR: **$48,000**

ARPPU = 48,000 / 600 = **$80**/month
ARPU = 48,000 / 800 = **$60**/month

In B2B, ARPPU is essentially ARPA (average revenue per account) and roughly ACV / 12. It grows through upsells, seats and moves to higher plans.

## ARPU and ARPPU benchmarks by industry

These ranges match the industry thresholds used by the MetricTree calculators:

| Industry | ARPU (per month) | ARPPU |
|----------|------------------|-------|
| **B2B SaaS** | B2B: $50–$500, SMB: $20–$100, Enterprise: >$500 | ≈ ACV / 12; grows via upsells and plans |
| **E-commerce** | $5–$50 per active buyer | ≈ AOV × purchase frequency per payer |
| **Mobile apps** | Free-to-play: $0.05–$5, paid apps: $1–$20 | F2P: $5–$50 among payers |
| **Media** | Subscription: $3–$15, ads: $0.5–$5 | Close to the plan price |

In our example, an app with $0.90 ARPU and $30 ARPPU is within the F2P norm on both metrics.

The base scale of the ARPU calculator (<$10 low, $10–$50 average, >$50 high) is aimed at subscription models. For freemium apps and ad-funded media use the industry range from the table — otherwise a perfectly healthy F2P product will look "bad".

## When to look at ARPU and when at ARPPU

| Question | Metric |
|----------|--------|
| How much can I pay to acquire a user? | **ARPU** (and the LTV built on it) |
| Are pricing and upsells working? | **ARPPU** |
| Is the paywall / free-to-paid conversion working? | **PUR** |
| Comparing monetization with an ad model | **ARPU** (ads monetize everyone, not just payers) |
| Mobile game, daily dynamics | **ARPDAU** — see [/en/arpdau](/en/arpdau) |

CAC is compared with ARPU and the LTV of the whole cohort, not with ARPPU: you pay to acquire every user, but far from everyone pays.

## Common mistakes

### 1. Sign-ups instead of active users
If the denominator is everyone who ever registered, ARPU will be artificially low and will keep falling simply because the pile of dead accounts grows.

### 2. Different periods in numerator and denominator
Annual revenue divided by MAU is a meaningless number. Revenue and users must cover the same period.

### 3. Non-unique payers
A user who made three purchases is one payer, not three. Duplicates understate ARPPU and overstate PUR.

### 4. Gross instead of net
In mobile, app stores take a commission (typically 15–30%), plus refunds and taxes. For payback decisions use net revenue.

### 5. Whales skew the average
In F2P a small share of payers can generate the lion's share of revenue. Look at the median and the ARPPU distribution by segment, not just the mean.

### 6. Comparing ARPPU across different PUR
$50 ARPPU at 1% PUR vs $20 ARPPU at 5% PUR — the second model earns twice as much per user ($1.00 vs $0.50). ARPPU without PUR can't be compared.

## How to grow ARPU

- **Raise PUR:** trials, a starter pack, a clear paywall at the moment of value.
- **Raise ARPPU:** a pricing ladder, annual plans, upsells and add-ons, price reviews.
- **Add a second revenue stream:** ads for non-payers, partner offers.
- **Retention:** a user who stays longer has more time to become a payer. ARPU and retention grow together.

## ARPU, LTV and the CAC you can afford

ARPU is the first building block of LTV. In simplified form:

**LTV ≈ ARPU × gross margin / monthly churn**

Example: $60 monthly ARPU, 80% margin, 3% churn → LTV ≈ 60 × 0.8 / 0.03 = **$1,600**. With the LTV > 3× CAC guideline, the affordable CAC is about $530.

For the freemium app in the first example, with $0.90 ARPU, the same math gives an LTV of a few dollars — which is why F2P teams measure ad payback by cohort rather than by average. Check the math in the [/en/ltv](/en/ltv) calculator.

## FAQ

### Is ARPU monthly or annual?
Any period works, as long as numerator and denominator cover the same one. Subscription products usually use monthly ARPU; mobile games also track daily ARPDAU.

### Which is bigger — ARPU or ARPPU?
ARPPU is always greater than or equal to ARPU, since there can't be more payers than active users. They're equal only when everyone pays (PUR = 100%).

### How is ARPU different from ARPA?
ARPA (Average Revenue per Account) is calculated per company account, not per user. In B2B, where one account has many seats, ARPA is the more useful metric.

### Which revenue goes into ARPU — with or without ads?
All revenue users generate in the period: subscriptions, purchases and ads. To separate monetization models, calculate ARPU from purchases and ARPU from ads separately — their sum is total ARPU.

## Bottom line

ARPU shows monetization of the whole audience, ARPPU shows the depth of monetization among payers, and PUR shows its breadth. Always read the three together: one metric rising at the expense of another is common, and only ARPU tells you whether the business actually earns more.

**Calculate your ARPU in the calculator below**, and ARPPU at [/en/arppu](/en/arppu). The free [PDF cheat sheet](/benchmarks) with formulas and thresholds for 69 metrics comes in handy when you build a monetization dashboard.

---

### Further resources

- [/en/arpu](/en/arpu) — ARPU calculator
- [/en/arppu](/en/arppu) — ARPPU calculator
- [/en/arpdau](/en/arpdau) — ARPDAU for mobile games
- [/en/ltv](/en/ltv) — LTV built on ARPU
- [/en/blog/arpdau-mobile-games](/en/blog/arpdau-mobile-games) — mobile game monetization
