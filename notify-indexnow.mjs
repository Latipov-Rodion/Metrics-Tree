// IndexNow ping — instantly notifies Bing & Yandex about new/updated URLs.
//
// Usage:
//   node notify-indexnow.mjs           ← submits all URLs from sitemap.xml
//   node notify-indexnow.mjs /blog/foo ← submit a single URL
//   node notify-indexnow.mjs --since <sha> ← only URLs new/updated since <sha> (CI)
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
import { execFileSync } from 'node:child_process';

const ROOT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]):/, '$1:'));
const SITE = 'https://metricstree.vercel.app';
const KEY = 'adc339db06f9cdc739be3ab61241c033';
// The key file must be reachable at https://metricstree.vercel.app/<KEY>.txt — already created.
const KEY_LOCATION = `${SITE}/${KEY}.txt`;

function loadSitemapUrls() {
  const sm = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
  return [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
}

// loc → lastmod map of a sitemap.xml text.
const lastmods = (xml) => new Map(
  [...xml.matchAll(/<loc>([^<]+)<\/loc>(?:<lastmod>([^<]+)<\/lastmod>)?/g)].map(m => [m[1], m[2] || ''])
);

// URLs that are new, or whose <lastmod> changed, since commit `rev`. lastmod is
// derived from git history of each page's sources (build.mjs), so this is the
// set of pages whose content actually changed. Returns null when `rev` can't be
// read (first push, force-push, shallow clone) → caller submits everything.
function changedSince(rev) {
  if (!rev || /^0+$/.test(rev)) return null;
  let before;
  try {
    before = execFileSync('git', ['show', `${rev}:sitemap.xml`], {
      cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 16 << 20,
    });
  } catch { return null; }
  const prev = lastmods(before);
  const now = lastmods(fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8'));
  return [...now].filter(([loc, lm]) => prev.get(loc) !== lm).map(([loc]) => loc);
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
  if (arg === '--since') {
    const changed = changedSince(process.argv[3]);
    if (changed === null) {
      console.log('→ No usable base revision — submitting the whole sitemap');
      urls = loadSitemapUrls();
    } else if (changed.length === 0) {
      console.log('✓ No new or updated URLs since', process.argv[3].slice(0, 8), '— nothing to submit');
      return;
    } else {
      urls = changed;
    }
  } else if (arg) {
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
