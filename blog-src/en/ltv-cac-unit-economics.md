---
title: LTV vs CAC — a step-by-step guide to startup unit economics
description: How to correctly calculate LTV and CAC, what ratio is healthy (3:1, 5:1), and why even a healthy LTV:CAC doesn't mean a healthy business without the right payback.
date: 2026-05-10
keywords: ltv, cac, ltv:cac, unit economics, startup unit economics calculation
embed: ltv_cac
---

# LTV vs CAC — a step-by-step guide to startup unit economics

LTV:CAC is probably **the most quoted and most often miscalculated** metric in SaaS. I've seen startups report LTV:CAC = 8 on a pitch deck and fail to explain how they got there.

Let's break it down step by step, the right way.

## 1. LTV (Lifetime Value) — what it is and how to calculate it

LTV is **how much revenue a customer brings over their entire lifetime as a customer**.

Simple formula for **B2C / e-commerce:**

```
LTV = AOV × purchases per year × customer lifetime (years)
```

Example:
- AOV = $250
- 4 purchases per year
- Lifetime = 3 years

LTV = 250 × 4 × 3 = **$3,000**

Formula for **B2B SaaS:**

```
LTV = ARPA / Monthly Churn Rate
```

Where ARPA = Average Revenue Per Account (=MRR per customer). Example:
- ARPA = $200/mo
- Monthly Churn = 2%

LTV = 200 / 0.02 = **$10,000**

**Pitfall 1:** don't confuse Customer Churn and Revenue Churn. If your Customer Churn = 5% but Revenue Churn = 2% (small customers leave, big ones stay and upsell), use Revenue Churn for LTV.

**Pitfall 2:** if you have a short history (<24 months), LTV is a prediction, not a fact. Stay humble: multiply your projected LTV by 0.7-0.8 for a conservative estimate.

## 2. CAC (Customer Acquisition Cost) — what to include

**CAC** = (Marketing + Sales spend) / number of new paying customers in the period.

In Marketing + Sales, include **everything**:
- Ads (Facebook, Google Ads, LinkedIn)
- Salaries of the sales and marketing teams
- Tools (CRM, marketing automation, attribution)
- Contractor fees, consultants
- Content, design, video production

**Pitfall:** Blended CAC vs Paid CAC.

| Type | What it includes | When to show it |
|------|------------------|-----------------|
| Blended CAC | All spend / all new customers (including organic) | Investor pitch (looks better) |
| Paid CAC | Paid channels only / paid customers only | Operational decisions (the real picture) |

**Blended is always lower than Paid.** If you use Blended in a pitch, be ready to explain Paid too. Top VCs ask for both.

## 3. LTV:CAC — what ratio is healthy

| LTV:CAC | What it means |
|---------|---------------|
| **<1** | Every new customer is a loss. The business model is broken |
| **1-3** | Below par. Only acceptable if growth is the priority over unit economics (early stage) |
| **≥3** | Healthy SaaS unit economics |
| **>5** | Great, but you may be under-investing in marketing — competitors will take the market |
| **>8-10** | You're definitely under-investing. Hire sales/marketing now |

**The magic number 3** was introduced by David Skok ([forentrepreneurs.com](https://www.forentrepreneurs.com/)) in 2010. It's been empirically confirmed across thousands of SaaS cases.

Why **3**, not 2 or 4? Because:
- 1× — break-even (on paper, ignoring COGS, support, churn)
- 2× — break-even after real costs
- 3× — buffer for unpredictable churn / margin compression
- ≥3 = sustainable growth

## 4. **CAC Payback Period** — why LTV:CAC isn't enough

LTV:CAC = 5 sounds great. But if payback = 36 months, you'll hit a cash crunch before the customer ever pays back.

```
CAC Payback = CAC / (MRR per customer × Gross Margin)
```

Benchmarks:
- B2B SaaS SMB: <12 months
- B2B SaaS Mid-market: 12-18 months
- B2B SaaS Enterprise: 18-24 months
- B2C: usually <6 months

**Real-world example:**
- LTV = $10,000
- CAC = $2,000 → LTV:CAC = 5× ✓
- MRR per customer = $200
- Gross Margin = 80%

Payback = 2000 / (200 × 0.80) = 2000 / 160 = **12.5 months**

Healthy SaaS. If payback >24 months — even with LTV:CAC = 5, cash flow is problematic.

## 5. Goal mode — the reverse calculation

A frequently useful question: "**With a target LTV:CAC = 3 and my LTV of $5,000, what's the maximum CAC I can afford?**"

Answer: $5,000 / 3 = **$1,667**

If your actual CAC is higher, you need to either lower it or raise LTV.

The calculator below can run this in reverse — set a target LTV:CAC and it shows the required CAC at your LTV.

## 6. How to improve LTV:CAC

### Lower CAC
1. **Organic channels** — SEO, content, sharing, referrals. This lowers blended CAC at scale
2. **Referral programs** — referral CAC is usually 30-50% of paid CAC
3. **Conversion optimization** — every +10% to funnel CR = -10% to CAC
4. **Brand awareness** — a brand lowers CPC and CPM on paid
5. **Self-serve onboarding for SMB** — removes sales cost

### Raise LTV
1. **Reduce churn** — onboarding, customer success, health scoring
2. **Raise AOV / ARPA** — upsells, bundles, premium tiers
3. **Increase frequency** — email flows, retention campaigns
4. **Long contracts** — annual prepay cuts churn ×12
5. **Expansion revenue** — NRR-driven (see the separate post)

## 7. When LTV:CAC is MISLEADING

- **Too short a history** — LTV is calculated on 12 months of data, but customers may churn after 18
- **Margin not included** — gross LTV vs net LTV (after COGS)
- **Discount rate** — a future $1 is worth less than today's; for long-tail LTV apply NPV
- **Cohort skew** — one large customer distorts the all-customers average

## Real-world: common mistakes

**Mistake 1:** "We have LTV:CAC = 8"
→ Ask: blended or paid? Paid is usually much lower.

**Mistake 2:** "We're growing exponentially, LTV:CAC doesn't matter"
→ It does. Without a healthy LTV:CAC, growth = accelerating toward bankruptcy. (RIP Casper, MoviePass.)

**Mistake 3:** "LTV:CAC = 12 — awesome!"
→ Most likely CAC is understated (sales team not included), or LTV is miscalculated (churn not accounted for).

## Bottom line

LTV:CAC is a **simple but critical** metric. Calculate both: gross + paid CAC. Triangulate with CAC Payback Period. If LTV:CAC ≥3 AND payback <18 months → you have healthy SaaS unit economics and can scale.

**Calculate your LTV:CAC below** — the built-in calculator shows the ratio, the benchmark and the reverse calculation (target LTV:CAC → required CAC).

---

### Further resources

- [/en/ltv](/en/ltv) — LTV calculator on its own
- [/en/cac](/en/cac) — CAC calculator on its own
- [/en/cacPayback](/en/cacPayback) — CAC Payback Period
- [David Skok's original post on LTV:CAC](https://www.forentrepreneurs.com/saas-metrics-2/)
- [/en/burnMultiple](/en/burnMultiple) — Burn Multiple, the macro capital-efficiency metric
