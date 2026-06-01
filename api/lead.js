// MetricTree lead-capture endpoint.
//
// Receives form submissions (waitlist, newsletter) from the client and dispatches:
//   1. Telegram message to admin chat (instant push notification on Rodion's phone)
//   2. Resend transactional email (durable record in inbox)
//
// Both channels are tried; success of EITHER returns 200 so the user sees confirmation.
// Failure of both returns 502 so the client falls back to mailto.
//
// Required Vercel env vars (set via vercel.com → Project → Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN   — from @BotFather /newbot
//   TELEGRAM_CHAT_ID     — your Telegram user ID (get it from @userinfobot)
//   RESEND_API_KEY       — from https://resend.com/api-keys
//   RESEND_TO_EMAIL      — destination inbox (e.g., rodion.121093@gmail.com)
//   RESEND_FROM_EMAIL    — verified sender on Resend (e.g., onboarding@resend.dev for testing,
//                          or noreply@yourdomain.com once you verify a domain)
//
// All env vars are OPTIONAL — the endpoint sends to whichever channels are configured.
// If NO channels are configured, returns 503 so the client uses its mailto fallback.

export const config = { runtime: 'edge' };

const MAX_FIELD_LEN = 500; // basic abuse protection

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function truncate(s, max = MAX_FIELD_LEN) {
  const str = String(s ?? '');
  return str.length > max ? str.slice(0, max) + '…' : str;
}

async function sendTelegram(token, chatId, lead) {
  const lines = [
    `<b>🎯 MetricTree lead — ${escapeHtml(lead.source || 'unknown')}</b>`,
    ``,
    lead.email ? `📧 <b>Email:</b> <code>${escapeHtml(lead.email)}</code>` : null,
    lead.tier ? `💎 <b>Tier:</b> ${escapeHtml(lead.tier)}` : null,
    lead.role ? `👤 <b>Role:</b> ${escapeHtml(lead.role)}` : null,
    lead.company ? `🏢 <b>Company:</b> ${escapeHtml(lead.company)}` : null,
    ``,
    `🌐 <code>${escapeHtml(lead.url || '')}</code>`,
    `🕒 ${new Date().toISOString()}`,
  ].filter(Boolean).join('\n');

  const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: lines,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });
  if (!resp.ok) {
    const body = await resp.text().catch(() => '');
    throw new Error(`Telegram ${resp.status}: ${body.slice(0, 200)}`);
  }
}

async function sendResend(apiKey, from, to, lead) {
  const subjectKind = lead.tier
    ? `${lead.tier.toUpperCase()} waitlist`
    : (lead.source || 'newsletter');
  const subject = `🎯 MetricTree lead — ${subjectKind} — ${lead.email || '(no email)'}`;

  const rows = Object.entries(lead)
    .filter(([k]) => !k.startsWith('_'))
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666;">${escapeHtml(k)}</td><td style="padding:4px 0;"><b>${escapeHtml(v)}</b></td></tr>`)
    .join('');

  const html = `<!doctype html>
<html><body style="font-family:system-ui,-apple-system,sans-serif;line-height:1.5;color:#111;">
  <h2 style="margin:0 0 8px;">New MetricTree lead</h2>
  <p style="color:#666;margin:0 0 16px;">Captured ${new Date().toISOString()}</p>
  <table style="border-collapse:collapse;font-size:14px;">${rows}</table>
</body></html>`;

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
      reply_to: lead.email || undefined,
    }),
  });
  if (!resp.ok) {
    const body = await resp.text().catch(() => '');
    throw new Error(`Resend ${resp.status}: ${body.slice(0, 200)}`);
  }
}

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Parse multipart/form-data OR application/json — client sends FormData by default
  let lead = {};
  try {
    const ct = req.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      const raw = await req.json();
      // Apply the same length cap as the formData path (abuse protection).
      for (const [k, v] of Object.entries(raw || {})) {
        lead[k] = (typeof v === 'string') ? truncate(v) : v;
      }
    } else {
      const fd = await req.formData();
      fd.forEach((v, k) => { lead[k] = truncate(v); });
    }
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Basic validation — must have at least an email or some payload
  if (!lead.email && !lead.message) {
    return new Response(JSON.stringify({ error: 'email required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  // Naive email shape check (don't go full RFC — Resend will reject malformed)
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return new Response(JSON.stringify({ error: 'invalid email' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  // Honeypot — if a hidden _gotcha field is filled, it's a bot
  if (lead._gotcha) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Enrich with server-side metadata
  lead.url = lead.url || req.headers.get('referer') || '';
  lead.ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '';
  lead.user_agent = truncate(req.headers.get('user-agent') || '', 200);

  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChat = process.env.TELEGRAM_CHAT_ID;
  const resendKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const resendTo = process.env.RESEND_TO_EMAIL;

  // Persist to Vercel KV / Upstash Redis if configured (for /admin dashboard).
  // Vercel renamed KV→Upstash in 2024 — env vars may be either KV_REST_API_*
  // (legacy) or UPSTASH_REDIS_REST_* (new Marketplace integration). Try both.
  // Graceful: if neither configured, skip silently — Telegram + Resend still fire.
  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  // Best-effort anti-spam: cap submissions per IP per hour when KV is available.
  // Degrades to a no-op without KV, and never blocks delivery on a KV error.
  if (kvUrl && kvToken && lead.ip) {
    try {
      const rlKey = `rl:lead:${lead.ip}`;
      const incr = await fetch(`${kvUrl}/incr/${encodeURIComponent(rlKey)}`, {
        method: 'POST', headers: { Authorization: `Bearer ${kvToken}` },
      }).then(r => r.json()).catch(() => null);
      const count = incr && typeof incr.result === 'number' ? incr.result : 0;
      if (count === 1) {
        await fetch(`${kvUrl}/expire/${encodeURIComponent(rlKey)}/3600`, {
          method: 'POST', headers: { Authorization: `Bearer ${kvToken}` },
        }).catch(() => {});
      }
      if (count > 10) {
        return new Response(JSON.stringify({ error: 'Too many requests — try again later' }), {
          status: 429,
          headers: { 'Content-Type': 'application/json', 'Retry-After': '3600' },
        });
      }
    } catch (e) { /* throttle must never block legitimate delivery */ }
  }

  if (kvUrl && kvToken) {
    try {
      lead.ts = new Date().toISOString();
      lead.id = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
      // Push to a Redis list "leads" (newest first). Capped at 1000 entries.
      await fetch(`${kvUrl}/lpush/leads/${encodeURIComponent(JSON.stringify(lead))}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${kvToken}` }
      });
      await fetch(`${kvUrl}/ltrim/leads/0/999`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${kvToken}` }
      });
    } catch (e) { /* KV failure must not block delivery */ }
  }

  const results = [];
  // Fire both in parallel — fastest path, neither blocks the other
  const promises = [];
  if (tgToken && tgChat) {
    promises.push(sendTelegram(tgToken, tgChat, lead).then(
      () => results.push({ ch: 'telegram', ok: true }),
      (err) => results.push({ ch: 'telegram', ok: false, error: err.message })
    ));
  }
  if (resendKey && resendTo) {
    promises.push(sendResend(resendKey, resendFrom, resendTo, lead).then(
      () => results.push({ ch: 'resend', ok: true }),
      (err) => results.push({ ch: 'resend', ok: false, error: err.message })
    ));
  }

  // No channels configured at all
  if (!promises.length) {
    return new Response(JSON.stringify({
      error: 'no delivery channels configured',
      hint: 'set TELEGRAM_BOT_TOKEN+TELEGRAM_CHAT_ID and/or RESEND_API_KEY+RESEND_TO_EMAIL in Vercel env vars',
    }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  await Promise.all(promises);
  const anyOk = results.some(r => r.ok);

  return new Response(JSON.stringify({
    ok: anyOk,
    results,
  }), {
    status: anyOk ? 200 : 502,
    headers: { 'Content-Type': 'application/json' },
  });
}
