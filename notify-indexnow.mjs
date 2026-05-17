// IndexNow ping — instantly notifies Bing & Yandex about new/updated URLs.
//
// Usage:
//   node notify-indexnow.mjs           ← submits all URLs from sitemap.xml
//   node notify-indexnow.mjs /blog/foo ← submit a single URL
//
// IndexNow doc: https://www.indexnow.org/
// Bing engine: https://api.indexnow.org/IndexNow
// Yandex engine: https://yandex.com/indexnow
//
// Both engines share the same protocol, but submitting to one IS NOT enough
// — Bing aggregates among IndexNow partners (incl. Yandex) but Yandex direct
// gives faster Russian-search indexing. We hit both.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]):/, '$1:'));
const SITE = 'https://metricstree.vercel.app';
const KEY = 'adc339db06f9cdc739be3ab61241c033';
// The key file must be reachable at https://metricstree.vercel.app/<KEY>.txt — already created.
const KEY_LOCATION = `${SITE}/${KEY}.txt`;

function loadSitemapUrls() {
  const sm = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
  return [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
}

async function submitToEngine(engineUrl, urls) {
  const body = {
    host: 'metricstree.vercel.app',
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };
  const resp = await fetch(engineUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  return { engine: engineUrl, status: resp.status, ok: resp.ok };
}

async function main() {
  const arg = process.argv[2];
  let urls;
  if (arg) {
    urls = [arg.startsWith('http') ? arg : `${SITE}${arg.startsWith('/') ? '' : '/'}${arg}`];
  } else {
    urls = loadSitemapUrls();
  }
  console.log(`→ Submitting ${urls.length} URL(s) to IndexNow`);
  // Bing also distributes to IndexNow partners (Yandex, Seznam, Naver),
  // but hitting both endpoints directly is harmless and slightly faster.
  const engines = [
    'https://api.indexnow.org/IndexNow',
    'https://yandex.com/indexnow',
  ];
  const results = await Promise.all(engines.map(e => submitToEngine(e, urls).catch(err => ({ engine: e, error: err.message }))));
  results.forEach(r => console.log(`  ${r.ok ? '✓' : '✗'} ${r.engine} → ${r.status || r.error}`));
  // Spec: 200 = accepted; 202 = quarantined for verification (also ok);
  // 422 = key not reachable (check that <KEY>.txt is deployed)
  // 429 = rate limited (slow down or batch)
  if (results.some(r => !r.ok)) process.exit(1);
}

main().catch(e => { console.error(e); process.exit(1); });
