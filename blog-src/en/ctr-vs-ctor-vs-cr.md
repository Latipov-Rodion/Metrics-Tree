---
title: CTR vs CTOR vs CR — what's the difference in email and ads
description: CTR is clicks per impression or delivered email, CTOR is clicks per open, CR is conversion to the target action. Formulas, an email and an ad campaign worked through, benchmarks, and why a high CTR can be a bad sign.
date: 2026-09-28
keywords: ctr vs ctor, ctr vs cr, ctr vs conversion rate, click to open rate, ctor meaning, email ctr, ctr formula, ctor formula, conversion rate formula
embed: ctr
---

# CTR vs CTOR vs CR — what's the difference in email and ads

An email report shows a 3% CTR, a 13.6% CTOR, and a conversion rate of either 15% or 0.45%, depending on who did the math. All of these describe the same email. The metrics measure different funnel steps and use different denominators — mix them up and it's easy to "improve" the wrong thing.

## Definitions and formulas

**CTR (Click-Through Rate) = Clicks / Impressions × 100%**

In advertising the denominator is impressions. In email it's delivered messages: CTR = unique clicks / delivered. CTR answers "what share of the people who saw it clicked?"

**CTOR (Click-to-Open Rate) = Unique clicks / Unique opens × 100%**

An email-only metric. It shows how well the email's content persuaded the people who opened it. The subject line barely affects CTOR — only the content, the offer and the button do.

**CR (Conversion Rate) = Conversions / Visitors × 100%**

The share who completed the target action: purchase, sign-up, request. Always state the denominator: site visitors, clicks, delivered emails.

For email, all three are linked:

**CTR = Open Rate × CTOR**

## Example 1: an email campaign

An online store's promo email:
- Delivered: **20,000**
- Unique opens: **4,400**
- Unique clicks: **600**
- Orders: **90**

Open rate = 4,400 / 20,000 = **22%**
CTR = 600 / 20,000 = **3%**
CTOR = 600 / 4,400 = **13.6%**
CR (from clicks) = 90 / 600 = **15%**
CR (from delivered) = 90 / 20,000 = **0.45%**

Check: 22% × 13.6% ≈ 3% ✓

By MetricTree's thresholds: a 22% open rate is normal (15–25%), a 13.6% CTOR is normal (10–20%); for e-commerce promo emails the guideline is 8–15%. To lift CTR, figure out which factor is weaker: the subject line and sender reputation (open rate) or the content (CTOR).

### The Apple Mail Privacy Protection trap
Apple MPP pre-loads emails automatically and marks them as opened. Reported open rates in lists with lots of iPhone users are often 35–45%. Say the report shows **8,000** opens instead of 4,400. Then CTOR = 600 / 8,000 = **7.5%** — formally "poor" (<10%), even though the email hasn't changed. That's why CTOR and open rate are now more reliable for tracking one list over time, while clicks and CTR from delivered are better for comparing campaigns.

## Example 2: an ad campaign

Two creative versions, the same **200,000** impressions at a **$9.60** CPM → **$1,920** budget each:

| | Creative A | Creative B |
|--|------------|------------|
| CTR | 1.2% | 2.4% |
| Clicks | 2,400 | 4,800 |
| Effective CPC | $0.80 | $0.40 |
| CR (click → order) | 2.5% | 1% |
| Orders | 60 | 48 |
| CPA | **$32** | **$40** |

Creative B is clickbait: twice the CTR, clicks at half the price. But it attracts people who aren't planning to buy, and the final cost per order is 25% higher.

By MetricTree's e-commerce thresholds: CTR A (1.2%) is normal (1–2%), CTR B (2.4%) is good (>2%). CR A (2.5%) is normal (1–4%), CR B (1%) sits at the bottom of normal. Both CPAs are within the $5–$40 per purchase guideline, but B is right at the edge. Optimizing for CTR, you'd pick the worse option.

## Comparison table

| | CTR | CTOR | CR |
|--|-----|------|----|
| Numerator | Clicks | Unique clicks | Target actions |
| Denominator | Impressions / delivered emails | Unique opens | Visitors / clicks |
| Where it's used | Ads and email | Email only | Site, landing page, funnel |
| What it measures | Appeal of the ad or email as a whole | Quality of the email content | Ability of the page and offer to sell |
| What it drives | Cost per click, traffic volume | Email CTR | CPA, CAC, revenue |

## Benchmarks

Guidelines from the industry thresholds in MetricTree's calculators:

| Industry | CTR (ads) | CR | CTOR |
|----------|-----------|----|------|
| **Universal** | <0.5% poor, 0.5–2% normal, >2% good | <1% poor, 1–3% normal, >3% good | <10% poor, 10–20% normal, >20% good |
| **SaaS** | <1% poor, 2–5% normal, >5% good | <2% poor, 2–8% normal, >8% good | B2B: 10–20%, triggered emails higher |
| **E-commerce** | <0.5% poor, 1–2% normal, >2% good | <1% poor, 1–4% normal, >4% good | promo: 8–15% |
| **Mobile apps** | <0.5% poor, 1–3% normal, >3% good | <1% poor, 1–5% normal, >5% good | onboarding sequences: 15–25% |
| **Media** | <2% poor, 3–8% normal, >8% good | <0.5% poor, 0.5–2% normal, >2% good | newsletters: 12–22% |

CTR depends heavily on format: for display banners the guideline is above 0.1%, for search ads above 2%.

## When to use which

- **CTR** — compare ads, creatives and subject lines with each other; understand why clicks are expensive.
- **CTOR** — judge an email's content and offer separately from its subject line and deliverability.
- **CR** — judge the landing page, offer and traffic quality. CR together with CPC determines [CPA](/en/cpa).

The campaign's main metric isn't CTR or CR on their own — it's the cost of the result: CPA or CAC. CTR and CR are the levers that move it.

## Common mistakes

### 1. Optimizing ads for CTR
A high CTR lowers cost per click but doesn't guarantee sales. Always read CTR together with CR and CPA.

### 2. Comparing CTR with CTOR
"Our CTR is 3%, a competitor's is 13%" — the competitor may be calling CTOR "CTR". Check the denominator.

### 3. Not stating CR's denominator
15% of clicks and 0.45% of delivered emails are the same campaign. Without the denominator the number is meaningless.

### 4. Counting all clicks instead of unique ones
One person clicking five times inflates CTR and CTOR. For email, use unique clicks.

### 5. Trusting open rate after Apple MPP
Automatic "opens" inflate open rate and deflate CTOR. Compare trends within your own list and lean on clicks.

## Bottom line

CTR is about attention, CTOR is about the email's content, CR is about the ability to sell. All three are intermediate steps; the campaign's outcome is the cost of the result. A high CTR with a low CR is a warning sign, not a reason for a bonus.

**Calculate CTR in the calculator below**, then CTOR and CR. Formulas and thresholds for CTR, CTOR, CR, open rate and 65 more metrics are in the free [PDF cheat sheet](/benchmarks).

---

### Further resources

- [/en/ctor](/en/ctor) — CTOR calculator
- [/en/openRate](/en/openRate) — Email Open Rate
- [/en/cr](/en/cr) — Conversion Rate
- [/en/cpc](/en/cpc) — cost per click
- [/en/cpa](/en/cpa) — cost per action
- [/en/blog/ecommerce-conversion-rate-benchmarks](/en/blog/ecommerce-conversion-rate-benchmarks) — e-commerce conversion rate benchmarks
