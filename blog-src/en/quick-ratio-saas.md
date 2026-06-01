---
title: SaaS Quick Ratio (Mamoon Hamid) — growth durability in 30 seconds
description: The formula Quick Ratio = (New + Expansion MRR) / (Churn + Contraction MRR). What >4× means in SaaS, and why Sequoia uses it as a first screening filter.
date: 2026-05-03
keywords: saas quick ratio, mamoon hamid, growth durability, quick ratio formula
embed: quickRatio
---

# SaaS Quick Ratio (Mamoon Hamid) — growth durability in 30 seconds

In 2014 **Mamoon Hamid** (Kleiner Perkins, formerly Social Capital) proposed one of the most elegant SaaS metrics:

> **Quick Ratio = (New MRR + Expansion MRR) / (Churned MRR + Contraction MRR)**

How many dollars of new MRR you generate for every dollar lost. It's the pulse of growth durability.

## Why this formula

MRR Growth Rate shows **what** is growing. Quick Ratio shows **on what basis**. If you have 10% MoM growth but a Quick Ratio of 1.2, it means: for every $1 of new MRR you lose almost as much. You're running on a treadmill with no forward motion.

Compare:
- Company A: 10% MoM growth, Quick Ratio = 4 → durable growth
- Company B: 10% MoM growth, Quick Ratio = 1.5 → fragile growth, any shock = decline

## Benchmarks

| Quick Ratio | Rating |
|-------------|--------|
| <1   | Declining — you lose more than you gain |
| 1-2  | Weak growth, easily derailed |
| 2-4  | Good |
| **>4** | **Excellent — top decile SaaS** |

Public top-tier SaaS (Datadog, Snowflake, ServiceNow) hold a Quick Ratio of **6-12+** at early growth stage, then stabilize at 3-5 after Series E.

## Worked example

**A SaaS startup over one month:**
- New MRR: $80k (10 new customers × $8k ARR / 12)
- Expansion MRR: $20k (upgrades from existing)
- Churned MRR: $15k (2 customers left)
- Contraction MRR: $5k (downgrades)

Quick Ratio = (80 + 20) / (15 + 5) = 100 / 20 = **5.0** → excellent

## What Sequoia / Kleiner Perkins say

In top-VC internal screening docs, Quick Ratio is often the **first filter** after growth rate:

1. MoM growth >7%? → if not, they pass
2. Quick Ratio >2? → if not, they pass
3. Burn Multiple <2? → if not, they pass

All three must be green. Any single red = they skip it.

## 3 levers to improve Quick Ratio

### 1. Reduce churn (the denominator)
- Onboarding: the first week drives 80% of future churn
- Customer Success: proactive outreach to high-ARR accounts
- Annual prepay contracts (mathematically cut monthly churn ×12)
- Health scoring + escalation for at-risk accounts

### 2. Raise expansion (the numerator)
- Seat-based pricing → growth with the customer's team
- Usage-based pricing → growth with usage
- Tiered features → natural upgrade path
- Account-based marketing for top-200 accounts

### 3. Reduce contraction
- Make tier downgrades a little painful (but not so painful they leave entirely)
- A pause-instead-of-cancel option for seasonal customers
- Win-back campaigns for recently churned

## When Quick Ratio is MISLEADING

- **Small base (<50 customers)** — one big churn distorts everything
- **Annual contract recalculations** — switching annual→monthly billing makes the numbers jump
- **Heavy seasonal businesses** — Q4 SaaS vs Q1 e-commerce
- **Mass free→paid conversions** — New MRR can look inflated

Always look at a trailing 3-month rolling average, not a single month.

## Relationship to other metrics

| Metric | Relationship to Quick Ratio |
|--------|-----------------------------|
| **NRR** | Quick Ratio ↑ → NRR ↑ (but NRR is net, Quick Ratio is gross) |
| **Burn Multiple** | High Quick Ratio = efficient growth, usually low Burn Multiple |
| **LTV:CAC** | Independent, but both show unit economics |
| **Rule of 40** | Quick Ratio is a leading indicator of R40 improvement |

## Bottom line

Quick Ratio is **one number** that shows your growth durability in 30 seconds. If it's <2 — fix churn first, then everything else. If >4 — scale, the economics are healthy.

**Calculate your Quick Ratio below** — the built-in calculator shows the result, the benchmark and recommendations.

---

### Further resources

- [/en/nrr](/en/nrr) — Net Revenue Retention, a complementary metric
- [/en/burnMultiple](/en/burnMultiple) — Burn Multiple, capital efficiency
- [/en/blog/burn-multiple-saas-2026](/en/blog/burn-multiple-saas-2026) — Burn Multiple in detail
- [Mamoon Hamid on Forbes (2014)](https://www.forbes.com/sites/tomtaulli/) — first mention of Quick Ratio
