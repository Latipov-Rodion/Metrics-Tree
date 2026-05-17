---
title: CAC Payback Period — почему он важнее LTV:CAC для cash management
description: CAC Payback = CAC / (MRR × Gross Margin). Бенчмарки 12-18 мес для SaaS, почему длинный payback убивает компанию даже при healthy LTV:CAC.
date: 2026-04-13
keywords: cac payback, cac payback period, формула cac payback, окупаемость CAC
embed: cacPayback
---

# CAC Payback Period — почему он важнее LTV:CAC для cash management

LTV:CAC = 5 звучит как «здоровая компания». Но если CAC Payback = 36 месяцев — у тебя cash crunch до того как клиент окупится.

**LTV:CAC показывает long-term возврат. CAC Payback — short-term cash mechanics.**

В 2026 году пост-ZIRP инвесторы смотрят CAC Payback **first**, потом LTV:CAC.

## Формула

> **CAC Payback Period (мес) = CAC / (MRR на клиента × Gross Margin)**

Пример:
- CAC = $1,500
- MRR на клиента = $200
- Gross Margin = 80%
- CAC Payback = 1500 / (200 × 0.80) = 1500 / 160 = **9.4 мес**

Customer окупает себя через 9.4 мес. После — все его MRR это прибыль.

## Бенчмарки

| Сегмент | Healthy | Excellent |
|---------|---------|-----------|
| SMB SaaS | <12 мес | <6 мес |
| Mid-market SaaS | 12-18 мес | <12 мес |
| Enterprise SaaS | 18-24 мес | <15 мес |
| B2C / Mobile | <6 мес | <3 мес |
| E-commerce | <3 мес | <1 мес |

**>24 мес для SaaS = warning.** >36 мес = модель неустойчива независимо от LTV.

## Почему длинный payback убивает компании

Простая математика:
- Customer pays $200/мес × 80% margin = $160 net/мес
- CAC = $5000 → Payback 31 мес
- Если customer churns после 24 мес → ты потерял $1000 на этом customer

LTV:CAC может быть **5** на бумаге (если они остались бы 5 лет), но **реальный** churn-adjusted LTV меньше CAC = **убыток**.

## Real-world example: что убило MoviePass

MoviePass: $10/мес unlimited films в кинотеатре. CAC ~$15.
- Average customer стоил $50/мес в reimbursed tickets (loss $40/мес)
- "LTV" was «if they stay forever»
- Real payback: never
- Liquidated в 2019

Урок: payback должен быть < typical churn time. Иначе модель broken.

## Чем CAC Payback лучше LTV:CAC в 2026

| Параметр | LTV:CAC | CAC Payback |
|----------|---------|-------------|
| Считается с | Предсказанным LTV (uncertain) | Известным CAC + current MRR (certain) |
| Time-sensitivity | Игнорирует когда | Учитывает время |
| Cash flow impact | Не показывает | Прямо показывает |
| Manipulable | Easily (просто extend срок жизни в предположениях) | Трудно (CAC и MRR — наблюдаемые) |
| VC сейчас смотрят | Второй | **Первой** |

Один из топ-VC цитата: «I don't trust LTV. I trust CAC Payback».

## 4 рычага сокращения CAC Payback

### 1. Снизить CAC (numerator)
- Органические каналы (SEO, content, referrals) — payback там часто 3-6 мес
- Conversion optimization — каждый +10% к CR воронки = -10% CAC payback
- Self-serve onboarding для SMB — убирает sales costs

### 2. Поднять MRR per customer (denominator)
- Pricing review — каждые 12 мес
- Upsell premium tiers в первой сделке
- Bundle мульти-product offerings

### 3. Поднять Gross Margin (denominator multiplier)
- Hosting оптимизация (AWS reserved, cache, CDN)
- Support deflection (docs, AI chatbot)
- Customer support automation

+10pp gross margin (75%→85%) = -12% payback time. Big lever.

### 4. Annual prepay
Annual prepay collects 12 мес upfront → payback **mathematically becomes 0** для cash purposes (хотя GAAP-revenue растягивается на 12 мес).

## Pricing power как hidden lever

Главный insight: повышение price на +20% обычно даёт +18-20% к Net New ARR без proportional roi на CAC.

**Pre-pricing increase:**
- CAC = $1500, MRR = $200, margin 75% → payback = 10 мес

**Post-pricing increase (+20%):**
- CAC = $1500 (same), MRR = $240, margin 80% (better gross because fixed costs same) → payback = 1500 / 192 = **7.8 мес**

-22% payback time от одного pricing-action. Это самый дешёвый рычаг.

## Когда длинный CAC Payback OK

Не всегда CAC Payback нужно <18 мес:

1. **Enterprise multi-year contracts** — 5-year $500k contracts. Payback 24 мес ok если annual churn <5%.

2. **Network-effects продукты** — Each new customer привлекает 2 others organically. Initial CAC payback long, но cohort payback short.

3. **Strategic vendor relationship** — клиент станет ключевой reference для всего сегмента (HubSpot для marketing agencies).

В этих cases **cohort payback** > customer payback. Считай его отдельно.

## Связь с фандрейзингом

**VC term sheet check:**
- CAC Payback <18 мес → могут invest
- CAC Payback <12 мес → premium valuation
- CAC Payback <6 мес → fire sale (everyone wants in)
- CAC Payback >24 мес → нужно объяснить как сократишь, иначе skip

## Итог

CAC Payback — это **cash-version** unit-экономики. LTV:CAC = долгосрочная rentability. CAC Payback = выживаемость в next 12 мес. Знай обе. Healthy SaaS: **LTV:CAC ≥ 3 AND CAC Payback < 18 мес**. Если только одна — есть проблема, починить которую = priority.

**Считай свой CAC Payback ниже** + Goal mode для расчёта max CAC при target payback.

---

### Дополнительные ресурсы

- [/cac](/cac) — CAC calculator
- [/ltv_cac](/ltv_cac) — LTV:CAC ratio
- [/grossMargin](/grossMargin) — Gross Margin (один из inputs)
- [/blog/ltv-cac-unit-economics](/blog/ltv-cac-unit-economics) — LTV:CAC deep dive
