---
title: ARPDAU — главная метрика mobile F2P-игр, бенчмарки 2026
description: ARPDAU = Daily Revenue / DAU. Free-to-play норма $0.05-$5, premium $0.5-$20. Что отличает hyper-casual от RPG в монетизации.
date: 2026-04-10
keywords: arpdau, mobile games metric, free-to-play монетизация, формула ARPDAU
embed: arpdau
---

# ARPDAU — главная метрика mobile F2P-игр, бенчмарки 2026

В mobile gaming industry **ARPDAU** (Average Revenue Per Daily Active User) — это пульс монетизации. Если LTV — это «сколько customer стоит за всю жизнь», то ARPDAU — это «сколько он стоит сегодня».

## Формула

> **ARPDAU = Total Daily Revenue / Daily Active Users**

Пример:
- Daily revenue $5,000
- DAU 50,000
- ARPDAU = $5000 / 50000 = **$0.10**

10 центов в день per active user. Звучит мало? Это **в норме для casual игр**. Для top-tier RPG норма $0.50-1.50.

## Бенчмарки по жанрам (2026 data)

| Жанр | ARPDAU нижний | Median | Top tier |
|------|---------------|--------|----------|
| **Hyper-casual** | $0.01 | $0.03 | $0.08 |
| **Casual** | $0.05 | $0.12 | $0.30 |
| **Mid-core (puzzle)** | $0.10 | $0.25 | $0.60 |
| **Strategy / 4X** | $0.30 | $0.80 | $2.00 |
| **RPG / MMO** | $0.50 | $1.20 | $3.00 |
| **Casino / Slots** | $1.00 | $2.50 | $8.00 |
| **Premium / paid apps** | n/a | $5.00 | $15.00+ |

Данные: AppMagic, Sensor Tower, AppAnnie aggregates.

## Чем ARPDAU отличается от ARPU

| Метрика | Считается | Когда использовать |
|---------|-----------|--------------------|
| **ARPDAU** | Per daily active user | Mobile F2P — daily-engagement продукты |
| **ARPU** | Per active user в период (mo/year) | SaaS, subscription, e-commerce |
| **ARPPU** | Per PAYING user | Free-to-play — фокус на conversion |
| **LTV** | Total за время жизни | Long-term unit economics |

**ARPDAU × Average Lifespan in days = approximate LTV** для daily-engagement продуктов.

Пример: ARPDAU $0.20 × 180-day lifespan = LTV $36.

## Как разложить ARPDAU на компоненты

```
ARPDAU = (Paying Users / DAU) × (ARPPU per day)
       = Conversion Rate × Avg payment frequency × Avg payment size
```

Раскладывая, видишь рычаги:
- **Conversion**: % DAU кто хоть раз заплатил
- **Frequency**: how often paying users pay  
- **Size**: average transaction amount

## 4 рычага роста ARPDAU

### 1. IAP (in-app purchases) — основной для F2P
- **Soft currency** покупки (gems, gold)
- **Cosmetic items** — скины, эмоции (high-margin, no balance impact)
- **Power-ups** — boost, energy refills
- **Battle Pass** — seasonal subscription model (растёт frequency)

Industry-leader: **Battle Pass конвертирует +30% не-paying users → paying.** Самый высокий impact на conversion rate.

### 2. Ad monetization — для широкой аудитории
- **Rewarded video** — оптимально (high opt-in)
- **Interstitial** между уровнями (annoying но high RPM)
- **Banner** — outdated, low yield
- **Playable ads** — best for hyper-casual

Industry standard ad eCPM: $5-15 для US, $2-5 для emerging markets.

### 3. Subscriptions
**Pass / VIP / Premium tier**:
- Stable monthly revenue (recurring)
- 2-3× ARPU normal users
- Локальная норма 5-10% DAU subscribed

### 4. Whales optimization
В F2P **2% paying users** generate **70% revenue**. Эти whales — твой revenue.
- VIP-program с perks
- Personal account managers (для top-100 spenders)
- Limited editions / exclusive offers
- Faster customer support

## ARPDAU growth — что НЕ работает

❌ **Pay-to-win mechanics** — кратковременный +30% ARPDAU, через 3-6 мес массовый churn casual игроков → DAU падает на -50%, итого ARPDAU остаётся, но Net Revenue падает.

❌ **Aggressive ads** — interstitial каждые 30 сек = retention crash.

❌ **Раздражающие pop-up offers** — каждый минут = churn risk.

❌ **Geographically uniform pricing** — same price $0.99 в US и Indonesia. В emerging markets local pricing essential.

## Real-world ARPDAU examples

| Игра | Жанр | ARPDAU (2024 est) | DAU |
|------|------|-------------------|-----|
| **Honor of Kings** | MOBA | $0.45 | 100M |
| **Genshin Impact** | RPG | $1.20 | 60M |
| **Clash Royale** | Strategy | $0.30 | 25M |
| **Subway Surfers** | Hyper-casual | $0.05 | 50M |
| **Candy Crush** | Match-3 | $0.15 | 75M |

Top revenue игры — **не самые высокие ARPDAU**, а highest **(ARPDAU × DAU)**. Volume × monetization > только monetization.

## Связь с другими метриками

| Метрика | Связь |
|---------|-------|
| **DAU** | Знаменатель формулы |
| **Retention** | High retention → longer lifespan → higher LTV at same ARPDAU |
| **ARPU** | Monthly equivalent ARPDAU × 30 |
| **Conversion Rate** | Free-to-paying conversion = главный component ARPDAU |

## Когда ARPDAU ВВОДИТ В ЗАБЛУЖДЕНИЕ

1. **Cohort skew** — если DAU drops но whales stay → ARPDAU растёт хотя бизнес умирает
2. **Seasonal events** — Christmas event дабл ARPDAU на 2 недели, потом normal
3. **Pricing experiments** — sub-cohort tests искажают average
4. **Currency** — игры работают глобально, USD-reported ARPDAU дрейфует от FX

## Итог

ARPDAU — это **главная мобильная метрика** для F2P-игр. Знай свою. Сравни с benchmark в твоём жанре. Если ниже — поработай над monetization mix (IAP/Ads/Subs). Top tier ARPDAU в category = ~10% всех публикуют игры, но они занимают 50%+ category revenue.

**Считай свой ARPDAU ниже** + жанровый benchmark.

---

### Дополнительные ресурсы

- [/dau](/dau) — DAU calculator
- [/arpu](/arpu) — ARPU (monthly equivalent)
- [/ltv](/ltv) — LTV (ARPDAU × lifespan)
- [/retention](/retention) — Retention (mobile)
- [AppMagic / Sensor Tower](https://appmagic.rocks) — ARPDAU benchmarks
