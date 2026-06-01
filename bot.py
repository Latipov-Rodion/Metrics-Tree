"""
MetricTree Telegram bot — quick calculator for product metrics.

Setup:
  1. Get a bot token from @BotFather → /newbot
  2. Set env: BOT_TOKEN=8123:AAxxxxxxx
  3. Install: pip install python-telegram-bot==21.6
  4. Run: python bot.py
  5. Open: t.me/your_bot_username

Commands:
  /start            — welcome + menu
  /ltv 2500 4 3     — calculate LTV inline
  /cac 50000 200    — calculate CAC
  /mrr 50000        — show MRR with benchmarks
  /churn 150 2000   — calculate Churn Rate
  /nps 150 40 250   — calculate NPS
  /runway 5000000 300000 — Runway in months
  /list             — list supported metrics
  /web              — link to full web calculator
  /help             — show this

Hosting:
  - Run locally: python bot.py (works as long-poll)
  - Railway: add Procfile `worker: python bot.py`, set BOT_TOKEN env
  - Render: same pattern (background worker)
  - Fly.io: same
  - Vercel serverless: switch to webhook mode (see comments below)
"""
import os
import logging
from html import escape

try:
    from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
    from telegram.ext import Application, CommandHandler, CallbackQueryHandler, ContextTypes
except ImportError:
    print('ERROR: pip install python-telegram-bot==21.6')
    raise

WEB = 'https://metricstree.vercel.app'
TOKEN = os.environ.get('BOT_TOKEN')

logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s %(name)s: %(message)s')
log = logging.getLogger('metrictree-bot')


# ====== Metric calculators ======
def calc_ltv(args):
    aov, freq, life = map(float, args)
    v = aov * freq * life
    return v, f'AOV ${aov:,.0f} × {freq} purchases × {life} years = <b>${v:,.0f}</b>\nCompare LTV:CAC — target ≥ 3:1.'

def calc_cac(args):
    spend, customers = map(float, args)
    v = spend / customers
    return v, f'${spend:,.0f} / {customers:.0f} customers = <b>${v:,.0f}</b> CAC\nSaaS payback norm: 12–18 months.'

def calc_mrr(args):
    mrr = float(args[0])
    return mrr, f'MRR = <b>${mrr:,.0f}</b>\nARR = ${mrr * 12:,.0f}\nHealth depends on MoM growth (target >10%).'

def calc_churn(args):
    lost, total = map(float, args)
    pct = (lost / total) * 100
    rating = 'excellent' if pct < 2 else 'normal' if pct < 5 else 'high'
    return pct, f'{lost:.0f} / {total:.0f} = <b>{pct:.1f}%</b> Churn Rate\nSaaS norm: <2%/mo · This: <b>{rating}</b>'

def calc_nps(args):
    promoters, detractors, total = map(float, args)
    nps = ((promoters - detractors) / total) * 100
    rating = 'world-class (>70)' if nps > 70 else 'excellent (>50)' if nps > 50 else 'good (>30)' if nps > 30 else 'low'
    return nps, f'({promoters:.0f} − {detractors:.0f}) / {total:.0f} × 100 = <b>{nps:.1f}</b> NPS\n{rating}'

def calc_runway(args):
    cash, burn = map(float, args)
    if burn <= 0:
        return float('inf'), f'Cash-positive — runway is <b>infinite</b>.'
    months = cash / burn
    rating = 'critical (raise NOW)' if months < 6 else 'risky (start fundraising)' if months < 12 else 'normal' if months < 18 else 'healthy'
    return months, f'${cash:,.0f} / ${burn:,.0f}/mo = <b>{months:.1f} months</b>\nStatus: <b>{rating}</b>'

def calc_ltv_cac(args):
    ltv, cac = map(float, args)
    if cac <= 0:
        return None, 'CAC must be > 0'
    r = ltv / cac
    rating = 'excellent' if r > 5 else 'healthy' if r >= 3 else 'below norm' if r > 1 else 'losing money'
    return r, f'${ltv:,.0f} / ${cac:,.0f} = <b>{r:.2f}x</b> LTV:CAC\n{rating} (target ≥ 3:1)'

def calc_burn_mult(args):
    burn, new_arr = map(float, args)
    if new_arr <= 0:
        return None, 'New ARR must be > 0'
    bm = burn / new_arr
    rating = 'excellent' if bm < 1 else 'good' if bm < 1.5 else 'norm' if bm < 2 else 'high (optimize)'
    return bm, f'${burn:,.0f} / ${new_arr:,.0f} = <b>{bm:.2f}x</b> Burn Multiple\nDavid Sacks framework · {rating}'

def calc_rule40(args):
    growth, margin = map(float, args)
    s = growth + margin
    rating = 'top decile (>60)' if s > 60 else 'healthy' if s >= 40 else 'below Rule of 40'
    return s, f'Growth {growth}% + Margin {margin}% = <b>{s:.1f}%</b>\n{rating}'

METRICS = {
    'ltv':          (calc_ltv,       3, 'AOV freq lifetime',           'LTV — Lifetime Value'),
    'cac':          (calc_cac,       2, 'marketing_spend new_customers','CAC — Customer Acquisition Cost'),
    'mrr':          (calc_mrr,       1, 'mrr_amount',                  'MRR — Monthly Recurring Revenue'),
    'churn':        (calc_churn,     2, 'lost total',                  'Churn Rate'),
    'nps':          (calc_nps,       3, 'promoters detractors total',  'NPS — Net Promoter Score'),
    'runway':       (calc_runway,    2, 'cash monthly_burn',           'Runway — months left'),
    'ltvcac':       (calc_ltv_cac,   2, 'ltv cac',                     'LTV:CAC Ratio'),
    'burn':         (calc_burn_mult, 2, 'net_burn new_arr',            'Burn Multiple (David Sacks)'),
    'rule40':       (calc_rule40,    2, 'growth_yoy_pct margin_pct',   'Rule of 40 (SaaS health)')
}


# ====== Handlers ======
def _kb_main():
    rows = []
    keys = list(METRICS.keys())
    for i in range(0, len(keys), 3):
        row = [InlineKeyboardButton(k.upper(), callback_data=f'usage:{k}') for k in keys[i:i + 3]]
        rows.append(row)
    rows.append([InlineKeyboardButton('🌐 Open full web calculator', url=WEB)])
    return InlineKeyboardMarkup(rows)


async def cmd_start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    text = (
        '<b>📊 MetricTree bot</b>\n\n'
        'Quick calculators for 9 popular product metrics. Tap a button for usage, '
        'or send <code>/ltv 2500 4 3</code> directly.\n\n'
        f'For the full 48-metric calculator with Goal mode, What-If, and 3 languages: {WEB}'
    )
    await update.message.reply_html(text, reply_markup=_kb_main())


async def cmd_help(update: Update, context: ContextTypes.DEFAULT_TYPE):
    lines = ['<b>Commands:</b>']
    for k, (_, _, args_hint, name) in METRICS.items():
        lines.append(f'  <code>/{k} {args_hint}</code> — {name}')
    lines.append('  <code>/list</code> — same as this')
    lines.append('  <code>/web</code> — open web calculator')
    lines.append(f'\n🌐 Full calculator: {WEB}')
    await update.message.reply_html('\n'.join(lines))


async def cmd_web(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_html(f'🌐 Full 48-metric calculator: {WEB}\n\nFeatures: Goal mode, What-If sliders, Forecast charts, 5 industry presets, 4 currencies, 3 languages, embed mode, free forever.')


async def metric_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    cmd = update.message.text.split()[0][1:].lower().split('@')[0]
    if cmd not in METRICS:
        return
    calc, arity, args_hint, name = METRICS[cmd]
    args = context.args
    if len(args) < arity:
        await update.message.reply_html(
            f'<b>{name}</b>\nUsage: <code>/{cmd} {args_hint}</code>\nExample: <code>/{cmd} ' + (' '.join(['1' for _ in range(arity)])) + '</code>'
        )
        return
    try:
        _, msg = calc(args[:arity])
    except Exception as e:
        await update.message.reply_html(f'Error: <code>{escape(str(e))}</code>\nUsage: <code>/{cmd} {args_hint}</code>')
        return
    web_link = f'{WEB}/{cmd if cmd != "ltvcac" else "ltv_cac"}'
    await update.message.reply_html(f'<b>{name}</b>\n{msg}\n\n🌐 Full version: {web_link}')


async def cmd_list(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await cmd_help(update, context)


async def callback_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    q = update.callback_query
    await q.answer()
    if q.data.startswith('usage:'):
        cmd = q.data.split(':', 1)[1]
        _, arity, args_hint, name = METRICS[cmd]
        example_args = ' '.join(['100' for _ in range(arity)])
        web_path = cmd if cmd != 'ltvcac' else 'ltv_cac'
        text = (
            f'<b>{name}</b>\n\n'
            f'Usage: <code>/{cmd} {args_hint}</code>\n'
            f'Example: <code>/{cmd} {example_args}</code>\n\n'
            f'🌐 Full: {WEB}/{web_path}'
        )
        await q.edit_message_text(
            text,
            parse_mode='HTML',
            reply_markup=InlineKeyboardMarkup([[InlineKeyboardButton('« back', callback_data='back')]])
        )
    elif q.data == 'back':
        await q.edit_message_text(
            '<b>📊 MetricTree bot</b>\n\nTap a metric for usage:',
            parse_mode='HTML',
            reply_markup=_kb_main()
        )


def main():
    if not TOKEN:
        raise SystemExit('Set BOT_TOKEN env var. Get one from @BotFather → /newbot.')
    app = Application.builder().token(TOKEN).build()
    app.add_handler(CommandHandler('start', cmd_start))
    app.add_handler(CommandHandler('help', cmd_help))
    app.add_handler(CommandHandler('list', cmd_list))
    app.add_handler(CommandHandler('web', cmd_web))
    for cmd in METRICS.keys():
        app.add_handler(CommandHandler(cmd, metric_handler))
    app.add_handler(CallbackQueryHandler(callback_handler))
    log.info('MetricTree bot started')
    app.run_polling()


if __name__ == '__main__':
    main()
