# MetricTree Telegram Bot — Setup Guide

The bot is a quick-reference companion to the web calculator. Send it a metric command (`/ltv 2500 4 3`), get the result + a link to the full web version. ~150 lines of Python, no external infra needed.

---

## 1. Get a token (2 min)

1. Open Telegram, search for **@BotFather**
2. Send `/newbot`
3. Pick a name (e.g., **MetricTree Calculator**)
4. Pick a username ending in `bot` (e.g., **metrictree_calc_bot**)
5. BotFather returns a token like `8123456789:AAEexxxxxxxxxxxxx`. Copy it.

Optional polish via @BotFather:
- `/setdescription` — "Quick calculator for 9 product metrics. Full version: metricstree.vercel.app"
- `/setabouttext` — "Free SaaS / B2C metrics calculator. LTV, CAC, MRR, NRR, NPS, Runway, Burn Multiple, Rule of 40."
- `/setcommands` — paste:
  ```
  start - Welcome menu
  ltv - Lifetime Value: AOV freq lifetime
  cac - Customer Acquisition Cost: spend customers
  mrr - Monthly Recurring Revenue: amount
  churn - Churn Rate: lost total
  nps - Net Promoter Score: promoters detractors total
  runway - Months left: cash burn
  ltvcac - LTV:CAC ratio: ltv cac
  burn - Burn Multiple: burn newARR
  rule40 - Rule of 40: growth margin
  web - Open full web calculator
  help - Show all commands
  ```
- `/setuserpic` — upload `og-image.png` from this repo

---

## 2. Run locally (testing, 5 min)

```bash
pip install python-telegram-bot==21.6
export BOT_TOKEN="8123456789:AAEexxxxxxxxxxxxx"
python bot.py
```

Open `t.me/your_bot_username` and send `/start`. Then `/ltv 2500 4 3`.

---

## 3. Deploy to production

The bot uses long-polling — no public URL needed. Pick the cheapest option:

### A) Railway (recommended, free tier 500h/mo)

1. `railway login` (web auth)
2. From repo root:
   ```bash
   railway init
   railway add  # no DB needed
   railway up
   ```
3. In Railway dashboard:
   - **Variables** → add `BOT_TOKEN`
   - **Settings** → **Start Command**: `python bot.py`
4. Done — bot runs 24/7.

### B) Render (free tier, sleeps after 15min idle — fine for low-traffic bot)

1. Create a new **Background Worker** on render.com
2. Connect this GitHub repo
3. **Build**: `pip install python-telegram-bot==21.6`
4. **Start**: `python bot.py`
5. **Environment** → add `BOT_TOKEN`

### C) Fly.io (free 3-VM tier)

```bash
fly launch  # creates fly.toml, picks region
fly secrets set BOT_TOKEN="..."
fly deploy
```

Add `fly.toml`:
```toml
[processes]
worker = "python bot.py"

[build]
builder = "paketobuildpacks/builder:base"
```

### D) Anything else with Python + a way to set env vars

VPS, your home server, Heroku-style PaaS, AWS Lightsail — all work. The bot only needs `python` and outbound HTTPS to `api.telegram.org`.

---

## 4. Switching to webhook mode (for Vercel-style serverless)

The provided `bot.py` uses **long polling** (simpler, runs forever). To deploy on Vercel/Netlify/Cloudflare you need **webhooks** instead:

1. Replace `app.run_polling()` with a webhook setup
2. Expose an HTTPS endpoint (e.g., `/api/bot-webhook`)
3. Call once: `curl -F "url=https://yourdomain/api/bot-webhook" https://api.telegram.org/bot$BOT_TOKEN/setWebhook`

This is a separate effort — skip until you actually need it. Long-polling on Railway costs $0 and is bulletproof.

---

## 5. Promoting the bot

Once live, mention `@metrictree_bot` in:
- Bot description on the main web app (footer link, About modal)
- LinkedIn launch post
- ProductHunt launch comment
- A line in PRO Финансы podcast episode descriptions
- Telegram channels: «Продакты», «SaaSный мир», «Product Hunt CIS»

---

## Acceptance test

```
/start            → welcome menu with metric buttons
/ltv 2500 4 3     → "$30,000 LTV · target ≥ 3× CAC"
/cac 50000 200    → "$250 CAC · SaaS payback norm 12–18 mo"
/runway 5000000 300000 → "16.7 months · normal"
/burn 500000 600000   → "0.83x Burn Multiple · excellent"
/rule40 35 10     → "45% · healthy"
/help             → all 9 commands listed
```

If all return correctly — you're ready to share the bot link.
