---
title: 10 метрик которые product-менеджер должен трекать в 2026
description: Какие 10 метрик должен знать наизусть каждый PM в B2B SaaS и B2C — от Activation до NRR. С формулами, бенчмарками и интерактивными калькуляторами.
date: 2026-05-07
keywords: product manager метрики, pm метрики, saas метрики 2026, activation, retention, nrr
---

# 10 метрик которые product-менеджер должен трекать в 2026

В 2024 ICONIQ Capital опубликовал opener-report «Top 10 Metrics PMs Track in High-Growth SaaS». Я сравнил с собственным опытом + с тем, что чаще всего вижу в pitch decks. Вот сжатый list.

Каждая метрика — с прямой ссылкой на интерактивный калькулятор.

## 1. [Activation Rate](/activation)

**Что:** Процент новых юзеров, дошедших до Aha-моменту.

**Формула:** Активированные / Все новые × 100%

**Бенчмарк:** >30% — норма, >40% — для SaaS, >50% — exceptional

**Почему критично:** 80% future churn определяется первой неделей. Activation — leading indicator всего downstream.

**Как улучшить:** Onboarding-флоу, product tours, success-driven email-кампания первые 7 дней.

## 2. [Retention](/retention) / [Churn](/churn)

**Что:** Сколько юзеров вернулись через N дней (D1, D7, D30, M1, M3, M12).

**Формула:** Активные на конец / Активные на начало × 100%

**Бенчмарки:**
- B2B SaaS: D30 retention >70%, Annual churn <10% = top decile
- Mobile B2C: D1 >25%, D7 >12%, D30 >5%
- Consumer SaaS: M1 >50%, M3 >40%, M12 >25%

**Почему критично:** Бизнес без retention — это «leaky bucket». Любой growth gets washed out.

## 3. [LTV : CAC](/ltv_cac)

**Что:** Сколько долларов lifetime-выручки приходится на каждый доллар привлечения.

**Бенчмарк:** ≥3 — здоровая unit-экономика, ≥5 — отлично

**Почему критично:** Базовое условие масштабируемости. Без healthy LTV:CAC любой growth = ускорение к банкротству.

См. отдельный пост: [LTV vs CAC — пошаговый расчёт](/blog/ltv-cac-unit-economics).

## 4. [NRR (Net Revenue Retention)](/nrr)

**Что:** Какой % выручки удержали + апсейлам у existing-клиентов через 12 мес.

**Формула:** (Start MRR + Expansion − Churn) / Start MRR × 100%

**Бенчмарк:**
- SaaS B2B: >100% — норма, >115% — отлично, >130% — top decile (Snowflake, Datadog)
- PLG B2B: >110% baseline

**Почему критично:** NRR > 100% = компания растёт даже без новых клиентов. Это **самый сильный** indicator product-market fit.

## 5. [MRR Growth Rate](/mrrGrowthRate)

**Что:** Месячный темп роста месячной recurring выручки (MoM).

**Бенчмарк:**
- Seed: 15-20% MoM
- Series A: 10-15% MoM
- Series B+: 5-10% MoM
- **YC standard: 5-7% MoM минимум** (Paul Graham)

**Почему критично:** Это main metric у YC office hours. Все остальные метрики важны, но MoM-growth — это пульс компании.

## 6. [Burn Multiple](/burnMultiple)

**Что:** Net Burn / Net New ARR (David Sacks).

**Бенчмарк:** <1.5× для Series A/B, top tier <1.0×

**Почему критично:** В 2026 главный VC-сигнал капитальной эффективности.

См. отдельный пост: [Burn Multiple — главная SaaS-метрика 2026](/blog/burn-multiple-saas-2026).

## 7. [Time to Value (TtV)](/timeToValue)

**Что:** Медианное время от регистрации до первого Aha-момента.

**Бенчмарк:**
- PLG <1 день
- SMB SaaS 1-7 дней
- Enterprise SaaS 1-14 дней

**Почему критично:** Долгая TtV убивает Activation и драматически повышает Churn. Каждый час сокращения TtV = улучшение downstream метрик.

**Как улучшить:** Tutorial-mode, sample data preloaded, в onboarding-emails — single CTA "Try X in 30 seconds".

## 8. [Stickiness (DAU/MAU)](/stickiness)

**Что:** Какая часть месячной аудитории возвращается ежедневно.

**Формула:** DAU / MAU × 100%

**Бенчмарк:**
- B2B SaaS: >20%
- Consumer apps: >50% (Instagram, TikTok-уровень)
- Office tools (Slack, Notion): >70% in active workspaces

**Почему критично:** Engaged users = retained users. Если Stickiness стагнирует — продукт становится "occasionally useful" вместо "daily essential".

## 9. [Engagement Rate](/engagementRate)

**Что:** Interactions per session или per active user. Зависит от продукта:
- B2B: actions per workspace per week
- Social: likes/comments/shares per impression
- E-com: pages per session, cart additions per session

**Бенчмарк:** контекстный, отслеживай trend (улучшается ли когорта-к-когорте).

**Почему критично:** Раннее warning sign decline. Падает Engagement → через 2-3 мес упадёт Retention → ещё через 1-2 мес упадёт Revenue.

## 10. [NPS (Net Promoter Score)](/nps)

**Что:** % Промоутеров (9-10) − % Детракторов (0-6).

**Бенчмарк:**
- 0-30: ОК, есть куда расти
- 30-50: хорошо
- 50-70: отлично (Slack, Netflix)
- >70: world-class (Apple, Tesla)

**Почему критично:** Качественный сигнал. Не cause-effect, но лучший predictor of future word-of-mouth growth + Customer Churn (low NPS = early Churn warning).

## Bonus: Sequence важна

Эти метрики связаны причинно-следственной цепочкой:

```
Time to Value ↓
  → Activation Rate ↑
    → Retention ↑
      → NRR ↑, Churn ↓
        → LTV ↑
          → LTV:CAC ↑
            → MRR Growth ↑
              → Burn Multiple ↓
```

Не пытайся оптимизировать всё параллельно. Найди bottleneck в этой цепочке — и фиксь там. Обычно проблема в **первых трёх** (TtV, Activation, Retention).

## Как использовать

1. Раз в неделю — посчитай **все 10 метрик** для своего продукта
2. Сравни с бенчмарками
3. Найди **одну метрику ниже бенчмарка** — фиксь её
4. Через месяц — проверь динамику

Калькуляторы на metricstree автоматически показывают бенчмарк рядом с твоим результатом → instant сравнение.

## Итог

Метрик в SaaS-мире — десятки. Эти 10 — **базовый kit любого PM** в B2B SaaS или B2C-продукте. Знай формулы наизусть, отслеживай еженедельно, и ты будешь видеть проблемы за 2-3 месяца до того как они станут видны в revenue.

**Считай свои на [metricstree.vercel.app](/)** — все 48 метрик, free, no signup.

---

### Дополнительные ресурсы

- [ICONIQ Capital — Top 10 PM Metrics](https://www.iconiqcapital.com)
- [/blog/burn-multiple-saas-2026](/blog/burn-multiple-saas-2026) — Burn Multiple подробно
- [/blog/rule-of-40-saas](/blog/rule-of-40-saas) — Rule of 40 подробно
- [/blog/ltv-cac-unit-economics](/blog/ltv-cac-unit-economics) — LTV vs CAC подробно
