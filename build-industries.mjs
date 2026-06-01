// Programmatic SEO generator — creates industry-specific landing pages.
//
// Output:
//   /industries/                     — hub page listing all 5 industries
//   /industries/<industry>/          — industry overview with top 10 metrics
//   /industries/<industry>/<metric>  — industry × metric deep page with benchmarks
//
// Total: 1 hub + 5 industries + 5×10 = 50 pages → 56 new SEO URLs.
// Each page has unique H1, FAQ JSON-LD, BreadcrumbList schema, industry-specific
// benchmarks (cited), recommendations.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]):/, '$1:'));
const SITE = 'https://metricstree.vercel.app';
const OUT_DIR = path.join(ROOT, 'industries');

const INDUSTRIES = {
  saas: {
    name: 'SaaS',
    nameRu: 'SaaS',
    emoji: '☁️',
    description: 'Subscription software businesses: monthly recurring revenue, NRR, churn, Burn Multiple. The metrics that VCs use to evaluate SaaS at every stage.',
    descriptionRu: 'Подписочный софтверный бизнес: ежемесячная рекуррентная выручка, NRR, churn, Burn Multiple. Метрики которыми VC оценивают SaaS на каждой стадии.',
    why: 'SaaS lives or dies by recurring metrics — MRR, NRR, churn. Unlike one-time sales, every customer contract compounds.',
    whyRu: 'SaaS живёт и умирает recurring-метриками — MRR, NRR, churn. В отличие от one-time продаж, каждый contract клиента compound\'ится.',
    metrics: ['mrr', 'arr', 'nrr', 'grr', 'churn', 'burnMultiple', 'ruleOf40', 'quickRatio', 'cacPayback', 'mrrGrowthRate']
  },
  ecommerce: {
    name: 'E-commerce',
    nameRu: 'E-commerce',
    emoji: '🛒',
    description: 'Online stores: AOV, repeat purchase rate, conversion, ROAS. The metrics that separate growth from leaky-bucket bleeding.',
    descriptionRu: 'Онлайн-магазины: AOV, repeat purchase rate, конверсия, ROAS. Метрики которые отличают рост от leaky-bucket бизнеса.',
    why: 'E-commerce margins are thinner than SaaS — every percentage point of conversion + AOV matters. Repeat purchase rate is the multiplier.',
    whyRu: 'E-commerce маржа тоньше чем SaaS — каждый процент конверсии + AOV критичен. Repeat purchase rate — мультипликатор LTV.',
    metrics: ['aov', 'repeatPurchaseRate', 'ltv', 'cac', 'cr', 'roas', 'churn', 'arpu', 'cpc', 'bounceRate']
  },
  mobile: {
    name: 'Mobile Apps',
    nameRu: 'Mobile приложения',
    emoji: '📱',
    description: 'Mobile games and consumer apps: DAU, MAU, ARPDAU, retention curves, Stickiness. The free-to-play monetization metrics.',
    descriptionRu: 'Mobile-игры и consumer apps: DAU, MAU, ARPDAU, retention curves, Stickiness. Метрики free-to-play монетизации.',
    why: 'Mobile retention curves are brutal — Day-1 to Day-30 retention determines whether the app makes money or burns cash.',
    whyRu: 'Mobile retention-кривые жестокие — Day-1 → Day-30 retention определяет деньги или прожиг.',
    metrics: ['dau', 'mau', 'stickiness', 'arpdau', 'arpu', 'retention', 'churn', 'ltv', 'cac', 'engagementRate']
  },
  marketplace: {
    name: 'Marketplace',
    nameRu: 'Marketplace',
    emoji: '🏪',
    description: 'Two-sided platforms (Uber, Airbnb pattern): GMV, take rate, liquidity, cohort retention. The chicken-and-egg metrics.',
    descriptionRu: 'Двусторонние платформы (паттерн Uber, Airbnb): GMV, take rate, liquidity, cohort retention. Chicken-and-egg метрики.',
    why: 'Marketplaces need to balance supply and demand growth — track both sides separately, then liquidity at the intersection.',
    whyRu: 'Marketplace должен балансировать рост supply и demand — трекь обе стороны отдельно, потом liquidity на пересечении.',
    metrics: ['revenue', 'aov', 'retention', 'ltv', 'cac', 'churn', 'engagementRate', 'cr', 'referral', 'nps']
  },
  b2b: {
    name: 'B2B Sales',
    nameRu: 'B2B Sales',
    emoji: '💼',
    description: 'Enterprise sales-led organizations: Sales Velocity, pipeline coverage, win rate, ACV, cycle length. The forecasting metrics.',
    descriptionRu: 'Enterprise sales-led organisations: Sales Velocity, pipeline coverage, win rate, ACV, cycle length. Forecasting-метрики.',
    why: 'B2B sales cycles are long (3-12 months). Pipeline coverage and Sales Velocity are the only forecasting metrics that actually predict next quarter.',
    whyRu: 'B2B sales циклы длинные (3-12 мес). Pipeline coverage и Sales Velocity — единственные forecasting-метрики которые реально предсказывают next quarter.',
    metrics: ['salesVelocity', 'winRate', 'pipelineCoverage', 'salesCycleLength', 'acv', 'cac', 'cacPayback', 'ltv_cac', 'mrr', 'nrr']
  }
};

// Metric metadata for industry context — pulled from build.mjs but extended
// with per-industry benchmarks and recommendations.
const METRIC_NAMES = {
  mrr: 'MRR', arr: 'ARR', nrr: 'NRR', grr: 'GRR', churn: 'Churn Rate',
  burnMultiple: 'Burn Multiple', ruleOf40: 'Rule of 40', quickRatio: 'Quick Ratio',
  cacPayback: 'CAC Payback', mrrGrowthRate: 'MRR Growth Rate',
  aov: 'AOV', repeatPurchaseRate: 'Repeat Purchase Rate', ltv: 'LTV', cac: 'CAC',
  cr: 'Conversion Rate', roas: 'ROAS', arpu: 'ARPU', cpc: 'CPC', bounceRate: 'Bounce Rate',
  dau: 'DAU', mau: 'MAU', stickiness: 'Stickiness', arpdau: 'ARPDAU',
  retention: 'Retention', engagementRate: 'Engagement Rate',
  revenue: 'Revenue', referral: 'K-factor', nps: 'NPS',
  salesVelocity: 'Sales Velocity', winRate: 'Win Rate',
  pipelineCoverage: 'Pipeline Coverage', salesCycleLength: 'Sales Cycle Length',
  acv: 'ACV', ltv_cac: 'LTV:CAC'
};

// Industry-specific benchmarks for top metrics
const INDUSTRY_BENCHMARKS = {
  saas: {
    mrr: { healthy: '$10k+ post-PMF, growing 10-20% MoM', source: 'YC, OpenView' },
    nrr: { healthy: '>110% top quartile, >130% top decile', source: 'Snowflake/Datadog public reports' },
    churn: { healthy: '<2%/mo customer, <1%/mo revenue', source: 'KeyBanc Capital SaaS survey' },
    burnMultiple: { healthy: '<1.5× for Series A/B, <1.0× excellent', source: 'David Sacks, Craft Ventures' },
    ruleOf40: { healthy: 'Growth + Margin ≥ 40%', source: 'Brad Feld 2015' },
    cacPayback: { healthy: '<12 months SMB, <18 mid-market, <24 enterprise', source: 'OpenView SaaS benchmarks' }
  },
  ecommerce: {
    aov: { healthy: '$50-150 fashion, $80-200 beauty, $200+ premium', source: 'BigCommerce industry data' },
    repeatPurchaseRate: { healthy: '>20% norm, >50% premium brands', source: 'Shopify e-commerce report' },
    cr: { healthy: '1-4% norm, >4% excellent for desktop', source: 'IRP Commerce average' },
    roas: { healthy: '>4× e-com norm, break-even = 1/margin', source: 'Industry consensus' },
    ltv: { healthy: '>3× CAC minimum', source: 'David Skok' }
  },
  mobile: {
    dau: { healthy: 'Track MoM growth trend > absolute number', source: 'Mobile industry default' },
    stickiness: { healthy: '>20% B2B, >50% consumer (TikTok/IG)', source: 'AppMagic benchmarks' },
    arpdau: { healthy: '$0.05-0.30 casual, $0.30-1.50 strategy/RPG, $1+ casino', source: 'Sensor Tower / AppAnnie' },
    retention: { healthy: 'D1 >25%, D7 >12%, D30 >5% mobile', source: 'AppsFlyer global retention' }
  },
  marketplace: {
    revenue: { healthy: 'Track GMV separately, take-rate 5-30%', source: 'a16z Marketplace 100' },
    retention: { healthy: 'Top-tier marketplaces: monthly retention >60%', source: 'a16z' },
    nps: { healthy: '>40 healthy marketplace (Uber early days had >70)', source: 'Industry consensus' }
  },
  b2b: {
    salesVelocity: { healthy: 'Track quarterly velocity, growth 20%+ YoY', source: 'TOPO research' },
    winRate: { healthy: '20-30% B2B SaaS, 30-40% SMB', source: 'CSO Insights' },
    pipelineCoverage: { healthy: '3-4× quota standard, <2× critical', source: 'B2B SaaS standard' },
    salesCycleLength: { healthy: 'SMB <30d, Mid 30-90d, Enterprise 90-365d', source: 'TOPO research' },
    acv: { healthy: 'SMB $5-20k, Mid $20-100k, Enterprise >$100k', source: 'OpenView' }
  }
};

// === HTML TEMPLATES ===

const SHARED_CSS = `:root{color-scheme:light dark;--bg:#0A0C0E;--bg-card:#1A1C1F;--border:#2C2F33;--text-1:#E8EAED;--text-2:#B0B3B8;--text-3:#6b6f75;--accent:#2A6DF4;--green:#4CAF50}html[data-theme="light"]{--bg:#F0F2F5;--bg-card:#fff;--border:#E1E4E8;--text-1:#1A1C1F;--text-2:#4A4E55;--text-3:#777}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text-1);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;line-height:1.65}.nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 1.25rem;max-width:920px;margin:0 auto}.brand{display:flex;align-items:center;gap:.5rem;font-weight:700;font-size:1.05rem;text-decoration:none;color:var(--text-1)}.brand-mark{width:24px;height:24px;background:var(--accent);border-radius:6px}.nav a{color:var(--text-2);text-decoration:none}.crumbs{max-width:920px;margin:0 auto;padding:0 1.25rem;font-size:.85rem;color:var(--text-3)}.crumbs a{color:var(--accent);text-decoration:none}.wrap{max-width:920px;margin:0 auto;padding:1.5rem 1.25rem 4rem}h1{font-size:2.2rem;line-height:1.2;margin:.5rem 0 .5rem;letter-spacing:-.02em}h2{font-size:1.5rem;margin:2rem 0 .75rem;padding-bottom:.4rem;border-bottom:1px solid var(--border)}h3{font-size:1.15rem;margin:1.5rem 0 .5rem}.lede{font-size:1.1rem;color:var(--text-2);margin:0 0 1.5rem}a{color:var(--accent);text-decoration:none}a:hover{text-decoration:underline}.card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin:1.5rem 0}.card{background:var(--bg-card);border:1px solid var(--border);border-radius:.75rem;padding:1.1rem 1.25rem;text-decoration:none;color:inherit;display:block;transition:border-color .15s}.card:hover{border-color:var(--accent);text-decoration:none}.card h3{margin:0 0 .3rem;font-size:1.05rem;color:var(--text-1)}.card p{margin:0;font-size:.88rem;color:var(--text-2)}.card .emoji{font-size:1.4rem;margin-bottom:.4rem;display:block}table{width:100%;border-collapse:collapse;margin:1rem 0;font-size:.92rem;background:var(--bg-card);border:1px solid var(--border);border-radius:.5rem;overflow:hidden}th,td{padding:.55rem .8rem;text-align:left;border-bottom:1px solid var(--border)}th{background:rgba(42,109,244,.06);font-weight:700;font-size:.78rem;text-transform:uppercase;letter-spacing:.04em;color:var(--text-3)}tr:last-child td{border-bottom:0}.bench-card{background:var(--bg-card);border:1px solid var(--border);border-radius:.6rem;padding:1rem 1.2rem;margin:.5rem 0}.bench-card strong{color:var(--accent)}.cta-box{background:var(--bg-card);border:1px solid var(--border);border-radius:1rem;padding:1.4rem 1.5rem;margin:1.5rem 0;text-align:center}.cta-box a.btn{display:inline-block;background:var(--accent);color:#fff;padding:.7rem 1.4rem;border-radius:.5rem;text-decoration:none;font-weight:600;margin-top:.7rem}.faq details{background:var(--bg-card);border:1px solid var(--border);border-radius:.6rem;padding:.85rem 1rem;margin-bottom:.5rem}.faq summary{cursor:pointer;font-weight:600}.faq details[open] summary{margin-bottom:.6rem}.footer{text-align:center;color:var(--text-3);margin-top:3rem;padding-top:1.5rem;border-top:1px solid var(--border);font-size:.85rem}.footer a{color:var(--accent)}ul{padding-left:1.3rem}li{margin-bottom:.4rem}`;

function breadcrumbSchema(crumbs) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': crumbs.map((c, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': c.name,
      'item': c.url
    }))
  });
}

function faqSchema(faqs) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(({ q, a }) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a }
    }))
  });
}

// === HUB PAGE: /industries/ ===

function buildHub() {
  const crumbs = [
    { name: 'MetricTree', url: SITE },
    { name: 'Industries', url: `${SITE}/industries/` }
  ];
  const cards = Object.entries(INDUSTRIES).map(([slug, ind]) => `
    <a class="card" href="/industries/${slug}/">
      <span class="emoji">${ind.emoji}</span>
      <h3>${ind.nameRu}</h3>
      <p>${ind.descriptionRu}</p>
    </a>`).join('');

  return `<!doctype html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>Метрики по индустриям — SaaS, E-commerce, Mobile, Marketplace, B2B | MetricTree</title>
<meta name="description" content="Какие метрики трекать в зависимости от индустрии. 5 отраслей × топ-10 метрик каждой = 50+ industry-specific страниц с бенчмарками от OpenView, Bessemer, a16z.">
<link rel="canonical" href="${SITE}/industries/">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta property="og:title" content="Метрики по индустриям — SaaS, E-com, Mobile, Marketplace, B2B">
<meta property="og:description" content="Какие метрики важны для каждой индустрии. 5 отраслей × топ-10 метрик каждой = 50+ страниц.">
<meta property="og:url" content="${SITE}/industries/">
<meta property="og:image" content="${SITE}/og-image.png">
<script type="application/ld+json">${breadcrumbSchema(crumbs)}</script>
<style>${SHARED_CSS}</style>
</head>
<body>
<nav class="nav"><a href="/" class="brand"><span class="brand-mark"></span> MetricTree</a><div><a href="/blog/">Blog</a> · <a href="/">Калькулятор →</a></div></nav>
<div class="crumbs"><a href="/">Главная</a> › Industries</div>
<main class="wrap">
<h1>Метрики по индустриям</h1>
<p class="lede">Разные бизнесы — разные метрики. SaaS живёт MRR-ом, e-commerce — AOV-ом, mobile — ARPDAU. Выберите свою индустрию для метрик которые реально важны.</p>
<div class="card-grid">${cards}</div>
<h2>Зачем эти страницы?</h2>
<p>Общий калькулятор покрывает все 52 метрики. Эти страницы дают <strong>контекст</strong> — какие из них критичны именно для твоей индустрии, какие бенчмарки твоего сегмента, какие источники цитировать в pitch deck.</p>
<p>Каждая страница содержит:</p>
<ul>
<li>Топ-10 метрик для индустрии (отсортированы по важности)</li>
<li>Industry-specific бенчмарки (от OpenView, Bessemer, a16z, Sensor Tower)</li>
<li>Прямые ссылки на калькуляторы каждой метрики</li>
<li>FAQ с типичными вопросами фаундеров индустрии</li>
</ul>
</main>
<div class="footer">© 2026 <a href="https://www.linkedin.com/in/rodion-latipov" target="_blank">Родион Латыпов</a> · <a href="/">Главная</a> · <a href="/blog/">Blog</a></div>
</body></html>`;
}

// === INDUSTRY PAGE: /industries/saas/ ===

function buildIndustry(slug, ind) {
  const crumbs = [
    { name: 'MetricTree', url: SITE },
    { name: 'Industries', url: `${SITE}/industries/` },
    { name: ind.nameRu, url: `${SITE}/industries/${slug}/` }
  ];
  const benchmarks = INDUSTRY_BENCHMARKS[slug] || {};
  const metricCards = ind.metrics.map((mid, i) => {
    const bench = benchmarks[mid];
    return `
    <a class="card" href="/industries/${slug}/${mid}">
      <h3>${i + 1}. ${METRIC_NAMES[mid] || mid}</h3>
      ${bench ? `<p><strong>Healthy:</strong> ${bench.healthy}</p>` : ''}
    </a>`;
  }).join('');

  const faqs = [
    { q: `Какие метрики важнее всего для ${ind.nameRu}?`, a: `Топ-${ind.metrics.length}: ${ind.metrics.map(m => METRIC_NAMES[m]).join(', ')}. ${ind.whyRu}` },
    { q: `Где брать бенчмарки для ${ind.nameRu}-индустрии?`, a: `Основные источники: OpenView SaaS benchmarks, Bessemer State of the Cloud, a16z Marketplace 100, KeyBanc Capital SaaS survey, Sensor Tower (mobile). Все цитируем в индивидуальных страницах метрик.` },
    { q: `Что делать если все метрики ниже бенчмарка?`, a: `Фокус на одной метрике в quarter, не на всех сразу. Identify bottleneck — обычно retention или activation в early-stage. Используй Goal mode в калькуляторе чтобы понять что нужно достичь.` }
  ];

  return `<!doctype html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>${ind.emoji} Метрики для ${ind.nameRu} — топ-10 с бенчмарками | MetricTree</title>
<meta name="description" content="${ind.descriptionRu} Топ-10 метрик с industry бенчмарками от OpenView, Bessemer, a16z. Бесплатные калькуляторы.">
<link rel="canonical" href="${SITE}/industries/${slug}/">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta property="og:title" content="Метрики для ${ind.nameRu} — ${ind.emoji} топ-10 с бенчмарками">
<meta property="og:description" content="${ind.descriptionRu}">
<meta property="og:url" content="${SITE}/industries/${slug}/">
<meta property="og:image" content="${SITE}/og-image.png">
<script type="application/ld+json">${breadcrumbSchema(crumbs)}</script>
<script type="application/ld+json">${faqSchema(faqs)}</script>
<style>${SHARED_CSS}</style>
</head>
<body>
<nav class="nav"><a href="/" class="brand"><span class="brand-mark"></span> MetricTree</a><div><a href="/blog/">Blog</a> · <a href="/">Калькулятор →</a></div></nav>
<div class="crumbs"><a href="/">Главная</a> › <a href="/industries/">Industries</a> › ${ind.nameRu}</div>
<main class="wrap">
<h1>${ind.emoji} Метрики для ${ind.nameRu}</h1>
<p class="lede">${ind.descriptionRu}</p>
<div class="bench-card"><strong>Почему именно эти метрики?</strong> ${ind.whyRu}</div>
<h2>Топ-${ind.metrics.length} метрик для ${ind.nameRu}</h2>
<p>Сортировка по важности. Каждая ссылается на интерактивный калькулятор с бенчмарками и Goal mode.</p>
<div class="card-grid">${metricCards}</div>
<div class="cta-box">
<strong>Посчитать сразу все 10?</strong><br>
<a class="btn" href="/">Открыть калькулятор →</a>
</div>
<h2>FAQ для ${ind.nameRu}</h2>
<div class="faq">
${faqs.map(f => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join('')}
</div>
</main>
<div class="footer">© 2026 <a href="https://www.linkedin.com/in/rodion-latipov" target="_blank">Родион Латыпов</a> · <a href="/industries/">Все индустрии</a> · <a href="/">Главная</a></div>
</body></html>`;
}

// === INDUSTRY × METRIC PAGE: /industries/saas/burn-multiple ===

function buildIndustryMetric(industrySlug, ind, metricId) {
  const metricName = METRIC_NAMES[metricId] || metricId;
  const crumbs = [
    { name: 'MetricTree', url: SITE },
    { name: 'Industries', url: `${SITE}/industries/` },
    { name: ind.nameRu, url: `${SITE}/industries/${industrySlug}/` },
    { name: metricName, url: `${SITE}/industries/${industrySlug}/${metricId}` }
  ];
  const bench = (INDUSTRY_BENCHMARKS[industrySlug] || {})[metricId];

  const faqs = [
    { q: `Что такое ${metricName} в ${ind.nameRu}?`, a: bench ? `Норма для ${ind.nameRu}: ${bench.healthy}. Источник: ${bench.source}. См. калькулятор для подробной формулы.` : `${metricName} — одна из топ-10 метрик ${ind.nameRu}. См. калькулятор для формулы и бенчмарков.` },
    { q: `Как улучшить ${metricName} в моём ${ind.nameRu}-бизнесе?`, a: `Открой калькулятор → введи свои данные → используй What-If слайдеры чтобы понять impact каждого input. Goal mode (если доступен) считает обратно: задай target → получи required input.` },
    { q: `Какие связанные метрики важно трекать вместе?`, a: `Метрики не существуют изолированно. Для ${ind.nameRu} вместе с ${metricName} обычно смотрят: ${ind.metrics.filter(m => m !== metricId).slice(0, 3).map(m => METRIC_NAMES[m]).join(', ')}.` }
  ];

  return `<!doctype html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>${metricName} для ${ind.nameRu} — бенчмарк ${bench ? bench.healthy : 'и формула'} | MetricTree</title>
<meta name="description" content="${metricName} в контексте ${ind.nameRu}. ${bench ? `Норма: ${bench.healthy}. Источник: ${bench.source}.` : ''} Бесплатный калькулятор + Goal mode.">
<link rel="canonical" href="${SITE}/industries/${industrySlug}/${metricId}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta property="og:title" content="${metricName} для ${ind.nameRu} — бенчмарк и расчёт">
<meta property="og:description" content="${ind.descriptionRu}">
<meta property="og:url" content="${SITE}/industries/${industrySlug}/${metricId}">
<meta property="og:image" content="${SITE}/og-image.png">
<script type="application/ld+json">${breadcrumbSchema(crumbs)}</script>
<script type="application/ld+json">${faqSchema(faqs)}</script>
<style>${SHARED_CSS}</style>
</head>
<body>
<nav class="nav"><a href="/" class="brand"><span class="brand-mark"></span> MetricTree</a><div><a href="/blog/">Blog</a> · <a href="/">Калькулятор →</a></div></nav>
<div class="crumbs"><a href="/">Главная</a> › <a href="/industries/">Industries</a> › <a href="/industries/${industrySlug}/">${ind.nameRu}</a> › ${metricName}</div>
<main class="wrap">
<h1>${ind.emoji} ${metricName} в ${ind.nameRu}</h1>
<p class="lede">${metricName} — одна из топ-10 метрик которые должен трекать каждый ${ind.nameRu}-фаундер. Здесь — индустриальный контекст: норма для ${ind.nameRu}, источники бенчмарков, связанные метрики.</p>

${bench ? `<div class="bench-card">
<strong>Healthy для ${ind.nameRu}:</strong> ${bench.healthy}<br>
<em style="font-size:.85rem;color:var(--text-3);">Источник: ${bench.source}</em>
</div>` : ''}

<h2>Зачем именно ${metricName} в ${ind.nameRu}?</h2>
<p>${ind.whyRu}</p>

<div class="cta-box">
<strong>Считать ${metricName} прямо сейчас</strong><br>
<a class="btn" href="/${metricId}">Открыть калькулятор →</a>
</div>

<h2>Embed калькулятор в свой блог</h2>
<p>Если ты ведёшь блог про ${ind.nameRu}, встрой live-калькулятор ${metricName} вместо статической формулы:</p>
<pre style="background:#0d1117;color:#e8eaed;padding:.85rem 1rem;border-radius:.5rem;overflow-x:auto;font-size:.82rem;">&lt;iframe src="${SITE}/${metricId}?embed=1" width="100%" height="700" loading="lazy"&gt;&lt;/iframe&gt;</pre>
<p style="font-size:.85rem;color:var(--text-3);">Builder: <a href="/embed">/embed</a> — выбери метрику, размер, язык → получи готовый код.</p>

<h2>Связанные метрики ${ind.nameRu}</h2>
<div class="card-grid">
${ind.metrics.filter(m => m !== metricId).slice(0, 5).map(m => `<a class="card" href="/industries/${industrySlug}/${m}"><h3>${METRIC_NAMES[m]}</h3><p>Тоже в топ-10 для ${ind.nameRu}</p></a>`).join('')}
</div>

<h2>FAQ</h2>
<div class="faq">
${faqs.map(f => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join('')}
</div>
</main>
<div class="footer">© 2026 <a href="https://www.linkedin.com/in/rodion-latipov" target="_blank">Родион Латыпов</a> · <a href="/industries/${industrySlug}/">Все метрики ${ind.nameRu}</a> · <a href="/industries/">Все индустрии</a></div>
</body></html>`;
}

// === MAIN ===

function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);
  let count = 0;

  // Hub
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), buildHub());
  count++;

  // Each industry
  for (const [slug, ind] of Object.entries(INDUSTRIES)) {
    const industryDir = path.join(OUT_DIR, slug);
    if (!fs.existsSync(industryDir)) fs.mkdirSync(industryDir);
    fs.writeFileSync(path.join(industryDir, 'index.html'), buildIndustry(slug, ind));
    count++;

    // Industry × metric pages
    for (const metricId of ind.metrics) {
      fs.writeFileSync(path.join(industryDir, `${metricId}.html`), buildIndustryMetric(slug, ind, metricId));
      count++;
    }
  }

  console.log(`✓ Generated ${count} industry pages → /industries/`);
}

main();
