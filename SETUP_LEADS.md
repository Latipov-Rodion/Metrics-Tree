# Lead capture setup — 3 ENV vars, 5 минут

Реализовано через `api/lead.js` — Vercel Edge Function которая раздаёт лидов в **Telegram** + **Email**.

Безопасно: ключи живут в Vercel env vars, не в коде. Бесплатные тарифы Telegram и Resend покрывают ~100k лидов в месяц.

---

## Шаг 1 — Telegram Bot (2 мин)

> Если ты уже создавал бота для `bot.py` (см. `TELEGRAM_BOT_SETUP.md`) — используй тот же токен и пропусти первую часть.

### 1a. Создай бота через @BotFather
1. Открой Telegram → найди **@BotFather** → `/newbot`
2. Имя: `MetricTree Leads` (или любое)
3. Username (должен оканчиваться на `bot`): например `metrictree_leads_bot`
4. BotFather пришлёт токен типа: `8123456789:AAEexxxxxxxxxxxxx`
5. **Скопируй токен** — это `TELEGRAM_BOT_TOKEN`

### 1b. Получи свой chat_id
1. Найди в Telegram **@userinfobot** → `/start`
2. Бот вернёт твой ID, например: `123456789`
3. **Скопируй число** — это `TELEGRAM_CHAT_ID`

### 1c. Активируй чат с твоим ботом
1. Открой `t.me/<твой_бот_username>` → `/start`
2. Это нужно один раз — иначе Telegram не разрешит боту тебе писать.

---

## Шаг 2 — Resend для email (2 мин)

1. Открой **https://resend.com/signup** → войди через GitHub (рекомендую) или email
2. Подтверди email
3. Resend сразу даст тебе sandbox-домен `onboarding@resend.dev` — можно отправлять C него БЕЗ домена (3000 писем/мес бесплатно)
4. Перейди **https://resend.com/api-keys** → "Create API Key"
5. Name: `MetricTree Production`
6. Permission: **Sending access** (или Full Access — пофиг для нашего кейса)
7. Domain: оставь "All Domains"
8. **Скопируй ключ** (`re_xxxxxxx`) — это `RESEND_API_KEY`. Он показывается ОДИН раз!

> Опционально: позже верифицируешь свой домен `metricstree.vercel.app` и сможешь отправлять с `noreply@metricstree.vercel.app`. Сейчас работает sandbox.

---

## Шаг 3 — Vercel env vars (1 мин)

1. Открой **https://vercel.com/dashboard** → твой проект `Metrics-Tree`
2. **Settings** (вверху) → **Environment Variables** (левое меню)
3. Добавь 5 переменных (Production scope):

| Name | Value |
|------|-------|
| `TELEGRAM_BOT_TOKEN` | `8123456789:AAEex…` (из шага 1a) |
| `TELEGRAM_CHAT_ID` | `123456789` (из шага 1b) |
| `RESEND_API_KEY` | `re_xxxxxxx` (из шага 2) |
| `RESEND_TO_EMAIL` | `rodion.121093@gmail.com` |
| `RESEND_FROM_EMAIL` | `onboarding@resend.dev` *(или твой верифицированный домен)* |

4. После добавления всех 5 — нажми **Deployments** → последний deploy → **⋯** → **Redeploy** (это нужно чтобы новые env vars подхватились).

---

## Шаг 4 — Проверь что работает

1. Открой https://metricstree.vercel.app/ → меню (⋯) → "Тарифы" → "Получить -50% при запуске" → введи свой email → "Подписаться"
2. Через 1-2 секунды должно прилететь:
   - **Telegram**: сообщение в чате с твоим ботом «🎯 MetricTree lead — pro-waitlist · email: rodion.121093@gmail.com · tier: pro»
   - **Email** на rodion.121093@gmail.com с темой «🎯 MetricTree lead — PRO waitlist — rodion.121093@gmail.com»

Если **ничего не пришло** — открой DevTools (F12) → Network → найди POST `/api/lead` → посмотри ответ:
- `200 OK` — всё ок, но env var может быть не задана. Проверь Vercel → Deployments → последний deploy → Functions → `api/lead` → Logs.
- `503` — ни одного канала не настроено. Проверь env vars + redeploy.
- `400` — невалидный email. Бот.
- `502` — оба канала отвалились (плохой токен или ключ). Проверь логи.

В любом случае — **localStorage backup и mailto fallback включаются автоматически**, лиды не теряются.

---

## Шаг 5 — (Опционально) /admin dashboard + Vercel KV

Хочешь видеть все лиды в одном месте на metricstree.vercel.app/admin? 2 минуты:

### 5a. Включи Vercel KV
1. **Vercel dashboard** → Storage → **Create Database** → **KV** (Redis-compatible)
2. Name: `metrictree-leads` (любое)
3. Region: any close (например `iad1` или `fra1`)
4. После создания → **Connect to Project** → выбери `Metrics-Tree`
5. Vercel автоматом добавит env vars `KV_REST_API_URL` и `KV_REST_API_TOKEN`

### 5b. Set ADMIN_SECRET
Сгенерь и добавь в Vercel env:

```
ADMIN_SECRET = <твой 24+ char случайный токен>
```

Можешь использовать этот: `8Cz0BO-IR8-4LsmAoweC2632xG8wdULB` (я сгенерил его при создании файлов — но лучше свой, через https://1password.com/password-generator/).

### 5c. Redeploy
Vercel → Deployments → ⋯ → Redeploy

### 5d. Открой
**https://metricstree.vercel.app/admin?secret=&lt;твой_токен&gt;**

Дашборд:
- Все leads с фильтрами (по tier, source, search)
- Stats (общее количество, по tier)
- CSV-export одним кликом
- Token сохраняется в localStorage — больше не вводишь

Бесплатный тариф KV: 30k requests/мес + 256MB storage. С 1000 лидов в день ты в нём поместишься на 30 лет.

---

## Архитектура

```
[Browser]
   │ POST /api/lead (FormData: email, tier, source, ...)
   ▼
[Vercel Edge Function api/lead.js]
   ├─ saveLeadLocally (на клиенте, до запроса)
   ├─ Telegram Bot API → твой чат (instant)
   └─ Resend API → твоя почта (durable)
   │
   ▼ если оба отвалились (502)
[Browser fallback]
   ├─ mailto:rodion.121093@gmail.com (открывает mail-клиент)
   └─ localStorage `mt_pending_leads_v1` (резерв)
```

Любой ИЗ каналов = успех. Только если **оба** упали + ответ 502 — клиент идёт в mailto-fallback. Тройная защита, лида потерять практически невозможно.

---

## Альтернативы (если что-то не получилось)

| Если | Делай |
|------|-------|
| Не хочешь Resend | Не добавляй `RESEND_*` env vars — будет работать только Telegram. |
| Не хочешь Telegram | Не добавляй `TELEGRAM_*` env vars — будет работать только Resend. |
| Хочешь обе + backup в SQL | Добавь Vercel KV (Storage → KV → Create database → Connect to Project). Потребует +20 строк в `api/lead.js` — попроси, добавлю. |
| Лимит Resend (3000/мес) подойдёт к концу | Верифицируй домен → переключи `RESEND_FROM_EMAIL` на `noreply@metricstree.vercel.app` → бесплатный лимит вырастет до 100/день навсегда + 3000/мес. |

---

## Когда лид падает в Telegram — что увидишь

```
🎯 MetricTree lead — pro-waitlist

📧 Email: rodion.121093@gmail.com
💎 Tier: pro
👤 Role: Founder / CEO

🌐 https://metricstree.vercel.app/?test=waitlist
🕒 2026-05-17T19:42:01.123Z
```

Можешь сразу ответить на email прямо из Telegram через `/reply` (если реализуешь дальше) или скопировать email и ответить через почту. На запуске PH это спасёт — Telegram-пуш приходит мгновенно, не пропустишь.
