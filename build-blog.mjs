// Blog generator — converts Markdown posts to static HTML.
//
// Sources:
//   blog-src/*.md       → Russian posts   → /blog/<slug>      (blog/<slug>.html)
//   blog-src/en/*.md    → English posts   → /en/blog/<slug>   (en/blog/<slug>.html)
//
// Each post gets unique <title>, og tags, canonical URL, BlogPosting JSON-LD.
// When the same <slug> exists in both languages, the posts are cross-linked via
// hreflang alternates (ru ↔ en, x-default → ru).
//
// Frontmatter format (YAML-ish, simple):
// ---
// title: Post Title
// description: Short description for OG/meta
// date: 2026-05-17
// keywords: comma, separated, keywords
// embed: ltv          # optional — embeds calculator widget at end of post
// ---
// # Markdown content here

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]):/, '$1:'));
const SITE = 'https://metricstree.vercel.app';
const SRC_DIR = path.join(ROOT, 'blog-src');
const OUT_DIR = path.join(ROOT, 'blog');

// Per-language chrome / microcopy. Russian values reproduce the original
// template exactly so RU output stays byte-identical.
const LANGS = {
  ru: {
    out: OUT_DIR,
    urlBase: '/blog',
    author: 'Родион Латыпов',
    navCalc: 'Калькулятор →',
    homeHref: '/',
    blogHref: '/blog/',
    metaBy: 'автор:',
    embedHeading: '🧮 Считай прямо здесь:',
    embedOpenFull: 'Открыть в полной версии:',
    iframeTitle: (id) => `MetricTree ${id} калькулятор`,
    shareLabel: 'Поделиться:',
    footerAllPosts: 'Все посты',
    footerCalc: 'Калькулятор',
    indexTitle: 'Blog — MetricTree | Гайды по продуктовым метрикам',
    indexDesc: 'Гайды и разборы продуктовых метрик: Burn Multiple, Rule of 40, LTV:CAC, NRR, MRR growth — формулы, бенчмарки, рекомендации.',
    indexOgTitle: 'MetricTree Blog — Гайды по продуктовым метрикам',
    indexOgDesc: 'Разборы LTV:CAC, Burn Multiple, Rule of 40, NRR и других SaaS-метрик. С формулами, бенчмарками, real-world примерами.',
    indexH1: 'Blog',
    indexLede: 'Глубокие гайды по продуктовым метрикам: формулы, отраслевые бенчмарки, real-world применение. Каждый пост включает интерактивный калькулятор.',
  },
  en: {
    out: path.join(ROOT, 'en', 'blog'),
    urlBase: '/en/blog',
    author: 'Rodion Latipov',
    navCalc: 'Calculator →',
    homeHref: '/en',
    blogHref: '/en/blog/',
    metaBy: 'by',
    embedHeading: '🧮 Calculate it right here:',
    embedOpenFull: 'Open the full version:',
    iframeTitle: (id) => `MetricTree ${id} calculator`,
    shareLabel: 'Share:',
    footerAllPosts: 'All posts',
    footerCalc: 'Calculator',
    indexTitle: 'Blog — MetricTree | Product metrics guides',
    indexDesc: 'Guides and breakdowns of product metrics: Burn Multiple, Rule of 40, LTV:CAC, NRR, MRR growth — formulas, benchmarks, recommendations.',
    indexOgTitle: 'MetricTree Blog — Product metrics guides',
    indexOgDesc: 'Breakdowns of LTV:CAC, Burn Multiple, Rule of 40, NRR and other SaaS metrics. With formulas, benchmarks and real-world examples.',
    indexH1: 'Blog',
    indexLede: 'In-depth product metrics guides: formulas, industry benchmarks, real-world application. Every post includes an interactive calculator.',
  },
};

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };
  const meta = {};
  m[1].split('\n').forEach(line => {
    const kv = line.match(/^([a-z_]+):\s*(.+)$/i);
    if (kv) meta[kv[1].trim()] = kv[2].trim();
  });
  return { meta, body: m[2] };
}

// Minimal Markdown -> HTML (we don't need full CommonMark, just standard subset).
function md2html(md) {
  let html = md;
  // Code blocks ```
  html = html.replace(/```([a-z]*)\n([\s\S]*?)```/g, (_, lang, code) =>
    `<pre><code class="language-${lang}">${code.replace(/[<>&]/g, c => ({ '<':'&lt;','>':'&gt;','&':'&amp;' }[c]))}</code></pre>`);
  // Headings ###/##/#
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  // Bold **text** & italic *text*
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
  // Inline code `x`
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Links [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  // Unordered lists -
  html = html.replace(/(^- .+(?:\n- .+)*)/gm, m =>
    '<ul>' + m.split('\n').map(li => '<li>' + li.replace(/^- /, '') + '</li>').join('') + '</ul>');
  // Tables — minimal (must be GFM-style)
  html = html.replace(/(^\|.+\|\n\|[-:|\s]+\|\n(?:\|.+\|\n?)+)/gm, m => {
    const rows = m.trim().split('\n');
    const header = rows[0].split('|').map(c => c.trim()).filter(Boolean);
    const body = rows.slice(2).map(r => r.split('|').map(c => c.trim()).filter((_, i, arr) => i < arr.length));
    const thead = '<thead><tr>' + header.map(h => '<th>' + h + '</th>').join('') + '</tr></thead>';
    const tbody = '<tbody>' + body.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody>';
    return '<table>' + thead + tbody + '</table>';
  });
  // Paragraphs (split on double newlines, wrap if not already block)
  html = html.split(/\n\n+/).map(block => {
    block = block.trim();
    if (!block) return '';
    if (/^<(h\d|ul|ol|pre|table|blockquote|div)/.test(block)) return block;
    return '<p>' + block.replace(/\n/g, '<br>') + '</p>';
  }).join('\n\n');
  return html;
}

// hreflang alternate <link> lines, given which langs hold this slug.
function hreflangLinks(slug, slugLangs) {
  if (slugLangs.length < 2) return '';
  const lines = slugLangs.map(l =>
    `<link rel="alternate" hreflang="${l}" href="${SITE}${LANGS[l].urlBase}/${slug}">`);
  // Russian is the canonical default for the project.
  const def = slugLangs.includes('ru') ? 'ru' : slugLangs[0];
  lines.push(`<link rel="alternate" hreflang="x-default" href="${SITE}${LANGS[def].urlBase}/${slug}">`);
  return '\n' + lines.join('\n');
}

const TEMPLATE = (meta, html, slug, lang, altLinks, ogImage) => {
  const L = LANGS[lang];
  const url = `${SITE}${L.urlBase}/${slug}`;
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>${meta.title} | MetricTree Blog</title>
<meta name="description" content="${meta.description}">
<meta name="keywords" content="${meta.keywords || ''}">
<link rel="canonical" href="${url}">${altLinks}
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta property="og:title" content="${meta.title}">
<meta property="og:description" content="${meta.description}">
<meta property="og:type" content="article">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ogImage}">
<meta property="article:published_time" content="${meta.date || ''}">
<meta property="article:author" content="${L.author}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${meta.title}">
<meta name="twitter:image" content="${ogImage}">
<script type="application/ld+json">
${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: meta.title,
  description: meta.description,
  datePublished: meta.date,
  author: { '@type': 'Person', name: L.author, url: 'https://www.linkedin.com/in/rodion-latipov' },
  publisher: { '@type': 'Organization', name: 'MetricTree', url: SITE, logo: { '@type': 'ImageObject', url: `${SITE}/og-image.png` } },
  image: ogImage,
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  keywords: meta.keywords,
  inLanguage: lang
}, null, 2)}
</script>
<style>
:root { color-scheme: light dark; --bg:#0A0C0E; --bg-card:#1A1C1F; --border:#2C2F33; --text-1:#E8EAED; --text-2:#B0B3B8; --text-3:#85898f; --accent:#2A6DF4; --green:#4CAF50; }
html[data-theme="light"] { --bg:#F0F2F5; --bg-card:#fff; --border:#E1E4E8; --text-1:#1A1C1F; --text-2:#4A4E55; --text-3:#6e6e6e; }
* { box-sizing: border-box; }
body { margin:0; background:var(--bg); color:var(--text-1); font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; line-height:1.7; }
.nav { display:flex; justify-content:space-between; align-items:center; padding:1rem 1.25rem; max-width:760px; margin:0 auto; }
.brand { display:flex; align-items:center; gap:0.5rem; font-weight:700; font-size:1.05rem; text-decoration:none; color:var(--text-1); }
.brand-mark { width:24px; height:24px; background:var(--accent); border-radius:6px; }
.nav a { color:var(--text-2); text-decoration:none; }
article { max-width: 760px; margin: 0 auto; padding: 2rem 1.25rem 4rem; }
h1 { font-size: 2.2rem; line-height:1.2; margin: 0.5rem 0 0.5rem; letter-spacing:-0.02em; }
.meta { color: var(--text-3); font-size: 0.9rem; margin-bottom: 2rem; }
h2 { font-size: 1.4rem; margin: 2rem 0 0.75rem; }
h3 { font-size: 1.1rem; margin: 1.4rem 0 0.4rem; }
p { margin: 0.85rem 0; }
a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }
article a { color: var(--accent); text-decoration: underline; text-underline-offset: 2px; }
ul, ol { padding-left: 1.4rem; }
li { margin: 0.3rem 0; }
code { background: rgba(0,0,0,0.3); padding: 0.12rem 0.4rem; border-radius: 0.25rem; font-size: 0.92em; }
pre { background: #0d1117; padding: 0.9rem 1rem; border-radius: 0.6rem; overflow-x: auto; font-size: 0.85rem; line-height: 1.5; border:1px solid var(--border); }
pre code { background:none; padding:0; }
blockquote { border-left: 3px solid var(--accent); padding: 0.3rem 0 0.3rem 1rem; margin: 1.2rem 0; color: var(--text-2); }
table { width:100%; border-collapse: collapse; margin: 1.2rem 0; font-size: 0.92rem; background: var(--bg-card); border:1px solid var(--border); border-radius: 0.5rem; overflow:hidden; }
th, td { padding: 0.5rem 0.8rem; text-align: left; border-bottom: 1px solid var(--border); }
th { background: rgba(42,109,244,0.06); font-weight: 700; }
tr:last-child td { border-bottom: 0; }
strong { color: var(--text-1); font-weight: 700; }
em { color: var(--text-1); }
.embed-cta { background: var(--bg-card); border:1px solid var(--border); border-radius: 0.75rem; padding: 1.25rem 1.4rem; margin: 2rem 0 1rem; }
.embed-cta a.btn { display:inline-block; background:var(--accent); color:#fff; padding:0.55rem 1rem; border-radius:0.5rem; font-weight:600; text-decoration:none; margin-top:0.4rem; }
.embed-cta iframe { border:1px solid var(--border); border-radius:0.5rem; margin-top: 0.8rem; }
.footer { text-align:center; color:var(--text-3); margin-top:3rem; padding-top:1.5rem; border-top:1px solid var(--border); font-size:0.85rem; }
.share-row { margin: 1.5rem 0; padding: 0.85rem 1rem; background: var(--bg-card); border:1px solid var(--border); border-radius: 0.5rem; display:flex; gap: 0.8rem; align-items:center; flex-wrap:wrap; }
.share-row a { background:transparent; padding: 0.3rem 0.7rem; border:1px solid var(--border); border-radius: 0.4rem; font-size: 0.85rem; }
.share-row a:hover { border-color: var(--accent); }
</style>
<script src="/theme-sync.js" defer></script>
</head>
<body>
<nav class="nav">
  <a href="${L.homeHref}" class="brand"><span class="brand-mark"></span> MetricTree</a>
  <div><a href="${L.blogHref}">Blog</a> · <a href="${L.homeHref}">${L.navCalc}</a></div>
</nav>
<article>
<h1>${meta.title}</h1>
<div class="meta">${meta.date || ''} · ${L.metaBy} <a href="https://www.linkedin.com/in/rodion-latipov" target="_blank">${L.author}</a></div>
${html}
${meta.embed ? `
<div class="embed-cta">
  <strong>${L.embedHeading}</strong>
  <iframe src="${SITE}/${meta.embed}?embed=1" width="100%" height="650" loading="lazy" title="${L.iframeTitle(meta.embed)}"></iframe>
  <p style="font-size:0.85rem;color:var(--text-3);margin-top:0.6rem;">${L.embedOpenFull} <a href="${SITE}/${meta.embed}" target="_blank">${SITE}/${meta.embed}</a></p>
</div>` : ''}
<div class="share-row">
  ${L.shareLabel}
  <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(meta.title)}&url=${encodeURIComponent(url)}" target="_blank">𝕏 / Twitter</a>
  <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}" target="_blank">LinkedIn</a>
  <a href="https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(meta.title)}" target="_blank">Telegram</a>
</div>
</article>
<div class="footer">
  © 2026 <a href="https://www.linkedin.com/in/rodion-latipov" target="_blank">${L.author}</a> · <a href="${L.blogHref}">${L.footerAllPosts}</a> · <a href="${L.homeHref}">${L.footerCalc}</a> · <a href="https://github.com/Latipov-Rodion/Metrics-Tree" target="_blank">GitHub</a>
</div>
</body>
</html>
`;
};

const INDEX_TEMPLATE = (posts, lang) => {
  const L = LANGS[lang];
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>${L.indexTitle}</title>
<meta name="description" content="${L.indexDesc}">
<link rel="canonical" href="${SITE}${L.blogHref}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta property="og:title" content="${L.indexOgTitle}">
<meta property="og:description" content="${L.indexOgDesc}">
<meta property="og:url" content="${SITE}${L.blogHref}">
<meta property="og:image" content="${SITE}/og-image.png">
<style>
:root { color-scheme: light dark; --bg:#0A0C0E; --bg-card:#1A1C1F; --border:#2C2F33; --text-1:#E8EAED; --text-2:#B0B3B8; --text-3:#85898f; --accent:#2A6DF4; }
html[data-theme="light"] { --bg:#F0F2F5; --bg-card:#fff; --border:#E1E4E8; --text-1:#1A1C1F; --text-2:#4A4E55; --text-3:#6e6e6e; }
* { box-sizing: border-box; }
body { margin:0; background:var(--bg); color:var(--text-1); font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; line-height:1.6; }
.nav { display:flex; justify-content:space-between; align-items:center; padding:1rem 1.25rem; max-width:780px; margin:0 auto; }
.brand { display:flex; align-items:center; gap:0.5rem; font-weight:700; font-size:1.05rem; text-decoration:none; color:var(--text-1); }
.brand-mark { width:24px; height:24px; background:var(--accent); border-radius:6px; }
.nav a { color:var(--text-2); text-decoration:none; }
.wrap { max-width:780px; margin:0 auto; padding:2rem 1.25rem 4rem; }
h1 { font-size: 2.2rem; margin: 0.5rem 0 0.5rem; letter-spacing:-0.02em; }
.lede { font-size: 1.05rem; color: var(--text-2); margin: 0 0 2rem; }
.post-card { display:block; background: var(--bg-card); border:1px solid var(--border); border-radius: 0.75rem; padding: 1.25rem 1.4rem; margin-bottom: 0.85rem; text-decoration:none; color: inherit; transition: border-color 0.15s; }
.post-card:hover { border-color: var(--accent); }
.post-card h2 { font-size: 1.2rem; margin: 0 0 0.4rem; color: var(--text-1); }
.post-card .post-meta { font-size: 0.8rem; color: var(--text-3); margin-bottom: 0.4rem; }
.post-card .post-desc { font-size: 0.92rem; color: var(--text-2); margin: 0; }
.footer { text-align:center; color:var(--text-3); margin-top:3rem; padding-top:1.5rem; border-top:1px solid var(--border); font-size:0.85rem; }
</style>
<script src="/theme-sync.js" defer></script>
</head>
<body>
<nav class="nav">
  <a href="${L.homeHref}" class="brand"><span class="brand-mark"></span> MetricTree</a>
  <div><a href="${L.homeHref}">${L.navCalc}</a></div>
</nav>
<main class="wrap">
<h1>${L.indexH1}</h1>
<p class="lede">${L.indexLede}</p>
${posts.map(p => `
<a class="post-card" href="${L.urlBase}/${p.slug}">
  <div class="post-meta">${p.meta.date || ''}</div>
  <h2>${p.meta.title}</h2>
  <p class="post-desc">${p.meta.description}</p>
</a>
`).join('')}
</main>
<div class="footer">
  © 2026 <a href="https://www.linkedin.com/in/rodion-latipov" target="_blank">${L.author}</a> · <a href="${L.homeHref}">${L.footerCalc}</a> · <a href="https://github.com/Latipov-Rodion/Metrics-Tree" target="_blank">GitHub</a>
</div>
</body>
</html>
`;
};

function readPosts(dir, lang) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const raw = fs.readFileSync(path.join(dir, f), 'utf8');
      const { meta, body } = parseFrontmatter(raw);
      return { slug: f.replace(/\.md$/, ''), meta, body, lang };
    });
}

function main() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error('blog-src/ directory does not exist');
    process.exit(1);
  }

  const byLang = {
    ru: readPosts(SRC_DIR, 'ru'),
    en: readPosts(path.join(SRC_DIR, 'en'), 'en'),
  };

  // Map slug -> [langs] for hreflang pairing.
  const slugLangs = {};
  for (const lang of Object.keys(byLang)) {
    for (const p of byLang[lang]) (slugLangs[p.slug] ||= []).push(lang);
  }

  let total = 0;
  for (const lang of Object.keys(byLang)) {
    const posts = byLang[lang];
    if (!posts.length) continue;
    const L = LANGS[lang];
    if (!fs.existsSync(L.out)) fs.mkdirSync(L.out, { recursive: true });
    for (const p of posts) {
      const html = md2html(p.body);
      const alts = hreflangLinks(p.slug, slugLangs[p.slug]);
      const ogRel = lang === 'en' ? `blog-og/en/${p.slug}.png` : `blog-og/${p.slug}.png`;
      const ogImage = fs.existsSync(path.join(ROOT, ogRel)) ? `${SITE}/${ogRel}` : `${SITE}/og-image.png`;
      fs.writeFileSync(path.join(L.out, p.slug + '.html'), TEMPLATE(p.meta, html, p.slug, lang, alts, ogImage));
      total++;
    }
    // Sort by date descending, generate per-language index.
    const sorted = [...posts].sort((a, b) => (b.meta.date || '').localeCompare(a.meta.date || ''));
    fs.writeFileSync(path.join(L.out, 'index.html'), INDEX_TEMPLATE(sorted, lang));
  }
  console.log(`✓ Generated ${total} blog post(s): ${byLang.ru.length} ru + ${byLang.en.length} en → /blog/ + /en/blog/`);
}

main();
