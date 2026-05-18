# GSC + Yandex Webmaster — пошаговая инструкция + priority indexing list

## 🔴 Шаг 1: Google Search Console (5 минут)

### Setup
1. https://search.google.com/search-console → войди под Google-аккаунтом
2. **Add property** → выбери **URL prefix** (НЕ Domain — требует DNS access)
3. Вставь: `https://metricstree.vercel.app/`
4. Verify ownership → выбери **HTML tag**
5. Скопируй ТОЛЬКО `content="ABC123..."` часть
6. **Пришли мне эту строку** — я подменю в `index.html` строка 14:
   ```html
   <meta name="google-site-verification" content="REPLACE_WITH_GSC_VERIFICATION_CODE">
   ```
7. После моего push (~30 сек deploy) — нажми **Verify**

### После верификации — действия в GSC

**Submit sitemap** (1 минута):
- Левое меню → **Sitemaps**
- В поле «Add a new sitemap» введи: `sitemap.xml`
- Submit
- Через 24 часа статус должен стать «Success» с 100+ URLs discovered

**Request indexing для топ-15 URLs** (5 минут — этот список ниже):
- Левое меню → **URL Inspection**
- Введи URL → **Test Live URL** → если passes → **Request Indexing**
- Лимит ~10 запросов/день, делай их этой неделе

### TOP-15 priority URLs для manual indexing (в этом порядке)

```
1.  https://metricstree.vercel.app/                          ← homepage
2.  https://metricstree.vercel.app/ltv                       ← high volume keyword
3.  https://metricstree.vercel.app/cac                       ← high volume
4.  https://metricstree.vercel.app/mrr                       ← high volume
5.  https://metricstree.vercel.app/burnMultiple              ← unique angle (Sacks)
6.  https://metricstree.vercel.app/ruleOf40                  ← high volume
7.  https://metricstree.vercel.app/nrr                       ← high volume
8.  https://metricstree.vercel.app/churn                     ← high volume
9.  https://metricstree.vercel.app/runway                    ← high volume
10. https://metricstree.vercel.app/blog/                     ← blog index
11. https://metricstree.vercel.app/blog/burn-multiple-saas-2026
12. https://metricstree.vercel.app/blog/ltv-cac-unit-economics
13. https://metricstree.vercel.app/blog/rule-of-40-saas
14. https://metricstree.vercel.app/vs-profitwell             ← buying intent
15. https://metricstree.vercel.app/api-docs                  ← devs love
```

### Что мониторить через 7-14 дней

- **Performance** → должны появиться impressions (даже если clicks = 0)
- **Coverage** → 80-100 indexed pages
- **Enhancements** → FAQ rich results + HowTo + Sitelinks search box
- Если Coverage показывает errors → пришли скрин, разберём

---

## 🔴 Шаг 2: Yandex Webmaster (5 минут)

### Setup
1. https://webmaster.yandex.ru → войди / создай Яндекс-аккаунт
2. **Добавить сайт** → введи `https://metricstree.vercel.app/`
3. **Подтвердить права** → **Мета-тег**
4. Скопируй `content="abc123..."`
5. **Пришли мне** — подменю в `index.html` строка 16:
   ```html
   <meta name="yandex-verification" content="REPLACE_WITH_YANDEX_VERIFICATION_CODE">
   ```
6. После push (~30 сек) — нажми **Проверить**

### После верификации

**Файлы Sitemap**:
- Меню «Индексирование» → «Файлы Sitemap»
- Добавить файл Sitemap → `https://metricstree.vercel.app/sitemap.xml`

**Региональность** (КРИТИЧНО для CIS):
- Меню «Информация о сайте» → «Региональность»
- Добавить регион → **Россия** + **Узбекистан** + **Казахстан** + **Беларусь**
- Это включит локальное ранжирование

**Переобход страниц**:
- Меню «Индексирование» → «Переобход страниц»
- Введи топ-15 URLs (тот же список что для GSC выше)
- Лимит обычно 30 URLs/день

**IndexNow:**
- В Webmaster подключи IndexNow (ключ уже на сайте: `adc339db06f9cdc739be3ab61241c033.txt`)
- После этого каждый твой `node notify-indexnow.mjs` будет ping'ать Yandex мгновенно

---

## 🔵 Что я делаю сразу (без ожидания твоих кодов)

✅ Подготовил этот файл с priority-list
✅ Уже создан `notify-indexnow.mjs` (запустится как только подключишь Yandex)
✅ Подготовлю monitoring-скрипт для проверки индексации (см. `check-indexing.mjs` ниже)
✅ Заранее заполнил sitemap.xml всеми 100+ URLs (Google и Yandex увидят за 1 submit)
✅ Заранее установил robots.txt с явным Allow для Googlebot, Bingbot, YandexBot, GPTBot, ClaudeBot, PerplexityBot
✅ Все per-metric страницы имеют canonical, hreflang, og-tags

---

## 🟡 Что я делать НЕ могу (только ты)

❌ Создавать аккаунты в Google/Yandex (требует Captcha + 2FA)
❌ Получать verification codes (привязаны к твоему аккаунту)
❌ Кликать «Verify» в UI (требует session cookie)
❌ Submit sitemap через UI (это в их интерфейсе)
❌ Request indexing manual (один за раз через UI)
❌ Управлять региональностью Yandex (внутри Webmaster)

---

## 🟢 Что я могу сделать ПОСЛЕ твоих кодов

Как только дашь GSC + Yandex codes:

1. Подменю оба placeholder'а в `index.html` (одной командой)
2. Закоммитчу + запушу
3. Подожду 30-60 сек deploy
4. Запущу `node notify-indexnow.mjs` (ping Bing + Yandex с 100+ URLs)
5. Проверю что verification meta-tags на месте в проде (curl)
6. Дам тебе ссылки на 15 URLs которые ты должен manual-request в GSC
7. Создам **`check-indexing.mjs`** скрипт — каждую неделю проверять сколько URLs Google проиндексировал

---

## 📈 Что ты увидишь по неделям

| Неделя | GSC | Yandex |
|--------|-----|--------|
| 0 | Verification done, sitemap submitted | Same |
| 1 | 10-30 indexed pages, первые impressions | 5-15 pages |
| 2 | 50-80 indexed, начинаются impressions по long-tail | 30-50 pages |
| 4 | 80-100 indexed, первые clicks на long-tail | 80-100, ИКС начинает расти |
| 8 | 100+ indexed, 50-200 clicks/week | 50-150 clicks/week |
| 12 | 500-2000 clicks/week если outreach делается | Аналогично |

**Без GSC submit:** Google может индексировать сайт **3-6 месяцев** через accidental discovery (от ссылок извне). **С GSC submit:** 1-2 недели.

Это reason почему именно эти 2 пункта = **самые важные** из всего что осталось.

---

## ⚠️ Common pitfalls

1. **Не выбирай Domain property** в GSC — требует DNS access (его нет на vercel.app subdomain). URL prefix work normally.

2. **Verification code теряется?** — Google запоминает на 24 часа. Если потерял — просто перевыпусти в том же flow.

3. **Sitemap status «Couldn't fetch»?** — Жди 24 часа после submit, иногда retry нужен. Если 3 дня «Couldn't fetch» — пришли скрин.

4. **No impressions через 2 недели?** — Запусти `node notify-indexnow.mjs` + manual request indexing для топ-15 URLs в GSC.

5. **Yandex медленнее Google в 2-3 раза** в plain indexing (но IndexNow это ломает — мгновенно).
