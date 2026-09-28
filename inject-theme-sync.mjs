// Last step of the build chain. Walks every HTML file and
//   1. adds a <script> tag pointing to /theme-sync.js if not already present
//      (skipping the app shell pages, which carry their own theme machinery);
//   2. stamps a content hash on every reference to the shared static assets
//      (/app.js, /app.css, /theme-sync.js, /ab-test.js → /app.js?v=<8 hex>).
//
// Why (2): those files used to be cached for a day (+ a week of
// stale-while-revalidate) under a fixed URL, so after a deploy a returning
// visitor could run yesterday's app.js against today's HTML. With the hash in
// the URL every deploy that changes a file changes its URL, so the versioned
// URL can be cached forever (see vercel.json: `immutable` when ?v= is present).
// The hash is sha256 of the file bytes → deterministic; CI regenerates it and
// fails if a committed page references a stale hash. Must run LAST (after every
// generator that emits these tags), which the CI chain already guarantees.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]):/, '$1:'));

// Pages that need theme-sync. Skip per-metric .html (they share index.html theme system)
// and skip index.html (it has its own complete theme machinery).
// Per-metric page ids are derived from metricsData in app.js rather than hardcoded.
// The old hardcoded list had drifted to 49 of 69 ids, so the 20 metrics added later
// were NOT skipped: they got a redundant /theme-sync.js that the other 49 never had,
// and because build.mjs regenerates those pages from index.html (stripping it) while
// this script re-adds it, the committed artifacts depended on which script ran last —
// which is why the CI "artifacts in sync" job failed depending on build order.
function metricPageNames() {
  const appJs = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
  const ids = [...appJs.matchAll(/^\s{20}id: '([A-Za-z_0-9]+)'/gm)].map(m => m[1]);
  if (ids.length < 60) {
    console.error(`::error::inject-theme-sync: only ${ids.length} metric ids found in app.js — refusing to run with a stale skip list.`);
    process.exit(1);
  }
  return ids.map(id => `${id}.html`);
}

const SKIP_FILES = new Set([
  'index.html',
  // per-metric pages — they share index.html's theme system
  ...metricPageNames(),
]);
// App-shell pages live at the root and, since the EN/UZ pages became physical
// files, also directly under en/ and uz/ (en/ltv.html, uz/index.html, …).
const APP_SHELL_DIR = /^(?:(?:en|uz)\/)?[^/]+$/;

const INJECTION = '\n<script src="/theme-sync.js" defer></script>';

const VERSIONED_ASSETS = ['app.js', 'app.css', 'theme-sync.js', 'ab-test.js'];
const ASSET_HASH = Object.fromEntries(VERSIONED_ASSETS.map(name => [
  name,
  crypto.createHash('sha256').update(fs.readFileSync(path.join(ROOT, name))).digest('hex').slice(0, 8),
]));
// Only quoted, root-absolute references in attributes/strings: "/app.js" or
// "/app.js?v=deadbeef" (an existing stamp is replaced).
const ASSET_REF = /(["'])\/(app\.js|app\.css|theme-sync\.js|ab-test\.js)(?:\?v=[0-9a-f]{8})?\1/g;

function walk(dir, list = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    // Skip node_modules and every dot-dir (.git, .claude/worktrees/*, …): a run in
    // the main checkout must never rewrite files in nested git worktrees.
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, list);
    else if (entry.isFile() && entry.name.endsWith('.html')) list.push(full);
  }
  return list;
}

function processFile(file) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  const base = path.basename(file);
  const original = fs.readFileSync(file, 'utf8');
  let html = original;
  let theme;
  if (SKIP_FILES.has(base) && APP_SHELL_DIR.test(rel)) theme = 'skipped';
  else if (html.includes('/theme-sync.js')) theme = 'already';
  else if (!html.includes('</head>')) theme = 'no-head';
  else {
    html = html.replace('</head>', INJECTION + '\n</head>');
    theme = 'injected';
  }
  html = html.replace(ASSET_REF, (_, q, name) => `${q}/${name}?v=${ASSET_HASH[name]}${q}`);
  if (html !== original) fs.writeFileSync(file, html);
  return { theme, versioned: html !== original && theme !== 'injected' ? 1 : 0 };
}

function main() {
  const all = walk(ROOT);
  const counts = { injected: 0, already: 0, skipped: 0, 'no-head': 0 };
  let restamped = 0;
  for (const file of all) {
    const r = processFile(file);
    counts[r.theme]++;
    restamped += r.versioned;
  }
  console.log(`✓ Theme-sync injected into ${counts.injected} files`);
  console.log(`  Already had: ${counts.already}, Skipped (per-metric/index): ${counts.skipped}, No </head>: ${counts['no-head']}`);
  console.log(`✓ Asset versions: ${VERSIONED_ASSETS.map(n => `${n}?v=${ASSET_HASH[n]}`).join(', ')} (re-stamped ${restamped} file(s))`);
}

main();
