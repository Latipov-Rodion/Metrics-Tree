# CLAUDE.md

Guidance for AI assistants (Claude Code and others) working in this repository.

## What this project is

**MetricTree** (metricstree.vercel.app) is a free online calculator for 69 product
metrics (LTV, CAC, MRR, ARR, Churn, DAU/MAU, NPS, Runway, etc.), with formulas,
industry benchmarks, and result interpretation. It targets product managers,
marketers, analysts, and founders. UI is trilingual: **Russian (default), English,
Uzbek (Latin)**.

It is a **zero-framework, no-bundler static site**. The entire web app —
HTML + CSS + JS + all metric definitions + i18n strings — lives inline in a single
file, `index.html` (~8,400 lines). There is **no `package.json`, no `node_modules`,
no build framework, no test suite.** Build steps are plain Node ESM scripts run
directly with `node`.

The project is deployed on **Vercel** as static files plus a few **Edge Functions**
under `api/`. A companion **Telegram bot** (`bot.py`) is a separate Python process.

Note: most user-facing comments, content, and commit history are in **Russian**.
Match the existing language when editing content; keep code identifiers in English.

## Repository layout

```
index.html              ← THE app. HTML+CSS+JS+69 metric defs+i18n, all inline. Source of truth.
build.mjs               ← Generates 49 per-metric SEO pages (dau.html, ltv.html, …) from index.html
build-blog.mjs          ← Converts blog-src/*.md → blog/*.html (Markdown → static HTML)
bot.py                  ← Telegram bot companion (python-telegram-bot v21), standalone process
generate_og.py          ← Generates og-image.png via Pillow
check-indexing.mjs      ← Checks Google indexing status of URLs
notify-indexnow.mjs     ← Pings IndexNow API after deploy

api/                    ← Vercel Edge Functions (serverless)
  calc.js               ← Public calculator API: GET/POST /api/calc
  lead.js               ← Lead capture → Telegram + Resend email
  leads.js              ← Admin: read leads from Vercel KV (secret-protected)

blog-src/*.md           ← Blog post SOURCES (edit these)
blog/*.html             ← Generated blog output (build artifacts, do not hand-edit)
marketing/              ← GTM docs: GSC_YANDEX_SETUP.md, OUTREACH_EMAILS.md, SOCIAL_POSTS.md

vercel.json             ← URL rewrites (clean RU/EN/UZ URLs) + security headers + caching
sitemap.xml, robots.txt, manifest.webmanifest, favicon.svg

*.html (root)           ← MIXED. Two kinds — see below.
```

### Two kinds of root `*.html` files (important)

1. **Generated per-metric pages** — `dau.html`, `ltv.html`, `cac.html`, `runway.html`,
   etc. (~49 files). These are **build artifacts from `build.mjs`** and must NOT be
   hand-edited. They are full copies of `index.html` with only the `<head>` meta
   (title, description, OG, canonical, FAQ/HowTo JSON-LD, hreflang) swapped per metric.
2. **Hand-authored standalone pages** — `admin.html`, `press.html`, `embed.html`,
   `changelog.html`, `api-docs.html`, `vs-profitwell.html`, `vs-baremetrics.html`,
   `vs-causal.html`, `vs-chartmogul.html`. Edit these directly.

To tell them apart: generated pages are ~590 KB (full app); standalone pages are tens of KB.

## How to make changes

### Changing the app, a calculation, or a metric → edit `index.html`, then rebuild

All metric logic lives in the `metricsData` object in `index.html` (starts ~line 3761).
It is keyed by **section**, and each section has `name` + a `metrics[]` array:

```js
const metricsData = {
  b2c:    { name: 'B2C',    metrics: [ … ] },
  b2b:    { name: 'B2B',    metrics: [ … ] },
  sales:  { name: 'AARRR',  metrics: [ … ] },   // note: key `sales` → display name "AARRR"
  finance:{ name: 'Finance',metrics: [ … ] },
  growth: { name: 'Growth', metrics: [ … ] },
  qa:     { name: 'QA',     metrics: [ … ] },
  support:{ name: 'Support',metrics: [ … ] },
};
```

Each metric object looks like:

```js
{
  id: 'ltv', name: 'LTV',
  formula: 'AOV × частота × время жизни',
  description: '…',
  threshold: 'Плохо: …, Средне: …, Хорошо: …',
  inputs: [ { label, placeholder, key, min, help? }, … ],   // key is used in share URLs
  calculate: v => { … return value or null; },              // uses sanitizeNumber(v.<key>)
  unit: '$',
  insight: val => ({ color, text }),                        // color-coded interpretation
}
```

**After editing any metric in `index.html`, regenerate the per-metric pages:**

```bash
node build.mjs       # rewrites the 49 *.html per-metric files; prints "✓ Generated N"
```

If you add or remove a metric, you must keep these in sync:
- the `metricsData` entry in `index.html`,
- the `META` map in `build.mjs` (per-metric `title`/`desc`/FAQ — currently 69 entries),
- `RELATED`, `SHORT_NAME` maps in `build.mjs` (related-metric links),
- the corresponding calculator in `api/calc.js` (only ~22 metrics are exposed via API),
- `sitemap.xml` and the `rewrites` in `vercel.json` (RU + `/en/` + `/uz/` URLs),
- i18n entries in `index.html` (`I18N_M[metricId]` for EN/UZ name/formula/description).

### i18n / translations → edit `index.html`

- `I18N_UI[lang][key]` — UI string translations (search `I18N` around line 2365).
- `I18N_M[metricId][lang]` — per-metric `{ name, formula, description }` for `en`/`uz`.
- Russian is the default and lives directly in `metricsData` (no separate table).
- Missing translations fall back to Russian.

### Blog → edit `blog-src/*.md`, then rebuild

```bash
node build-blog.mjs   # blog-src/*.md → blog/*.html
```

Markdown files use simple YAML-ish frontmatter (`title`, `description`, `date`,
`keywords`, optional `embed: <metricId>` to embed a calculator widget). The Markdown
parser in `build-blog.mjs` is a minimal custom subset, not full CommonMark.
After adding a post, add its `/blog/<slug>` rewrite to `vercel.json` and a URL to `sitemap.xml`.

### Edge Functions → edit `api/*.js`

All three are Vercel Edge runtime (`export const config = { runtime: 'edge' }`).
They read configuration from **Vercel environment variables** (never commit secrets):
- `api/lead.js`: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `RESEND_API_KEY`,
  `RESEND_TO_EMAIL`, `RESEND_FROM_EMAIL` (all optional; degrades gracefully).
- `api/leads.js`: `ADMIN_SECRET`, `KV_REST_API_URL`, `KV_REST_API_TOKEN` (Vercel KV).
- `api/calc.js`: no env needed; open CORS; soft rate limit 60 req/min.

### Telegram bot → edit `bot.py`

Standalone Python long-poll process (`python-telegram-bot==21.6`), reads `BOT_TOKEN`
env var. Not part of the Vercel deploy; hosted separately (Railway/Render/Fly). See
`TELEGRAM_BOT_SETUP.md`. Keep its calculators in sync with the web app's formulas.

## Local development

No install step. Serve the directory with any static server:

```bash
python -m http.server 5173      # then open http://localhost:5173
# or: npx serve .
# or: just open index.html in a browser
```

After editing `index.html` or `blog-src/`, run the relevant generator
(`node build.mjs` / `node build-blog.mjs`) before committing so artifacts stay current.

## Deployment

Vercel, already configured. `vercel deploy --prod` (or push to the deploy branch).
`vercel.json` provides:
- clean-URL rewrites: `/ltv` → `/ltv.html`, plus `/en/ltv` and `/uz/ltv` variants,
  and rewrites for blog posts and standalone pages,
- security headers (CSP, HSTS, X-Frame-Options),
- cache headers for static assets.

URLs are language-prefixed: RU at root (`/ltv`), EN at `/en/ltv`, UZ at `/uz/ltv`.
Share URLs encode field values by each input's `key`, e.g. `/ltv?aov=2500&freq=4&life=3`.

## Conventions & gotchas

- **`index.html` is the single source of truth** for the app. Never hand-edit a
  generated per-metric `*.html` or `blog/*.html` — your change will be overwritten on
  the next build. Edit the source, then run the generator.
- **Always rebuild after editing source**: `node build.mjs` (and/or `node build-blog.mjs`)
  so the committed artifacts match `index.html`. Commits typically include both the
  source change and the regenerated `*.html` files.
- **No framework / no transpile**: vanilla HTML/CSS/JS only. Don't introduce a bundler,
  npm dependencies, or a `package.json` unless explicitly asked — it's a deliberate
  "no build step" project.
- **Content language is Russian** by default; English/Uzbek go through the i18n tables.
  Keep code identifiers and `key`s in English.
- **Secrets** live in Vercel env vars, never in the repo. `.env*` is gitignored.
- **SEO matters**: per-metric pages exist for distinct titles/descriptions + FAQ/HowTo
  JSON-LD. When adding metrics, keep `META` in `build.mjs`, `sitemap.xml`, and
  `vercel.json` rewrites consistent.

## Git workflow

- This branch: develop on `claude/claude-md-docs-ZLf4t` (or the branch assigned to the task).
- Write clear, descriptive commit messages; the repo follows a loose Conventional-Commits
  style (`feat:`, `fix(ux):`, `docs(seo):`, …).
- After pushing, open a PR as ready for review.
