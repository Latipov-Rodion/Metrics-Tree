// Site integrity validator — run in CI (and locally) to catch the classic
// footguns of this no-bundler static site:
//   1. vercel.json must be valid JSON
//   2. every rewrite destination .html file must exist on disk
//   3. every <loc> in sitemap.xml must be reachable (a rewrite source or a file)
//   4. every internal link in blog sources (/metric, /blog/..., /en/...) must resolve
//   5. every EN blog post must have a RU twin (so hreflang pairing isn't orphaned)
//
// Exits non-zero with a list of problems. No dependencies.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]):/, '$1:'));
const SITE = 'https://metricstree.vercel.app';
const errors = [];

// 1. vercel.json valid JSON
let vercel;
try {
  vercel = JSON.parse(fs.readFileSync(path.join(ROOT, 'vercel.json'), 'utf8'));
} catch (e) {
  console.error('✗ vercel.json is not valid JSON:', e.message);
  process.exit(1);
}

const rewrites = Array.isArray(vercel.rewrites) ? vercel.rewrites : [];
const sources = new Set(rewrites.map(r => r.source));
// Home pages served directly (not via an explicit rewrite source).
const HOME = new Set(['/', '/en', '/uz']);

const fileForPath = (p) => path.join(ROOT, p.replace(/^\//, ''));

// 2. Every rewrite destination that points to an .html file must exist.
for (const r of rewrites) {
  if (typeof r.destination === 'string' && r.destination.endsWith('.html')) {
    if (r.destination.includes(':')) continue; // dynamic :param rewrite — not a literal file
    if (!fs.existsSync(fileForPath(r.destination))) {
      errors.push(`rewrite destination missing on disk: ${r.destination}  (source ${r.source})`);
    }
  }
}

// A clean URL path is reachable if it's a home page, an explicit rewrite
// source, or maps to a real file (path or path.html).
const reachable = (p) => {
  if (HOME.has(p)) return true;
  if (sources.has(p)) return true;
  const f = fileForPath(p);
  return fs.existsSync(f) || fs.existsSync(f + '.html');
};

// 3. Every sitemap <loc> must be reachable.
const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
for (const m of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const p = m[1].replace(SITE, '') || '/';
  if (!reachable(p)) errors.push(`sitemap URL not reachable: ${m[1]}`);
}

// 4. Internal links in blog sources must resolve. Matches markdown links
// whose target starts with "/" (skips external http(s), anchors, queries).
const linkRe = /\]\((\/[^)\s#?]*)/g;
const blogDirs = [path.join(ROOT, 'blog-src'), path.join(ROOT, 'blog-src', 'en')];
for (const dir of blogDirs) {
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.md'))) {
    const txt = fs.readFileSync(path.join(dir, f), 'utf8');
    for (const m of txt.matchAll(linkRe)) {
      if (!reachable(m[1])) {
        errors.push(`${path.relative(ROOT, path.join(dir, f))}: dead internal link ${m[1]}`);
      }
    }
  }
}

// 5. Every EN blog post must have a RU twin (hreflang pairing).
const slugs = (dir) => fs.existsSync(dir)
  ? new Set(fs.readdirSync(dir).filter(x => x.endsWith('.md')).map(x => x.replace(/\.md$/, '')))
  : new Set();
const ruSlugs = slugs(path.join(ROOT, 'blog-src'));
for (const s of slugs(path.join(ROOT, 'blog-src', 'en'))) {
  if (!ruSlugs.has(s)) errors.push(`EN blog post '${s}' has no RU twin (orphaned hreflang)`);
}

// 6. Guard against regressing the metric count (was 52, then 35; canonical is 48 / 7 sections).
const STALE_COUNT = /(?:35|52)[\s-]?(?:product\s+|продуктов\w*\s+)?(?:metrics?|метрик\w*|калькулятор\w*)/i;
const countFiles = [
  'index.html', 'manifest.webmanifest', 'bot.py', 'generate_og.py',
  'press.html', 'embed.html', 'changelog.html', 'api-docs.html',
  'vs-profitwell.html', 'vs-baremetrics.html', 'vs-causal.html',
  'vs-chartmogul.html', 'vs-geckoboard.html', 'vs-finmodelslab.html',
];
for (const f of countFiles) {
  const fp = path.join(ROOT, f);
  if (!fs.existsSync(fp)) continue;
  const m = fs.readFileSync(fp, 'utf8').match(STALE_COUNT);
  if (m) errors.push(`${f}: stale metric count "${m[0].trim()}" — should be 48 metrics / 7 sections`);
}

if (errors.length) {
  console.error(`✗ validate-site: ${errors.length} issue(s):`);
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}
console.log('✓ validate-site: vercel.json valid · all rewrite targets exist · sitemap URLs reachable · blog links resolve · EN↔RU twins paired');
