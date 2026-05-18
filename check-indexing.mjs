// Indexing status checker — runs without Google API key.
//
// Uses Google's "site:" search operator approximation via search-result count.
// Not as accurate as Search Console, but works without auth — good for weekly
// sanity check ("am I indexed?").
//
// Usage:
//   node check-indexing.mjs              ← check homepage + 10 top URLs
//   node check-indexing.mjs --full       ← check all URLs in sitemap.xml
//   node check-indexing.mjs --domain     ← count total indexed pages via site:
//
// Note: Google has no public API for indexing status without OAuth.
// This script uses HEAD requests to verify URLs are reachable (which is necessary
// but not sufficient for indexing). For real indexing status — use Search Console.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]):/, '$1:'));
const SITE = 'https://metricstree.vercel.app';

const TOP_URLS = [
  '/',
  '/ltv', '/cac', '/mrr', '/burnMultiple', '/ruleOf40', '/nrr', '/churn', '/runway',
  '/blog/', '/blog/burn-multiple-saas-2026', '/blog/ltv-cac-unit-economics', '/blog/rule-of-40-saas',
  '/vs-profitwell', '/api-docs', '/embed', '/changelog', '/press',
];

function loadSitemapUrls() {
  const sm = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
  return [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
}

async function checkUrl(url) {
  try {
    const r = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    return { url, status: r.status, ok: r.ok };
  } catch (e) {
    return { url, status: 0, error: e.message };
  }
}

async function main() {
  const args = process.argv.slice(2);
  const full = args.includes('--full');
  const domain = args.includes('--domain');

  if (domain) {
    console.log('\n📊 Domain-level check (approximate)');
    console.log('  To get accurate count, manually run in Google:');
    console.log(`    site:metricstree.vercel.app`);
    console.log('  Or in Search Console → Coverage report');
    console.log('');
    return;
  }

  const urls = full ? loadSitemapUrls() : TOP_URLS.map(p => `${SITE}${p}`);
  console.log(`\n🔍 Checking ${urls.length} URLs for reachability...\n`);

  const results = [];
  // Parallelize but cap at 10 concurrent to avoid being rate-limited
  for (let i = 0; i < urls.length; i += 10) {
    const batch = urls.slice(i, i + 10);
    const batchResults = await Promise.all(batch.map(checkUrl));
    results.push(...batchResults);
  }

  let okCount = 0;
  results.forEach(r => {
    const icon = r.ok ? '✓' : '✗';
    const path = r.url.replace(SITE, '') || '/';
    console.log(`  ${icon} ${r.status || 'ERR'}  ${path}`);
    if (r.ok) okCount++;
  });

  console.log(`\n📊 Result: ${okCount}/${results.length} URLs reachable (${Math.round(okCount/results.length*100)}%)`);

  if (okCount !== results.length) {
    console.log('\n⚠️  Some URLs not reachable. Common causes:');
    console.log('    - Vercel deploy still in progress (wait 30 sec, retry)');
    console.log('    - URL typo in sitemap.xml or TOP_URLS list');
    console.log('    - Vercel rewrites not configured for that path');
  }

  console.log('\n📈 Next steps:');
  console.log('  1. Check actual indexing in Google Search Console → Coverage');
  console.log('  2. If <50% indexed after 2 weeks → request manual indexing for top URLs');
  console.log('  3. Run `node notify-indexnow.mjs` to ping Bing+Yandex instantly');
  console.log('');
}

main().catch(e => { console.error(e); process.exit(1); });
