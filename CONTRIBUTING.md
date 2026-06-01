# Contributing to MetricTree

Thanks for your interest! MetricTree is a deliberately **zero-framework,
no-bundler static site** — there is no `package.json`, no `node_modules`, and no
build framework. Build steps are plain Node ESM scripts run directly with `node`.
Please keep changes in that spirit (no new runtime dependencies unless discussed).

New to the codebase? Read [`CLAUDE.md`](./CLAUDE.md) first — it explains the
source-of-truth model and the sync points in detail.

## Project model in one minute

- **`index.html`** is the source of truth for the whole app (HTML + CSS + JS +
  all 48 metric definitions + i18n, inline).
- **`build.mjs`** regenerates the 49 per-metric SEO pages (`ltv.html`, …) and
  `sitemap.xml` from `index.html`. **Never hand-edit a generated page.**
- **`build-blog.mjs`** turns `blog-src/*.md` (RU) and `blog-src/en/*.md` (EN)
  into `/blog` and `/en/blog`.

## Making a change

1. **App / a metric / a calculation** → edit `index.html`, then run:
   ```bash
   node build.mjs
   ```
2. **Blog** → edit `blog-src/**.md`, then run:
   ```bash
   node build-blog.mjs
   ```
   An EN post must share its slug with a RU post (for hreflang pairing).
3. **API formulas** (`api/calc.js`) → keep them in sync with `index.html` and
   `bot.py`, and update `test/calc.test.mjs`.
4. **Adding/removing a metric** → keep these in sync (see `CLAUDE.md`):
   `metricsData` (index.html), `META`/`RELATED`/`SHORT_NAME` (build.mjs),
   `api/calc.js`, `sitemap.xml`, `vercel.json` rewrites, and the i18n tables.

## Before you push

Run the same checks CI runs (all plain `node`, no install):

```bash
node build.mjs && node build-blog.mjs   # regenerate artifacts
git diff --quiet                         # must be clean (artifacts in sync)
node validate-site.mjs                   # links, sitemap, rewrites, hreflang, counts
node --test test/*.test.mjs              # calculator unit tests
```

Commit **both** the source change and the regenerated artifacts together.

## Commit messages

The repo follows a loose Conventional-Commits style: `feat:`, `fix(ux):`,
`docs(seo):`, `ci:`, etc. Content and most comments are in Russian; keep code
identifiers and metric `key`s in English.

## Local preview

No install step — serve the directory with any static server:

```bash
python -m http.server 5173   # then open http://localhost:5173
```
