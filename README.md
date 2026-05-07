# MetricTree — Калькулятор продуктовых метрик

[![Live](https://img.shields.io/badge/live-metricstree.vercel.app-2A6DF4)](https://metricstree.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![No build step](https://img.shields.io/badge/build-not%20required-success)

Бесплатный онлайн-калькулятор **39+ продуктовых метрик** с формулами, отраслевыми порогами и интерпретацией. Для продакт-менеджеров, маркетологов, аналитиков и фаундеров.

🔗 **Live:** https://metricstree.vercel.app/

## Что внутри

**Метрики по разделам:**
- **B2C** — DAU, MAU, Stickiness, Retention, LTV, CAC, LTV:CAC, ARPU, Churn
- **B2B SaaS** — MRR, ARR, ACV, GRR, NRR, CAC Payback, **Burn Multiple**, **Magic Number**, **Rule of 40**, **Quick Ratio**
- **AARRR** (Pirate) — Acquisition, Activation, Retention, Referral, Revenue
- **Growth** — CR, ROAS, CPC, CTR, Bounce Rate
- **QA** — Bug Rate, Test Coverage, Defect Density
- **Support** — CSAT, NPS, FCR, SLA

**Фичи:**
- 🎯 Отраслевые пороги (SaaS / E-commerce / Mobile / Media / Универсальные)
- 📊 Unit-economics дашборд по всем заполненным метрикам
- 📦 Шаблоны сценариев (Стартап SaaS, Зрелый SaaS, E-commerce, Mobile, Медиа)
- 🔄 What-if анализ через ползунки (как изменится результат при изменении входов)
- 📸 История снимков с pop-сравнением
- 🔗 **Чистые URL** для каждой метрики: `/ltv`, `/cac`, `/burnMultiple`...
- 💱 Переключатель валюты ($ / € / ₽ / £) — символ в подписях и результате
- 🔗 Шаринг текущего расчёта по URL (с пресетами полей: `/ltv?aov=2500&freq=4&life=3`)
- 🖼️ Экспорт карточки в PNG, всех метрик — в CSV
- 🌗 Тёмная/светлая тема (с автоопределением системной)
- 🔍 Глобальный поиск по метрикам и описаниям
- ⌨️ Клавиатурные сокращения (`/`, `↑↓`, `←→`, `Esc`, `Ctrl/⌘+S`, `Ctrl/⌘+D`)
- ♿ A11y: skip-link, ARIA-роли, focus-visible, prefers-reduced-motion
- 🚀 PWA-ready (manifest, theme-color)

## Структура

```
.
├── index.html              ← всё приложение (HTML + CSS + JS + данные inline)
├── favicon.svg
├── og-image.svg            ← превью для шаринга (см. ниже про PNG)
├── manifest.webmanifest    ← PWA-манифест
├── robots.txt
├── sitemap.xml             ← URL’ы всех 35 метрик
├── vercel.json             ← security headers + кеширование
├── LICENSE                 ← MIT
└── README.md
```

## Локальный запуск

Никакого билда не нужно. Любой статический сервер:

```bash
# Python 3
python -m http.server 5173

# Node (если есть)
npx serve .

# Или просто открыть index.html в браузере (двойной клик)
```

→ http://localhost:5173

## Деплой

Уже настроен **Vercel** для домена [metricstree.vercel.app](https://metricstree.vercel.app/). Для своего деплоя:

```bash
npm i -g vercel
vercel deploy --prod
```

`vercel.json` уже содержит CSP/HSTS/X-Frame-Options и правильный кеш-заголовки для статики.

## Шаринг по URL

**Чистый формат (рекомендуется):**

```
https://metricstree.vercel.app/ltv?aov=2500&freq=4&life=3
https://metricstree.vercel.app/burnMultiple?burn=500000&newArr=600000
```

**Обратно совместимый формат:**

```
https://metricstree.vercel.app/?s=b2c&m=ltv&aov=2500&freq=4&life=3
```

`s` — раздел, `m` — id метрики; в чистом URL раздел определяется автоматически. Параметры запроса — значения полей по их `key`. Кнопка «Поделиться» в шапке копирует чистый URL.

## TODO: PNG для og:image

Сейчас `og-image.svg` подключён как Open Graph image. Большинство современных платформ (Twitter/X, LinkedIn) рендерят SVG, но **Telegram и Slack — нет**. Сгенерируйте PNG любым способом и положите рядом:

```bash
# через rsvg-convert (librsvg)
rsvg-convert -w 1200 -h 630 og-image.svg -o og-image.png

# через resvg (Rust)
npx resvg-cli og-image.svg -o og-image.png --width 1200

# или онлайн: https://cloudconvert.com/svg-to-png
```

Затем поменяйте в `<head>` ссылки `og-image.svg` → `og-image.png` (и `og:image:type` → `image/png`).

## Roadmap

- [x] Чистые per-metric URL (`/ltv`, `/cac`, `/burnMultiple`...) через `vercel.json` rewrites + клиентская маршрутизация
- [x] Новые метрики: Burn Multiple, Magic Number, Rule of 40, Quick Ratio
- [x] Переключатель валюты в шапке
- [x] Расширенный FAQ JSON-LD (12 вопросов вместо 6)
- [ ] Per-metric meta-теги через server-side рендеринг (для уникальных title/description в SERP) — Edge Function на Vercel
- [ ] Английская версия (i18n)
- [ ] Goal-режим: «Хочу LTV:CAC = 3, какой максимум CAC?»
- [ ] Forecast-график на What-If (трекинг 6/12 мес)
- [ ] PDF-экспорт мульти-метрического отчёта
- [ ] Ещё новые метрики: Net Dollar Retention, Sales Velocity, Pipeline Coverage, ARPDAU, D1/D7/D30 Retention
- [ ] Рефакторинг в модули + Vite + Vitest (тесты на формулы)
- [ ] Telegram-бот / Slack-команда
- [ ] Browser extension

## Лицензия

[MIT](LICENSE) © Родион Латыпов

---

**Создатель:** [Родион Латыпов](https://www.linkedin.com/in/rodion-latipov) — BizDev, Sales, Product, Troubleshooter, Advisor, Consultant
