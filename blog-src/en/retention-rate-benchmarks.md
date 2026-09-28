---
title: Retention rate — formula, worked example and benchmarks by industry
description: How to calculate retention rate: the customer retention rate (CRR) formula and Day-N cohort retention, a worked example, benchmarks for SaaS, e-commerce, mobile apps and media, and common mistakes.
date: 2026-09-20
keywords: retention rate, customer retention rate, retention formula, retention benchmarks, d30 retention, retention by industry, how to calculate retention
embed: retention
---

# Retention rate — formula, worked example and benchmarks by industry

Retention is the share of users or customers who are still with your product after a given period. It is the most honest product metric there is: you can't buy it with ad spend, and it directly drives LTV, CAC payback and whether your growth eventually plateaus.

If retention is weak, marketing becomes a leaky bucket: you pay to acquire people who leave before they pay you back.

## Two retention formulas — and when to use each

### 1. Customer Retention Rate (CRR) — for a customer base

**CRR = (E − N) / S × 100%**

- **S** — customers at the start of the period
- **E** — customers at the end of the period
- **N** — new customers acquired during the period

The key step is subtracting new customers. Otherwise a strong sales month masks the churn.

### 2. Cohort (Day-N) retention — for product usage

**Retention D(N) = Users from the cohort active on day N / Cohort size × 100%**

A cohort is everyone who started on the same day or week. You track D1, D7, D30, D90. This is the standard in mobile and product analytics (it's how Amplitude, Mixpanel and AppsFlyer report it).

The MetricTree calculator at [/en/retention](/en/retention) computes the base version: users active at the end of the period / cohort users at the start.

## Worked example: SaaS

A B2B tool, one month:
- Start of month: **400** paying accounts
- New accounts: **30**
- End of month: **418**

CRR = (418 − 30) / 400 = 388 / 400 = **97%**

So monthly churn = 100% − 97% = **3%**. Looks fine at first glance. But annual retention at that churn rate is ≈ 0.97^12 ≈ **69%** — almost a third of customers gone within a year. For SaaS, monthly churn above 2% is already a warning zone (see [/en/churn](/en/churn)).

## Worked example: mobile app

A weekly cohort of **1,200** installs:

| Day | Active | Retention |
|-----|--------|-----------|
| D1 | 480 | 40% |
| D7 | 216 | 18% |
| D30 | 72 | 6% |

D30 = 6% is **normal** for mobile apps (the market median sits around 4–6%). What matters more is whether the curve flattens. If the drop between D30 and D90 almost stops, the product has a core audience you can scale.

## Retention benchmarks by industry

These thresholds match the ones the MetricTree calculator uses when you pick an industry:

| Industry | What is measured | Poor | Normal | Good |
|----------|------------------|------|--------|------|
| **Universal** | Retention over the period | <30% | 30–60% | >60% |
| **SaaS** | Accounts, D30 | <70% | 70–85% | >85% |
| **E-commerce** | Repeat purchase within 90 days | <20% | 20–40% | >40% |
| **Mobile apps** | D30 | <3% | 3–8% | >8% |
| **Media / content** | Retention over the period | <25% | 25–50% | >50% |

Why such a huge spread? Because these are different events. A SaaS customer pays a subscription and leaves deliberately; a mobile user simply forgets the app; in e-commerce "retention" means a repeat purchase, which depends on how often people need the product at all.

**Compare yourself only against your own industry and the same definition of retention.** D30 for a mobile game and D30 for B2B SaaS are different metrics that share a name.

Public reports with retention curves by category: Amplitude's Product Benchmarks Report, AppsFlyer's mobile retention reports, and Mixpanel's benchmark reports. Their methodologies differ — compare the shape of the curve and the order of magnitude, not decimal points.

## How retention connects to other metrics

- **Churn = 1 − Retention** for the same period. Track both — [churn calculator](/en/churn).
- **NRR** is retention measured in money: it includes upsells and downgrades. You can lose 5% of customers and still run 110% NRR (see [/en/nrr](/en/nrr)).
- **Stickiness (DAU/MAU)** shows how often retained users actually use the product. High retention with low DAU/MAU means the product is tolerated, not loved ([/en/stickiness](/en/stickiness)).
- **LTV** depends directly on retention: at 3% monthly churn the average lifetime is ≈ 1 / 0.03 ≈ 33 months; at 6% it's ≈ 17.

## 6 common retention mistakes

### 1. Not subtracting new customers
The most common one. If new customers leak into the numerator, retention can exceed 100% and churn becomes invisible.

### 2. Mixing periods
97% monthly retention and 69% annual retention describe the same company. Always state the period and never compare your monthly number with someone else's annual one.

### 3. Counting a login as "active"
A user who logged in and did nothing is not retained. Define the key action (sent a report, placed an order, played a track) and measure retention on that.

### 4. Averaging all cohorts together
A blended retention number hides the trend. If recent cohorts retain worse than older ones, your product or traffic quality is degrading — and the average won't show it.

### 5. Confusing logos and revenue
Logo retention (how many customers stayed) and revenue retention (how much revenue stayed) can diverge. Losing one large customer barely moves logo retention but hurts revenue.

### 6. Cohorts that are too small
Retention on a 50-person cohort is noise. For product decisions, use cohorts of at least a few hundred users or roll weeks up into months.

## 4 levers to improve retention

- **Onboarding to the aha moment.** Most churn happens in the first days. Shorten the path to first value — it's usually the fastest D1 and D7 win.
- **Habits and triggers.** Notifications and emails tied to what the user actually did, not to the marketing calendar.
- **Traffic quality.** Cheap acquisition channels often bring users who retain worse. Measure retention by source.
- **Early churn signals.** Activity usually drops 2–4 weeks before someone leaves — that's when you can still step in. More in our guide on [reducing SaaS churn](/en/blog/churn-reduction-saas).

## FAQ

### What is a good retention rate?
It depends on the industry and the definition. For SaaS, account retention above 85% at D30 is good; for mobile apps, D30 above 8%; for e-commerce, more than 40% repeat buyers within 90 days. The calculator's universal guideline is above 60% for the period.

### How is retention different from churn?
They are two sides of the same metric over the same period: retention is who stayed, churn is who left. 97% monthly retention = 3% monthly churn.

### How often should I measure retention?
For a daily-use product — D1/D7/D30 on weekly cohorts. For a subscription business — monthly, on paying accounts. For e-commerce — quarterly, via the repeat purchase rate.

### Can retention be above 100%?
Customer (logo) retention — no. If you got more than 100%, you probably didn't subtract new customers. Only revenue retention (NRR) can exceed 100%, thanks to upsells.

## Bottom line

Retention is the foundation of unit economics. Calculate it correctly (without new customers, on a key action, by cohort), compare it only with your industry's norm, and check whether the curve flattens. Everything else — LTV, CAC payback, NRR — is built on top of this number.

**Calculate your retention in the calculator below** — it scores the result for the industry you choose. And if you want the formulas and thresholds for every metric in one place, grab the free [PDF cheat sheet covering 69 metrics](/benchmarks).

---

### Further resources

- [/en/retention](/en/retention) — retention rate calculator
- [/en/retention_aarrr](/en/retention_aarrr) — AARRR retention (Day-N cohorts)
- [/en/churn](/en/churn) — churn calculator
- [/en/nrr](/en/nrr) — Net Revenue Retention
- [/en/blog/dau-mau-stickiness](/en/blog/dau-mau-stickiness) — DAU/MAU and stickiness
