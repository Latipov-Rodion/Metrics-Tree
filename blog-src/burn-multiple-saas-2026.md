---
title: Burn Multiple — главная метрика SaaS-инвестора в 2026
description: Что такое Burn Multiple от David Sacks, как считать, какие нормы для seed/Series A/B+, и почему она вытеснила Magic Number из VC-пайплайнов после ZIRP-эпохи.
date: 2026-05-17
keywords: burn multiple, david sacks, saas метрики, capital efficiency, формула burn multiple
embed: burnMultiple
---

# Burn Multiple — главная метрика SaaS-инвестора в 2026

В 2020 году David Sacks (Craft Ventures, бывший COO PayPal) опубликовал короткое эссе, которое перевернуло SaaS-индустрию. Он предложил простую формулу:

> **Burn Multiple = Net Burn / Net New ARR**

Сколько долларов компания сжигает, чтобы сгенерировать $1 нового годового дохода.

Это убрало все маркетинговые иллюзии. Не важно сколько у тебя growth — важно **с какой эффективностью** ты этот growth покупаешь.

## Почему именно сейчас Burn Multiple важен как никогда

До 2022 года в эпоху ZIRP (zero interest rate policy) венчурные деньги стоили почти ноль. Фонды раздавали capital компаниям с Burn Multiple 5x, 8x, иногда 15x — лишь бы был growth. «Grow at all costs» был mantra.

Сейчас всё изменилось. Фонды смотрят на капитальную эффективность как на гигиену:

| Период | Acceptable Burn Multiple для Series A |
|--------|---------------------------------------|
| 2019–2021 | до 3-5× |
| 2022–2023 (correction) | до 2× |
| 2024–2026 | **<1.5×** — иначе сложно поднимать round |

## Формула в деталях

**Net Burn** = Cash расходы − Cash доходы за период (обычно квартал).

**Net New ARR** = New ARR + Expansion ARR − Churn ARR − Contraction ARR.

Считается обычно за квартал, потом нормализуется. Пример:
- Net Burn за Q1: $500,000
- Net New ARR за Q1: $600,000
- Burn Multiple = 500 / 600 = **0.83×** → отлично

## Бенчмарки David Sacks

| Burn Multiple | Оценка |
|---------------|--------|
| <1×           | Amazing (PayPal-уровень) |
| 1–1.5×        | Great |
| 1.5–2×        | Good |
| 2–3×          | Suspect |
| >3×           | Bad — компания сжигает капитал неэффективно |

Top SaaS-компании (Snowflake, Datadog, Crowdstrike, Cloudflare) на стадии publicly-traded growth держат Burn Multiple **0.5–1.2×**.

## Чем Burn Multiple лучше Magic Number?

**Magic Number** (Scale Venture Partners) считает эффективность только Sales & Marketing:

```
Magic Number = (Net New ARR × 4) / S&M расходы за квартал
```

Хорошо для оптимизации воронки. Но не покрывает R&D, G&A, и operations — то есть основную часть расходов SaaS-компании на ранней стадии.

**Burn Multiple покрывает всё.** Это финальный показатель эффективности компании целиком. Magic Number оптимизирует часть, Burn Multiple — оптимизирует целое.

В типичном SaaS-бизнесе:
- 40% Burn = S&M
- 35% = R&D
- 15% = G&A
- 10% = COGS (если не in gross margin)

Magic Number видит 40%. Burn Multiple — 100%.

## 4 рычага улучшения Burn Multiple

### 1. Sales & Marketing efficiency
Уменьши **CAC**:
- Органические каналы (SEO, content, referrals) вместо paid
- ICP-фокус — не разбрасывайся на segments с плохой conversion
- Self-serve onboarding для SMB (убирает sales-затраты)
- Optimize CR в воронке — каждый +10% даёт мультипликативный эффект

### 2. Expansion ARR (NRR-driven)
Каждый existing-customer-доллар дешевле нового:
- Seat-based или usage-based pricing
- Tiered features → natural upgrade-paths
- Account-management для high-ARR клиентов
- Customer health-scoring для proactive expansion

### 3. R&D эффективность
- Меньше параллельных streams — фокус на 1-2 ICPs
- AI/no-code для PRD/QA автоматизации
- Senior-heavy команда (3 senior > 6 mid в SaaS)

### 4. Churn reduction
Каждый процент churn = удвоение CAC для compensation:
- Onboarding — первая неделя определяет 80% будущего churn
- Annual prepay контракты (mathematically снижает churn ×12)
- Health-scoring + proactive outreach

## Real-world пример

**SaaS-стартап с показателями:**
- ARR: $2M, MoM growth 8%
- Net Burn: $250k/мес (=$750k/квартал)
- Net New ARR за квартал: $500k

**Burn Multiple** = 750 / 500 = **1.5×** → Good, но есть куда расти.

**Сценарий «снизить до 1.0×»:**
- Снизить burn на $250k/квартал = -33% (хедкаунт cuts? Outsource ops?)
- ИЛИ ускорить ARR-growth до $750k/квартал = +50% (новый канал? Better pricing?)
- ИЛИ комбинация: -15% burn + +20% ARR = достигаем 1.05×

Используй калькулятор ниже чтобы прикинуть свой сценарий.

## Когда Burn Multiple ВВОДИТ В ЗАБЛУЖДЕНИЕ

Метрика не панацея. Игнорируй её или интерпретируй осторожно если:

1. **Pre-revenue стадия** — знаменатель = 0, метрика бесконечна
2. **Один большой контракт исказил квартал** — нормализуй на rolling 4 quarters
3. **Инвестируешь в долгосрочный продукт** (deep tech, hardware-software) — короткий-term Burn Multiple плохой по дизайну
4. **Сезонные бизнесы** — Q4 e-commerce vs Q1 SaaS

## Итог

Если ты SaaS-фаундер в 2026 — Burn Multiple это та цифра, которую инвестор спросит **первой** в next round meeting. Знай свою, оптимизируй её до <1.5× по quarter, и фандрейзинг станет на порядок проще.

**Считай свой Burn Multiple ниже** — встроенный калькулятор покажет результат, бенчмарк, и интерпретацию мгновенно.

---

### Дополнительные ресурсы

- [David Sacks original essay](https://sacks.substack.com/) — оригинал эссе
- [Bessemer 'State of the Cloud' annual report](https://www.bvp.com/atlas/state-of-the-cloud) — бенчмарки public SaaS
- [/ruleOf40](/ruleOf40) — Rule of 40 калькулятор, complementary метрика
- [/magicNumber](/magicNumber) — Magic Number, для оптимизации S&M отдельно
