---
title: 10 metrics every product manager should track in 2026
description: The 10 metrics every PM in B2B SaaS and B2C should know by heart — from Activation to NRR. With formulas, benchmarks and interactive calculators.
date: 2026-05-07
keywords: product manager metrics, pm metrics, saas metrics 2026, activation, retention, nrr
---

# 10 metrics every product manager should track in 2026

In 2024 ICONIQ Capital published an opener report, "Top 10 Metrics PMs Track in High-Growth SaaS". I compared it with my own experience + what I see most often in pitch decks. Here's the condensed list.

Each metric links directly to an interactive calculator.

## 1. [Activation Rate](/en/activation)

**What:** the percentage of new users who reach the Aha moment.

**Formula:** Activated / all new × 100%

**Benchmark:** >30% — normal, >40% — for SaaS, >50% — exceptional

**Why it matters:** 80% of future churn is set in the first week. Activation is a leading indicator of everything downstream.

**How to improve:** onboarding flow, product tours, a success-driven email campaign in the first 7 days.

## 2. [Retention](/en/retention) / [Churn](/en/churn)

**What:** how many users return after N days (D1, D7, D30, M1, M3, M12).

**Formula:** Active at end / active at start × 100%

**Benchmarks:**
- B2B SaaS: D30 retention >70%, annual churn <10% = top decile
- Mobile B2C: D1 >25%, D7 >12%, D30 >5%
- Consumer SaaS: M1 >50%, M3 >40%, M12 >25%

**Why it matters:** a business without retention is a "leaky bucket". Any growth gets washed out.

## 3. [LTV : CAC](/en/ltv_cac)

**What:** how many dollars of lifetime revenue you get per dollar of acquisition.

**Benchmark:** ≥3 — healthy unit economics, ≥5 — excellent

**Why it matters:** the basic condition for scalability. Without a healthy LTV:CAC, any growth = accelerating toward bankruptcy.

See the dedicated post: [LTV vs CAC — a step-by-step guide](/en/blog/ltv-cac-unit-economics).

## 4. [NRR (Net Revenue Retention)](/en/nrr)

**What:** what % of revenue you retain + upsell from existing customers over 12 months.

**Formula:** (Start MRR + Expansion − Churn) / Start MRR × 100%

**Benchmark:**
- SaaS B2B: >100% — normal, >115% — excellent, >130% — top decile (Snowflake, Datadog)
- PLG B2B: >110% baseline

**Why it matters:** NRR > 100% = the company grows even without new customers. It's the **strongest** indicator of product-market fit.

## 5. [MRR Growth Rate](/en/mrrGrowthRate)

**What:** the monthly growth rate of monthly recurring revenue (MoM).

**Benchmark:**
- Seed: 15-20% MoM
- Series A: 10-15% MoM
- Series B+: 5-10% MoM
- **YC standard: 5-7% MoM minimum** (Paul Graham)

**Why it matters:** it's the main metric at YC office hours. All other metrics matter, but MoM growth is the pulse of the company.

## 6. [Burn Multiple](/en/burnMultiple)

**What:** Net Burn / Net New ARR (David Sacks).

**Benchmark:** <1.5× for Series A/B, top tier <1.0×

**Why it matters:** in 2026, the key VC signal of capital efficiency.

See the dedicated post: [Burn Multiple — the SaaS investor's #1 metric in 2026](/en/blog/burn-multiple-saas-2026).

## 7. [Time to Value (TtV)](/en/timeToValue)

**What:** the median time from sign-up to the first Aha moment.

**Benchmark:**
- PLG <1 day
- SMB SaaS 1-7 days
- Enterprise SaaS 1-14 days

**Why it matters:** a long TtV kills Activation and dramatically raises Churn. Every hour you cut from TtV improves downstream metrics.

**How to improve:** tutorial mode, preloaded sample data, a single CTA in onboarding emails — "Try X in 30 seconds".

## 8. [Stickiness (DAU/MAU)](/en/stickiness)

**What:** what share of the monthly audience returns daily.

**Formula:** DAU / MAU × 100%

**Benchmark:**
- B2B SaaS: >20%
- Consumer apps: >50% (Instagram, TikTok level)
- Office tools (Slack, Notion): >70% in active workspaces

**Why it matters:** engaged users = retained users. If stickiness stagnates, the product becomes "occasionally useful" instead of "daily essential".

## 9. [Engagement Rate](/en/engagementRate)

**What:** interactions per session or per active user. It depends on the product:
- B2B: actions per workspace per week
- Social: likes/comments/shares per impression
- E-com: pages per session, cart additions per session

**Benchmark:** contextual, track the trend (is it improving cohort over cohort).

**Why it matters:** an early warning sign of decline. Engagement falls → 2-3 months later Retention falls → 1-2 months after that Revenue falls.

## 10. [NPS (Net Promoter Score)](/en/nps)

**What:** % Promoters (9-10) − % Detractors (0-6).

**Benchmark:**
- 0-30: OK, room to grow
- 30-50: good
- 50-70: excellent (Slack, Netflix)
- >70: world-class (Apple, Tesla)

**Why it matters:** a qualitative signal. Not cause-and-effect, but the best predictor of future word-of-mouth growth + Customer Churn (low NPS = early churn warning).

## Bonus: sequence matters

These metrics are linked in a cause-and-effect chain:

```
Time to Value ↓
  → Activation Rate ↑
    → Retention ↑
      → NRR ↑, Churn ↓
        → LTV ↑
          → LTV:CAC ↑
            → MRR Growth ↑
              → Burn Multiple ↓
```

Don't try to optimize everything in parallel. Find the bottleneck in this chain — and fix it there. The problem is usually in the **first three** (TtV, Activation, Retention).

## How to use it

1. Once a week — calculate **all 10 metrics** for your product
2. Compare against the benchmarks
3. Find **one metric below benchmark** — fix it
4. A month later — check the trend

The calculators on metricstree automatically show the benchmark next to your result → instant comparison.

## Bottom line

There are dozens of metrics in the SaaS world. These 10 are the **base kit for any PM** in B2B SaaS or a B2C product. Know the formulas by heart, track them weekly, and you'll spot problems 2-3 months before they show up in revenue.

**Calculate yours on [metricstree.vercel.app](/en)** — all 48 metrics, free, no signup.

---

### Further resources

- [ICONIQ Capital — Top 10 PM Metrics](https://www.iconiqcapital.com)
- [/en/blog/burn-multiple-saas-2026](/en/blog/burn-multiple-saas-2026) — Burn Multiple in detail
- [/en/blog/rule-of-40-saas](/en/blog/rule-of-40-saas) — Rule of 40 in detail
- [/en/blog/ltv-cac-unit-economics](/en/blog/ltv-cac-unit-economics) — LTV vs CAC in detail
