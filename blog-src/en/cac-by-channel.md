---
title: CAC by channel — how to calculate customer acquisition cost for each channel
description: How to calculate CAC by channel (search ads, social, SEO, outbound, referrals): the formula, which costs to include, a worked SaaS example, payback by channel, benchmarks and common mistakes.
date: 2026-09-24
keywords: cac by channel, customer acquisition cost by channel, how to calculate cac, cac formula, blended cac, paid cac, cac benchmarks
embed: cac
---

# CAC by channel — how to calculate customer acquisition cost for each channel

Company-wide average CAC is a useful number for investors and an almost useless one for marketers. It hides a channel that brings customers for $200 and another where each customer costs $1,500. Budget decisions are made per channel — so CAC has to be calculated per channel too.

## Formula

**Channel CAC = All costs of the channel for the period / New paying customers from the channel in the same period**

"All costs" means more than the ad budget:
- media spend (clicks, impressions, placements);
- agencies and freelancers;
- content and creative production;
- tools (SEO software, CRM, contact databases);
- the share of salaries of the people working on that channel.

This gives three different CACs that you shouldn't mix up:

| Type | Numerator | Used for |
|------|-----------|----------|
| **Blended CAC** | All sales and marketing cost / all new customers (including organic) | Company unit economics, investor reporting |
| **Paid CAC** | Paid channel cost / customers from paid channels | Ad budget decisions |
| **Channel CAC** | One channel's cost / its customers | Reallocating budget between channels |

Blended CAC always looks better than paid CAC because organic customers "for free" pull the average down. Showing investors only blended CAC without paid CAC is a common and very visible mistake.

## Worked example: B2B SaaS, one quarter

| Channel | Cost | New customers | CAC |
|---------|------|---------------|-----|
| Search ads (budget $30,000 + agency $3,000) | $33,000 | 60 | **$550** |
| LinkedIn Ads | $20,000 | 16 | **$1,250** |
| SEO and content (writers $9,000 + tools $1,000 + 0.5 FTE $9,000) | $19,000 | 38 | **$500** |
| Outbound (2 SDRs $30,000 + tools $3,000) | $33,000 | 22 | **$1,500** |
| Referral program (rewards) | $4,000 | 20 | **$200** |
| **Total (blended)** | **$109,000** | **156** | **≈ $699** |

Blended CAC ≈ $699 is "average" on the MetricTree calculator's base scale ($300–$800; good is <$300, poor is >$800). But the spread between channels is more than 7×.

## CAC alone doesn't tell you which channel is best

An expensive channel can be the best one if it brings more valuable customers. That's why channel CAC is always converted into **payback**:

**CAC Payback = CAC / (MRR per customer × gross margin)**

Say gross margin is 80%, most channels bring customers at $120 MRR ($96/month contribution), while outbound brings larger customers at $300 MRR ($240/month):

| Channel | CAC | Customer MRR | Payback |
|---------|-----|--------------|---------|
| Referral program | $200 | $120 | **2.1 months** |
| SEO and content | $500 | $120 | **5.2 months** |
| Search ads | $550 | $120 | **5.7 months** |
| Outbound | $1,500 | $300 | **6.3 months** |
| LinkedIn Ads | $1,250 | $120 | **13.0 months** |

Outbound has the highest CAC, yet its payback is in the same group as search ads. LinkedIn at 13 months falls into the "normal" range for SaaS (good is <12 months, normal 12–18, poor >18), but it's the first candidate for optimization. Calculate payback at [/en/cacPayback](/en/cacPayback).

The final test is LTV to CAC per channel: for most models the guideline is LTV > 3× CAC ([/en/ltv_cac](/en/ltv_cac)).

## Typical differences between channels

Absolute CAC depends heavily on niche, geography and deal size, so universal "per-channel benchmarks" don't exist. But the patterns are stable:

- **Referrals and word of mouth** — usually the lowest CAC and the best retention, but hard to scale on demand.
- **SEO and content** — low CAC over a one-year horizon, but the first months are spend without customers. Account for the lag.
- **Search ads** — scale quickly; CAC rises with budget and auction competition.
- **Paid social** — cheap clicks, often lower conversion to paying customers in B2B.
- **Outbound and sales** — high CAC but larger deals; judge them only by payback.

Intermediate benchmarks from the MetricTree calculators for B2B SaaS: CPC of $2–$8 is normal, CPL of $20–$200 per MQL, CPA per trial or demo of $30–$150. On their own they decide nothing: a cheap lead that never converts into a customer costs more than an expensive one that does. Reports on CAC by industry and channel are published by, for example, First Page Sage and HubSpot (State of Marketing) — treat them only as rough guidance, since everyone's methodology differs.

## Common mistakes

### 1. Counting only the ad budget
Without salaries, agencies and tools, SEO and outbound look almost free. Correct channel CAC includes everything that would disappear if you switched the channel off.

### 2. Leads and trials instead of paying customers
CAC is the cost of a **customer**. The cost of a lead is CPL ([/en/cpl](/en/cpl)); the cost of an action is CPA ([/en/cpa](/en/cpa)).

### 3. Ignoring the lag
SEO spend in January brings customers in May; an outbound deal closes 2–3 months later. Match costs and customers taking the sales cycle into account — otherwise a new channel always looks like a failure and the one you're winding down looks great.

### 4. Last-click attribution
A customer read an article, saw a retargeting ad and came in through a branded search. Last-click gives all the credit to search ads, and SEO is undervalued. Use at least a "how did you hear about us" survey as a second source.

### 5. Average CAC instead of marginal CAC
If a channel brings customers at $550, it doesn't mean the next $10,000 of budget will buy them at the same price. CAC almost always rises with budget. Test scaling in steps.

### 6. One MRR for every channel
Channels bring different customers. Measure ARPA and retention by channel — otherwise your payback figures are wrong.

## FAQ

### Should salaries be included in CAC?
Yes — in proportion to the time people spend on acquisition. Without salaries, the CAC of labour-heavy channels (SEO, outbound) is understated several times over.

### How often should CAC by channel be recalculated?
Monthly for paid channels, and quarterly for SEO and outbound, where the lag between spend and customers is longer.

## Bottom line

Calculate CAC separately for each channel, include every cost, match it to paying customers with the lag in mind — and decide on payback and LTV:CAC, not on CAC itself. Keep blended CAC for investor reporting, and allocate budget from the per-channel table.

**Calculate each channel's CAC in the calculator below**, then its payback at [/en/cacPayback](/en/cacPayback). Formulas and thresholds for CAC, CPL, CPA, LTV:CAC and 65 more metrics are in the free [PDF cheat sheet](/benchmarks).

---

### Further resources

- [/en/cac](/en/cac) — CAC calculator
- [/en/cacPayback](/en/cacPayback) — CAC payback
- [/en/ltv_cac](/en/ltv_cac) — LTV:CAC ratio
- [/en/cpl](/en/cpl) — cost per lead
- [/en/blog/cac-payback-period](/en/blog/cac-payback-period) — why CAC Payback matters more than LTV:CAC
