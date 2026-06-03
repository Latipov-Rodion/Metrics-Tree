---
title: A 30-second unit-economics audit
description: How to run your unit economics through a calculator in half a minute: pull values from a spreadsheet, get LTV, CAC, LTV:CAC, Payback and benchmarks at once — no Excel formulas.
date: 2026-06-02
keywords: unit economics audit, csv metrics import, ltv cac payback, check unit economics, metrics calculator
embed: ltv_cac
---

# A 30-second unit-economics audit

Once a quarter (and more often before a round) you need to quickly answer: "**is our unit economics healthy right now?**" Usually that means opening Excel, recalling the formulas for LTV, CAC and Payback, checking you didn't mix up monthly and annual churn, and matching it against benchmarks from memory.

There's a faster way. If your values are already in a spreadsheet — run them through a calculator and get the result + the norm in 30 seconds.

## What an audit measures

The minimum set that answers "is the economics healthy":

| Metric | Formula | Healthy norm |
|--------|---------|--------------|
| **LTV** | ARPA / Monthly Churn (or AOV × frequency × lifetime) | contextual |
| **CAC** | (Marketing + Sales) / new customers | contextual |
| **LTV:CAC** | LTV / CAC | **≥ 3** |
| **CAC Payback** | CAC / (MRR per customer × Gross Margin) | **< 18 months** |
| **Gross Margin** | (Revenue − COGS) / Revenue | 75–85% |

**The health rule:** `LTV:CAC ≥ 3` **AND** `CAC Payback < 18 months`. If only one holds — there's a problem, and fixing it is the quarter's priority.

## How to run spreadsheet values

1. Gather the inputs you need in one row: `aov`, `freq`, `life` (or `ltv`, `cac` directly).
2. Open the relevant calculator — e.g. [LTV:CAC](/en/ltv_cac).
3. Enter the values (or pass them straight in the URL — see below) and get the result, benchmark and interpretation.

**Passing values via the URL** is the fastest way for a repeatable audit. Each input is encoded by its key:

```
/en/ltv?aov=2500&freq=4&life=3
/en/cac?spend=50000&customers=200
/en/ltv_cac?ltv=9000&cac=3000
```

Save these links in Notion next to your spreadsheet — next quarter you just swap the numbers in the URL.

## Reverse audit: "what CAC can we afford?"

It's often more useful to calculate not "what is" but "what should be". Open [LTV:CAC](/en/ltv_cac), enable **Goal mode** and set a target:

> With LTV $9,000 and a target LTV:CAC = 3 → the maximum affordable CAC = **$3,000**.

If your actual CAC is higher, you have a concrete goal: either lower CAC or raise LTV. That turns an abstract "audit" into an action plan.

## Common mistakes an audit catches

1. **Blended vs Paid CAC** — calculate both. Blended (with organic) is always lower; operational decisions need Paid.
2. **Customer churn instead of Revenue churn** in LTV — if small customers leave while big ones grow, use Revenue churn.
3. **LTV:CAC = 5, but Payback = 30 months** — great on paper, a cash crunch in reality. That's why the audit always includes Payback.
4. **Gross margin ignored** — Payback is calculated through margin; without it the number is optimistic.

## Audit checklist (save it)

- [ ] LTV calculated on Revenue churn (not Customer churn)
- [ ] CAC includes sales+marketing salaries, not just ads
- [ ] LTV:CAC ≥ 3
- [ ] CAC Payback < 18 months (SMB < 12)
- [ ] Gross Margin included in Payback
- [ ] Ran Goal mode: target LTV:CAC → required CAC

## Bottom line

A unit-economics audit isn't "open Excel for an hour" — it's **30 seconds** on a couple of calculators when the inputs are already in a spreadsheet. Save URL links with the input keys next to your data, and every quarter the audit takes exactly as long as typing in the new numbers.

**Run your LTV:CAC below** — the built-in calculator shows the ratio, the benchmark and the reverse calculation (target → required CAC).

---

### Further resources

- [/en/ltv_cac](/en/ltv_cac) — LTV:CAC + Goal mode
- [/en/cacPayback](/en/cacPayback) — CAC Payback Period
- [/en/grossMargin](/en/grossMargin) — Gross Margin
- [/en/blog/ltv-cac-unit-economics](/en/blog/ltv-cac-unit-economics) — LTV vs CAC step by step
