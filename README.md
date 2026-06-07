# MetricTree — Калькулятор продуктовых метрик

[![Live](https://img.shields.io/badge/live-metricstree.vercel.app-2A6DF4)](https://metricstree.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![No build step](https://img.shields.io/badge/build-no%20framework-success)
![Metrics](https://img.shields.io/badge/metrics-69-2A6DF4)
![Languages](https://img.shields.io/badge/i18n-RU%20%2F%20EN%20%2F%20UZ-2A6DF4)

Бесплатный онлайн-калькулятор **69 продуктовых метрик** с формулами, отраслевыми порогами и интерпретацией. Для продакт-менеджеров, маркетологов, аналитиков и фаундеров.

🔗 **Live:** https://metricstree.vercel.app/

## Что внутри

**69 метрик в 7 разделах:**
- **B2C** — DAU, MAU, Stickiness, Retention, LTV, CAC, LTV:CAC, ARPU, Churn, AOV, Repeat Purchase Rate, ARPDAU
- **B2B SaaS** — MRR, ARR, ACV, GRR, NRR, CAC Payback, Burn Multiple, Magic Number, Rule of 40, Quick Ratio, MRR Growth Rate
- **AARRR** (Pirate) — Acquisition, Activation, Retention, Referral, Revenue, Time to Value
- **Growth** — CR, ROAS, CPC, CTR, Bounce Rate, Engagement Rate
- **Finance & Sales** — Gross Margin, Runway, Burn Rate, Sales Velocity, Win Rate, Pipeline Coverage, Sales Cycle Length
- **QA** — Bug Rate, Test Coverage, Defect Density
- **Support** — CSAT, NPS, FCR, SLA

**Фичи:**
- 🎯 **Goal mode** — обратный расчёт: задай цель, получи нужный вход (14 метрик)
- 💡 **What-if** ползунки — пересчёт в реальном времени
- 📈 **Forecast** — SVG-прогноз на 6–24 мес
- 🔀 **Compare 2** — две метрики side-by-side
- 📥 **CSV import** — вставь числа, заполнит дашборд
- 📊 **Unit-economics дашборд** по всем заполненным метрикам
- 📦 **5 шаблонов сценариев** (Стартап SaaS, Зрелый SaaS, E-com, Mobile, Media)
- 🎲 **Авто-пример на первой загрузке** — метрика считается сразу, без ввода
- 📸 **Snapshots** — сохранение и сравнение состояний
- 🔗 **Per-metric clean URLs** + per-language: `/ltv`, `/en/ltv`, `/uz/ltv`
- 💱 **4 валюты** ($ / € / ₽ / £)
- 🔗 **Share** копирует URL c пресетами полей; виральные кнопки **X / LinkedIn** с готовым твитом
- 🖼️ **PNG-экспорт** карточки, CSV-экспорт всех
- 🤖 **Telegram бот**: `/ltv 2500 4 3` (см. [TELEGRAM_BOT_SETUP.md](TELEGRAM_BOT_SETUP.md))
- 🌐 **3 языка**: Русский, English, Oʻzbekcha (с per-language URLs + hreflang)
- 🌗 **Тёмная / светлая** тема (auto detect)
- 🔍 **Глобальный поиск** по 69 метрикам
- 🧠 **Deep content** + ссылки на источники (OpenView, Bessemer, David Sacks, Mamoon Hamid, Bain) на top-10 метриках
- 📚 **FAQ JSON-LD** rich-snippet'ы на top-12 метриках (3-4 Q&A каждая)
- ⌨️ Hotkeys (`/`, `↑↓`, `←→`, `Esc`, `Ctrl+S`, `Ctrl+D`, `?`)
- ♿ A11y: skip-link, ARIA, focus-visible, prefers-reduced-motion
- 🚀 PWA-ready, embed mode (`?embed=1`)

## Структура

```
.
├── index.html              ← всё приложение (HTML + CSS + JS + 69 метрик inline)
├── build.mjs               ← генератор 49 per-metric HTML c уникальной meta + FAQ JSON-LD
├── bot.py                  ← Telegram-бот companion (python-telegram-bot v21)
├── generate_og.py          ← генератор og-image.png (Pillow)
├── vercel.json             ← rewrites для clean URLs (RU/EN/UZ) + security headers
├── sitemap.xml             ← 170+ URLs (69 metrics × 3 langs + homepage + blog), генерируется build.mjs
├── favicon.svg, manifest.webmanifest, og-image.png
├── PRODUCTHUNT.md          ← launch kit
├── TELEGRAM_BOT_SETUP.md   ← bot deploy guide (Railway / Render / Fly)
├── LICENSE                 ← MIT
└── *.html                  ← 49 сгенерированных per-metric страниц (build artifacts)
```

## Локальный запуск

Никакого build framework. Любой статический сервер:

```bash
# Python 3
python -m http.server 5173

# Node
npx serve .

# Или просто открыть index.html в браузере (двойной клик)
```

Перегенерировать per-metric HTML после изменения `index.html`:
```bash
node build.mjs
```

→ http://localhost:5173

## Деплой

Уже настроен **Vercel** для домена [metricstree.vercel.app](https://metricstree.vercel.app/).

```bash
npm i -g vercel
vercel deploy --prod
```

`vercel.json` содержит:
- 49 rewrites для clean RU URLs (`/ltv` → `/ltv.html`)
- 98 rewrites для EN/UZ (`/en/ltv` + `/uz/ltv` → `/ltv.html`)
- CSP, HSTS, X-Frame-Options
- Cache headers для статики

### AI-диагностика (`/api/insight`)

Кнопка **🤖 AI-диагностика** в дашборде анализирует заполненные метрики и
возвращает главный рычаг для починки, объяснение и количественный прогноз.

- **AI-режим** — включается, когда в Vercel задана переменная окружения
  `ANTHROPIC_API_KEY` (модель `claude-haiku-4-5`).
- **Fallback-режим** — если ключ не задан или вызов Anthropic упал/завис,
  эндпоинт возвращает детерминированный диагноз по правилам. Фича работает
  и без ключа.

## Шаринг по URL

**Чистый формат:**
```
https://metricstree.vercel.app/ltv?aov=2500&freq=4&life=3
https://metricstree.vercel.app/en/burnMultiple?burn=500000&newArr=600000
https://metricstree.vercel.app/uz/runway?cash=5000000&burn=300000
```

**Обратно совместимый:**
```
https://metricstree.vercel.app/?s=b2c&m=ltv&aov=2500&freq=4&life=3
```

Параметры — значения полей по `inp.key` метрики. Кнопка «Поделиться» в шапке копирует чистый URL; X/LinkedIn кнопки в карточке открывают share-intent с готовым твитом.

## Embed mode

Добавь `?embed=1` к URL — получишь чистый виджет без шапки/футера, идеально для iframe в Notion / Substack / блогах:
```html
<iframe src="https://metricstree.vercel.app/ltv?embed=1" width="600" height="700" frameborder="0"></iframe>
```

Меню → «Скопировать embed-код» делает это за тебя.

## Лицензия

[MIT](LICENSE) © Родион Латыпов

---

**Создатель:** [Родион Латыпов](https://www.linkedin.com/in/rodion-latipov) — BizDev, Sales, Product, Troubleshooter, Advisor, Consultant
