# PROJECT_STATE — состояние проекта MetricTree

> Заметка-хендофф для продолжения работы в новом чате (Claude Code / люди).
> Обновлено: 2026-09-27. Продукт: **metricstree.vercel.app**, репо: `Latipov-Rodion/Metrics-Tree`.

## 🔴 Актуально на 2026-09-27 (читать первым)

**Прод отстаёт от репозитория.** `main` = `52d2a43` (PR #24). PR #25 (`claude/claude-md-docs-ZLf4t`, 11 коммитов: восстановленный SEO-контент 69/69 страниц, Magic Number ×4, 2 DOM XSS, runway `'∞'`→`Infinity`, пороги i18n 386/386) — **не смержен**. Ветка `claude/metrictree-prod-fixes-erz2nn` построена поверх PR #25 и добавляет:
- CI: `artifacts-in-sync` игнорирует строки с датой (`<lastmod>`, «обновлено ГГГГ-ММ-ДД») — раньше любой прогон не в день коммита падал.
- Embed-сниппеты (embed builder + меню приложения) несут видимую ссылку на страницу метрики → каждый embed = backlink.

**Измерений нет.** Vercel Web Analytics для проекта `metrics_tree` выключен (API: «Web Analytics not found»). Разметка готова (`/_vercel/insights/script.js`). Кастомные события `window.track(...)` в Vercel доступны только на Pro — на Hobby будут только просмотры. Логи функций за 30 дней пусты: вызовов `/api/lead`, `/api/calc`, `/api/insight` нет.

**Решения владельца (намеренно не сделано):**
1. CAC по индустриям: `ecom <$5`, `mobile <$1` при `universal <$300` — ошибка; предложение `ecom <$30/$30–100/>$100`, `mobile <$20/$20–60/>$60`.
2. Доступность: контраст вердиктов 1.5–2.8:1 (норма 4.5:1), модалки без фокус-ловушки, карточки сценариев — кликабельные `<div>`. Меняет вёрстку → сначала превью.
3. Только владелец: включить Web Analytics; верифицировать Google Search Console и Яндекс.Вебмастер (мета-тегов в репо нет, см. `marketing/GSC_YANDEX_SETUP.md`).

**Незакрытый аудит:** ~50 находок не верифицированы (агенты упали по лимиту API); из проверенных вручную 8/8 оказались настоящими.

**Грабли:**
- Переводы порогов (`I18N_THRESH`) привязаны к точному русскому тексту. Меняешь RU-строку → обнови ключ, иначе EN/UZ молча откатятся на русский.
- После squash-мержа ветку пересоздавать от `main` (до-squash коммиты несут то же содержимое под другими SHA → конфликты).
- Порядок генераторов фиксирован, `inject-theme-sync.mjs` — последним; коммитить пост-inject состояние.

## Снимок на сейчас

- **69 продуктовых метрик** (8 разделов), трёхъязычный UI: RU (дефолт) / EN / UZ.
- Флагманы: 🌳 **Дерево Метрик** (`/tree`, интерактивный driver-tree) и 🤖 **AI-диагностика** (`/api/insight` + кнопка в дашборде; Claude-режим при `ANTHROPIC_API_KEY`, иначе rule-based fallback).
- Всё задеплоено в `main` через Vercel. CI зелёный.

## ⚠️ Критично: где на самом деле живёт код (НЕ как в старом описании)

После перф-рефактора (PR #8/#9 в истории) приложение **больше не инлайнится целиком в `index.html`**:

- **`/app.js`** (~6000 строк) — ВЕСЬ JS и ВСЕ данные метрик. Грузится из `index.html` как `<script src="/app.js">` (общий глобальный scope с инлайн-скриптами index.html).
- **`/app.css`** — общие стили. **`/theme-sync.js`** — синхронизация темы (инъектится скриптом `inject-theme-sync.mjs` во все HTML).
- **`index.html`** — теперь оболочка: `<head>` (SEO/мета/JSON-LD) + разметка + подключение `/app.js`,`/app.css`. Данных метрик тут НЕТ.

Структуры в **`app.js`** (искать по этим именам):
| Структура | Что |
|---|---|
| `const metricsData` | ядро: секции `b2c, b2b, sales(=AARRR), finance, growth, qa, support`; метрика = `{id,name,formula,description,threshold,inputs:[{label,placeholder,key,min,help?}],calculate:v=>…,unit,insight:val=>({color,text})}`. Хелпер `sanitizeNumber(v.key)`. |
| `window.I18N_M` | i18n метрики: `slug:{ en:{name,formula,description}, uz:{…} }` |
| `window.I18N_INSIGHTS` | словарь переводов инсайтов: `'<RU текст>':{ en, uz }` |
| `const INDUSTRY_THRESHOLDS` | бенчмарки по 5 индустриям (`universal/saas/ecom/mobile/media`). Сейчас **61** метрика. |
| `const RELATED` | граф связей: `slug:[{ s:'<секция>', id:'<метрика>', note }]` |
| `const GOAL_QUESTIONS` | goal-mode (обратный расчёт). Сейчас **14** метрик / ~21 сценарий. |
| `DEEP_CONTENT` | лонгрид по метрике `{ ru, en, uz }` (рендерится клиентски) |
| `BENCHMARK_SOURCES` | источники бенчмарков `slug:[{label,url}]` |
| `SCENARIO_TEMPLATES` | 5 шаблонов (`startup_saas, mature_saas, ecom, mobile, media`), `values:{ slug:{key:value} }` |

**`build.mjs`** (генератор): `const META` (`slug:{title,desc,q,a,faq?}` — драйвит генерацию `${id}.html`, sitemap, benchmarks), `const RELATED`, `const SHORT_NAME`. Генерит `${id}.html` (69 шт), `sitemap.xml`, `benchmarks.html`. **vercel.json НЕ пишет.**

## Как добавить новую метрику (полный чек-лист)

1. `app.js` → `metricsData[section].metrics[]` — ядро (формула, inputs, calculate, insight). **REQUIRED.**
2. `app.js` → `window.I18N_M` — EN/UZ name/formula/description.
3. `app.js` → `window.I18N_INSIGHTS` — RU→{en,uz} для КАЖДОГО текста инсайта.
4. `app.js` → `INDUSTRY_THRESHOLDS` — бенчмарки (5 индустрий).
5. `app.js` → `RELATED` — 3 связи `{s,id,note}`.
6. `build.mjs` → `META` — title/desc/q/a. **REQUIRED** (иначе нет страницы/sitemap/benchmark).
7. `build.mjs` → `RELATED` + `SHORT_NAME` — статичный «см.также» + breadcrumb.
8. `vercel.json` → 3 rewrite-правила (`/slug`, `/en/slug`, `/uz/slug` → `/slug.html`). **REQUIRED** (`cleanUrls:false`).
9. Для паритета контента: `DEEP_CONTENT` + `BENCHMARK_SOURCES` + `SCENARIO_TEMPLATES`.
10. Если есть обратный расчёт — `GOAL_QUESTIONS`.
11. Обнови ТОТАЛ счётчик метрик в текстах (title/og/twitter/JSON-LD/README/app.js i18n/manifest/bot.py/generate_og.py), если число изменилось. Суб-счётчики (benchmarks=кол-во ключей `INDUSTRY_THRESHOLDS`, goal=ключи `GOAL_QUESTIONS`) считай из кода.
12. **Сборка и проверка** (см. ниже) → commit → PR → merge по зелёному CI.

`sitemap.xml` и `benchmarks.html` — генерируемые, руками не править. `vercel.json` — ручной.

## Сборка / CI (гейты в `.github/workflows/ci.yml`)

Перед коммитом ОБЯЗАТЕЛЬНО прогнать всю цепочку (CI её повторяет и падает при расхождении):
```bash
node build-industries.mjs && node build-glossary.mjs && node build.mjs && node build-blog.mjs && node inject-theme-sync.mjs
```
Джобы CI: **artifacts-in-sync** (запускает цепочку, падает если `git diff` непустой → коммить ВСЕ артефакты + проверь **детерминизм**: повторный прогон не должен давать дрейфа), **validate-site** (`node validate-site.mjs`), **unit-tests** (`node --test test/*.test.mjs`). Прогон локально:
```bash
node --check app.js && node --test test/*.test.mjs && node validate-site.mjs
```

## Что сделано в этой серии работ (PR)

- **#14** Дерево Метрик (`/tree`) · **#15** AI-диагностика (`/api/insight`) — оба merged.
- **#16/#17** +20 метрик (49→59→69) — merged.
- **#18** актуализация суб-счётчиков (benchmarks 36→61, goal-mode 16→14) — merged.
- **#19** deep-content + источники + пресеты для 20 новых метрик — merged.
- #13 закрыт (был на устаревшей базе — см. урок ниже).

## Что отложено / идеи на следующее

- **Benchmark-режим «где ты на рынке»** — перцентиль-гейдж по стадии/вертикали (отложенный флагман, высокий приоритет).
- **Goal-mode для новых метрик** — сейчас обратный расчёт только у 14 метрик; новые 20 без него.
- **Уборка веток** — заблокирована средой (sandbox даёт 403 на `git push --delete`, MCP-инструмента нет). Удалять смерженные ветки через GitHub UI.
- Возможный аудит: покрытие `SCENARIO_TEMPLATES`/контента у «средних» метрик.

## Грабли / уроки

- ⚠️ **Не ветвись от устаревшей базы.** Всегда `git fetch origin main && git checkout -b <branch> origin/main`. Инцидент #13: ветка была от до-рефакторного коммита → правки ушли в `index.html`, которого в актуальном `main` уже нет.
- **Данные метрик в `app.js`, не в `index.html`** (старое описание в `CLAUDE.md` про «инлайн» — устарело).
- **CI строгий к артефактам**: прогоняй всю цепочку и коммить результат; проверяй детерминизм.
- Env: удаление веток и некоторые операции в песочнице ограничены (403).
