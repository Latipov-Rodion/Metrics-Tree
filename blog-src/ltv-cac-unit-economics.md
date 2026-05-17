---
title: LTV vs CAC — пошаговый расчёт unit-экономики стартапа
description: Как правильно посчитать LTV и CAC, какое соотношение норма (3:1, 5:1), и почему даже healthy LTV:CAC не значит здоровый бизнес без правильного payback.
date: 2026-05-10
keywords: ltv, cac, ltv:cac, unit economics, расчёт unit экономики стартапа
embed: ltv_cac
---

# LTV vs CAC — пошаговый расчёт unit-экономики стартапа

LTV:CAC — это, наверное, **самая часто называемая и самая часто неправильно считаемая** метрика SaaS-мира. Я видел стартапы, которые рапортуют LTV:CAC = 8 на pitch deck и не могут объяснить как они до этой цифры дошли.

Давай разберём пошагово, как правильно.

## 1. LTV (Lifetime Value) — что это и как считать

LTV — это **сколько дохода клиент принесёт за всё время своей жизни как клиента**.

Простая формула для **B2C / e-commerce:**

```
LTV = AOV × Частота покупок в год × Срок жизни клиента (лет)
```

Пример:
- AOV = $250
- 4 покупки в год
- Срок жизни = 3 года

LTV = 250 × 4 × 3 = **$3 000**

Формула для **B2B SaaS:**

```
LTV = ARPA / Monthly Churn Rate
```

Где ARPA = Average Revenue Per Account (=MRR на клиента). Пример:
- ARPA = $200/мес
- Monthly Churn = 2%

LTV = 200 / 0.02 = **$10 000**

**Подвох 1:** не путай Customer Churn и Revenue Churn. Если у тебя Customer Churn = 5% но Revenue Churn = 2% (т.е. уходят малые клиенты, а большие остаются + апселы) — используй Revenue Churn для LTV.

**Подвох 2:** если у тебя короткий history (<24 мес), LTV — это предсказание, а не факт. Будь скромным: умножай прогнозный LTV на 0.7-0.8 для conservative estimate.

## 2. CAC (Customer Acquisition Cost) — что включать

**CAC** = (Маркетинг + Sales затраты) / Количество новых платящих клиентов за период.

В Marketing + Sales включай **всё**:
- Реклама (Facebook, Google Ads, LinkedIn)
- Зарплаты sales команды и маркетинга
- Tools (CRM, marketing automation, attribution)
- Contractor fees, consultants
- Контент, дизайн, видеопродакшн

**Подвох:** Blended CAC vs Paid CAC.

| Тип | Что включает | Когда показывать |
|-----|--------------|------------------|
| Blended CAC | Все затраты / Все новые клиенты (включая органику) | Investor pitch (выглядит лучше) |
| Paid CAC | Только paid-каналы / Только paid-клиенты | Operational decisions (реальная ситуация) |

**Blended всегда ниже Paid.** Если используешь Blended в pitch — будь готов объяснить и Paid тоже. Топовые VC требуют оба.

## 3. LTV:CAC — какое соотношение норма

| LTV:CAC | Что это значит |
|---------|----------------|
| **<1** | Каждый новый клиент — убыток. Бизнес-модель сломана |
| **1-3** | Ниже нормы. Есть только если рост приоритетнее unit-экономики (early stage) |
| **≥3** | Здоровая SaaS unit-экономика |
| **>5** | Отлично, но возможно недоинвестируешь в маркетинг — конкуренты захватят рынок |
| **>8-10** | Точно недоинвестируешь. Нанимай sales/marketing срочно |

**Магическая цифра 3** была введена David Skok ([forentrepreneurs.com](https://www.forentrepreneurs.com/)) в 2010. Эмпирически подтверждена тысячами SaaS-кейсов.

Почему **3**, а не 2 или 4? Потому что:
- 1× — break-even (не учитывая COGS, support, churn — на бумаге)
- 2× — break-even после реальных costs
- 3× — buffer для непредсказуемых churn / margin compression
- ≥3 = sustainable growth

## 4. **CAC Payback Period** — почему LTV:CAC недостаточно

LTV:CAC = 5 звучит отлично. Но если payback = 36 месяцев — у тебя cash crunch до того, как клиент окупится.

```
CAC Payback = CAC / (MRR на клиента × Gross Margin)
```

Бенчмарки:
- B2B SaaS SMB: <12 мес
- B2B SaaS Mid-market: 12-18 мес
- B2B SaaS Enterprise: 18-24 мес
- B2C: <6 мес обычно

**Real-world пример:**
- LTV = $10 000
- CAC = $2 000 → LTV:CAC = 5× ✓
- MRR на клиента = $200
- Gross Margin = 80%

Payback = 2000 / (200 × 0.80) = 2000 / 160 = **12.5 мес**

Healthy SaaS. Если payback >24 мес — даже при LTV:CAC = 5 cash flow проблематичный.

## 5. Goal mode — обратный расчёт

Часто полезный вопрос: «**При target LTV:CAC = 3 и моём LTV $5000, какой максимум CAC я могу позволить?**»

Ответ: $5000 / 3 = **$1 667**

Если фактический CAC выше — нужно либо снижать его, либо рос-LTV.

Калькулятор ниже умеет считать обратно — задай target LTV:CAC, и он покажет required CAC при твоём LTV.

## 6. Как улучшить LTV:CAC

### Снизить CAC
1. **Органические каналы** — SEO, content, sharing, referrals. Это снижает blended CAC при scale
2. **Referral программы** — referral CAC обычно 30-50% от paid CAC
3. **Conversion optimization** — каждый +10% к CR воронки = -10% к CAC
4. **Брендовая известность** — бренд снижает CPC и CPM в paid
5. **Self-serve onboarding для SMB** — убирает sales-затраты

### Повысить LTV
1. **Снизить Churn** — onboarding, customer success, health scoring
2. **Повысить AOV / ARPA** — апселы, бандлы, premium tiers
3. **Увеличить frequency** — email-flows, retention-кампании
4. **Long contracts** — annual prepay снижает churn ×12
5. **Expansion revenue** — NRR-driven (см. отдельный пост)

## 7. Когда LTV:CAC ВВОДИТ в заблуждение

- **Слишком короткий history** — LTV считается на 12 мес data, но клиенты могут churn-ed после 18 мес
- **Margin не учтён** — gross LTV vs net LTV (после COGS)
- **Discount rate** — будущий $1 ценнее текущего; для long-tail LTV применяй NPV
- **Cohort skew** — один большой клиент искажает all-clients average

## Real-world: типичные ошибки

**Ошибка 1:** «У нас LTV:CAC = 8»
→ Спрашивай: blended или paid? Paid обычно намного ниже.

**Ошибка 2:** «Мы экспоненциально растём, LTV:CAC не важна»
→ Важна. Без healthy LTV:CAC рост = ускорение к банкротству. (RIP Casper, MoviePass.)

**Ошибка 3:** «LTV:CAC = 12 — отлично!»
→ Скорее всего CAC занижен (не включена sales команда), либо LTV неправильно посчитан (без учёта churn).

## Итог

LTV:CAC — это **простая, но критическая** метрика. Считай оба: gross + paid CAC. Триангулируй с CAC Payback Period. Если LTV:CAC ≥3 И Payback <18 мес → у тебя healthy SaaS unit-экономика, можно масштабировать.

**Считай свой LTV:CAC ниже** — встроенный калькулятор покажет соотношение, бенчмарк, и обратный расчёт (target LTV:CAC → required CAC).

---

### Дополнительные ресурсы

- [/ltv](/ltv) — LTV калькулятор отдельно
- [/cac](/cac) — CAC калькулятор отдельно
- [/cacPayback](/cacPayback) — CAC Payback Period
- [David Skok original post on LTV:CAC](https://www.forentrepreneurs.com/saas-metrics-2/)
- [/burnMultiple](/burnMultiple) — Burn Multiple — макро-метрика капитальной эффективности
