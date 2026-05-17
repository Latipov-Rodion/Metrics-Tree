---
title: MRR Growth Rate — почему YC требует 5-7% MoM
description: MRR Growth Rate = MoM рост подписочной выручки. Стандарт Y Combinator 5-7%/мес, T2D3 модель, как ускорить growth через 5 рычагов.
date: 2026-04-17
keywords: mrr growth rate, y combinator metric, T2D3, формула MRR growth, как ускорить рост saas
embed: mrrGrowthRate
---

# MRR Growth Rate — почему YC требует 5-7% MoM

В Y Combinator есть internal benchmark, который Paul Graham повторяет в каждом office hours:

> «**A startup is a company designed to grow fast. We typically look for 5-7% week-over-week revenue growth at YC.** Если ты делаешь 1% — это начало.»

Это формальный стандарт. Если ты YC-applicant — это **первая** цифра в твоей application.

## Формула

> **MRR Growth Rate (MoM) = (MRR_конец − MRR_начало) / MRR_начало × 100%**

Пример: $80k → $88k = (88−80) / 80 = 10%.

**Annualized via compounding:**
```
Annual growth = (1 + monthly)^12 − 1
```
- 5% MoM → 79% annual
- 10% MoM → 213% annual  
- 15% MoM → 435% annual
- 20% MoM → 791% annual

Compound makes it brutal — каждый 1pp MoM ≈ +50% annual растут at scale.

## Бенчмарки по стадиям

| Стадия | Healthy MoM | Великолепно |
|--------|--------------|----|
| Pre-PMF | Variable | Любой стабильный |
| Seed (post-PMF) | 15-20% | 25%+ |
| Series A | 10-15% | 20% |
| Series B | 7-10% | 12% |
| Series C+ | 5-7% | 10% |
| Public SaaS | 2-3% MoM (= 30-50% YoY) | 5%+ |

**Сurves bend** — невозможно поддерживать 20% MoM на $100M ARR (это $20M new MRR в месяц = $240M/year additional).

## T2D3 — Stripe / Bessemer стандарт

**T2D3** = **Triple, Triple, Double, Double, Double** ($1M ARR → $100M за 5 лет):

| Year | ARR | YoY |
|------|-----|------|
| Year 0 | $1M | — |
| Year 1 | $3M | 3× (triple) |
| Year 2 | $9M | 3× (triple) |
| Year 3 | $18M | 2× (double) |
| Year 4 | $36M | 2× |
| Year 5 | $72M | 2× |

Эквивалент в MoM:
- Year 1-2 (3× annual) = ~9.5% MoM
- Year 3-5 (2× annual) = ~6% MoM

T2D3 — это **path to IPO**. Top-tier VC уверены что компании ниже этого pace не дойдут до $100M ARR.

## YC's «5-7% WoW» переведённый

5-7% **per WEEK** = **23-32% per MONTH** = **1300-2900% per YEAR**.

Это **только для early-stage**, обычно $0-$100k MRR. Когда переваливаешь $100k MRR — переключаешься на MoM tracking.

## Как ускорить MRR Growth — 5 рычагов

### 1. Channel-market fit > product-market fit на growth-стадии
**1 working channel** при scale > 5 mediocre. Найди свой:
- B2B SaaS: outbound sales, content+SEO, paid social ABM
- PLG / freemium: viral loops, community, integrations
- E-commerce: paid social, influencer, retargeting

Don't dilute — double-down на one channel пока ROI < 1x.

### 2. Annual → instant +5-15% MRR
Переключение pricing на annual prepay:
- Mathematically повышает recurring revenue
- Снижает churn ×12
- Cash forward

Discount −15% для annual в обмен на 12-мес commit = no-brainer для customer.

### 3. Pricing review каждые 12 мес
+10-15% price = +10-15% MRR в течение 3 мес (после rollout existing customers + new sign-ups).

Если ты не повышал price за 18 мес — поднимай немедленно.

### 4. Expansion revenue ≠ new customer revenue
Existing customer expansion имеет CAC ~$0:
- Seat-based pricing (scales with team)
- Usage-based (scales with usage)
- Tiered upgrades

NRR >115% даёт ~10% growth «бесплатно» (без новых customers).

### 5. ICP focus — drop low-fit segments
Counter-intuitive: cut 30% юзеров (low-fit, high-churn, support-heavy) → release капасити команды на high-fit segment → faster growth там.

«Less is more» actually works in B2B SaaS.

## Real-world примеры

**Slack 2014:**
- $0 → $1M ARR за 5 мес (post-launch)
- Average MoM ~100% (founders effect)

**Notion 2018:**
- $1M → $10M ARR за 18 мес
- Average MoM ~14%

**Figma 2017-2018:**
- $1M → $4M за 12 мес
- Average MoM ~12%

Это все **outliers**. Healthy growth для post-PMF SaaS = 10-15% MoM. Если ты делаешь 20%+ устойчиво — ты на pace к unicorn.

## Когда MoM Growth ВВОДИТ В ЗАБЛУЖДЕНИЕ

1. **Маленькая база** — $5k → $7k = 40% MoM. Не показатель долгосрочного.
2. **Один большой контракт** — Q4 enterprise deal искажает trailing months.
3. **Annual contracts billed monthly vs upfront** — переключение pricing влияет на reporting.
4. **Promotion / discounts** — Black Friday MoM ≠ норм.

Используй **trailing 3-month average MoM** для нормализованной picture.

## Связь с YC application

В YC application форме есть literal question: «What is your MoM growth rate?»

Они **не filter** по этой цифре, но 5-7% MoM = strong signal. Меньше — нужно объяснять (длинный sales cycle, recent launch, etc.). Больше — instant attention.

## Итог

MRR Growth Rate — это **пульс компании**. Меряй weekly до $100k MRR, monthly после. Знай свой trailing 3-month average. Целься на 10%+ MoM для early-stage SaaS, тогда T2D3 path к $100M ARR realistic.

**Считай свой MRR Growth ниже** + bench + projection.

---

### Дополнительные ресурсы

- [/mrr](/mrr) — MRR calculator
- [/arr](/arr) — ARR calculator (MRR × 12)
- [/ruleOf40](/ruleOf40) — Rule of 40 (growth — half of formula)
- [/blog/rule-of-40-saas](/blog/rule-of-40-saas) — Rule of 40 deep dive
- [YC Library — Growth](https://www.ycombinator.com/library)
