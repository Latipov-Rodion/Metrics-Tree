---
title: Rule of 40 — почему 40% это магия для SaaS-компаний
description: Подробный разбор Rule of 40 (Brad Feld, 2015) — как считать, почему именно 40%, какая норма для public vs private SaaS в 2026, и как достичь top decile (>60%).
date: 2026-05-14
keywords: rule of 40, saas health, brad feld, growth + margin, метрика saas
embed: ruleOf40
---

# Rule of 40 — почему 40% это магия для SaaS-компаний

В 2015 году Brad Feld (Foundry Group) опубликовал короткий пост, который определил способ оценивать здоровье публичных SaaS-компаний на следующее десятилетие. Формула проста:

> **Темп роста выручки YoY (%) + Маржа (%) ≥ 40%**

Если сумма ≥ 40 — компания «healthy». Если выше 60 — top decile. Ниже 40 — нужно либо ускоряться, либо становиться более прибыльной.

## Почему именно 40%?

Brad Feld не вывел эту цифру математически — это эмпирическое наблюдение из анализа публичных SaaS. Он заметил, что компании с **R40 ≥ 40** торгуются с **премией к multiples** относительно компаний с R40 < 40.

После 2015 года десятки фондов (OpenView, Bessemer, ICONIQ) verified этот pattern на разных датасетах. Стабильно работает:
- Слишком много growth без margin = убытки, неустойчиво
- Слишком много margin без growth = стагнация, проигрыш конкурентам
- 40% — sweet spot между этими двумя крайностями

## Какую маржу использовать?

3 варианта:

| Margin type | Когда использовать |
|-------------|--------------------|
| **EBITDA margin** | Самый часто используемый, для private SaaS |
| **Operating margin** | Близко к EBITDA, но включает депрециацию |
| **FCF margin** | Public SaaS отчитывают это, самый консервативный |

Главное — последовательно использовать **одну** в всех периодах. Не переключайся.

## Бенчмарки 2026

После ZIRP-correction Rule of 40 стал сложнее достижим. Public SaaS-medians:

| Tier | R40 | Примеры (public SaaS) |
|------|-----|----------------------|
| Top decile | >60% | Adobe, ServiceNow, CrowdStrike, Cloudflare |
| Top quartile | 40-60% | Datadog, Snowflake (post-IPO) |
| Median public SaaS | 25-35% | Большинство мiddle-tier |
| Bottom quartile | <20% | Compress сейчас или прыгай в profit |

**Private growth-stage SaaS (Series B-D):**
- 40-55% — лучший mix
- Серьёзно выше 60% — обычно недоинвестируют в рост (могут расти быстрее, если бы вложились)

## Как считать на примере

**SaaS-стартап:**
- ARR начала года: $5M
- ARR конца года: $7M → growth = 40% YoY
- EBITDA: -$500k (-7% margin)

R40 = 40 + (-7) = **33** → ниже healthy threshold

Чтобы достичь R40 = 40:
- Option A: ускорить рост с 40% → 47% YoY
- Option B: улучшить margin с -7% → 0% (выйти на break-even)
- Option C: комбинация — рост 43% + margin -3% = 40 ✓

Используй калькулятор ниже чтобы прикинуть свой сценарий.

## Когда Rule of 40 НЕ работает

Метрика для **public-ready SaaS** на стадии scale. Не применяй для:

1. **Pre-product-market-fit** — рост по definition нестабильный, margin = wild
2. **Hardware-heavy бизнесы** — capex искажает margin
3. **Marketplace-модели** — take-rate важнее growth+margin
4. **Deep tech, biotech** — длинные циклы R&D делают margin nonsense на ранней стадии

## Почему top decile = >60%?

Public SaaS-companies в верхнем deciles обычно достигают R40 >60% **не за счёт жертвования growth**, а за счёт операционного рычага:

- **Маржа улучшается с масштабом** — больше выручки → лучше gross margin (S&M scales sublinearly)
- **Брендовая известность снижает CAC** → Sales & Marketing % падает
- **Self-serve onboarding убирает CSM-затраты** на SMB-сегменте
- **R&D переиспользуется** на новые продукты (Datadog: 1 платформа → 20+ модулей)

То есть R40 >60% = доказательство product-market fit + operational excellence + recurring expansion economics.

## 3 рычага улучшения R40

### 1. Pricing review
Поднять цену на 10% обычно даёт +5-8% к gross margin без потери клиентов (если value-prop существует). Это самый дешёвый способ улучшить R40 на 5-8 пунктов.

### 2. Gross margin
Аудит COGS:
- Hosting (AWS optimize, reserved instances)
- Customer support (deflect через docs, AI)
- Payment processing (negotiate с Stripe на scale)

Каждый +5% gross margin = +5 пунктов к R40.

### 3. Expansion revenue
Уже existing-customer revenue имеет CAC = ~$0:
- Seat-based / usage-based pricing
- Tiered features → natural upgrade path
- Account-based marketing для high-ARR

NRR >115% автоматом даёт ~10-15% prograss growth «бесплатно» (без новых клиентов).

## Real-world примеры R40

| Компания | Year | Growth | Margin | R40 |
|----------|------|--------|--------|-----|
| Snowflake | 2024 | 35% | 8% (FCF) | 43 |
| Datadog | 2024 | 27% | 30% | **57** |
| HubSpot | 2024 | 23% | 15% | 38 |
| Salesforce | 2024 | 11% | 32% | 43 |
| Shopify | 2024 | 26% | 19% | 45 |

Заметь — даже мега-cap-ы редко выше 60%. Top decile — это исключение, не правило.

## Итог

Rule of 40 — это **простая метрика для board-room и investor-pitch**. Не единственная, не magic-number, но **универсально понятная**. Знай свою, отслеживай поквартально, объясняй траекторию (улучшается ли каждый Q).

**Считай свой R40 ниже** — посмотри на интерактивном калькуляторе при разных growth + margin scenarios.

---

### Дополнительные ресурсы

- [Brad Feld original 2015 post](https://feld.com/archives/2015/02/rule-40-healthy-saas-company/)
- [Bessemer State of the Cloud 2024](https://www.bvp.com/atlas/state-of-the-cloud)
- [/burnMultiple](/burnMultiple) — Burn Multiple, complementary метрика
- [/grossMargin](/grossMargin) — Gross Margin как один из inputs R40
- [/mrrGrowthRate](/mrrGrowthRate) — growth-half формулы
