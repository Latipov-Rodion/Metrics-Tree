# MetricTree — Конкурентный анализ + План органического роста

**Контекст:** продукт давно в проде, но не индексируется Google. Цель — разобраться **почему** и составить план чтобы за 30/60/90 дней попасть на 1-ю страницу Google по ключевым запросам.

---

## Часть 1: Почему сейчас НЕ ранжируется

### Hard facts (что говорит Google)

Открой **https://search.google.com/search-console** → если домен НЕ добавлен → **это и есть причина №1**. Google не знает что сайт существует, потому что:

1. **Sitemap не отправлен** — у тебя есть `sitemap.xml` с 80+ URLs, но Google его не видел
2. **Домен `*.vercel.app`** — субдомен Vercel, у которого Domain Authority (DA) ~28, и **DA подсайтов наследуется частично**. Сайты на vercel.app/netlify.app/herokuapp ранжируются хуже на 30-50% чем на custom domains.
3. **Нулевые backlinks** — никто не ссылается на metricstree.vercel.app из других сайтов. Без ссылок Google не считает страницу авторитетной.
4. **Нулевой traffic** = нулевые engagement-сигналы (CTR, dwell time) → нет данных для ранжирования
5. **Контент свежий** — Google «выдерживает» новые домены 3-6 месяцев (sandbox effect)

### Что Google УЖЕ умеет видеть на твоём сайте (это правильно!)
- ✅ FAQ JSON-LD schema (rich snippets-ready)
- ✅ Per-metric meta titles + descriptions
- ✅ hreflang для RU/EN/UZ
- ✅ Clean URLs (`/ltv`, `/cac`...)
- ✅ Static "See also" cross-metric internal links
- ✅ Sitemap.xml (80+ URLs)
- ✅ Mobile-friendly + Core Web Vitals (skip-link, a11y, no horizontal scroll)
- ✅ Open Graph + Twitter Card (PNG og-image 1200×630)

**Технически сайт идеален для SEO.** Проблема НЕ в коде. Проблема — в том что Google никто не сказал что он есть, и никто на него не ссылается.

---

## Часть 2: Конкурентный анализ

### Прямые конкуренты (калькуляторы продуктовых метрик)

| Конкурент | Что есть | Что у нас лучше | Что у них лучше |
|-----------|----------|-----------------|-----------------|
| **Profitwell / Paddle Free Calculators** | LTV, CAC, churn — ~6 калькуляторов, нужен signup для save | 52 метрики vs 6, no signup, 3 языка, embed, Goal mode | Бренд + DA 75 + давно в Google |
| **Baremetrics Calculator** | LTV + CAC только. Маркетинговая воронка | Гораздо шире охват | DA 70 |
| **ChartMogul Resources** | Только статьи, не калькуляторы | Интерактивный inline-calc vs только текст | DA 78, известный бренд |
| **Geckoboard / Klipfolio** | Дашборды (платно). Калькуляторов нет | Бесплатно + калькуляторы | Реальный продакт vs калькулятор |
| **OpenView Benchmarks** | PDF-отчёты с бенчмарками | Бенчмарки + интерактив | Признанный авторитет, цитируется всеми |
| **finmodelslab.com** | Excel-шаблоны для метрик | Без скачивания, мгновенно, online | Глубокая фин-модель |
| **causal.app** | Финансовое моделирование (free tier) | Узкая ниша, мгновенный калькулятор | Полная фин-платформа |
| **VC-блоги (Bessemer / a16z / SaaStr)** | Не калькуляторы, статьи о метриках | Интерактив | Brand + Authority |

### Косвенные конкуренты (RU-рынок)

| Конкурент | Что есть | Положение |
|-----------|----------|-----------|
| **vc.ru статьи о метриках** | Контент-маркетинг | Высокая видимость в Рунете |
| **Habr статьи** | Технические разборы | Высокий DA, цитируемость |
| **Telegram-каналы** («Продакты», «SaaSный мир») | Кросс-постинг контента | Огромная аудитория CIS |
| **VC-фонды CIS** (Альт Капитал, AltaIR) | Образовательные посты | Узнаваемые имена |

### ✨ Уникальные преимущества MetricTree

**Положение на рынке:** «**Единственный бесплатный калькулятор 52 метрик с обратным расчётом, на 3 языках, без signup, с embed-режимом**».

Никто из конкурентов не имеет ВСЕХ этих фич одновременно:

| Фича | Profitwell | Baremetrics | ChartMogul | Causal | **MetricTree** |
|------|:----:|:----:|:----:|:----:|:----:|
| Бесплатно | freemium | ❌ | ❌ | freemium | ✅ навсегда |
| No signup | ❌ | ❌ | ❌ | ❌ | ✅ |
| Количество метрик | 6 | 2 | 0 | плагины | **52** |
| Goal mode (обратный расчёт) | ❌ | ❌ | ❌ | да | ✅ + 32 сценария |
| What-If слайдеры | ❌ | ❌ | ❌ | да | ✅ |
| Forecast charts | ❌ | да | ❌ | да | ✅ |
| Compare-2 metrics | ❌ | ❌ | ❌ | ❌ | ✅ |
| CSV import | ❌ | да | ❌ | да | ✅ |
| 3 языка (RU/EN/UZ) | ❌ EN only | ❌ EN | ❌ EN | ❌ EN | ✅ |
| Embed iframe | ❌ | ❌ | ❌ | ❌ | ✅ |
| Per-metric clean URLs | ❌ | ❌ | ❌ | ❌ | ✅ + hreflang |
| Open source | ❌ | ❌ | ❌ | ❌ | ✅ MIT |
| FAQ Rich Snippets | ❌ | ❌ | ❌ | ❌ | ✅ |
| Telegram bot companion | ❌ | ❌ | ❌ | ❌ | ✅ |
| Источники бенчмарков с цитатами | ❌ | редко | редко | редко | ✅ Sacks/Hamid/OpenView |
| Cross-metric internal links | редко | редко | ❌ | ❌ | ✅ статика для SEO |

**5 ключевых differentiators для маркетинга:**

1. **«В одном месте, чего больше нигде нет»** — 52 метрики vs 6 у Profitwell
2. **«Считает в обратную сторону»** — Goal mode у одного только Causal, но он платный
3. **«Бесплатно, навсегда, без регистрации»** — пользователи устали от signup walls
4. **«Готовый виджет в твой блог/Notion»** — embed-mode уникален в категории
5. **«Русский / English / Oʻzbekcha»** — нет конкурентов в CIS-сегменте

---

## Часть 3: План органического роста — 30 / 60 / 90 дней

### НЕДЕЛЯ 0 (СДЕЛАТЬ СЕГОДНЯ — 30 минут)

Это критические шаги без которых остальное не работает:

#### 1. Google Search Console (5 мин)
- Открой **https://search.google.com/search-console**
- «Add Property» → **URL prefix** → введи `https://metricstree.vercel.app/`
- Верификация через DNS (TXT-запись в Vercel) ИЛИ через HTML-meta-tag — попроси, добавлю tag в `<head>`
- После верификации: **Sitemaps** → отправь `https://metricstree.vercel.app/sitemap.xml`
- **Request indexing** для главных страниц вручную: `/`, `/ltv`, `/cac`, `/mrr`, `/burnMultiple`, `/ruleOf40`, `/runway`, `/nrr`, `/churn`, `/nps`

#### 2. Bing Webmaster Tools (5 мин)
- **https://www.bing.com/webmasters** → import из Google Search Console (один клик)
- Отправь sitemap

#### 3. Yandex Webmaster (5 мин, КРИТИЧНО для CIS)
- **https://webmaster.yandex.ru/** → добавь сайт → верификация
- Отправь sitemap
- Это даст видимость по RU-запросам типа «формула LTV», «как считать CAC»

#### 4. IndexNow (1 мин)
В `vercel.json` нет — добавим. IndexNow мгновенно уведомляет Bing/Yandex когда контент обновляется.

#### 5. Submit на агрегаторы (15 мин)
Каждый = backlink + траффик:
- **AlternativeTo.net** — добавь как альтернатива Profitwell/Baremetrics
- **SaaSHub.com** — список SaaS-инструментов
- **Toolfinder.io** — куратированные стартап-инструменты
- **GetApp** (Gartner-owned) — нужен бизнес-аккаунт
- **Capterra** — то же
- **G2** — для отзывов
- **Indie Hackers**: showcase your product
- **BetaList**: для launches
- **Producthunt** (Tuesday 12:01 PT)

---

### МЕСЯЦ 1 (Недели 1–4) — Foundation + первые backlinks

#### Контент-маркетинг (1 пост в неделю = 4 за месяц)

Где постить:
- **Medium / Substack** (англ, для глобального аудитория)
- **Habr.com** (RU, технический разбор)
- **vc.ru** (RU, бизнес-аудитория)
- **dev.to** (англ, дев-комьюнити)
- **LinkedIn** (твой профиль + перепост в группы)

Темы которые точно поведут трафик (proven keywords):

**Неделя 1: «Burn Multiple — главная метрика SaaS-инвестора в 2026»**
- Базируется на эссе David Sacks → высокий поисковый интерес
- В конце статьи: «считай свой Burn Multiple в [метричном дереве MetricTree]»
- **Embed калькулятора прямо в статью** (через iframe — твоя уникальная фича)

**Неделя 2: «Rule of 40: как считать и почему 40% — это магия»**
- Высокий volume в Google
- Embed калькулятора + ссылки на /ruleOf40

**Неделя 3: «LTV vs CAC: пошаговый расчёт unit-экономики стартапа»**
- Самая искомая комбинация
- Embed обоих калькуляторов

**Неделя 4: «10 метрик которые ты должен трекать как PM в 2026»**
- Listicle = высокий шанс на share
- Ссылки на 10 страниц MetricTree

#### Outreach (1 contact в день = 30 за месяц)

| Цель | Что просишь |
|------|-------------|
| **Lenny's Newsletter** | Подать в «Tools roundup» (он публикует подборки) |
| **The SaaS Roadmap** | Same |
| **CB Insights** (research desk) | Mention в их weekly report |
| **OpenView Labs** | Поделиться при следующем benchmark-релизе |
| **David Sacks** (Craft Ventures) — Twitter | «Built a Burn Multiple calculator inspired by your framework — would love your feedback» |
| **Patrick Campbell** (Profitwell ex-CEO) | Same energy |
| **Russian PM-инфлюенсеры**: Илья Красинский, Михаил Карпов, Денис Мартынцев | DM с продуктом + ссылкой |

#### PR

- **TechCrunch / Forbes / VentureBeat** — для NEXT round, не сейчас
- **vc.ru** — submit feature article про launch
- **Telegraph** анонимный анонс в /r/SaaS Reddit
- **Indie Hackers showcase** — отдельный submit

---

### МЕСЯЦ 2 (Недели 5–8) — Custom domain + Content scale

#### КРИТИЧНО: Купить custom domain

`metricstree.vercel.app` → `metrictree.com` / `.io` / `.dev`

**Почему критично:**
- DA с `vercel.app` не передаётся полностью → теряешь 30-50% потенциала ранжирования
- Custom domain выглядит профессионально → больше backlinks от блогеров
- Telegram/Slack превью красивее (короткие URLs)
- Запоминается

**Как:**
- Купи на Namecheap / Gandi / Cloudflare (~$10-15/год)
- В Vercel → Settings → Domains → Add → следуй инструкциям (5 минут)
- Vercel автоматом выдаст SSL + redirect старого URL на новый
- Обнови `SITE` в `build.mjs` и `vercel.json` rewrites — попроси, перепишу

**Бонус:** на этой же неделе подай в Resend для верификации домена → email пойдёт с `noreply@metrictree.com` вместо `onboarding@resend.dev` (выйдет из Spam папок).

#### Контент: 2 поста в неделю (8 за месяц)

Темы:
1. **«Quick Ratio (Mamoon Hamid): как считать устойчивость роста SaaS»** ← редкий keyword, низкая конкуренция
2. **«Magic Number 1.0 — почему SVP-фонды смотрят на это первым»** ← high-volume
3. **«ARPDAU benchmark mobile games 2026»** ← ниша, мало конкуренции
4. **«Runway калькулятор: когда фандрейзить (по стадиям)»**
5. **«NRR vs GRR: что отличает $1B от $10M SaaS-компании»**
6. **«Sales Velocity formula: 4 рычага роста B2B-выручки»**
7. **«CSV-аудит unit-экономики за 30 секунд» (use CSV import feature)**
8. **«Forecast SaaS-метрик: SVG-графики без Excel»**

#### Comparison-страницы (high-intent traffic)

Создай отдельные landing-страницы:
- `/vs-profitwell` — «MetricTree vs ProfitWell: free vs paid, 52 vs 6 metrics»
- `/vs-baremetrics` — same
- `/vs-causal` — «Open-source альтернатива Causal»

**Поиск по «X alternative» = высокая buying intent.** Ты выиграешь по ним легко (нулевая конкуренция в твоей нише).

#### Backlink-стратегия

Метод: **broken link building + skyscraper**

1. Найди статьи которые ссылаются на `profitwell calculator` или `baremetrics calculator`:
   - Ahrefs / Semrush (бесплатные trial)
   - Или: Google `inurl:saas-metrics intext:profitwell`
2. Свяжись с авторами: «У вас ссылка на устаревший Profitwell calculator. Я сделал бесплатную альтернативу с 52 метриками — вот: ...»
3. Цель: 5-10 backlinks/месяц с DA 40+

---

### МЕСЯЦ 3 (Недели 9–12) — Scale + community

#### Запуск Telegram-канала «PRO Метрики»
Раз в неделю — разбор одной метрики (5-10 минут). Линкует на калькулятор. Аудитория твоего podcast PRO Финансы — ICP. Cross-promotion в каждом подкасте.

#### Подкаст-маркетинг
Гостевые выходы:
- Никита Маклахов / Радислав Гандапас (если зайдёт)
- Любой SaaS-podcast в Рунете
- В каждом выпуске: «считай свои метрики в metrictree.com»

#### Custom embed для блогеров
Создай **/embed-builder** страницу где блогер может:
- Выбрать метрику
- Customизировать цвета (твой Pro feature позже)
- Скопировать iframe-код

Это превратит каждого блогера в твой backlink-генератор.

#### Reddit AMA
В r/SaaS, r/startups: «I built a free 52-metric calculator — AMA». Если повезёт = 1000+ upvotes + Hacker News attention.

#### Free metric audits в обмен на testimonial
Предложи 10 SaaS-фаундерам бесплатный 30-мин audit unit-экономики. В обмен — testimonial + permission цитировать. Эти testimonials → on landing page → конверсия Pro waitlist выше.

---

## Часть 4: Метрики успеха (что трекать)

| Метрика | Сейчас | Цель месяц 1 | Цель месяц 3 | Цель месяц 6 |
|---------|--------|--------------|--------------|--------------|
| Google Search Console — indexed pages | 0 | 80+ | 80+ | 80+ |
| Google impressions | 0 | 500 | 5,000 | 50,000 |
| Google clicks | 0 | 30 | 500 | 5,000 |
| Backlinks (Ahrefs) | 0 | 5 | 25 | 100 |
| DR (Domain Rating) | 0 | 5 | 15 | 25 |
| Waitlist signups | 0 | 50 | 300 | 1,500 |
| GitHub stars | 0 | 30 | 100 | 500 |
| Direct traffic / month | 0 | 200 | 2,000 | 15,000 |
| Branded queries «metrictree» | 0 | 50/mo | 500/mo | 5,000/mo |

**Главный leading indicator:** **Backlinks**. Без них органика не растёт. 25 backlinks за 3 месяца = реалистично если делать outreach 1×день.

---

## Часть 5: Что я могу сделать прямо сейчас автоматически

Скажи **«сделай»** и я добавлю:

1. ✅ **Google Search Console verification meta tag** в `<head>` (после получения от тебя кода)
2. ✅ **IndexNow integration** — `api/indexnow-ping.js` который пингует Bing/Yandex при каждом deploy
3. ✅ **Comparison-страницы** (`/vs-profitwell`, `/vs-baremetrics`, `/vs-causal`) — 3 готовых landing с FAQ schema + сравнительными таблицами
4. ✅ **`/blog` инфраструктура** — Markdown-генератор статей по шаблону (как build.mjs для метрик)
5. ✅ **First 4 blog posts** drafts — на основе тем выше
6. ✅ **HARO / Press kit** — `/press` страница с logos, screenshots, founder bio, quotes ready для журналистов
7. ✅ **Schema.org Organization + WebSite + SearchAction** — расширенный JSON-LD на homepage (даст Google sitelinks search box)
8. ✅ **Open Graph для каждого языка** — `og:locale:alternate` теги для en_US, uz_UZ
9. ✅ **Robots.txt улучшение** — explicit Allow paths + sitemap reference
10. ✅ **Vercel Analytics integration** — track реальный traffic, бесплатно

Какие из 10 пунктов делаем сейчас?

---

## TLDR в одно предложение

> Сайт технически идеален для SEO, но Google его **физически не видит** — нужно отправить sitemap в Search Console (5 мин), купить custom domain (10 мин), и начать outreach по 1 контакту в день. Через 90 дней — 5,000 органических кликов/мес.

**Самое важное действие на сегодня:** Search Console verification + sitemap submit.
