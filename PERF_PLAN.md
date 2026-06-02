# Performance plan — extract shared CSS/JS from the inline pages

> Status: **plan, not yet implemented.** The CSS step is low-risk; the JS step
> needs a browser smoke-test before shipping (CI can't catch a visual/runtime
> regression). Captured here so it can be done deliberately.

## Measured footprint (index.html = 597 KB)

| Block | Size | Share of each page |
|-------|------|--------------------|
| inline `<style>` (1 block) | **94.6 KB** | 15.8% |
| inline `<script>` (8 blocks, incl. per-metric JSON-LD) | ~451 KB | 75.5% |
| **shared CSS + app JS** | **~545 KB** | **91.4%** |

`build.mjs` copies index.html into 49 per-metric pages → the shared payload is
duplicated **~25.5 MB** across the repo, and every navigation re-downloads ~590 KB
of mostly-identical HTML (gzip/brotli helps on the wire, but there's no cross-page
caching — each page is one big HTML document).

The `<style>` block is **byte-identical** across all 49 generated pages. The
inline JS is *not* fully identical only because the per-metric **JSON-LD**
(`<script type="application/ld+json">` FAQ/HowTo) differs — the actual
application logic script is shared.

## Plan

### Phase 1 — extract CSS (low risk, do first)
1. Move the single `<style>…</style>` block from index.html into **`/app.css`**.
2. Replace it with `<link rel="stylesheet" href="/app.css">`.
3. `build.mjs` already only rewrites `<head>` meta + appends JSON-LD/SEO — the
   `<link>` propagates to all 49 pages unchanged. No generator logic change needed
   beyond confirming the per-metric pages reference `/app.css`.
4. `vercel.json`: add a cache header for `/app.css` (e.g. `max-age=86400,
   stale-while-revalidate=604800`; or content-hash the filename for immutable).
5. CSP: `style-src 'self' 'unsafe-inline'` already allows a same-origin `/app.css`. ✓
   (Inline `style="…"` attributes elsewhere keep working via `'unsafe-inline'`.)
6. **Verify in a browser**: dark + light theme render identically on `/`, `/ltv`,
   a blog post, an industry page.

Result: −94.6 KB from every page; one cached stylesheet across all 50+ pages.

### Phase 2 — extract the app JS (higher risk)
1. Identify the single shared application `<script>` (the large logic block, NOT
   the per-metric JSON-LD blocks) and move it to **`/app.js`**, referenced with
   `<script src="/app.js" defer></script>`.
2. Keep the per-page JSON-LD blocks inline (they differ per metric).
3. Check execution-order assumptions: the inline script currently runs inline;
   with `defer` it runs after parse. Confirm nothing relies on synchronous
   mid-parse execution (likely fine — it reads `metricsData` and wires DOM on load).
4. CSP `script-src 'self' 'unsafe-inline'` allows `/app.js`. ✓
5. `vercel.json`: cache header for `/app.js`.
6. **Verify in a browser**: calculators compute, share-URL restore, language/theme
   toggles, Goal mode, embed mode (`?embed=1`), and the blog embeds.

Result: pages drop to ~tens of KB; the ~400 KB app loads once and is cached.

## Risks & mitigations
- **No runtime/visual coverage in CI** — the `artifacts-in-sync` + `validate-site`
  guards confirm structure, not rendering. → require a manual browser smoke-test
  per phase before merge.
- **Caching staleness** after a deploy → use a content-hashed filename
  (`/app.<hash>.css`) emitted by `build.mjs`, or accept `stale-while-revalidate`.
- **Single point of failure** — if `/app.css`/`/app.js` 404s, every page breaks.
  Mitigate by shipping Phase 1 alone first and watching.

## Recommendation
Do **Phase 1 (CSS)** as a small standalone PR with a browser check — high
value, near-zero risk. Treat **Phase 2 (JS)** as a separate, carefully
smoke-tested PR. Both are pure file-splitting (no bundler), consistent with the
project's no-build-step ethos.
