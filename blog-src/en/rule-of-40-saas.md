---
title: Rule of 40 — why 40% is the magic number for SaaS
description: A deep dive into the Rule of 40 (Brad Feld, 2015) — how to calculate it, why 40%, the benchmark for public vs private SaaS in 2026, and how to reach the top decile (>60%).
date: 2026-05-14
keywords: rule of 40, saas health, brad feld, growth + margin, saas metric
embed: ruleOf40
---

# Rule of 40 — why 40% is the magic number for SaaS

In 2015 Brad Feld (Foundry Group) published a short post that defined how to judge the health of public SaaS companies for the next decade. The formula is simple:

> **YoY revenue growth (%) + margin (%) ≥ 40%**

If the sum is ≥ 40, the company is "healthy". Above 60 is top decile. Below 40 means you need to either grow faster or become more profitable.

## Why exactly 40%?

Brad Feld didn't derive the number mathematically — it's an empirical observation from analyzing public SaaS. He noticed that companies with **R40 ≥ 40** trade at a **premium on multiples** versus companies with R40 < 40.

After 2015 dozens of funds (OpenView, Bessemer, ICONIQ) verified the pattern across different datasets. It holds consistently:
- Too much growth with no margin = losses, unsustainable
- Too much margin with no growth = stagnation, losing to competitors
- 40% is the sweet spot between those two extremes

## Which margin should you use?

3 options:

| Margin type | When to use |
|-------------|-------------|
| **EBITDA margin** | Most commonly used, for private SaaS |
| **Operating margin** | Close to EBITDA, but includes depreciation |
| **FCF margin** | Public SaaS report this, the most conservative |

The key is to consistently use **one** across all periods. Don't switch.

## 2026 benchmarks

After the ZIRP correction, the Rule of 40 got harder to hit. Public SaaS medians:

| Tier | R40 | Examples (public SaaS) |
|------|-----|------------------------|
| Top decile | >60% | Adobe, ServiceNow, CrowdStrike, Cloudflare |
| Top quartile | 40-60% | Datadog, Snowflake (post-IPO) |
| Median public SaaS | 25-35% | Most mid-tier names |
| Bottom quartile | <20% | Cut costs now or pivot to profit |

**Private growth-stage SaaS (Series B-D):**
- 40-55% — the best mix
- Well above 60% — usually under-investing in growth (could grow faster if they invested)

## A worked example

**A SaaS startup:**
- ARR at start of year: $5M
- ARR at end of year: $7M → growth = 40% YoY
- EBITDA: -$500k (-7% margin)

R40 = 40 + (-7) = **33** → below the healthy threshold

To reach R40 = 40:
- Option A: accelerate growth from 40% → 47% YoY
- Option B: improve margin from -7% → 0% (reach break-even)
- Option C: a mix — 43% growth + -3% margin = 40 ✓

Use the calculator below to model your own scenario.

## When the Rule of 40 does NOT apply

It's a metric for **public-ready SaaS** at scale. Don't apply it to:

1. **Pre-product-market-fit** — growth is unstable by definition, margin is wild
2. **Hardware-heavy businesses** — capex distorts margin
3. **Marketplace models** — take-rate matters more than growth+margin
4. **Deep tech, biotech** — long R&D cycles make early-stage margin nonsense

## Why is top decile = >60%?

Public SaaS companies in the top deciles usually reach R40 >60% **not by sacrificing growth** but through operating leverage:

- **Margin improves with scale** — more revenue → better gross margin (S&M scales sublinearly)
- **Brand awareness lowers CAC** → S&M as a % of revenue falls
- **Self-serve onboarding removes CSM cost** in the SMB segment
- **R&D is reused** across new products (Datadog: 1 platform → 20+ modules)

In other words, R40 >60% = proof of product-market fit + operational excellence + recurring expansion economics.

## 3 levers to improve R40

### 1. Pricing review
A 10% price increase typically adds +5-8% to gross margin without losing customers (if the value prop exists). It's the cheapest way to improve R40 by 5-8 points.

### 2. Gross margin
Audit COGS:
- Hosting (AWS optimization, reserved instances)
- Customer support (deflect via docs, AI)
- Payment processing (negotiate with Stripe at scale)

Every +5% of gross margin = +5 points of R40.

### 3. Expansion revenue
Existing-customer revenue has a CAC of ~$0:
- Seat-based / usage-based pricing
- Tiered features → natural upgrade path
- Account-based marketing for high-ARR accounts

NRR >115% automatically adds ~10-15% of growth "for free" (without new customers).

## Real-world R40 examples

| Company | Year | Growth | Margin | R40 |
|---------|------|--------|--------|-----|
| Snowflake | 2024 | 35% | 8% (FCF) | 43 |
| Datadog | 2024 | 27% | 30% | **57** |
| HubSpot | 2024 | 23% | 15% | 38 |
| Salesforce | 2024 | 11% | 32% | 43 |
| Shopify | 2024 | 26% | 19% | 45 |

Notice — even mega-caps are rarely above 60%. The top decile is the exception, not the rule.

## Bottom line

The Rule of 40 is a **simple metric for the board room and investor pitch**. It's not the only one, not a magic number, but it's **universally understood**. Know yours, track it quarterly, and explain the trajectory (is it improving every Q?).

**Calculate your R40 below** — see the interactive calculator across different growth + margin scenarios.

---

### Further resources

- [Brad Feld's original 2015 post](https://feld.com/archives/2015/02/rule-40-healthy-saas-company/)
- [Bessemer State of the Cloud 2024](https://www.bvp.com/atlas/state-of-the-cloud)
- [/en/burnMultiple](/en/burnMultiple) — Burn Multiple, a complementary metric
- [/en/grossMargin](/en/grossMargin) — Gross Margin, one of the R40 inputs
- [/en/mrrGrowthRate](/en/mrrGrowthRate) — the growth half of the formula
