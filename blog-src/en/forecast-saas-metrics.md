---
title: Forecast SaaS metrics without Excel — a 6–24 month projection
description: How to forecast MRR, ARR and growth without spreadsheets: set the current value and rate, see the 6–24 month curve, and check whether the path to $1M ARR is realistic.
date: 2026-06-01
keywords: mrr forecast, forecast saas metrics, revenue growth projection, t2d3, arr projection without excel
embed: mrrGrowthRate
---

# Forecast SaaS metrics without Excel — a 6–24 month projection

"When do we hit $1M ARR?" — the question asked at every board meeting. Usually the answer lives in an Excel sheet with a compound-interest formula that no one but its author understands.

A growth forecast is one formula, and it doesn't need Excel. All you need is the current value and the monthly rate.

## The forecast math in one line

> **MRR in N months = MRR_now × (1 + rate)^N**

This is compound interest. That's exactly why a small difference in the monthly rate becomes a huge difference over a year:

| MoM rate | After 12 mo | After 24 mo |
|----------|-------------|-------------|
| 5% | ×1.80 | ×3.23 |
| 10% | ×3.14 | ×9.85 |
| 15% | ×5.35 | ×28.6 |
| 20% | ×8.92 | ×79.5 |

Each +1pp of monthly rate compounds into tens of percent over a year — which is why "nudging" the rate matters more than it seems.

## How to build a forecast in a minute

1. Open [MRR Growth Rate](/en/mrrGrowthRate).
2. Enter the start and end MRR for a month — the calculator shows your **MoM rate**.
3. Look at the projection: where revenue lands in 6–24 months at that rate.
4. Move the rate and watch the curve change — these are What-If scenarios with not a single formula.

**Tip:** use a **trailing 3-month average** rate, not the last month — one big contract distorts the forecast.

## Check against T2D3 — is the path to $100M realistic?

**T2D3** (Triple, Triple, Double, Double, Double) is the benchmark trajectory from $1M → $100M ARR in 5 years:

| Year | ARR | YoY | ≈ MoM |
|------|-----|-----|-------|
| 1 | $3M | 3× | ~9.5% |
| 2 | $9M | 3× | ~9.5% |
| 3 | $18M | 2× | ~6% |
| 4 | $36M | 2× | ~6% |
| 5 | $72M | 2× | ~6% |

If your forecast at the current rate lands well below this curve, that's a signal to the board: either accelerate growth or revisit the round's target. A forecast turns "we hope to grow" into a concrete number and date.

## Where a forecast is MISLEADING

1. **The rate isn't constant** — at scale the curve always slows (you can't hold 20% MoM at $100M ARR). A fixed-rate forecast is optimistic over a long horizon.
2. **Small base** — $5k→$7k = 40% MoM, but it isn't repeatable.
3. **Seasonality** — Q4 e-commerce ≠ Q1 SaaS; normalize.
4. **Churn isn't in a pure growth forecast** — high MoM with high churn = fragile growth (cross-check with [Quick Ratio](/en/quickRatio)).

So a forecast isn't a promise but a **range of scenarios**: conservative (−churn effect), base (trailing average) and optimistic.

## Bottom line

Forecasting SaaS metrics doesn't need Excel — it's one compound-interest formula the calculator builds for you over 6–24 months. Set the current value and trailing rate, check the curve against T2D3, move the rate for scenarios — and the board meeting gets an honest number instead of "we hope".

**Calculate your MRR Growth and projection below** — the built-in calculator shows the rate, the projection and a stage benchmark.

---

### Further resources

- [/en/mrrGrowthRate](/en/mrrGrowthRate) — MRR Growth Rate + projection
- [/en/mrr](/en/mrr) — MRR · [/en/arr](/en/arr) — ARR (MRR × 12)
- [/en/quickRatio](/en/quickRatio) — Quick Ratio (growth durability)
- [/en/blog/mrr-growth-rate-yc](/en/blog/mrr-growth-rate-yc) — why YC looks for 5-7% MoM
