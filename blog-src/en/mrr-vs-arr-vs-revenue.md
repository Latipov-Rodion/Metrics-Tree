---
title: MRR vs ARR vs revenue — what's the difference and how not to inflate them
description: MRR is monthly recurring subscription revenue, ARR = MRR × 12, and P&L revenue and cash collected are different numbers again. Formulas, one worked example, what to include and exclude, common mistakes.
date: 2026-09-26
keywords: mrr vs arr, arr vs revenue, mrr vs revenue, mrr formula, arr formula, annual recurring revenue, monthly recurring revenue, how to calculate mrr
embed: mrr
---

# MRR vs ARR vs revenue — what's the difference and how not to inflate them

A SaaS company has at least four numbers people call "revenue": MRR, ARR, revenue on the P&L, and cash collected. In a good month they can differ by 1.5–2x. Investors know this — and the first thing they check is which one you're presenting as ARR.

## Definitions and formulas

**MRR (Monthly Recurring Revenue) = Sum of normalized monthly payments from active subscriptions**

Only the recurring part: subscriptions converted to a monthly amount, net of discounts, excluding taxes. A $4,800 annual contract contributes $400 of MRR every month — not $4,800 in the month it's paid.

**ARR (Annual Recurring Revenue) = MRR × 12**

The same MRR at annual scale — a snapshot of your recurring revenue run-rate today, not a forecast and not the actual total for the year.

**Revenue** — revenue recognized in your accounts for the period: subscriptions (spread evenly over the service term) plus everything non-recurring — implementation, consulting, one-off fees. The exact recognition rules depend on your accounting standard; that's a question for your accountant.

**Cash collected** — money that hit the bank account. An annual prepayment lands here in full in the month it's paid.

## Worked example: one March, four numbers

A SaaS company:
- **100** customers on a monthly plan at $200
- **20** customers on an annual plan at $4,800/year; **5** of them renewed in March and paid a year upfront
- One-off services (implementation, training) delivered in March: **$8,000**

MRR = 100 × 200 + 20 × (4,800 / 12) = 20,000 + 8,000 = **$28,000**
ARR = 28,000 × 12 = **$336,000**
March revenue = 28,000 + 8,000 = **$36,000**
March cash collected = 20,000 + 5 × 4,800 + 8,000 = **$52,000**

Now three popular ways to "calculate ARR" from the same data:

| Method | Result | What's wrong |
|--------|--------|--------------|
| MRR × 12 | **$336,000** | Correct |
| March revenue × 12 | $432,000 | One-off services passed off as recurring |
| March cash × 12 | $624,000 | Annual prepayments counted as if they came every month |

The gap between honest ARR and "cash ARR" is almost 2x. That kind of ARR falls apart at the first due diligence.

## What goes into MRR and what doesn't

| Item | In MRR? |
|------|---------|
| Monthly subscriptions | Yes |
| Annual and multi-year contracts | Yes, divided by the number of months |
| Discounts and promo codes | Subtracted |
| One-off implementation and training fees | No |
| Consulting and custom development | No |
| Free trials | No, until they pay |
| VAT and other taxes | No |
| Usage-based charges | Debatable: if stable, you can include an average, but report it separately |

## How MRR moves: Net New MRR

Ending MRR = Starting MRR + New + Expansion − Churned − Contraction.

Continuing the example, in April:
- New MRR (new customers): **$3,000**
- Expansion MRR (upgrades): **$600**
- Churned MRR (lost customers): **$1,200**
- Contraction MRR (downgrades): **$200**

Net New MRR = 3,000 + 600 − 1,200 − 200 = **$2,200**
Ending April MRR = 28,000 + 2,200 = **$30,200**
MoM growth = 2,200 / 28,000 ≈ **7.9%**

By MetricTree's SaaS thresholds that's **normal** (MoM growth >5%), but not yet "good" (>15%) or "excellent" (>25%). The universal scale: normal >5%, good >10%, excellent >20%.

## Comparison table

| | MRR | ARR | Revenue (P&L) | Cash collected |
|--|-----|-----|---------------|----------------|
| What it shows | Monthly recurring run-rate | The same at annual scale | What was earned in the period | Money in the bank |
| One-off fees | No | No | Yes | Yes |
| Annual prepayment | 1/12 per month | 1/12 × 12 | Spread over the term | All in the month paid |
| Used for | Operating growth, Net New MRR | Company scale, valuation, T2D3 | Reporting, profit | Runway, burn rate |

## When to use which

- **MRR** — managing growth month to month: the new/expansion/churn breakdown, MoM growth, [NRR](/en/nrr).
- **ARR** — conversations about scale and valuation. For a young SaaS the T2D3 path is a handy guideline: after $1–2M ARR, triple two years in a row, then double for three years.
- **Revenue** — reporting, taxes, gross margin and profit.
- **Cash** — anything about money: runway and burn rate. Annual prepayments improve cash, not MRR.

## Common mistakes

### 1. Putting the whole annual payment into MRR
The most common one. The month annual contracts renew looks like a record, the next one like a collapse. Normalize by 12.

### 2. One-off fees in ARR
A $50,000 implementation won't repeat. Report services on a separate line — their margin is different too.

### 3. ARR from your best month's revenue
"December × 12" isn't ARR, it's the most optimistic scenario. ARR is calculated from MRR as of a specific date.

### 4. Not subtracting discounts
A customer on a $200 list price with a 30% discount contributes $140 of MRR, not $200.

### 5. Counting MRR from subscriptions already cancelled
If a customer clicked "cancel" effective at month-end, many teams remove them from forward-looking MRR immediately. What matters is a single rule applied consistently.

### 6. Confusing ARR with contract value
A contract that's signed but hasn't started yet isn't ARR. Some companies report it separately as "contracted ARR" — just don't blend the two into one number.

## FAQ

### Is ARR the same as annual revenue?
No. ARR is recurring revenue as of a date, multiplied by 12. Actual revenue for the year can be lower (if growth came late in the year) or higher (if there were one-off services).

### Do I need ARR if all my customers are on monthly plans?
As a management metric, no — MRR is enough. But for investors and market comparisons, ARR is the standard unit of scale.

## Bottom line

MRR and ARR are the same recurring revenue at different scales. P&L revenue and cash collected are different numbers, each with its own job. Honest ARR = MRR × 12, with no one-off fees, no annual prepayments counted "in the moment", and net of discounts.

**Calculate your MRR in the calculator below**, then ARR and Net New MRR. Formulas and thresholds for MRR, ARR, NRR and 66 more metrics are in the free [PDF cheat sheet](/benchmarks).

---

### Further resources

- [/en/arr](/en/arr) — ARR calculator
- [/en/netNewMrr](/en/netNewMrr) — Net New MRR
- [/en/mrrGrowthRate](/en/mrrGrowthRate) — MRR growth rate
- [/en/nrr](/en/nrr) — Net Revenue Retention
- [/en/blog/mrr-growth-rate-yc](/en/blog/mrr-growth-rate-yc) — what counts as good MRR growth
