# CLAUDE.md

Guidance for AI assistants (Claude Code and others) working in this repository.

> **⚠️ Read [`PROJECT_STATE.md`](PROJECT_STATE.md) first** — current snapshot (69 metrics,
> `/tree` driver-tree, `/api/insight` AI), the full "how to add a metric" checklist, the
> CI/build pipeline, and gotchas.
>
> **Architecture correction:** after a perf refactor, the app JS + **all metric data**
> (`metricsData`, `I18N_M`, `I18N_INSIGHTS`, `INDUSTRY_THRESHOLDS`, `RELATED`, `GOAL_QUESTIONS`,
> `DEEP_CONTENT`, `BENCHMARK_SOURCES`, `SCENARIO_TEMPLATES`) now live in **`/app.js`**, loaded by
> `index.html` — they are **no longer inlined in `index.html`**. `build.mjs` generates **69**
> per-metric pages + `sitemap.xml` + `benchmarks.html` from its `META` map. Parts of the layout
> description below were updated on 2026-11-03 — still trust `PROJECT_STATE.md` where they disagree.

## What this project is

**MetricTree** (metricstree.vercel.app) is a free online calculator for 69 product
metrics (LTV, CAC, MRR, ARR, Churn, DAU/MAU, NPS, Runway, etc.), with formulas,
industry benchmarks, and result interpretation. It targets product managers,
marketers, analysts, and founders. UI is trilingual: **Russian (default), English,
Uzbek (Latin)**.

It is a **zero-framework, no-bundler static site**. All app JS and all metric data live
in **`/app.js`** (~8,000 lines); `index.html` is only the shell (head/SEO + markup).
There is **no `package.json`, no `node_modules`, no build framework** — this is deliberate,
do not propose React, a bundler or npm dependencies. Build steps are plain Node ESM scripts;
tests use the built-in `node --test` (`test/*.test.mjs`).

The project is deployed on **Vercel** as static files plus a few **Edge Functions**
under `api/`. A companion **Telegram bot** (`bot.py`) is a separate Python process.

Note: most user-facing comments, content, and commit history are in **Russian**.
Match the existing language when editing content; keep code identifiers in English.

## Repository layout & changing metrics

See `PROJECT_STATE.md` for the authoritative layout, the data structures in `app.js`,
the 12-step "add a metric" checklist and the CI gates. Short version:

- `app.js` — the app: `metricsData`, i18n tables, benchmarks, goal-mode, deep content.
- `build.mjs` — generates 69 per-metric pages (`<id>.html`, `en/<id>.html`, `uz/<id>.html`),
  `sitemap.xml`, `benchmarks.html` from its `META` map + `metricsData` read from `app.js`.
  Generated pages, `blog/*.html`, `sitemap.xml`, `benchmarks.html` are artifacts — never hand-edit.
- Hand-authored pages: `admin.html`, `press.html`, `embed.html`, `changelog.html`,
  `api-docs.html`, `vs-*.html`, `tree.html`, `report.html`, `quiz.html` etc.
- `api/` — Vercel Edge Functions (`calc.js`, `lead.js`, `leads.js`, `insight.js`).
- `vercel.json` — hand-written rewrites (`cleanUrls:false`), headers, caching.

Full build chain (CI fails if artifacts drift):

```bash
node build-industries.mjs && node build-glossary.mjs && node build.mjs && node build-blog.mjs && node inject-theme-sync.mjs
node --check app.js && node --test test/*.test.mjs && node validate-site.mjs
```

### i18n / translations → edit `app.js`

- `I18N_UI[lang][key]` — UI string translations (search `I18N` around line 2365).
- `I18N_M[metricId][lang]` — per-metric `{ name, formula, description }` for `en`/`uz`.
- Russian is the default and lives directly in `metricsData` (no separate table).
- Benchmark/insight/goal strings (`I18N_THRESH`, `I18N_INSIGHTS`, `I18N_GOAL`) are keyed by the
  exact Russian text — change the RU string, update the key.
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

After editing `app.js`, `build.mjs` or `blog-src/`, run the full build chain (above)
before committing so artifacts stay current.

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

- **`app.js` is the single source of truth** for the app. Never hand-edit a
  generated per-metric `*.html` or `blog/*.html` — your change will be overwritten on
  the next build. Edit the source, then run the generator.
- **Always rebuild after editing source**: run the full chain, `inject-theme-sync.mjs` last
  (it versions `/app.js`, `/app.css` by hash in every page). Commit source + regenerated files;
  a second run must produce zero diff.
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

- Branch from fresh main: `git fetch origin main && git checkout -b feat/<x> origin/main`
  (`feat/` or `fix/`). Squash-merge on green CI; recreate the branch from main after a squash.
- Write clear, descriptive commit messages; the repo follows a loose Conventional-Commits
  style (`feat:`, `fix(ux):`, `docs(seo):`, …).
- After pushing, open a PR as ready for review.
