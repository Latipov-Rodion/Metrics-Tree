---
title: SaaS Quick Ratio (Mamoon Hamid) — устойчивость роста за 30 секунд
description: Формула Quick Ratio = (New + Expansion MRR) / (Churn + Contraction MRR). Что значит >4× в SaaS, почему Sequoia использует это как первый screening filter.
date: 2026-05-03
keywords: saas quick ratio, mamoon hamid, устойчивость роста, формула quick ratio
embed: quickRatio
---

# SaaS Quick Ratio (Mamoon Hamid) — устойчивость роста за 30 секунд

В 2014 году **Mamoon Hamid** (Kleiner Perkins, бывший Social Capital) предложил одну из самых элегантных SaaS-метрик:

> **Quick Ratio = (New MRR + Expansion MRR) / (Churned MRR + Contraction MRR)**

Сколько долларов нового MRR ты генерируешь на каждый доллар потерянного. Это пульс устойчивости роста.

## Почему именно эта формула

MRR Growth Rate показывает **что** растёт. Quick Ratio показывает **за счёт чего**. Если у тебя MoM growth 10%, но Quick Ratio = 1.2, это значит: на каждый $1 нового MRR теряешь почти столько же. Ты бежишь по ленте без движения вперёд.

Сравни:
- Компания A: MoM growth 10%, Quick Ratio = 4 → устойчивый рост
- Компания B: MoM growth 10%, Quick Ratio = 1.5 → хрупкий рост, любой shock = декаринг

## Бенчмарки

| Quick Ratio | Оценка |
|-------------|--------|
| <1   | Декаринг — теряешь больше чем приобретаешь |
| 1-2  | Слабый рост, легко срывается |
| 2-4  | Хороший |
| **>4** | **Отлично — top decile SaaS** |

Public top-tier SaaS (Datadog, Snowflake, ServiceNow) держат Quick Ratio **6-12+** на ранней growth-стадии, потом стабилизируется на 3-5 после Series E.

## Пример расчёта

**SaaS-стартап за месяц:**
- New MRR: $80k (10 новых клиентов × $8k ARR / 12)
- Expansion MRR: $20k (upgrade'ы existing)
- Churned MRR: $15k (2 клиента ушли)
- Contraction MRR: $5k (downgrade'ы)

Quick Ratio = (80 + 20) / (15 + 5) = 100 / 20 = **5.0** → отлично

## Что говорит Sequoia / Kleiner Perkins

В internal screening документах топ-VC Quick Ratio часто используется как **первый filter** после growth rate:

1. MoM growth >7%? → если нет, не смотрят
2. Quick Ratio >2? → если нет, не смотрят
3. Burn Multiple <2? → если нет, не смотрят

Все три должны быть зелёными. Любое одно красное = отклонение пропускают.

## 3 рычага улучшения Quick Ratio

### 1. Снизить Churn (знаменатель)
- Onboarding: первая неделя определяет 80% будущего churn
- Customer Success: proactive outreach на high-ARR accounts
- Annual prepay контракты (mathematically снижает monthly churn ×12)
- Health scoring + escalation для at-risk accounts

### 2. Поднять Expansion (числитель)
- Seat-based pricing → growth с командой клиента
- Usage-based pricing → growth с usage
- Tiered features → natural upgrade path
- Account-based marketing для top-200 accounts

### 3. Снизить Contraction
- Pricing-tier downgrade — сделай его болезненным (но не настолько чтобы они ушли совсем)
- Pause-вместо-cancel опция для seasonal-customers
- Win-back кампании для recently-churned

## Когда Quick Ratio ВВОДИТ В ЗАБЛУЖДЕНИЕ

- **Малая база (<50 customers)** — один большой churn искажает всё
- **Перерасчёт annual contracts** — если переключаешь annual→monthly billing, цифры скачут
- **Heavy seasonal бизнесы** — Q4 SaaS vs Q1 e-commerce
- **Free→Paid конверсии массово** — New MRR может выглядеть инфлятым

Всегда смотри trailing 3-month rolling average, не single month.

## Связь с другими метриками

| Метрика | Связь с Quick Ratio |
|---------|--------------------|
| **NRR** | Quick Ratio ↑ → NRR ↑ (но NRR — net, Quick Ratio — gross) |
| **Burn Multiple** | High Quick Ratio = эффективный рост, обычно низкий Burn Multiple |
| **LTV:CAC** | Independent, но обе показывают unit-экономику |
| **Rule of 40** | Quick Ratio leading indicator R40-улучшения |

## Итог

Quick Ratio — это **одна цифра** которая покажет тебе устойчивость роста за 30 секунд. Если она <2 — сначала фиксь Churn, потом всё остальное. Если >4 — масштабируйся, экономика здоровая.

**Считай свой Quick Ratio ниже** — встроенный калькулятор покажет результат, бенчмарк и рекомендации.

---

### Дополнительные ресурсы

- [/nrr](/nrr) — Net Revenue Retention, complementary метрика
- [/burnMultiple](/burnMultiple) — Burn Multiple, capital efficiency
- [/blog/burn-multiple-saas-2026](/blog/burn-multiple-saas-2026) — Burn Multiple подробно
- [Mamoon Hamid on Forbes (2014)](https://www.forbes.com/sites/tomtaulli/) — first mention of Quick Ratio
