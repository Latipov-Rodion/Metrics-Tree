// Per-metric static HTML generator for MetricTree.
// Reads index.html and produces one HTML per metric with unique <title>,
// <meta description>, OG tags, canonical URL, and a per-metric FAQ JSON-LD.
// All generated files share the same JS bundle — only the head meta differs,
// so each /metric URL becomes a distinct SEO target with the same SPA behaviour.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]):/, '$1:'));
const SITE = 'https://metricstree.vercel.app';

const META = {
  // B2C
  dau:           { title: 'DAU Calculator (Daily Active Users) — формула, отраслевые пороги', desc: 'Рассчитайте Daily Active Users. Формула, отраслевые бенчмарки, инсайт. Связано: MAU, Stickiness. Бесплатно.', q: 'Что такое DAU?', a: 'Daily Active Users — уникальные пользователи продукта за сутки. Сама по себе DAU — счётчик; оценивать стоит через Stickiness (DAU/MAU) и MoM-рост.' },
  mau:           { title: 'MAU Calculator (Monthly Active Users) — формула и пороги', desc: 'Расчёт MAU. Формула, отраслевые бенчмарки, связь с Stickiness и Retention. Бесплатно.', q: 'Что такое MAU?', a: 'Monthly Active Users — уникальные пользователи за 30 дней. Здоровье считается через Stickiness и YoY-рост.' },
  stickiness:    { title: 'Stickiness калькулятор (DAU/MAU) — формула, нормы по отраслям', desc: 'Рассчитайте Stickiness = DAU/MAU. SaaS норма >30%, мобайл >25%, отлично >50%. Формула и бенчмарки.', q: 'Что такое Stickiness?', a: 'Stickiness = DAU / MAU × 100% — доля месячной базы, возвращающейся ежедневно. Норма >20%, отлично >50% для SaaS.' },
  retention:     { title: 'Retention Rate Calculator — формула и когортный анализ', desc: 'Рассчитайте Retention за период. Формула, нормы для SaaS, e-com, mobile. Связь с LTV и Churn.', q: 'Как считать Retention?', a: 'Retention = Активные на конец / Активные на начало периода × 100%. Для SaaS норма D30 >70%, для mobile D30 >15%.' },
  ltv:           { title: 'LTV калькулятор (Lifetime Value) — формула + LTV:CAC анализ', desc: 'Рассчитайте LTV = AOV × частота × срок жизни. Формула, отраслевые пороги, обратный расчёт LTV:CAC. Бесплатно.', q: 'Как рассчитать LTV?', a: 'LTV = AOV × Частота покупок в год × Среднее время жизни (лет). Например $2500 × 4 × 3 = $30 000. Главное — соотношение LTV:CAC ≥ 3.', faq: [
    { q: 'Какая формула расчёта LTV?', a: 'LTV = AOV (средний чек) × Частота покупок в год × Срок жизни клиента (лет). Для SaaS: ARPU / Churn. Пример: $2500 × 4 × 3 = $30 000.' },
    { q: 'Какое соотношение LTV к CAC считается здоровым?', a: 'LTV:CAC ≥ 3 — здоровая unit-экономика. 1–3 — слабая, теряете деньги на росте. >5 — отлично, но возможно недоинвестируете в маркетинг. Top SaaS — 3–6×.' },
    { q: 'Как увеличить LTV?', a: 'Три рычага: (1) повысить AOV через апселы/бандлы, (2) увеличить частоту покупок (cross-sell, email-flows), (3) снизить Churn (onboarding, customer success). Каждый +10% даёт мультипликативный эффект.' },
    { q: 'Чем LTV отличается от CLV?', a: 'LTV (Lifetime Value) и CLV (Customer Lifetime Value) — синонимы. Иногда CLV считают с дисконтированием будущих cash flows (NPV). Для оперативных решений достаточно простой формулы.' }
  ]},
  cac:           { title: 'CAC калькулятор (Customer Acquisition Cost) — формула и нормы', desc: 'Рассчитайте CAC = маркетинговые затраты / новые клиенты. Формула, отраслевые бенчмарки, связь с LTV.', q: 'Как рассчитать CAC?', a: 'CAC = Маркетинговые и sales затраты / Количество новых платящих клиентов. Норма: LTV должен быть ≥ 3× CAC. Окупаемость для SaaS — до 12–18 мес.', faq: [
    { q: 'Какая формула CAC?', a: 'CAC = (Маркетинговые расходы + Sales расходы) / Число новых платящих клиентов за период. Включайте все затраты: реклама, зарплаты sales и marketing, инструменты, contractor fees.' },
    { q: 'Какой CAC считается нормальным?', a: 'Норма зависит от LTV: LTV:CAC ≥ 3×. SaaS B2B: $100–$1000+ для SMB, $3000–$30000+ для enterprise. E-commerce: $10–$50. Mobile B2C: $1–$20. Главное — payback <12–18 мес для SaaS.' },
    { q: 'В чём разница Blended CAC и Paid CAC?', 'a': 'Blended CAC = все затраты / все новые клиенты (включая органику). Paid CAC = только paid-каналы / только paid-клиенты. Paid CAC показывает реальную unit-экономику платных каналов — он всегда выше Blended.' },
    { q: 'Как снизить CAC?', a: 'Рычаги: (1) органические каналы (SEO, content, sharing), (2) referral-программы, (3) улучшение конверсии воронки, (4) брендовая узнаваемость (снижает CPC), (5) self-serve onboarding (убирает sales-затраты для SMB).' }
  ]},
  ltv_cac:       { title: 'LTV:CAC калькулятор — соотношение, обратный расчёт max CAC', desc: 'Рассчитайте соотношение LTV : CAC. Норма >3, отлично >5. Goal-режим: задайте target и узнайте max CAC при заданном LTV.', q: 'Какая норма LTV:CAC?', a: '<1 — убыток. 1–3 — слабая unit-экономика. ≥3 — здоровая. >5 — отлично или недоинвестируете в рост. SaaS-target: 3–6.', faq: [
    { q: 'Что показывает LTV:CAC?', a: 'Сколько долларов lifetime-выручки приносит каждый доллар, потраченный на привлечение клиента. Базовый показатель устойчивости юнит-экономики и масштабируемости.' },
    { q: 'Какая норма LTV:CAC для SaaS?', a: '<1 — теряете деньги на каждом клиенте. 1–3 — слабая экономика (есть только если рост важнее). ≥3 — здоровая SaaS-норма. >5 — отлично, но возможно недоинвестируете в маркетинг. Top SaaS: 3–6×.' },
    { q: 'Что делать, если LTV:CAC меньше 3?', a: '(1) снизить CAC: органика, referrals, конверсия воронки; (2) повысить LTV: апселы, снизить Churn, поднять цены; (3) переориентироваться на ICP с лучшей экономикой. Не наращивайте маркетинг с плохой unit-экономикой — это масштабирует убытки.' },
    { q: 'Когда LTV:CAC может быть слишком высоким?', a: 'Если LTV:CAC >5–6, обычно вы недоинвестируете в рост — конкуренты захватят рынок. Исключения: bootstrap-бизнес или low-growth nische. Высокий LTV:CAC + низкий рост = пора нанимать sales/marketing.' }
  ]},
  arpu:          { title: 'ARPU калькулятор (Average Revenue Per User)', desc: 'ARPU = Выручка / Активные пользователи. Формула, отраслевые пороги, связь с LTV и Stickiness.', q: 'Что такое ARPU?', a: 'Average Revenue Per User — средняя выручка с пользователя. ARPU × срок жизни ≈ LTV. Сравнивайте с CAC.' },
  churn:         { title: 'Churn Rate калькулятор — формула, отраслевые нормы', desc: 'Customer Churn Rate = Ушедшие / База на начало периода. Норма SaaS <2%/мес, mobile <15%/мес. Goal-режим.', q: 'Что такое Churn Rate?', a: 'Churn Rate = Ушедшие пользователи / Всего пользователей на начало периода × 100%. SaaS норма — менее 2% в месяц, mobile — до 10%.', faq: [
    { q: 'Чем Customer Churn отличается от Revenue Churn?', a: 'Customer Churn — % ушедших клиентов. Revenue Churn — % потерянного MRR. Если уходят малые клиенты, Customer Churn высокий, а Revenue Churn низкий. Enterprise SaaS — наоборот.' },
    { q: 'Какая норма Churn для SaaS?', a: 'B2B SaaS: <1% monthly = отлично, 1–2% — норма, >3% — критично. Annual churn <10% = top decile. SMB: 3–7% monthly. Mobile B2C: 5–15% monthly норма (короткий lifecycle).' },
    { q: 'Как снизить Churn?', a: '(1) onboarding (первая неделя — 80% будущего churn), (2) health-scoring и proactive outreach, (3) убрать billing-friction (auto-renewal, dunning), (4) feature adoption через product tours, (5) annual prepay контракты.' },
    { q: 'Как считать когортный Churn?', a: 'Группируете когорту по дате регистрации. Считаете % оставшихся через 1, 3, 6, 12 мес. Когортный анализ показывает, улучшается ли retention новых когорт vs старых. Главный инструмент product-команды.' }
  ]},
  // B2B SaaS
  mrr:           { title: 'MRR калькулятор (Monthly Recurring Revenue)', desc: 'MRR — регулярная месячная выручка. Формула, нормы MoM-роста по отраслям. Связь с ARR, NRR, GRR.', q: 'Что такое MRR?', a: 'Monthly Recurring Revenue — нормализованная месячная подписочная выручка. Годовые контракты делятся на 12. Не включает one-time fees.', faq: [
    { q: 'Как считать MRR?', a: 'MRR = сумма всех активных подписок, нормализованная по месяцу. Annual contract $12000 = $1000 MRR. Не включайте one-time fees, setup-платежи, transactional revenue.' },
    { q: 'Чем MRR отличается от ARR?', a: 'ARR = MRR × 12. ARR используется для отчётности перед инвесторами и enterprise-сделок. MRR — для еженедельного/месячного operating-цикла команды. Compounded growth обычно меряют через MRR.' },
    { q: 'Какие компоненты MRR Movement важно отслеживать?', a: 'New MRR (новые клиенты), Expansion MRR (апселы существующих), Churned MRR (отток), Contraction MRR (downgrade). Net New MRR = New + Expansion − Churned − Contraction. Это база для Quick Ratio и Burn Multiple.' },
    { q: 'Какой MoM рост MRR здоровый?', a: 'Seed/early: 15–20% MoM. Series A: 10–15%. Growth: 5–10%. T2D3 (3× за 2 года) — стандарт для top-tier VC-фондированных SaaS. YC бенчмарк: 5–7% MoM минимум.' }
  ]},
  arr:           { title: 'ARR калькулятор (Annual Recurring Revenue) и T2D3-рост', desc: 'ARR = MRR × 12. Формула, YoY-нормы, Rule of 40, T2D3-bench. Связь с NRR.', q: 'Как считать ARR?', a: 'ARR = MRR × 12. Здоровье определяется YoY-ростом и Rule of 40 (рост + маржа ≥ 40%). T2D3 — рост 3× за 2 года для молодых SaaS.' },
  acv:           { title: 'ACV калькулятор (Annual Contract Value)', desc: 'ACV = Сумма контракта / срок. Формула, нормы по отраслям и сегменту, связь с CAC Payback.', q: 'Что такое ACV?', a: 'Annual Contract Value — средняя годовая стоимость контракта. Enterprise: >$20k, SMB: $5–20k.' },
  grr:           { title: 'GRR калькулятор (Gross Revenue Retention)', desc: 'GRR = (Начальный MRR − Отток) / Начальный MRR × 100%. SaaS норма >95%, отлично >97%.', q: 'Что такое GRR?', a: 'Gross Revenue Retention — удержание выручки без учёта апселов. Только потери. SaaS норма >95%, отлично >97%.' },
  nrr:           { title: 'NRR калькулятор (Net Revenue Retention) — формула, нормы SaaS', desc: 'NRR = (Start + Upsell − Churn) / Start × 100%. Норма SaaS >100%, отлично >120%. Goal-режим.', q: 'Что такое NRR?', a: 'Net Revenue Retention — удержание выручки с учётом апселов. NRR > 100% означает рост за счёт существующих клиентов без новых. Отлично для SaaS — >120%.', faq: [
    { q: 'Как считать NRR?', a: 'NRR = (MRR начала + Expansion − Churn − Contraction) / MRR начала × 100%. Берётся когорта на дату T, сравнивается их выручка через 12 мес.' },
    { q: 'Чем NRR отличается от GRR?', a: 'GRR (Gross Retention) — только потери, без учёта апселов. NRR (Net Retention) — с апселами. NRR может быть >100%, GRR — никогда. GRR показывает здоровье продукта, NRR — здоровье account-команды.' },
    { q: 'Какая норма NRR для SaaS?', a: 'PLG B2B: 110–130%. Mid-market: 100–115%. Enterprise: 110–140%. Top decile (Snowflake, Datadog) — 150%+. <100% — компания теряет выручку даже без новых клиентов.' },
    { q: 'Как улучшить NRR?', a: '(1) Expansion-flows (seat-based pricing, usage-based), (2) success-managers для high-ARR клиентов, (3) reducing churn через onboarding и health-scores, (4) tiered pricing с upgrade-paths.' }
  ]},
  cacPayback:    { title: 'CAC Payback калькулятор — период окупаемости', desc: 'CAC Payback = CAC / (MRR × Margin). SaaS норма <18 мес, хорошо <12. Goal-режим: max CAC при заданном payback.', q: 'Что такое CAC Payback?', a: 'CAC Payback Period — месяцы до возврата затрат на привлечение клиента. CAC / (MRR × Gross Margin). Норма для SaaS — до 12–18 мес.' },
  burnMultiple:  { title: 'Burn Multiple калькулятор (David Sacks) — формула и нормы', desc: 'Burn Multiple = Net Burn / Net New ARR. <1 отлично, 1–1.5 хорошо. Метрика капитальной эффективности SaaS.', q: 'Что такое Burn Multiple?', a: 'Burn Multiple = Net Burn / Net New ARR (David Sacks). Сколько $ сжигаем, чтобы сгенерировать $1 новой ARR. <1 отлично, 1–1.5 хорошо, >2 нужно оптимизировать.', faq: [
    { q: 'Кто придумал Burn Multiple?', a: 'David Sacks (Craft Ventures, бывший COO PayPal, основатель Yammer) — концепция популяризирована в 2020 в его эссе. Стандартная метрика капитальной эффективности post-ZIRP эпохи.' },
    { q: 'Какая норма Burn Multiple?', a: '<1× — Amazing (PayPal-уровень). 1–1.5× — Great. 1.5–2× — Good. 2–3× — Suspect. >3× — Bad (компания сжигает капитал неэффективно).' },
    { q: 'Чем Burn Multiple лучше Magic Number?', a: 'Magic Number мерит только эффективность S&M. Burn Multiple — всю компанию: продукт, маркетинг, sales, ops. Это финальный показатель: насколько эффективно превращаете капитал в рост ARR.' },
    { q: 'Как улучшить Burn Multiple?', a: '(1) сократить burn (увольнения, ефактеры R&D), (2) ускорить New ARR через высоко-конверсионные каналы, (3) повысить Expansion ARR (NRR), (4) пересмотреть pricing. Цель — <1.5× до Series B/C.' }
  ]},
  magicNumber:   { title: 'Magic Number калькулятор SaaS — формула и анализ S&M', desc: 'Magic Number = (Net New ARR × 4) / S&M. Эффективность Sales & Marketing. Хорошо >1, отлично >1.5.', q: 'Что такое Magic Number?', a: 'Magic Number = (Net New ARR за квартал × 4) / S&M расходы (Scale Venture Partners). Эффективность Sales & Marketing. >1 — масштабируйте.' },
  ruleOf40:      { title: 'Rule of 40 калькулятор SaaS — рост + маржа', desc: 'Rule of 40 = Рост YoY + Маржа EBITDA ≥ 40%. Здоровый SaaS. Goal-режим: target growth/margin.', q: 'Что такое Rule of 40?', a: 'Rule of 40 = Темп роста выручки YoY (%) + Маржа EBITDA или FCF (%). Здоровый SaaS поддерживает сумму ≥ 40%. Выше 60% — top decile.', faq: [
    { q: 'Как считать Rule of 40?', a: 'Rule of 40 = Темп роста YoY (%) + Маржа EBITDA или FCF (%). Пример: рост 30% + маржа 15% = 45% — здоровый бизнес. Считается обычно по ARR-росту, не Revenue-росту (для SaaS точнее).' },
    { q: 'Какую маржу использовать — EBITDA или FCF?', a: 'Public SaaS обычно отчитывает FCF margin (наиболее консервативный). Private — Operating Margin или Adjusted EBITDA. Главное — последовательно использовать одну метрику во всех периодах.' },
    { q: 'Почему именно 40%?', a: 'Эмпирический порог от Brad Feld (Foundry Group, 2015). Анализ public SaaS показал: компании с R40 ≥ 40 торгуются с премией multiples. Это компромисс «рост vs прибыльность».' },
    { q: 'Какая норма Rule of 40 в 2024?', a: 'Top decile public SaaS: >60% (Adobe, ServiceNow, CrowdStrike). Median: 25–35% — Rule of 40 теперь сложнее достичь после ZIRP-эпохи. Private growth-stage: 40–55% — лучший mix.' }
  ]},
  quickRatio:    { title: 'SaaS Quick Ratio калькулятор (Mamoon Hamid)', desc: 'Quick Ratio = (New + Expansion MRR) / (Churn + Contraction MRR). Норма >2, отлично >4. Устойчивость роста.', q: 'Что такое SaaS Quick Ratio?', a: 'Quick Ratio (Mamoon Hamid) = (New MRR + Expansion MRR) / (Churned MRR + Contraction MRR). Устойчивость роста: на каждый $ потерь — сколько $ нового. Норма >2.' },
  // AARRR
  acquisition:    { title: 'Acquisition Calculator — новые пользователи', desc: 'Сколько новых пользователей привлечено за период. Связано с CAC, Conversion Rate, ROAS.', q: 'Что такое Acquisition?', a: 'Acquisition — число привлечённых новых пользователей за период. Качество важнее количества: смотрите Activation Rate и CAC.' },
  activation:     { title: 'Activation Rate Calculator — формула и нормы', desc: 'Activation = Достигшие Aha-моменту / Все новые × 100%. Норма >30%, для SaaS >40%.', q: 'Что такое Activation?', a: 'Activation Rate — доля новых пользователей, дошедших до Aha-момента (ключевого события). Норма >30%, для SaaS >40%.' },
  retention_aarrr:{ title: 'Cohort Retention Calculator (Pirate Metrics)', desc: 'Retention = Вернувшиеся через N дней / Когорта × 100%. Когортный анализ для AARRR.', q: 'Что такое когортный Retention?', a: 'Cohort Retention — процент пользователей когорты, возвращающихся через N дней (D1, D7, D30). Базовая метрика виральности и удержания.' },
  referral:       { title: 'K-factor калькулятор (Referral / Viral Coefficient)', desc: 'K-factor = Приглашённые / Активные пригласившие. >1 — вирусный рост.', q: 'Что такое K-factor?', a: 'K-factor (referral viral coefficient) = Приглашённые пользователи / Активные пригласившие. >1 означает вирусный рост.' },
  revenue:        { title: 'Revenue Calculator — выручка за период', desc: 'Общая выручка за период. Здоровье определяется ростом MoM/YoY и Rule of 40, не абсолютом.', q: 'Что такое Revenue?', a: 'Revenue — общая выручка от всех источников. Сама по себе — счётчик; оценивайте через рост, маржу, unit-экономику.' },
  // Growth
  cr:             { title: 'Conversion Rate Calculator — CR формула, отраслевые нормы', desc: 'CR = Конверсии / Посетители × 100%. Норма e-com 1–4%, SaaS 2–8%. Goal-режим: target конверсии или посетители.', q: 'Как рассчитать Conversion Rate?', a: 'Conversion Rate = Целевые действия / Всего посетителей × 100%. E-commerce норма 1–4%, SaaS lead-to-trial 2–8%.' },
  roas:           { title: 'ROAS калькулятор — Return on Ad Spend, формула', desc: 'ROAS = Выручка от рекламы / Затраты. Норма e-com >4x, SaaS >3x. Goal-режим: max бюджет при target ROAS.', q: 'Как считать ROAS?', a: 'ROAS = Выручка от рекламы / Затраты. E-commerce норма >4× (400%), SaaS — >3×. Goal-режим даст max бюджет при заданной target-доходности.', faq: [
    { q: 'Чем ROAS отличается от ROI?', a: 'ROAS = Выручка / Ad Spend. ROI = (Прибыль − Затраты) / Затраты. ROAS — gross, до маржи. ROI — net, после COGS. ROAS быстрее для тактики, ROI точнее для стратегии.' },
    { q: 'Какой ROAS считается хорошим?', a: 'E-commerce: >4× норма, >6× отлично (с учётом 60–70% маржи). SaaS: >3× (длинный LTV компенсирует). Mobile gaming: >1.5× (быстрая монетизация). Главное — break-even ROAS = 1 / Gross Margin.' },
    { q: 'Что такое break-even ROAS?', a: 'Break-even ROAS = 1 / Gross Margin. При 70% марже break-even ROAS = 1.43×. Ниже этого — каждая кампания убыточна. Это floor, target должен быть в 2–3× выше break-even.' },
    { q: 'Как повысить ROAS?', a: '(1) creatives — A/B-тесты, 80% улучшений идёт оттуда; (2) landing page conversion (CR×ROAS); (3) audience targeting (lookalikes от high-LTV); (4) AOV-апселы; (5) убрать broad-match low-intent keywords.' }
  ]},
  cpc:            { title: 'CPC калькулятор — Cost Per Click', desc: 'CPC = Затраты / Клики. Отраслевые бенчмарки по платформам. Связь с CR, ROAS.', q: 'Что такое CPC?', a: 'Cost Per Click — средняя стоимость клика. SaaS: $2–8 норма, e-com: $0.3–1.2.' },
  ctr:            { title: 'CTR калькулятор — Click-Through Rate', desc: 'CTR = Клики / Показы × 100%. Норма поиск 2–5%, баннеры 0.5–1.5%.', q: 'Что такое CTR?', a: 'Click-Through Rate — кликабельность. Поиск: >2%, баннеры: >0.1%, email: >20%.' },
  bounceRate:     { title: 'Bounce Rate калькулятор — формула и нормы', desc: 'Bounce Rate = Однострочные сессии / Все × 100%. E-com норма <55%, SaaS <60%.', q: 'Что такое Bounce Rate?', a: 'Bounce Rate — процент сессий с одной страницей. E-com норма <55%, SaaS <60%, медиа <80%.' },
  // QA
  bugRate:        { title: 'Bug Rate Calculator — плотность багов', desc: 'Bug Rate = Баги / KLOC или спринт. Норма <2 на KLOC.', q: 'Что такое Bug Rate?', a: 'Bug Rate — плотность дефектов на 1000 строк кода или на спринт. Норма <2/KLOC, хорошо <1/KLOC.' },
  testCoverage:   { title: 'Test Coverage Calculator — формула и нормы', desc: 'Test Coverage = Покрытые требования / Все × 100%. SaaS норма >85%.', q: 'Что такое Test Coverage?', a: 'Test Coverage — доля кода или требований, покрытых автотестами. SaaS норма >85%, mobile >75%.' },
  defectDensity:  { title: 'Defect Density Calculator — формула', desc: 'Defect Density = Дефекты / KLOC. Норма <2/KLOC.', q: 'Что такое Defect Density?', a: 'Defect Density — плотность дефектов на 1000 строк кода. Норма <2, хорошо <1.' },
  // Support
  csat:           { title: 'CSAT Calculator — Customer Satisfaction Score', desc: 'CSAT = Оценки 4–5 / Всего × 100%. Норма SaaS >85%.', q: 'Как считать CSAT?', a: 'CSAT = Положительные оценки (4–5 из 5) / Всего оценок × 100%. SaaS норма >85%.' },
  nps:            { title: 'NPS калькулятор (Net Promoter Score) — формула + нормы', desc: 'NPS = % Промоутеров − % Детракторов. Норма >30, отлично >70.', q: 'Как рассчитать NPS?', a: 'NPS = % Промоутеров (9–10) − % Детракторов (0–6). Хорошо >30, очень высоко >50, мирового уровня >70.', faq: [
    { q: 'Какая формула NPS?', a: 'NPS = % Промоутеров (оценки 9–10) − % Детракторов (0–6). Нейтралы (7–8) не считаются. Результат: число от −100 до +100. Не процент.' },
    { q: 'Какой NPS считается хорошим?', a: '<0 — критично, пользователи активно отговаривают. 0–30 — есть куда расти. 30–50 — хорошо. 50–70 — отлично (Slack, Netflix). >70 — мирового уровня (Apple, Tesla).' },
    { q: 'Как часто опрашивать NPS?', a: 'B2C SaaS: ежеквартально + после ключевых событий (onboarding+30 дней, churn-моменты). B2B: 2× в год + post-renewal. Не чаще — иначе survey fatigue. Транзакционный NPS (после support ticket) — отдельная метрика.' },
    { q: 'Как улучшить NPS?', a: '(1) close-the-loop с детракторами (личный звонок CEO/CSM в первые 48 ч), (2) систематический анализ комментариев, (3) фичи из топ-3 жалоб промоутеров, (4) бенчмарк по сегментам — иногда low NPS концентрирован в одном.' }
  ]},
  fcr:            { title: 'FCR Calculator (First Contact Resolution)', desc: 'FCR = Решено с первого обращения / Всего × 100%. Норма >80%.', q: 'Что такое FCR?', a: 'First Contact Resolution — процент тикетов, решённых с первого контакта. SaaS норма >82%, e-com >75%.' },
  sla:            { title: 'SLA Calculator — формула и бенчмарки', desc: 'SLA = Тикеты в срок / Всего × 100%. Норма >98%, enterprise >99.9%.', q: 'Что такое SLA?', a: 'Service Level Agreement — доля тикетов, обработанных в срок. Норма >98%, enterprise >99.9%.' },
  // Finance & Sales
  grossMargin:    { title: 'Gross Margin калькулятор — формула, SaaS нормы', desc: 'Gross Margin = (Revenue − COGS) / Revenue. SaaS >75% норма, >85% отлично. Связь с Rule of 40 и Burn Multiple.', q: 'Что такое Gross Margin?', a: 'Валовая маржа = (Выручка − COGS) / Выручка × 100%. Прямые издержки на доставку продукта. SaaS норма >75%, отлично >85%.' },
  runway:         { title: 'Runway калькулятор — сколько месяцев осталось', desc: 'Runway = Кэш / Месячное сжигание. Когда фандрейзить? <6 мес критично, 12–18 норма, >18 здорово.', q: 'Как считать Runway?', a: 'Runway = Кэш / Среднемесячный Net Burn. Сколько месяцев компания проживёт. <6 мес критично, 12–18 норма, >18 здорово.', faq: [
    { q: 'Как считать Runway?', a: 'Runway (мес) = Кэш на балансе / Net Burn в месяц. Net Burn = Расходы − Выручка. Берите средний burn за последние 3 месяца, не один последний — он volatile.' },
    { q: 'Когда начинать фандрейзинг?', a: 'Standard: ставьте на стол ≥ 6 мес runway. SaaS fundraise обычно занимает 3–6 мес. Если runway <9 мес — начинайте уже. <6 мес — слабая переговорная позиция (term sheet hostage).' },
    { q: 'Какой runway считается здоровым?', a: '<6 мес — критично, экстренные cost-cuts. 6–12 мес — фандрейзинг. 12–18 мес — норма для seed/Series A. 18–24 мес — отличная позиция. >24 мес — раунд был «лишним».' },
    { q: 'Как продлить Runway?', a: '(1) сокращение расходов (хедкаунт — 70% бюджета SaaS), (2) ускорение revenue (annual prepay, ценообразование), (3) bridge от existing инвесторов, (4) venture debt (Brex, SVB, Silicon Valley Bridge). Cut + grow одновременно.' }
  ]},
  burnRate:       { title: 'Burn Rate калькулятор — месячное сжигание', desc: 'Burn Rate = Расходы − Выручка за месяц. Связано с Runway и Burn Multiple.', q: 'Что такое Burn Rate?', a: 'Burn Rate — чистое денежное сжигание за месяц. Положительное число — компания тратит больше, чем зарабатывает. Контекст важен — см. Runway и Burn Multiple.' },
  salesVelocity:  { title: 'Sales Velocity калькулятор B2B — формула и оптимизация', desc: 'Sales Velocity = (Opps × ACV × Win Rate) / Длина цикла. Goal-режим: целевая velocity и max цикл.', q: 'Что такое Sales Velocity?', a: 'Sales Velocity = (Активные opportunities × ACV × Win Rate) / Длина цикла в днях. Скорость генерации выручки B2B-воронки. Ускоряйте через 4 рычага.' },
  winRate:        { title: 'Win Rate калькулятор B2B — формула и бенчмарки', desc: 'Win Rate = Closed Won / Всего закрытых. B2B SaaS норма 20–25%, отлично >35%.', q: 'Что такое Win Rate?', a: 'Win Rate = Closed Won / (Won + Lost) × 100%. B2B SaaS норма 20–25%, SMB 25–35%, отлично >35%.' },
  pipelineCoverage:{ title: 'Pipeline Coverage калькулятор — стандарт 3x', desc: 'Pipeline / Quota. Норма B2B SaaS — 3–4x от плана. Goal-режим: нужный pipeline.', q: 'Какое Pipeline Coverage нужно?', a: 'Pipeline Coverage = Pipeline Value / Quota. B2B SaaS стандарт — 3–4× от плана. <2× критически мало, >4× безопасный запас.' },
  timeToValue:    { title: 'Time to Value калькулятор — формула и нормы', desc: 'Среднее время от регистрации до первой ценности (Aha-моменту). Главный driver Activation.', q: 'Что такое Time to Value?', a: 'TtV — медианное время от регистрации до Aha-моменту. PLG <1 день, B2B 1–14 дней. Долгая TtV убивает Activation и Retention.' },
  arpdau:         { title: 'ARPDAU калькулятор — выручка с дневного пользователя', desc: 'ARPDAU = Дневная выручка / DAU. Free-to-play $0.05–$5, premium $0.5–$20. Goal-режим.', q: 'Что такое ARPDAU?', a: 'Average Revenue Per Daily Active User = Дневная выручка / DAU. Ключевая метрика mobile F2P-игр. Top tier: $0.30–$1, mid: $0.10–$0.30.' },
  // 52-metric expansion
  aov:                { title: 'AOV калькулятор — Average Order Value, формула', desc: 'AOV = Выручка / Заказы. Базовая метрика e-commerce. Премиум-сегмент: >$200. Bundle и upsell — рычаги роста.', q: 'Что такое AOV?', a: 'AOV = Total Revenue / Number of Orders. Средний чек — базовая метрика e-commerce. Низкий AOV → апселы, бандлы, free-shipping threshold.' },
  repeatPurchaseRate: { title: 'Repeat Purchase Rate калькулятор — RPR e-commerce', desc: 'RPR = Клиенты с 2+ заказами / Все клиенты. Главный индикатор лояльности. Норма 20–30%, отлично >50%.', q: 'Как рассчитать Repeat Purchase Rate?', a: 'RPR = Customers with 2+ orders / Total customers × 100%. Лояльность e-com. Норма 20–30%, премиум-бренды 30–50%, Amazon-уровень >50%.' },
  mrrGrowthRate:      { title: 'MRR Growth Rate калькулятор — MoM рост SaaS', desc: 'MoM Growth = (End MRR − Start MRR) / Start MRR. YC-стандарт: 5–7% MoM минимум. Главная SaaS-метрика.', q: 'Какой MRR Growth Rate считается хорошим?', a: 'MoM норма >5%, хорошо >10%, отлично >20%. T2D3 = 100% YoY за 3 года. YC рекомендует минимум 5–7% MoM для seed-стадии.', faq: [
    { q: 'Как считать MRR Growth Rate?', a: 'MoM Growth = (MRR_end − MRR_start) / MRR_start × 100%. Например: $80k → $88k = +10% MoM. Cumulative MoM = (1+r)¹² − 1. 10% MoM → 213% YoY роста.' },
    { q: 'Какой MRR Growth Rate здоровый по стадиям?', a: 'Pre-PMF: variable, важна абсолютная цифра. Seed (post-PMF): 15–20% MoM. Series A: 10–15%. Series B+: 5–10%. T2D3 — стандарт top-tier VC: 3× → 3× → 2× → 2× → 2× YoY.' },
    { q: 'Что такое правило Y Combinator о MRR-росте?', a: 'YC рекомендует 5–7% WoW для pre-seed (excellent) или 5–7% MoM (good). Paul Graham: "стартап = компания, делающая 5–7% в неделю". Это main metric YC office hours.' },
    { q: 'Как ускорить MRR Growth?', a: '(1) канал-маркет фит: один лидирующий канал, не 5 средних; (2) контракты на год вместо месяц (мгновенно поднимает MRR); (3) Expansion-flows (seat-based, usage-based); (4) ICP-фокус: один сегмент, потом расширение.' }
  ]},
  salesCycleLength:   { title: 'Sales Cycle Length калькулятор B2B — длина цикла', desc: 'Cycle = Сумма дней / Количество выигранных. SMB <30, Mid-market 30–90, Enterprise 90–180+ дней.', q: 'Что такое Sales Cycle Length?', a: 'Sales Cycle Length = Total days from opportunity-created to closed-won / Number of won deals. PLG <14 дней, SMB 14–60, Enterprise 120–365.' },
  engagementRate:     { title: 'Engagement Rate калькулятор — SMM и контент', desc: 'Engagement Rate = Взаимодействия / Reach × 100%. Норма 1–3%, top-tier creators >6%.', q: 'Что такое Engagement Rate?', a: 'ER = (Likes + Comments + Shares + Clicks) / Reach × 100%. Главная метрика SMM. Менее 1% — плохо, 3–6% — хорошо, >6% — top-tier.' }
};

function buildHtml(template, id, meta) {
  const url = `${SITE}/${id}`;
  const title = meta.title + ' | MetricTree';
  const desc = meta.desc;
  // OG image — static PNG (Telegram/Slack/iMessage all render PNG).
  const ogImg = `${SITE}/og-image.png`;

  let html = template;

  // <title>
  html = html.replace(/<title>[^<]+<\/title>/, `<title>${title}</title>`);
  // description
  html = html.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${desc}">`);
  // canonical
  html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}">`);
  // og:url
  html = html.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}">`);
  // og:title
  html = html.replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${title}">`);
  // og:description
  html = html.replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${desc}">`);
  // og:image — static PNG, Telegram/Slack/iMessage friendly
  html = html.replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${ogImg}">`);
  html = html.replace(/<meta property="og:image:type"[^>]*>/, `<meta property="og:image:type" content="image/png">`);
  html = html.replace(/<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${ogImg}">`);
  html = html.replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${title}">`);
  html = html.replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${desc}">`);

  // Append per-metric FAQ JSON-LD + hreflang link tags just before </head>.
  // Use rich faq array if defined (top metrics), else fall back to single {q,a}.
  const faqEntries = (meta.faq && meta.faq.length)
    ? meta.faq
    : [{ q: meta.q, a: meta.a }];
  const faqJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqEntries.map(({ q, a }) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a }
    }))
  };
  const perMetricFaq = `
    <script type="application/ld+json">
${JSON.stringify(faqJson, null, 2)}
    </script>
    <link rel="alternate" hreflang="ru" href="${SITE}/${id}">
    <link rel="alternate" hreflang="en" href="${SITE}/en/${id}">
    <link rel="alternate" hreflang="uz" href="${SITE}/uz/${id}">
    <link rel="alternate" hreflang="x-default" href="${SITE}/${id}">
`;
  html = html.replace('</head>', perMetricFaq + '</head>');

  return html;
}

function main() {
  const indexPath = path.join(ROOT, 'index.html');
  const template = fs.readFileSync(indexPath, 'utf8');

  let generated = 0;
  for (const [id, meta] of Object.entries(META)) {
    const out = buildHtml(template, id, meta);
    fs.writeFileSync(path.join(ROOT, `${id}.html`), out);
    generated++;
  }
  console.log(`✓ Generated ${generated} per-metric HTML files`);
}

main();
