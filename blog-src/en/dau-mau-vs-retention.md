---
title: DAU/MAU vs retention — what to track to know if users come back
description: DAU/MAU shows how often users engage; retention shows how many stay over time. Formulas, two apps with the same DAU/MAU and very different retention, benchmarks and common mistakes.
date: 2026-09-28
keywords: dau mau vs retention, stickiness vs retention, dau/mau ratio, user retention, cohort retention, product stickiness, dau/mau formula, what to track
embed: retention
---

# DAU/MAU vs retention — what to track to know if users come back

"Our DAU/MAU is 20%, so users come back" — that sentence hides a substitution. DAU/MAU answers "how often do currently active users engage?" Retention answers "how many of the people who arrived actually stayed?" A product can be very sticky for a small core while losing almost every newcomer. And the reverse.

## Definitions and formulas

**Stickiness = Average DAU for the month / MAU × 100%**

DAU is unique active users per day, MAU per month. A handy reading: DAU/MAU × 30 ≈ the average number of active days per user per month. 20% is about 6 days.

**Retention (cohort) = Cohort members active after N days / Cohort size × 100%**

A cohort is users who arrived in the same period (day, week, month). D1, D7 and D30 retention show what share of them were still active after 1, 7 and 30 days.

The key difference: stickiness is calculated over the entire current audience, with loyal veterans and yesterday's newcomers mixed together. Retention follows a specific group of people over time.

## Example 1: same DAU/MAU, different retention

Two mobile apps, each with, per month:
- MAU: **100,000**
- Average DAU: **20,000**
- Stickiness = 20,000 / 100,000 = **20%**

By MetricTree's mobile thresholds that's normal (10–25%). The apps look identical. Now look at the cohorts:

| | App A | App B |
|--|-------|-------|
| New users per month | 40,000 | 10,000 |
| D30 retention | 4% | 12% |
| D30 rating (mobile) | normal (3–8%) | good (>8%) |

App A holds its DAU/MAU thanks to a small core of active users, while churning through almost all of its newcomers every month via paid acquisition. Of 40,000 new users, 1,600 remain after 30 days. Cut the marketing budget and MAU will start falling fast.

App B keeps 1,200 of its 10,000 new users — almost as many in absolute terms, with a quarter of the acquisition. Its audience grows because of the product, not the budget.

DAU/MAU doesn't see this difference at all.

## Example 2: stickiness drops when you grow

An app before an ad campaign:
- MAU: **60,000**, DAU: **15,000** → stickiness **25%**

Launch a campaign: +**40,000** new users in a month, each active on average **2 days** out of 30.

Added to average DAU ≈ 40,000 × 2 / 30 ≈ **2,667**
New DAU ≈ 17,667, MAU = 100,000 → stickiness ≈ **17.7%**

Stickiness fell by 7 percentage points, yet nothing happened to the product's core: lots of newcomers with short visits simply landed in the denominator. Looking only at DAU/MAU, you might conclude "the product got worse" — and start fixing the wrong thing. Cohort retention would show that existing users behave as before and the question is the quality of the new traffic.

## Comparison table

| | DAU/MAU (stickiness) | Cohort retention |
|--|----------------------|------------------|
| What it measures | How often the current audience engages | Share of arrivals who stayed |
| Unit of analysis | The month's whole audience | A cohort (group by sign-up date) |
| Sensitivity to new-user inflow | High — newcomers dilute it | None — each cohort is separate |
| Horizon | One month | D1, D7, D30, M3, M12… |
| Answers | Has the product become a habit? | Has the product found its users? |
| Most useful for | Social, messaging, games, work tools | Any product, especially while searching for PMF |

## Benchmarks

Guidelines from the industry thresholds in MetricTree's calculators:

| Industry | Stickiness (DAU/MAU) | Retention |
|----------|----------------------|-----------|
| **Universal** | <10% poor, 10–25% normal, >25% good | <30% poor, 30–60% normal, >60% good |
| **SaaS** | <15% poor, 15–30% normal, >30% good, >50% excellent | D30 by login cohorts: <70% poor, 70–85% normal, >85% good |
| **E-commerce** | <3% poor, 3–10% normal, >10% good | repeat purchase within 90 days: <20% poor, 20–40% normal, >40% good |
| **Mobile apps** | <10% poor, 10–25% normal, >25% good, >40% excellent | D30: <3% poor, 3–8% normal, >8% good |
| **Media** | <12% poor, 12–30% normal, >30% good | <25% poor, 25–50% normal, >50% good |

Note e-commerce: a 5% DAU/MAU is normal for a store. People don't shop every day, and that's not a product problem.

## What to track: a practical rule

- **Always: cohort retention.** It's the main product-market fit signal: the retention curve should flatten into a plateau, not slide to zero.
- **DAU/MAU if the product is inherently daily:** messaging, social, games, work tools. For them, frequency is part of the value.
- **For infrequent-use products** (travel, taxes, real estate) DAU/MAU is nearly useless. A formally low value will land in the "poor" zone, but that's the nature of the use case. Look at retention at the natural frequency — after a month, a quarter, a year.
- **For a weekly rhythm**, use WAU and the DAU/WAU and WAU/MAU ratios. For work tools, WAU is typically 50–80% of MAU.

## Common mistakes

### 1. Treating DAU/MAU as a retention metric
Stickiness doesn't show how many people left. An app can lose 95% of newcomers and keep a healthy DAU/MAU on its core.

### 2. Panicking when stickiness drops during growth
An inflow of new users mechanically lowers DAU/MAU. Check the cohorts first.

### 3. Counting any login as "active"
Auto-login and background sync inflate DAU. Define activity by a key action.

### 4. Averaging all cohorts together
Retention across the whole base blends loyal veterans with new users. Look at each cohort separately and compare them.

### 5. Measuring a B2B product on calendar days
Work tools are barely used on weekends, which pushes DAU/MAU down. For B2B, count business days or use WAU.

## Bottom line

DAU/MAU is a habit metric: how often the people who stayed use the product. Retention is a value metric: whether people stay at all. The first without the second can paint a healthy picture of a product that only survives on ad spend. Start with cohort retention; add DAU/MAU if the product is inherently daily.

**Calculate your cohort retention in the calculator below**, and stickiness at [/en/stickiness](/en/stickiness). Formulas and thresholds for retention, DAU/MAU and 67 more metrics are in the free [PDF cheat sheet](/benchmarks).

---

### Further resources

- [/en/stickiness](/en/stickiness) — DAU/MAU calculator
- [/en/dau](/en/dau) — DAU
- [/en/mau](/en/mau) — MAU
- [/en/wau](/en/wau) — WAU
- [/en/blog/dau-mau-stickiness](/en/blog/dau-mau-stickiness) — how to read DAU/MAU and raise stickiness
- [/en/blog/retention-rate-benchmarks](/en/blog/retention-rate-benchmarks) — retention benchmarks by industry
