# Social Media Posts — готовые к публикации

Все посты ниже — копируй-вставляй. Подстрой даты/числа/детали под себя.

---

## TWITTER / X — 5 готовых тредов

### Thread 1: «Зачем я построил MetricTree» (launch thread)

1/ Каждую неделю я гуглил одни и те же продуктовые формулы:
- Что такое Burn Multiple?
- LTV:CAC threshold для seed-стадии?
- Magic Number для SaaS?
- Quick Ratio (Mamoon Hamid)?

Десятки калькуляторов знают по 5 формул. Никто не знает все 52. 🧵

2/ Поэтому построил **MetricTree** — бесплатный open-source калькулятор 52 продуктовых метрик: https://metricstree.vercel.app/

Killer features:
🎯 Goal mode — обратный расчёт
💡 What-If слайдеры
📈 Forecast charts (6-24 мес)
🌐 3 языка (RU/EN/UZ)
🔗 Embed для блогов

3/ Уникальное:
✗ Profitwell — 6 калькуляторов за signup
✗ Baremetrics — $129/мес для дашборда
✗ Causal — полная фин-модель платформа
✓ MetricTree — $0 навсегда, 52 метрики, MIT open source

4/ Бенчмарки цитируют первоисточники:
- Burn Multiple ← David Sacks
- Quick Ratio ← Mamoon Hamid
- Rule of 40 ← Brad Feld
- T2D3 ← Stripe / Bessemer
- LTV:CAC = 3 ← David Skok

Никаких magic numbers без footprint.

5/ Bonus features:
🤖 Telegram bot: /ltv 2500 4 3
📥 CSV import: вставь числа, заполнит 50+ полей
🔀 Compare 2 metrics side-by-side
🎲 Auto-prefill: instant aha при заходе
🔗 Public API: GET /api/calc?metric=ltv

6/ Open source MIT: github.com/Latipov-Rodion/Metrics-Tree

Feedback in replies 🙏

PS: пишу 14 deep blog-постов по топ-метрикам — следующий завтра.

---

### Thread 2: «Burn Multiple — главная метрика SaaS 2026»

1/ В 2020 David Sacks выпустил эссе которое перевернуло SaaS-индустрию.

Одна формула: **Burn Multiple = Net Burn / Net New ARR**

В 2026 это первая метрика которую инвестор посчитает на back-of-envelope перед инвестицией. 🧵

2/ Почему именно сейчас Burn Multiple стал критичен:

2019-2021 (ZIRP эпоха): Burn Multiple 5-8x acceptable
2022-2023 (correction): max 2x
2024-2026: <1.5x иначе не закроешь round

Капитальная эффективность стала гигиеной, а не bonus.

3/ Bench:
<1× — Amazing (PayPal-tier)
1-1.5× — Great
1.5-2× — Good
2-3× — Suspect
>3× — Bad

Top public SaaS (Snowflake, Datadog) держат 0.5-1.2× на growth-стадии.

4/ Чем лучше Magic Number?

Magic Number мерит только S&M (40% бюджета).
Burn Multiple — всю компанию (S&M + R&D + G&A).

Magic Number оптимизирует часть, Burn Multiple — целое.

5/ 4 рычага улучшения:
1. CAC ↓ (органика, ICP-фокус)
2. Expansion ARR (seat-based pricing, account-management)
3. R&D эффективность (senior-heavy, AI tooling)
4. Churn reduction (onboarding, annual prepay)

6/ Считай свой Burn Multiple за 30 сек:
https://metricstree.vercel.app/burnMultiple

Deep post с примерами: https://metricstree.vercel.app/blog/burn-multiple-saas-2026

Открытый Sacks-frame для всех 🙏

---

### Thread 3: «LTV:CAC — самая часто неправильно считаемая метрика»

1/ Самая часто называемая SaaS-метрика — LTV:CAC.

Самая часто неправильно считаемая — тоже LTV:CAC.

Видел стартапы которые на pitch-deck'е показывают 8 и не могут объяснить как. 🧵

2/ Магическая цифра 3 (David Skok, 2010):
<1 — каждый клиент = убыток
1-3 — слабая экономика
≥3 — здоровая
>5 — отлично или недоинвестируете в growth

3/ Подвох #1: Blended vs Paid CAC.

Blended = все затраты / все клиенты (включая органику)
Paid = только paid-каналы / только paid-клиенты

Paid всегда ниже Blended на 30-50%. Если показываешь Blended — будь готов показать и Paid.

4/ Подвох #2: LTV — это PREDICTION, не факт.

Если у тебя 12 мес data — твой LTV это extrapolation. Умножай на 0.7-0.8 для conservative estimate.

5/ Подвох #3: CAC Payback важнее LTV:CAC для cash management.

LTV:CAC = 5 звучит здорово. Но если payback = 36 мес — у тебя cash crunch до того как клиент окупится.

VC сейчас смотрят CAC Payback ПЕРВЫМ.

6/ Considder both:
✓ LTV:CAC ≥ 3 (long-term unit economics)
✓ CAC Payback < 18 мес (short-term cash)

Если только одна — есть проблема, чинить её = priority.

7/ Считай оба + Goal mode (reverse-calc):
https://metricstree.vercel.app/ltv_cac
https://metricstree.vercel.app/cacPayback

Deep post: https://metricstree.vercel.app/blog/ltv-cac-unit-economics

---

### Thread 4: «MRR Growth Rate — почему YC требует 5-7%»

1/ В YC office hours есть один вопрос который Paul Graham повторяет каждый раз:

«What's your MoM growth rate?»

Если 5-7% — they listen. Меньше — следующий вопрос: «what changed?» 🧵

2/ Compound brutal:
5% MoM → 79% annual
10% MoM → 213% annual
15% MoM → 435% annual
20% MoM → 791% annual

Каждый +1pp MoM ≈ +50% annual at scale.

3/ Bench по стадиям:
Pre-PMF: variable
Seed (post-PMF): 15-20% MoM
Series A: 10-15%
Series B+: 5-10%
Public SaaS: 2-3% MoM (~30% YoY)

T2D3 (Stripe/Bessemer) = 3x, 3x, 2x, 2x, 2x за 5 лет = path to $100M ARR.

4/ 5 рычагов:
1. Channel-market fit (1 working channel > 5 mediocre)
2. Annual prepay → instant +5-15% MRR
3. Pricing review каждые 12 мес → +10-15% MRR
4. Expansion (NRR>115% → +10% growth «бесплатно»)
5. ICP focus → drop low-fit segments

5/ Slack '14: $0→$1M за 5 мес (~100% MoM)
Notion '18: $1M→$10M за 18 мес (~14% MoM)
Figma '17-18: $1M→$4M за 12 мес (~12% MoM)

Это outliers. Healthy = 10-15% MoM post-PMF.

6/ Считай свой:
https://metricstree.vercel.app/mrrGrowthRate

Deep: https://metricstree.vercel.app/blog/mrr-growth-rate-yc

---

### Thread 5: «Runway — когда фандрейзить в 2026»

1/ Самая важная single-number метрика для founder'а:

**Runway = Cash / Net Burn**

И в 2026 (post-ZIRP) timing fundraise стал критичнее чем когда-либо. 🧵

2/ Bench:
<3 мес — catastrophe, любой term sheet acceptable
3-6 мес — critical, non-negotiable terms
6-9 мес — high pressure, слабая позиция
9-12 мес — RIGHT TIME to start
12-18 мес — healthy norm seed/Series A
18-24 мес — strong, fundraise from strength

3/ Правило: на стол ставь ≥9 мес runway.

SaaS fundraise = 3-6 мес процесс.
Если runway <6 мес когда подписываешь term sheet — плохая позиция, инвесторы видят это и lowball'ят.

4/ 5 рычагов продления без external capital:
1. Hire freeze + selective layoffs (-30% burn realistic)
2. Annual prepay (+20-30% immediate cash)
3. Pricing +10-15% (revenue без новых customers)
4. Venture debt (+6-12 мес non-dilutive)
5. Bridge от existing investors

5/ Парадокс: >24 мес runway тоже плохо.
- Психологически расслабляешься
- Тратишь на nice-to-have
- Не учишься scrappy mindset

Top-tier SaaS намеренно sizing раунды к 18-24 мес.

6/ Считай runway сегодня:
https://metricstree.vercel.app/runway

Deep guide: https://metricstree.vercel.app/blog/runway-when-fundraise

---

## LINKEDIN — 5 long-form постов

### Post 1 (RU): Launch announcement

Каждую неделю я гуглил одни и те же формулы:
✗ Какая Burn Multiple норма для SaaS?
✗ LTV:CAC threshold для seed?
✗ Quick Ratio (Mamoon Hamid)?
✗ Rule of 40 break-even?

Десятки калькуляторов знают по 5 формул. Никто не знает все 52.

Поэтому собрал **MetricTree** — open-source калькулятор 52 продуктовых метрик: https://metricstree.vercel.app/

🎯 Goal mode (обратный расчёт): «хочу LTV:CAC = 3, какой max CAC?»
💡 What-if слайдеры — drag input → live-пересчёт
📈 Forecast charts на 6-24 мес
🔀 Compare 2 metrics side-by-side
📥 CSV import: вставь числа → fill дашборд
📦 5 шаблонов: Startup SaaS, Mature SaaS, E-com, Mobile, Media
🌐 RU / EN / UZ
🔗 Embed iframe для блогов
🤖 Telegram bot: /ltv 2500 4 3
🔓 Free навсегда, MIT-лицензия, no signup, no tracking

Бенчмарки с цитатами OpenView, Bessemer, David Sacks, Mamoon Hamid.

Сделал для себя — делюсь чтобы помочь.

Lemme know what's missing: https://metricstree.vercel.app/

---

### Post 2 (EN): Launch announcement

For 3 years I've been Googling the same product metric formulas every single week:
- What's a healthy SaaS Quick Ratio?
- What's the Burn Multiple threshold (David Sacks)?
- LTV:CAC for early-stage SaaS?

Got tired of it. Built **MetricTree** — free open-source calculator for 52 product metrics: https://metricstree.vercel.app/

What's different:
✓ 52 metrics in one place (vs Profitwell's 6 free)
✓ Goal mode (reverse calc): «I want LTV:CAC = 3, my LTV is $15k — what's max CAC?»
✓ Industry benchmarks with cited sources (OpenView, Bessemer, Sacks, Hamid, Bain)
✓ What-If sliders + Forecast charts (6-24 mo)
✓ Embed mode (iframe for Notion / Substack / WordPress)
✓ Public API for developers
✓ Telegram bot companion
✓ 3 languages (EN / RU / UZ), 4 currencies

Free forever. Open source MIT. No signup. No tracking.

Already shipped 14 deep blog posts on top metrics — Burn Multiple, Rule of 40, NRR, Quick Ratio, Sales Velocity, etc.

Would love feedback. What metric am I missing?

🌐 https://metricstree.vercel.app/

---

### Post 3 (RU): Burn Multiple deep-dive

В 2020 David Sacks выпустил эссе о метрике, которая в 2026 стала первой что считает SaaS-инвестор перед инвестицией:

**Burn Multiple = Net Burn / Net New ARR**

Сколько долларов сжигаем, чтобы сгенерировать $1 нового ARR.

Что изменилось с 2019:
2019-2021 (ZIRP) — Burn Multiple 5-8× acceptable
2022-2023 — макс 2×
2024-2026 — <1.5× иначе round не закроешь

Бенчмарки от Sacks:
<1× — Amazing (PayPal tier)
1-1.5× — Great
1.5-2× — Good
2-3× — Suspect
>3× — Bad

Top public SaaS — Snowflake, Datadog держат 0.5-1.2×.

4 рычага улучшения:
1. CAC ↓ — органика, ICP-фокус, self-serve onboarding
2. Expansion ARR — seat-based pricing, account management
3. R&D эффективность — senior-heavy, AI tooling
4. Churn reduction — annual prepay, customer success

Считай свой за 30 сек: https://metricstree.vercel.app/burnMultiple

Deep post (1500 слов): https://metricstree.vercel.app/blog/burn-multiple-saas-2026

#SaaS #Founders #Метрики #UnitEconomics

---

### Post 4 (EN): NRR explained

Of all SaaS metrics, **NRR (Net Revenue Retention)** determines if your company becomes a unicorn or stays mid-tier.

Snowflake trades at premium multiples because NRR ~158%.
Datadog — 130%.
Median public SaaS — 105-110%.

That's not correlation. That's causation.

Formula:
NRR = (Start MRR + Expansion − Churn − Contraction) / Start MRR × 100%

Bench:
Top decile public SaaS: >130%
Top quartile: 115-130%
Median: 105-115%
Bad: <100%

NRR >100% means: your company grows even without ANY new customers. Existing-customer expansion > losses.

This is the holy grail of SaaS. Achieve it → multiples × 2-3.

3 mechanisms top SaaS use:
1. Seat-based pricing with growing customers (Slack: $8/user)
2. Tiered features with natural upgrade path (HubSpot: Starter → Pro → Enterprise)
3. Cross-sell additional products (Datadog: Infrastructure → APM → Logs → Security)

Calculate yours: https://metricstree.vercel.app/nrr

Deep dive: https://metricstree.vercel.app/blog/nrr-vs-grr

#SaaS #ProductManagement #Metrics

---

### Post 5 (RU): Embed-builder для блогеров

Заметил тренд: блогеры всё чаще используют интерактивные виджеты вместо статических таблиц с формулами в постах про unit-экономику.

Поэтому добавил в MetricTree **Embed Builder** (https://metricstree.vercel.app/embed):

Выбираешь:
- Метрику (любая из 52)
- Язык (RU / EN / UZ)
- Размер (compact / standard / full)
- Валюту по умолчанию
- Theme

→ получаешь готовый iframe-код:

`<iframe src="https://metricstree.vercel.app/burnMultiple?embed=1" width="100%" height="700"></iframe>`

Работает в Notion, Substack, Medium, WordPress, Ghost, Webflow, любом HTML.

Бесплатно, без ограничений, без брендирования (текущий free tier).

Каждый embed = твой блог получает интерактивный калькулятор вместо статического текста. Пользователю интереснее, ты получаешь дольше time-on-page.

Если ведёшь блог про SaaS / unit-экономику / финансы — попробуй embed одного из калькуляторов в следующий пост. Linkback на metricstree приветствуется, но не требуется.

Builder: https://metricstree.vercel.app/embed

---

## HACKER NEWS «Show HN»

**Title:** Show HN: MetricTree – Open-source calculator for 52 product metrics

**URL:** https://metricstree.vercel.app/

**Text:**
Hi HN,

I'm Rodion, CEO of a logistics startup in Tashkent. For 3 years I've been re-Googling the same product metric formulas every week — what's a healthy SaaS Quick Ratio, what's the Burn Multiple threshold, LTV:CAC for early-stage. Got tired of it, built MetricTree.

What it is: free open-source calculator for 52 product metrics (LTV, CAC, MRR, NRR, NPS, Burn Multiple, Rule of 40, Magic Number, Quick Ratio, Sales Velocity, and more) with industry benchmarks cited from OpenView, Bessemer, David Sacks, Mamoon Hamid.

Things I'm proud of:
- Goal mode: reverse calculations. «I want LTV:CAC = 3, my LTV is $15k — what's the max CAC?» — runs the formula backwards
- Vanilla JS, no framework. Single 580 KB index.html. Loads in <100ms
- Vercel Edge Functions for lead capture (Telegram + Resend + Vercel KV fan-out, with mailto fallback)
- Public API: GET /api/calc?metric=ltv&aov=2500&freq=4&life=3 → JSON. No auth, CORS open
- 3 languages (RU / EN / UZ) for global + CIS audience
- Embed builder: drop any calculator into Notion / Substack / blog as iframe
- 14 in-depth blog posts on top metrics, each embeds its calculator
- Telegram bot companion: /ltv 2500 4 3 from your phone

Things I'd love feedback on:
- Positioning vs Profitwell / Baremetrics / Causal
- Which metrics am I missing
- Performance on slow connections (single-page SPA loads everything upfront — tradeoff)

Open source MIT: https://github.com/Latipov-Rodion/Metrics-Tree

Happy to answer questions.

---

## REDDIT (3 posts)

### r/SaaS — «Built a free 52-metric calculator over weekends»

**Title:** I built a free open-source calculator for 52 SaaS metrics — would love your feedback

After 3 years of Googling the same formulas every week (Burn Multiple, Quick Ratio, Rule of 40, etc.), I built MetricTree: https://metricstree.vercel.app/

What's there:
- 52 metrics including all the SaaS classics (LTV, CAC, MRR, NRR, GRR, Churn, Burn Multiple, Magic Number, Quick Ratio, Rule of 40)
- Goal mode (reverse calc) — unique feature
- Industry benchmarks cited (Sacks, Hamid, OpenView, Bessemer)
- 14 deep blog posts on top metrics
- Embed iframe for Notion / blogs
- Free forever, MIT open source

Not selling anything — just helpful. Tell me what's missing or wrong.

Calc: https://metricstree.vercel.app/
GitHub: https://github.com/Latipov-Rodion/Metrics-Tree

---

### r/ProductManagement — «Open-source tool for PMs»

**Title:** [Tool] Free calculator for 52 product metrics — instant benchmark, no signup

PMs spend too much time looking up formulas. Built this to fix it: https://metricstree.vercel.app/

- 52 metrics in 8 sections (B2C, B2B SaaS, AARRR, Growth, Finance, QA, Support)
- Each shows: formula + your result + industry benchmark + plain-English interpretation
- Goal mode for reverse calculations
- Embed in your Notion / Confluence pages

3 languages (EN / RU / UZ), no signup, MIT open source.

What's missing for your workflow?

---

### r/startups — «Free open-source 52-metric calculator»

**Title:** Built a free 52-metric calc — alternative to Profitwell ($0 vs signup-walled), Causal ($0 vs $250/mo)

For founders pre-revenue or who just want quick calculations without setting up dashboards:

MetricTree (https://metricstree.vercel.app/) — 52 product metrics, Goal mode, What-If sliders, Forecast charts, embed for blogs.

Cited benchmarks (OpenView, Bessemer, Sacks, Hamid).

3 languages, free forever, open source MIT.

Feedback welcome, especially on what metrics are missing for your stage.

---

## TELEGRAM channel templates

### Анонс в канал «Продакты»:

📊 **MetricTree — открытый калькулятор 52 продуктовых метрик**

Бесплатно, без регистрации, на 3 языках (RU/EN/UZ).

Внутри:
🎯 Goal mode (обратный расчёт)
💡 What-If слайдеры
📈 Forecast charts (6-24 мес)
🔀 Compare 2 metrics
📥 CSV import
🤖 Telegram bot
🔗 Embed iframe для блогов

Бенчмарки цитируют OpenView, Bessemer, Sacks, Hamid.

Open source MIT.

→ metricstree.vercel.app

### Анонс в канал «SaaSный мир»:

Запустилась бесплатная альтернатива Profitwell / Baremetrics / Causal — для тех, у кого ещё нет Stripe-данных для дашбордов, но нужны точные SaaS-расчёты:

**MetricTree** — 52 метрики, Goal mode, embed для блогов: metricstree.vercel.app

14 deep блог-постов по топ-метрикам уже там. Free, MIT.

### Анонс в Hunting ProductHunt CIS:

Запускаем MetricTree на ProductHunt [дата TBD].

Open-source калькулятор 52 продуктовых метрик с поддержкой русского + узбекского. Уникальное позиционирование — первый CIS-локализованный SaaS-инструмент в категории.

→ metricstree.vercel.app

Поддержка upvote'ом в день запуска приветствуется 🙏

---

## Posting cadence (рекомендация)

| День | Канал | Контент |
|------|-------|---------|
| Mon | LinkedIn (RU) | Post 1 — launch announcement |
| Tue | Twitter | Thread 1 — launch |
| Wed | LinkedIn (EN) | Post 2 — launch EN |
| Thu | Twitter | Thread 2 — Burn Multiple |
| Fri | Telegram channels | Анонс в 5 каналах |
| Sat | (off — algorithms low) | — |
| Sun | (off) | — |
| Mon | Reddit r/SaaS | Post 1 |
| Tue | Twitter | Thread 3 — LTV:CAC |
| Wed | HN Show HN | (best time: 8 am ET Tue/Wed) |
| Thu | Twitter | Thread 4 — MRR Growth |
| Fri | LinkedIn (RU) | Post 3 — Burn Multiple deep |
| Mon | LinkedIn (EN) | Post 4 — NRR explained |
| Tue | Reddit r/PM | Post |
| Wed | Twitter | Thread 5 — Runway |
| Thu | Reddit r/startups | Post |
| Fri | LinkedIn (RU) | Post 5 — Embed builder |

Total: 17 posts over 3 weeks. Steady cadence, no burnout, multiple touch-points per audience.
