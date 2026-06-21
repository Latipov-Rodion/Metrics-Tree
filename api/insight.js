// MetricTree AI-диагностика — "Что чинить первым".
//
// POST /api/insight
//   body: { metrics: { ltv_cac: 2.1, churn: 4, runway: 5, ... }, lang?: 'ru'|'en'|'uz' }
//   → {
//        lever:      "Снизить Churn",
//        diagnosis:  "...",
//        projection: "снизив Churn 4%→2%, LTV:CAC вырастет 2.1→3.4",
//        secondary:  ["...", "..."],
//        source:     "ai" | "fallback"
//      }
//
// Reads the user's filled unit-economics dashboard and returns a prioritized
// diagnosis: the single highest-leverage fix, why, and a quantified projection
// (ProfitWell/Baremetrics-style insight).
//
// AI mode  — used when ANTHROPIC_API_KEY is set in the Vercel env. Calls the
//            Anthropic Messages API (claude-haiku-4-5) for a tailored diagnosis.
// Fallback — used when no key is set OR the Anthropic call fails/throws/times out.
//            A deterministic rule engine that ranks the most severe lever. The
//            feature stays useful with no API key configured.
//
// Required Vercel env var for AI mode (optional — falls back without it):
//   ANTHROPIC_API_KEY — from https://console.anthropic.com/settings/keys
//
// CORS: open to all origins.

export const config = { runtime: 'edge' };

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function jsonResponse(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...CORS_HEADERS, ...extraHeaders },
  });
}

const MAX_METRICS = 60; // abuse cap — far more than the app's ~50 metric ids
const LANGS = new Set(['ru', 'en', 'uz']);

// Known metric ids the app exposes. Unknown ids are ignored (not sent to the model).
const KNOWN_METRICS = new Set([
  'dau', 'mau', 'stickiness', 'ltv', 'cac', 'ltv_cac', 'churn', 'retention',
  'mrr', 'arr', 'arpu', 'arpdau', 'nrr', 'grr', 'runway', 'burnRate',
  'burnMultiple', 'magicNumber', 'ruleOf40', 'quickRatio', 'grossMargin',
  'cacPayback', 'mrrGrowthRate', 'nps', 'csat', 'roas', 'salesVelocity',
  'winRate', 'pipelineCoverage', 'aov', 'cpc', 'ctr', 'cr', 'revenue',
  'acv', 'referral', 'engagementRate', 'bounceRate', 'salesCycleLength',
  'repeatPurchaseRate', 'timeToValue', 'fcr', 'sla', 'bugRate', 'testCoverage',
  'defectDensity',
]);

// ---- Fallback rule engine ----------------------------------------------------
// Each rule, when its condition fires, yields a severity (higher = worse / more
// urgent) plus localized lever / diagnosis / projection text. We pick the single
// most-severe firing rule as the headline lever; the rest become "secondary".

function num(v) {
  const n = typeof v === 'number' ? v : parseFloat(String(v).replace(/[  ,]/g, ''));
  return Number.isFinite(n) ? n : null;
}

// Localized phrase helper: { ru, en, uz } → string for the requested lang.
function L(lang, phrases) {
  return phrases[lang] || phrases.ru;
}

function buildRules(m, lang) {
  const out = [];
  const has = (k) => num(m[k]) !== null;
  const get = (k) => num(m[k]);

  const ltvCac = get('ltv_cac');
  const churn = get('churn');
  const runway = get('runway');
  const magic = get('magicNumber');
  const rule40 = get('ruleOf40');
  const gm = get('grossMargin');
  const payback = get('cacPayback');
  const nrr = get('nrr');
  const quick = get('quickRatio');
  const burnMult = get('burnMultiple');

  // LTV:CAC — the core unit-economics signal.
  if (has('ltv_cac')) {
    if (ltvCac < 1) {
      const proj = ltvCac > 0
        ? L(lang, {
            ru: `сейчас LTV:CAC ${ltvCac.toFixed(1)} — каждый клиент убыточен; цель ≥ 3 удвоит вклад в прибыль`,
            en: `LTV:CAC is ${ltvCac.toFixed(1)} now — every customer loses money; reaching ≥ 3 turns each into profit`,
            uz: `hozir LTV:CAC ${ltvCac.toFixed(1)} — har bir mijoz zararli; ≥ 3 ga yetkazish foyda keltiradi`,
          })
        : L(lang, { ru: 'юнит-экономика убыточна — цель LTV:CAC ≥ 3', en: 'unit economics is negative — target LTV:CAC ≥ 3', uz: 'yunit-iqtisod zararli — maqsad LTV:CAC ≥ 3' });
      out.push({
        severity: 100,
        lever: L(lang, { ru: 'Починить юнит-экономику (LTV:CAC < 1)', en: 'Fix unit economics (LTV:CAC < 1)', uz: 'Yunit-iqtisodni tuzatish (LTV:CAC < 1)' }),
        diagnosis: L(lang, {
          ru: 'Вы теряете деньги на каждом привлечённом клиенте: стоимость привлечения выше пожизненной ценности. Это самый острый риск — рост только ускоряет убытки.',
          en: 'You lose money on every acquired customer: acquisition cost exceeds lifetime value. This is the most acute risk — growth only accelerates losses.',
          uz: 'Har bir jalb qilingan mijozda pul yo‘qotyapsiz: jalb qilish narxi umrbod qiymatdan yuqori. Bu eng o‘tkir xavf — o‘sish faqat zararni tezlashtiradi.',
        }),
        projection: proj,
      });
    } else if (ltvCac < 3) {
      out.push({
        severity: 70,
        lever: L(lang, { ru: 'Поднять LTV:CAC до 3+', en: 'Raise LTV:CAC to 3+', uz: 'LTV:CAC ni 3+ ga ko‘tarish' }),
        diagnosis: L(lang, {
          ru: 'LTV:CAC ниже здоровой нормы (3). Маркетинг окупается, но запас тонкий — снизьте CAC или поднимите удержание/чек.',
          en: 'LTV:CAC is below the healthy norm of 3. Acquisition pays back, but the margin is thin — cut CAC or lift retention/ARPU.',
          uz: 'LTV:CAC sog‘lom me’yordan (3) past. Jalb qilish qoplanadi, lekin zaxira ingichka — CAC ni kamaytiring yoki ushlab turishni oshiring.',
        }),
        projection: L(lang, {
          ru: `подняв LTV:CAC с ${ltvCac.toFixed(1)} до 3, вы утроите запас на реинвест в рост`,
          en: `raising LTV:CAC from ${ltvCac.toFixed(1)} to 3 triples your headroom to reinvest in growth`,
          uz: `LTV:CAC ni ${ltvCac.toFixed(1)} dan 3 ga ko‘tarish o‘sishga qayta investitsiya zaxirasini uch baravar oshiradi`,
        }),
      });
    }
  }

  // Runway — survival horizon.
  if (has('runway') && runway < 6) {
    out.push({
      severity: runway < 3 ? 95 : 85,
      lever: L(lang, { ru: 'Удлинить runway (фандрейз/сократить burn)', en: 'Extend runway (raise/cut burn)', uz: 'Runway ni uzaytirish (mablag‘ jalb/burn ni kamaytirish)' }),
      diagnosis: L(lang, {
        ru: `Осталось ${runway.toFixed(1)} мес. денег. Меньше 6 — зона риска: начинайте раунд сейчас или режьте burn, пока есть рычаг для переговоров.`,
        en: `Only ${runway.toFixed(1)} months of cash left. Under 6 is the danger zone: start a round now or cut burn while you still have leverage.`,
        uz: `${runway.toFixed(1)} oylik pul qoldi. 6 dan kam — xavf zonasi: hozir raund boshlang yoki burn ni kamaytiring.`,
      }),
      projection: L(lang, {
        ru: `сократив burn на 20%, вы добавите ~${(runway * 0.25).toFixed(1)} мес. runway`,
        en: `cutting burn by 20% adds ~${(runway * 0.25).toFixed(1)} months of runway`,
        uz: `burn ni 20% ga kamaytirish ~${(runway * 0.25).toFixed(1)} oy runway qo‘shadi`,
      }),
    });
  }

  // Churn — leaky bucket.
  if (has('churn') && churn > 3) {
    const proj = (ltvCac !== null && ltvCac > 0)
      ? L(lang, {
          ru: `снизив churn с ${churn.toFixed(1)}% до ${(churn / 2).toFixed(1)}%, LTV вырастет ~2× → LTV:CAC ${(ltvCac * 2).toFixed(1)}`,
          en: `halving churn from ${churn.toFixed(1)}% to ${(churn / 2).toFixed(1)}% ~doubles LTV → LTV:CAC ${(ltvCac * 2).toFixed(1)}`,
          uz: `churn ni ${churn.toFixed(1)}% dan ${(churn / 2).toFixed(1)}% ga tushirish LTV ni ~2× oshiradi → LTV:CAC ${(ltvCac * 2).toFixed(1)}`,
        })
      : L(lang, {
          ru: `снизив churn с ${churn.toFixed(1)}% до ${(churn / 2).toFixed(1)}%, удвоите среднее время жизни клиента и LTV`,
          en: `halving churn from ${churn.toFixed(1)}% to ${(churn / 2).toFixed(1)}% doubles average customer lifetime and LTV`,
          uz: `churn ni ${churn.toFixed(1)}% dan ${(churn / 2).toFixed(1)}% ga tushirish mijoz umrini va LTV ni ikki baravar oshiradi`,
        });
    out.push({
      severity: churn > 8 ? 90 : churn > 5 ? 75 : 60,
      lever: L(lang, { ru: 'Снизить отток (Churn)', en: 'Reduce churn', uz: 'Churn ni kamaytirish' }),
      diagnosis: L(lang, {
        ru: `Отток ${churn.toFixed(1)}%/мес выше нормы (<3%). Дырявое ведро: каждый новый клиент частично компенсирует ушедших. Усильте онбординг и customer success.`,
        en: `Churn of ${churn.toFixed(1)}%/mo is above the <3% norm. A leaky bucket: new customers just backfill lost ones. Strengthen onboarding and customer success.`,
        uz: `${churn.toFixed(1)}%/oy churn me’yordan (<3%) yuqori. Teshik chelak: yangi mijozlar ketganlarni qoplaydi. Onboarding va customer success ni kuchaytiring.`,
      }),
      projection: proj,
    });
  }

  // Magic Number — S&M efficiency.
  if (has('magicNumber') && magic < 0.75) {
    out.push({
      severity: magic < 0.4 ? 65 : 50,
      lever: L(lang, { ru: 'Повысить эффективность S&M (Magic Number)', en: 'Improve S&M efficiency (Magic Number)', uz: 'S&M samaradorligini oshirish (Magic Number)' }),
      diagnosis: L(lang, {
        ru: `Magic Number ${magic.toFixed(2)} < 0.75: продажи и маркетинг приносят мало нового ARR на вложенный доллар. Не масштабируйте расходы, пока не почините воронку.`,
        en: `Magic Number ${magic.toFixed(2)} < 0.75: sales & marketing return little new ARR per dollar spent. Don't scale spend until the funnel is fixed.`,
        uz: `Magic Number ${magic.toFixed(2)} < 0.75: sotuv va marketing sarflangan dollarga oz yangi ARR keltiradi. Voronkani tuzatmaguningizcha xarajatni oshirmang.`,
      }),
      projection: L(lang, {
        ru: `подняв Magic Number до 1.0, тот же бюджет даст на ~${Math.round((1 / Math.max(magic, 0.1) - 1) * 100)}% больше нового ARR`,
        en: `lifting Magic Number to 1.0 yields ~${Math.round((1 / Math.max(magic, 0.1) - 1) * 100)}% more new ARR from the same budget`,
        uz: `Magic Number ni 1.0 ga ko‘tarish o‘sha byudjetdan ~${Math.round((1 / Math.max(magic, 0.1) - 1) * 100)}% ko‘proq ARR beradi`,
      }),
    });
  }

  // Rule of 40 — growth/profitability balance.
  if (has('ruleOf40') && rule40 < 40) {
    out.push({
      severity: rule40 < 20 ? 60 : 45,
      lever: L(lang, { ru: 'Сбалансировать рост и маржу (Rule of 40)', en: 'Balance growth & margin (Rule of 40)', uz: 'O‘sish va marjani muvozanatlash (Rule of 40)' }),
      diagnosis: L(lang, {
        ru: `Rule of 40 = ${rule40.toFixed(0)} < 40: сумма роста и маржи ниже планки здоровой SaaS. Либо ускорьте рост, либо улучшите прибыльность.`,
        en: `Rule of 40 = ${rule40.toFixed(0)} < 40: growth plus margin is below the healthy SaaS bar. Either accelerate growth or improve profitability.`,
        uz: `Rule of 40 = ${rule40.toFixed(0)} < 40: o‘sish va marja yig‘indisi sog‘lom SaaS chizig‘idan past. Yo o‘sishni tezlashtiring, yo foydani oshiring.`,
      }),
      projection: L(lang, {
        ru: `добрав ${(40 - rule40).toFixed(0)} п.п. (рост или маржа), вы выйдете в зону инвест-привлекательности`,
        en: `adding ${(40 - rule40).toFixed(0)} pts (growth or margin) puts you in the investable zone`,
        uz: `${(40 - rule40).toFixed(0)} foiz qo‘shish sizni investitsiyabop zonaga olib chiqadi`,
      }),
    });
  }

  // Gross margin — scalability.
  if (has('grossMargin') && gm < 70) {
    out.push({
      severity: gm < 50 ? 55 : 40,
      lever: L(lang, { ru: 'Поднять валовую маржу', en: 'Raise gross margin', uz: 'Yalpi marjani oshirish' }),
      diagnosis: L(lang, {
        ru: `Валовая маржа ${gm.toFixed(0)}% ниже SaaS-нормы (70–80%). Высокая себестоимость съедает экономику масштаба — оптимизируйте инфраструктуру и поддержку.`,
        en: `Gross margin ${gm.toFixed(0)}% is below the SaaS norm (70–80%). High COGS eats your economies of scale — optimize infra and support costs.`,
        uz: `Yalpi marja ${gm.toFixed(0)}% SaaS me’yoridan (70–80%) past. Yuqori tannarx masshtab iqtisodini yeydi — infratuzilma va qo‘llab-quvvatlashni optimallashtiring.`,
      }),
      projection: L(lang, {
        ru: `подняв маржу до 75%, вы высвободите ~${(75 - gm).toFixed(0)}% выручки на рост`,
        en: `lifting margin to 75% frees ~${(75 - gm).toFixed(0)}% of revenue for growth`,
        uz: `marjani 75% ga ko‘tarish daromadning ~${(75 - gm).toFixed(0)}% ini o‘sishga bo‘shatadi`,
      }),
    });
  }

  // CAC payback period.
  if (has('cacPayback') && payback > 18) {
    out.push({
      severity: payback > 30 ? 58 : 48,
      lever: L(lang, { ru: 'Сократить срок окупаемости CAC', en: 'Shorten CAC payback', uz: 'CAC qoplanish muddatini qisqartirish' }),
      diagnosis: L(lang, {
        ru: `CAC окупается за ${payback.toFixed(0)} мес (>18 — долго). Деньги надолго заморожены в привлечении, что давит на runway.`,
        en: `CAC pays back in ${payback.toFixed(0)} months (>18 is long). Cash is tied up in acquisition for too long, straining runway.`,
        uz: `CAC ${payback.toFixed(0)} oyda qoplanadi (>18 — uzoq). Pul jalb qilishda uzoq muzlatilgan, runway ga bosim.`,
      }),
      projection: L(lang, {
        ru: `сократив payback до 12 мес, вы быстрее реинвестируете тот же капитал в новый рост`,
        en: `cutting payback to 12 months recycles the same capital into new growth faster`,
        uz: `payback ni 12 oyga qisqartirish o‘sha kapitalni tezroq qayta investitsiya qiladi`,
      }),
    });
  }

  // NRR — expansion vs. contraction.
  if (has('nrr') && nrr < 100) {
    out.push({
      severity: nrr < 90 ? 62 : 46,
      lever: L(lang, { ru: 'Вывести NRR выше 100%', en: 'Get NRR above 100%', uz: 'NRR ni 100% dan yuqoriga chiqarish' }),
      diagnosis: L(lang, {
        ru: `NRR ${nrr.toFixed(0)}% < 100%: существующая база сжимается. Без апселла и снижения оттока рост держится только на новых клиентах.`,
        en: `NRR ${nrr.toFixed(0)}% < 100%: your existing base is shrinking. Without expansion and lower churn, growth rests entirely on new logos.`,
        uz: `NRR ${nrr.toFixed(0)}% < 100%: mavjud baza qisqarmoqda. Upsell va churn pasaytirilmasa, o‘sish faqat yangi mijozlarga tayanadi.`,
      }),
      projection: L(lang, {
        ru: `подняв NRR до 110%, вы получите рост даже без новых клиентов`,
        en: `reaching 110% NRR gives you growth even with zero new customers`,
        uz: `NRR ni 110% ga yetkazish yangi mijozsiz ham o‘sish beradi`,
      }),
    });
  }

  // Quick ratio — growth vs. churn quality.
  if (has('quickRatio') && quick < 4) {
    out.push({
      severity: quick < 1 ? 64 : 42,
      lever: L(lang, { ru: 'Улучшить Quick Ratio', en: 'Improve Quick Ratio', uz: 'Quick Ratio ni yaxshilash' }),
      diagnosis: L(lang, {
        ru: `Quick Ratio ${quick.toFixed(1)} < 4: новый MRR слабо перекрывает потерянный. Рост неэффективен — много притока уходит на компенсацию оттока.`,
        en: `Quick Ratio ${quick.toFixed(1)} < 4: new MRR barely outpaces lost MRR. Growth is inefficient — much of it just offsets churn.`,
        uz: `Quick Ratio ${quick.toFixed(1)} < 4: yangi MRR yo‘qotilganni zo‘rg‘a qoplaydi. O‘sish samarasiz.`,
      }),
      projection: L(lang, {
        ru: `доведя Quick Ratio до 4, каждый $ нового MRR даст чистый рост`,
        en: `getting Quick Ratio to 4 makes every $ of new MRR net growth`,
        uz: `Quick Ratio ni 4 ga yetkazish har bir yangi MRR dollarini sof o‘sishga aylantiradi`,
      }),
    });
  }

  // Burn multiple — capital efficiency.
  if (has('burnMultiple') && burnMult > 2) {
    out.push({
      severity: burnMult > 4 ? 56 : 44,
      lever: L(lang, { ru: 'Снизить Burn Multiple', en: 'Lower Burn Multiple', uz: 'Burn Multiple ni kamaytirish' }),
      diagnosis: L(lang, {
        ru: `Burn Multiple ${burnMult.toFixed(1)} > 2: вы сжигаете слишком много кэша на каждый $ нового ARR. Капитал расходуется неэффективно.`,
        en: `Burn Multiple ${burnMult.toFixed(1)} > 2: you burn too much cash per $ of new ARR. Capital efficiency is poor.`,
        uz: `Burn Multiple ${burnMult.toFixed(1)} > 2: har bir yangi ARR dollariga juda ko‘p kesh sarflanadi.`,
      }),
      projection: L(lang, {
        ru: `снизив Burn Multiple до 1.5, вы продлите runway при той же скорости роста`,
        en: `lowering Burn Multiple to 1.5 extends runway at the same growth rate`,
        uz: `Burn Multiple ni 1.5 ga tushirish bir xil o‘sishda runway ni uzaytiradi`,
      }),
    });
  }

  return out;
}

function fallbackDiagnosis(metrics, lang) {
  const rules = buildRules(metrics, lang).sort((a, b) => b.severity - a.severity);

  if (rules.length === 0) {
    // Everything provided looks healthy (or nothing actionable provided).
    return {
      lever: L(lang, { ru: 'Метрики в норме — масштабируйте рост', en: 'Metrics look healthy — scale growth', uz: 'Metrikalar me’yorda — o‘sishni masshtablang' }),
      diagnosis: L(lang, {
        ru: 'Среди заполненных метрик нет критичных провалов. Юнит-экономика выглядит здоровой — фокус можно сместить с тушения пожаров на ускорение роста.',
        en: 'None of the filled-in metrics show a critical gap. Unit economics looks healthy — you can shift focus from firefighting to accelerating growth.',
        uz: 'To‘ldirilgan metrikalar orasida tanqidiy bo‘shliq yo‘q. Yunit-iqtisod sog‘lom — e’tiborni o‘sishni tezlashtirishga qaratish mumkin.',
      }),
      projection: L(lang, {
        ru: 'заполните больше метрик (Churn, Runway, LTV:CAC), чтобы получить точечную диагностику',
        en: 'fill in more metrics (Churn, Runway, LTV:CAC) for a sharper diagnosis',
        uz: 'aniqroq tashxis uchun ko‘proq metrika kiriting (Churn, Runway, LTV:CAC)',
      }),
      secondary: [],
      source: 'fallback',
    };
  }

  const top = rules[0];
  return {
    lever: top.lever,
    diagnosis: top.diagnosis,
    projection: top.projection,
    secondary: rules.slice(1, 4).map(r => r.lever),
    source: 'fallback',
  };
}

// ---- AI mode -----------------------------------------------------------------

function systemPrompt(lang) {
  const langName = lang === 'en' ? 'English' : lang === 'uz' ? 'Uzbek (Latin script)' : 'Russian';
  return [
    'You are an expert product/growth analyst (ProfitWell/Baremetrics style) advising a SaaS founder.',
    'You receive a set of the founder\'s current unit-economics metrics (id: value).',
    'Identify THE single highest-leverage fix — the one change that most improves the business right now.',
    'Explain briefly WHY it is the top priority, and give a CONCRETE, QUANTIFIED projection grounded in the actual numbers provided',
    '(e.g. "снизив Churn с 4%→2%, LTV:CAC вырастет 2.1→3.4"). Be specific with numbers, not generic advice.',
    `Respond in ${langName}.`,
    'Return STRICT JSON only — no prose, no code fences — with exactly these keys:',
    '{ "lever": "short headline of the #1 fix", "diagnosis": "1-3 sentences why", "projection": "quantified before→after impact", "secondary": ["second lever", "third lever"] }',
  ].join(' ');
}

function userPrompt(metrics, lang) {
  const lines = Object.entries(metrics).map(([k, v]) => `- ${k}: ${v}`).join('\n');
  const ask = lang === 'en'
    ? 'Here are my current metrics. What should I fix first?'
    : lang === 'uz'
    ? 'Mana mening joriy metrikalarim. Birinchi navbatda nimani tuzatishim kerak?'
    : 'Вот мои текущие метрики. Что чинить первым?';
  return `${ask}\n\n${lines}`;
}

function stripFences(text) {
  let t = String(text).trim();
  // Remove ```json ... ``` or ``` ... ``` wrappers if present.
  const fence = t.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/);
  if (fence) t = fence[1].trim();
  // Otherwise, fall back to the first {...} block.
  if (!t.startsWith('{')) {
    const brace = t.match(/\{[\s\S]*\}/);
    if (brace) t = brace[0];
  }
  return t;
}

async function aiDiagnosis(apiKey, metrics, lang) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000); // ~8s budget
  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 900,
        system: systemPrompt(lang),
        messages: [{ role: 'user', content: userPrompt(metrics, lang) }],
      }),
    });

    if (!resp.ok) {
      const body = await resp.text().catch(() => '');
      throw new Error(`Anthropic ${resp.status}: ${body.slice(0, 200)}`);
    }

    const data = await resp.json();
    const text = data?.content?.[0]?.text;
    if (!text) throw new Error('Empty Anthropic response');

    const parsed = JSON.parse(stripFences(text));
    if (!parsed || typeof parsed.lever !== 'string') {
      throw new Error('Malformed AI JSON');
    }

    return {
      lever: parsed.lever,
      diagnosis: typeof parsed.diagnosis === 'string' ? parsed.diagnosis : '',
      projection: typeof parsed.projection === 'string' ? parsed.projection : '',
      secondary: Array.isArray(parsed.secondary) ? parsed.secondary.filter(s => typeof s === 'string').slice(0, 5) : [],
      source: 'ai',
    };
  } finally {
    clearTimeout(timer);
  }
}

// ---- Handler -----------------------------------------------------------------

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed', allowed: ['POST', 'OPTIONS'] }, 405);
  }

  let body;
  try {
    body = await req.json();
  } catch (e) {
    return jsonResponse({ error: 'Invalid JSON body' }, 400);
  }

  const rawMetrics = body && typeof body.metrics === 'object' && body.metrics !== null ? body.metrics : null;
  if (!rawMetrics) {
    return jsonResponse({
      error: 'metrics object required',
      example: { metrics: { ltv_cac: 2.1, churn: 4, runway: 5 }, lang: 'ru' },
    }, 400);
  }

  const lang = LANGS.has(body.lang) ? body.lang : 'ru';

  // Sanitize: keep known metric ids with finite numeric values; cap count.
  const metrics = {};
  let count = 0;
  for (const [k, v] of Object.entries(rawMetrics)) {
    if (count >= MAX_METRICS) break;
    if (!KNOWN_METRICS.has(k)) continue;
    const n = num(v);
    if (n === null) continue;
    metrics[k] = n;
    count++;
  }

  if (count === 0) {
    return jsonResponse({
      error: 'no valid numeric metrics provided',
      hint: 'fill in at least one metric (e.g. ltv_cac, churn, runway) in the dashboard',
    }, 400);
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  // Best-effort per-IP rate limit. Guards the paid Anthropic call against abuse
  // and runaway cost when ANTHROPIC_API_KEY is set. Uses Vercel KV / Upstash Redis
  // if configured (env vars are either KV_REST_API_* legacy or UPSTASH_REDIS_REST_*
  // new Marketplace integration — try both). Degrades to a no-op without KV, and
  // never blocks a legitimate request on a KV error (the rule-engine fallback is free).
  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '';
  if (apiKey && kvUrl && kvToken && ip) {
    try {
      const rlKey = `rl:insight:${ip}`;
      const incr = await fetch(`${kvUrl}/incr/${encodeURIComponent(rlKey)}`, {
        method: 'POST', headers: { Authorization: `Bearer ${kvToken}` },
      }).then(r => r.json()).catch(() => null);
      const hits = incr && typeof incr.result === 'number' ? incr.result : 0;
      if (hits === 1) {
        await fetch(`${kvUrl}/expire/${encodeURIComponent(rlKey)}/3600`, {
          method: 'POST', headers: { Authorization: `Bearer ${kvToken}` },
        }).catch(() => {});
      }
      // ~30 AI diagnoses per IP per hour — generous for real use, caps cost abuse.
      if (hits > 30) {
        return jsonResponse(
          { error: 'Too many requests — try again later', source: 'rate-limit' },
          429,
          { 'Retry-After': '3600' },
        );
      }
    } catch (e) { /* throttle must never block a legitimate request */ }
  }

  // AI mode — best effort. Any failure/timeout falls through to the rule engine.
  if (apiKey) {
    try {
      const ai = await aiDiagnosis(apiKey, metrics, lang);
      return jsonResponse(ai, 200);
    } catch (e) {
      // fall through to deterministic fallback
    }
  }

  return jsonResponse(fallbackDiagnosis(metrics, lang), 200);
}
