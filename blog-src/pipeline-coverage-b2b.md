---
title: Pipeline Coverage — почему стандарт 3-4× и как его поддерживать
description: Pipeline Coverage = Pipeline Value / Quota. B2B SaaS norm 3-4×, при <2× критично, как поддерживать coverage через inbound + outbound + ABM.
date: 2026-04-03
keywords: pipeline coverage, b2b sales, pipeline-to-quota ratio, формула pipeline coverage
embed: pipelineCoverage
---

# Pipeline Coverage — почему стандарт 3-4× и как его поддерживать

Если ты VP Sales или CEO B2B SaaS — каждый понедельник утром первое что ты смотришь это **Pipeline Coverage**. Это predictor выполнения quarterly quota.

> **Pipeline Coverage = Total Pipeline Value / Quarterly Quota**

Если у тебя pipeline $1.2M и quota $400k → Coverage = 3.0×. Здоровая.

## Почему именно 3-4×?

Математика проста: **B2B SaaS average win rate = 25%**. Чтобы закрыть $1, нужно $4 в pipeline.

| Win Rate | Required Coverage |
|----------|--------------------|
| 50% | 2.0× |
| 33% | 3.0× |
| 25% | 4.0× ← Average B2B SaaS |
| 20% | 5.0× |
| 15% | 6.7× |

**Coverage = 1 / Win Rate.** Если ты win 25% — нужно coverage 4×.

## Бенчмарки

| Coverage | Статус |
|----------|--------|
| **<2×** | Critical — quarter at risk, urgent action |
| **2-3×** | Tight — possible to make number, нужно push deals |
| **3-4×** | **Healthy norm** для standard SaaS |
| **4-5×** | Strong — high confidence quarter delivers |
| **>5×** | Surplus — либо pipeline padded, либо AEs underloaded |

## Что считается «pipeline»

3 standard definitions:

1. **Open opportunities** — все non-closed deals. Naive, overestimates.

2. **Qualified pipeline** — passed BANT / MEDDIC qualification. Stage ≥ Discovery. **Стандартный**.

3. **Forecast-weighted pipeline** — каждая opportunity × probability_to_close. Самый conservative.

Industry default: **#2 (qualified pipeline)** для coverage metric.

## Пример расчёта

**Q1 SaaS-команда:**
- Quarterly quota: $500k Net New ARR
- Qualified pipeline (stage ≥ Discovery): $1.8M
- Coverage = 1800 / 500 = **3.6×** → healthy

Но: разбей по stages.

| Stage | Pipeline | Probability | Forecast contribution |
|-------|----------|-------------|----------------------|
| Discovery | $500k | 10% | $50k |
| Demo | $400k | 25% | $100k |
| Proposal | $500k | 50% | $250k |
| Negotiation | $250k | 75% | $187k |
| Verbal | $150k | 90% | $135k |
| **Total** | **$1.8M** | — | **$722k** |

**Weighted forecast = $722k > quota $500k.** Even ahead.

## Почему один coverage недостаточен

Coverage 4× но distribution wrong = по-прежнему провал:

**Bad distribution example:**
- $1.6M in Discovery (10% probability) = weighted $160k
- $200k in late-stages = weighted ~$130k
- Total weighted: $290k
- **Coverage 4× → forecast only $290k vs $500k quota = miss**

**Good distribution:**
- $400k Discovery, $400k Demo, $400k Proposal, $400k Negotiation+
- Weighted: 40 + 100 + 200 + 320 = $660k > quota ✓

Pipeline stage progression ratio > absolute coverage value.

## Как наращивать pipeline

Pipeline = SDR/marketing output. Если coverage <3× — нужно больше top-of-funnel.

### Channels (sorted by typical ROI):

1. **Inbound (content, SEO, paid)** — best ROI long-term, lag 3-12 мес
2. **Account-based marketing (ABM)** — high-fit accounts, expensive but high CR
3. **Outbound SDR** — predictable, scales linearly with headcount
4. **Partnerships / referrals** — best deals, slowest to build
5. **Events / conferences** — high CAC, brand-builder

**Rule of thumb**: каждый AE нужен **2× pipeline coverage от его quota**. Если AE quota $500k/quarter — нужно $2M qualified pipeline created по этому AE.

## Lead-to-Opportunity ratio

Чтобы создать $4 pipeline на $1 quota, нужно lead intake:

```
Required leads = Quota × Coverage / (AOV × Lead→Opp Conv × Opp→Closed Conv)
```

Пример:
- Quota: $500k
- Coverage target: 4×
- ACV: $30k
- Lead→Opp CR: 20%
- Opp→Closed CR: 25%

Required leads = $500k × 4 / ($30k × 0.20 × 0.25) = $2M / $1.5k = **1,333 qualified leads per quarter**.

Это **leading metric** для marketing/SDR.

## Когда Coverage больше 5× — тоже плохо

Кажется что больше = лучше, но:

1. **AE underloaded** — каждый AE может work только ~50-100 active opportunities. Больше — quality падает.

2. **Pipeline padding** — AEs искусственно держат dead opportunities open чтобы coverage looked good. Reality: они not closeable.

3. **Quota too low** — если coverage всегда >5×, twoja quota слишком consервативная, упускаешь growth opportunity.

Если регулярно >5× **повышай quota** на 20%.

## Когда <3× критично

Plan действий for <3×:

**Week 1**: Push existing opportunities — focus calls на Proposal/Negotiation stages.

**Week 2**: SDR blitz на top-100 ICP accounts. 5 calls + 10 emails per day per SDR.

**Week 3**: Marketing campaign — top-of-funnel boost. Webinar, content syndication, paid ads.

**Week 4**: Re-evaluate quarter. Если pipeline still <3× — consider partial quarter miss, plan recovery в next quarter.

## Связь с другими B2B-метриками

| Метрика | Связь с Coverage |
|---------|------------------|
| **Sales Velocity** | Velocity = function of pipeline. Coverage gives pipeline volume |
| **Win Rate** | Determines required coverage (1 / Win Rate) |
| **Sales Cycle Length** | Долгий cycle требует higher coverage (delay between create → close) |
| **Lead-to-Opp CR** | Determines required lead intake для target coverage |

## Когда Coverage ВВОДИТ В ЗАБЛУЖДЕНИЕ

1. **One mega-deal** — $1M opportunity в pipeline на $500k quota = coverage 2×. Но если win = quota done. Если lose = quarter dead. Single-deal risk.

2. **Inflated probabilities** — AEs forecast 75% probability на early-stage deal. Recalibrate quarterly.

3. **Stale opportunities** — что-то sitting в pipeline 6 мес. Дисциплина: opportunities >60 days inactive → close-lost.

4. **Won deal late in quarter** — Q4 sales push заполняет Q1 quota easy → false sense Q1 healthy.

## Итог

Pipeline Coverage = **leading indicator** quarter outcome. Знай свой weekly. Норма 3-4×. <3× — alarm bells. >5× — quota too low. Quality (stage distribution) > quantity.

**Считай свой Pipeline Coverage ниже** + Goal mode (required pipeline для target quarter).

---

### Дополнительные ресурсы

- [/salesVelocity](/salesVelocity) — Sales Velocity (использует pipeline)
- [/winRate](/winRate) — Win Rate (determines required coverage)
- [/salesCycleLength](/salesCycleLength) — Cycle Length
- [/blog/sales-velocity-b2b](/blog/sales-velocity-b2b) — Sales Velocity deep dive
