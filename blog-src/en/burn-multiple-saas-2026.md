---
title: Burn Multiple — the SaaS investor's #1 metric in 2026
description: What Burn Multiple (David Sacks) is, how to calculate it, benchmarks for seed / Series A / B+, and why it replaced Magic Number in VC pipelines after the ZIRP era.
date: 2026-05-17
keywords: burn multiple, david sacks, saas metrics, capital efficiency, burn multiple formula
embed: burnMultiple
---

# Burn Multiple — the SaaS investor's #1 metric in 2026

In 2020 David Sacks (Craft Ventures, ex-COO of PayPal) published a short essay that reshaped how SaaS companies are evaluated. He proposed one simple formula:

> **Burn Multiple = Net Burn / Net New ARR**

How many dollars a company burns to generate $1 of new annual recurring revenue.

It strips away every marketing illusion. It doesn't matter how much growth you have — what matters is **how efficiently** you buy that growth.

## Why Burn Multiple matters more than ever right now

Before 2022, in the ZIRP era (zero interest rate policy), venture money was almost free. Funds handed capital to companies with a Burn Multiple of 5x, 8x, sometimes 15x — as long as growth was there. "Grow at all costs" was the mantra.

That's over. Funds now treat capital efficiency as table stakes:

| Period | Acceptable Burn Multiple for Series A |
|--------|---------------------------------------|
| 2019–2021 | up to 3-5× |
| 2022–2023 (correction) | up to 2× |
| 2024–2026 | **<1.5×** — otherwise raising a round is hard |

## The formula in detail

**Net Burn** = cash expenses − cash revenue over the period (usually a quarter).

**Net New ARR** = New ARR + Expansion ARR − Churned ARR − Contraction ARR.

It's typically measured per quarter, then normalized. Example:
- Net Burn in Q1: $500,000
- Net New ARR in Q1: $600,000
- Burn Multiple = 500 / 600 = **0.83×** → excellent

## David Sacks' benchmarks

| Burn Multiple | Rating |
|---------------|--------|
| <1×           | Amazing (PayPal-level) |
| 1–1.5×        | Great |
| 1.5–2×        | Good |
| 2–3×          | Suspect |
| >3×           | Bad — the company burns capital inefficiently |

Top public SaaS companies (Snowflake, Datadog, Crowdstrike, Cloudflare) at growth stage hold a Burn Multiple of **0.5–1.2×**.

## Why is Burn Multiple better than Magic Number?

**Magic Number** (Scale Venture Partners) only measures Sales & Marketing efficiency:

```
Magic Number = (Net New ARR × 4) / S&M spend per quarter
```

Great for optimizing the funnel. But it ignores R&D, G&A and operations — which is most of an early-stage SaaS company's spend.

**Burn Multiple covers everything.** It's the final efficiency figure for the whole company. Magic Number optimizes a part; Burn Multiple optimizes the whole.

In a typical SaaS business:
- 40% of burn = S&M
- 35% = R&D
- 15% = G&A
- 10% = COGS (if not already in gross margin)

Magic Number sees 40%. Burn Multiple sees 100%.

## 4 levers to improve Burn Multiple

### 1. Sales & Marketing efficiency
Lower your **CAC**:
- Organic channels (SEO, content, referrals) instead of paid
- ICP focus — don't chase segments with poor conversion
- Self-serve onboarding for SMB (removes sales cost)
- Optimize funnel CR — every +10% compounds

### 2. Expansion ARR (NRR-driven)
Every existing-customer dollar is cheaper than a new one:
- Seat-based or usage-based pricing
- Tiered features → natural upgrade paths
- Account management for high-ARR customers
- Customer health scoring for proactive expansion

### 3. R&D efficiency
- Fewer parallel streams — focus on 1-2 ICPs
- AI / no-code for PRD/QA automation
- A senior-heavy team (3 seniors > 6 mids in SaaS)

### 4. Churn reduction
Every point of churn roughly doubles the CAC you need to compensate:
- Onboarding — the first week drives 80% of future churn
- Annual prepay contracts (mathematically cut churn ×12)
- Health scoring + proactive outreach

## Real-world example

**A SaaS startup with:**
- ARR: $2M, 8% MoM growth
- Net Burn: $250k/mo (=$750k/quarter)
- Net New ARR per quarter: $500k

**Burn Multiple** = 750 / 500 = **1.5×** → Good, but room to improve.

**Scenario "get to 1.0×":**
- Cut burn by $250k/quarter = -33% (headcount cuts? Outsource ops?)
- OR accelerate ARR growth to $750k/quarter = +50% (new channel? Better pricing?)
- OR a mix: -15% burn + +20% ARR ≈ 1.05×

Use the calculator below to model your own scenario.

## When Burn Multiple is MISLEADING

The metric isn't a silver bullet. Ignore it or read it carefully when:

1. **Pre-revenue stage** — denominator = 0, the metric is infinite
2. **One large contract skewed the quarter** — normalize over a rolling 4 quarters
3. **You're investing in a long-horizon product** (deep tech, hardware-software) — a short-term Burn Multiple is bad by design
4. **Seasonal businesses** — Q4 e-commerce vs Q1 SaaS

## Bottom line

If you're a SaaS founder in 2026, Burn Multiple is the number an investor asks about **first** in the next-round meeting. Know yours, optimize it below 1.5× per quarter, and fundraising gets an order of magnitude easier.

**Calculate your Burn Multiple below** — the built-in calculator shows the result, the benchmark and an interpretation instantly.

---

### Further resources

- [David Sacks' original essay](https://sacks.substack.com/)
- [Bessemer 'State of the Cloud' annual report](https://www.bvp.com/atlas/state-of-the-cloud) — public SaaS benchmarks
- [/en/ruleOf40](/en/ruleOf40) — Rule of 40 calculator, a complementary metric
- [/en/magicNumber](/en/magicNumber) — Magic Number, to optimize S&M separately
