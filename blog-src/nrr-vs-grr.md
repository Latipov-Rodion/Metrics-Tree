---
title: NRR vs GRR — что отличает $10B от $100M SaaS-компании
description: Net Revenue Retention vs Gross Revenue Retention — формулы, бенчмарки top decile (>130%), и почему NRR — самый сильный indicator product-market fit.
date: 2026-04-27
keywords: nrr, grr, net revenue retention, gross revenue retention, формула NRR
embed: nrr
---

# NRR vs GRR — что отличает $10B от $100M SaaS-компании

Из всех SaaS-метрик именно **NRR** (Net Revenue Retention) определяет, станет ли твоя компания unicorn или останется в средней лиге. Snowflake торгуется с premium-multiples потому что у них NRR ~158%. Datadog — 130%. У среднего public SaaS — 105-110%.

Это не корреляция. Это причина.

## Формулы

**GRR (Gross Revenue Retention):**
```
GRR = (Start MRR − Churn MRR − Contraction MRR) / Start MRR × 100%
```
Только потери. Не учитывает expansion. Всегда ≤100%.

**NRR (Net Revenue Retention):**
```
NRR = (Start MRR + Expansion MRR − Churn MRR − Contraction MRR) / Start MRR × 100%
```
С учётом expansion. Может быть >100%.

## Бенчмарки

| Tier | NRR | GRR |
|------|-----|-----|
| Top decile public SaaS | **>130%** | >95% |
| Top quartile | 115-130% | 92-95% |
| Median public SaaS | 105-115% | 88-92% |
| Bad | <100% | <85% |
| Catastrophe | <90% | <75% |

**NRR > 100% означает**: твоя компания будет расти даже если не получит ни одного нового клиента. Existing-customers expansion > losses.

Это **святой грааль SaaS**. Достигаешь — multiples × 2-3.

## Пример расчёта

**SaaS-стартап, начало года ARR $5M:**
- Expansion ARR за год: $800k (upgrade'ы, seat-growth)
- Churn ARR: $300k (10 клиентов ушли)
- Contraction ARR: $100k (5 downgrade'ов)

**NRR** = (5000 + 800 − 300 − 100) / 5000 × 100% = 5400 / 5000 = **108%** → healthy

**GRR** = (5000 − 300 − 100) / 5000 × 100% = 4600 / 5000 = **92%** → ok

NRR − GRR = 108 − 92 = 16 percentage points expansion. Это лучше чем 10pp, хуже чем 25pp.

## Почему top SaaS имеют NRR 130-150%

Три механизма:

### 1. Seat-based pricing с growing customers
Snowflake billed per data warehouse compute hour. Клиент start small ($50k/year), за 3 года растёт до $500k. 10× expansion на одного клиента = огромный NRR.

### 2. Tiered features с natural upgrade-path
HubSpot: Starter → Professional → Enterprise. Каждый tier 2-3× по цене. 30% клиентов upgrade в течение 18 мес = NRR +25-30pp.

### 3. Cross-sell additional products
Datadog start с Infrastructure Monitoring. Потом APM, Logs, Security. Каждый дополнительный product на average existing customer = +20% к ARR per customer.

## Чем GRR полезен отдельно от NRR

**GRR — это здоровье продукта**. NRR — здоровье account-команды.

- GRR <90% — продукт не нравится. Фикс product, не sales.
- GRR >95% но NRR <105% — продукт ok, но нет expansion-механики. Фикс pricing.
- GRR <85% — у тебя нет PMF. Stop scaling.

## Как улучшить NRR — 5 рычагов

### 1. Customer Success function
Hire CSM на каждые $500k-1M ARR. Их единственный KPI — NRR этих accounts. Proactive QBRs, health monitoring, expansion identification.

### 2. Seat-based / usage-based pricing
Если у тебя flat per-tenant pricing — переходи на growth-friendly модель. Пример: Slack ($8/user/mo) растёт с командой клиента бесплатно.

### 3. Health scoring
Track 5-10 product usage signals → красная зона → CSM intervention за 30 дней до churn.

### 4. Annual prepay incentives
Annual contract (vs monthly) даёт:
- Mathematically снижает Churn ×12
- Cash forward
- Locks customer на год — больше времени на expansion

### 5. Multi-product strategy
Один продукт = ceiling на NRR ~120% (только pricing-tier expansion). Multi-product = NRR 140%+.

## Bessemer метрика "Net Magic Number"

Менее известная, но мощная:

> **Net Magic Number = (Net New ARR − Churn ARR) × 4 / S&M расходы**

Если ты тратишь $1 S&M и через год имеешь $1.2 New ARR, но потерял $0.5 на Churn → реальный gain $0.7. Net Magic Number = 0.7. Хуже чем gross Magic Number = 1.2.

Sequoia/Bessemer всё чаще смотрят Net Magic Number вместо Gross.

## Когда NRR ВВОДИТ В ЗАБЛУЖДЕНИЕ

1. **Slow-burn churn модели** — Annual contracts. Customer signs $100k contract, рассчитывает не renew, но это видно только через 12 мес. NRR оптимистична до моменту non-renewal.

2. **Large-account skew** — один enterprise customer 30% ARR. Если он 2× — NRR красивый. Если уходит — NRR летит вниз. Repotency.

3. **Pricing increases** — если ты поднял prices на +20%, NRR будет 120%+ один год, но это не «expansion» это inflation.

4. **Currency fluctuations** — для multi-currency бизнесов USD-reported NRR ползёт от FX.

## Итог

NRR — это **самая важная single metric** для SaaS оценки. Знай её monthly. Если ниже 100% — у тебя fundamentally сломанная expansion-стратегия. Если 110-115% — норма, продолжай. Если >130% — ты в top decile, и инвесторы будут охотиться за тобой.

**Считай свой NRR ниже** — встроенный калькулятор + benchmark + Goal mode (что нужно достичь для target NRR).

---

### Дополнительные ресурсы

- [/grr](/grr) — GRR калькулятор отдельно
- [/mrr](/mrr) — MRR база для NRR
- [/quickRatio](/quickRatio) — Quick Ratio, related metric
- [/blog/quick-ratio-saas](/blog/quick-ratio-saas) — Quick Ratio deep dive
- [Bessemer State of the Cloud](https://www.bvp.com/atlas/state-of-the-cloud) — annual NRR benchmarks
