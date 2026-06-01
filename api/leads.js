// MetricTree admin — read leads from Vercel KV.
//
// Auth: ?secret=<ADMIN_SECRET> query param (timing-safe comparison).
// Requires env vars:
//   ADMIN_SECRET    — random token Rodion sets in Vercel (this is your "password")
//   KV_REST_API_URL — auto-populated when KV connected to project
//   KV_REST_API_TOKEN — same
//
// If KV not configured: returns 503 with setup instructions.
// If secret wrong/missing: returns 401.
//
// Usage:
//   GET /api/leads?secret=<token>          → JSON array of leads
//   GET /api/leads?secret=<token>&csv=1    → CSV download
//   GET /api/leads?secret=<token>&limit=50 → only last 50

export const config = { runtime: 'edge' };

function timingSafeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export default async function handler(req) {
  const url = new URL(req.url);
  // Prefer the Authorization: Bearer header (not written to access logs / history);
  // fall back to ?secret= for manual curl use.
  const authHeader = req.headers.get('authorization') || '';
  const secret = authHeader.replace(/^Bearer\s+/i, '').trim() || url.searchParams.get('secret') || '';
  const adminSecret = process.env.ADMIN_SECRET;

  if (!adminSecret) {
    return new Response(JSON.stringify({
      error: 'ADMIN_SECRET not configured',
      hint: 'Set ADMIN_SECRET env var in Vercel → Settings → Environment Variables (use a random 24+ char string)'
    }), { status: 503, headers: { 'Content-Type': 'application/json' } });
  }
  if (!timingSafeEqual(secret, adminSecret)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Support both legacy Vercel KV names (KV_REST_API_*) and new Upstash names
  // (UPSTASH_REDIS_REST_*) — Vercel renamed in 2024 Marketplace migration.
  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  // Diagnostic mode — returns which env vars are present (without exposing values).
  // Use: /api/leads?secret=<TOKEN>&debug=1
  if (url.searchParams.get('debug') === '1') {
    const envKeys = Object.keys(process.env).filter(k =>
      /^(KV_|UPSTASH_|REDIS_|TELEGRAM_|RESEND_|ADMIN_)/.test(k)
    );
    return new Response(JSON.stringify({
      ok: true,
      mode: 'debug',
      kv_detected: !!(kvUrl && kvToken),
      kv_url_present: !!kvUrl,
      kv_token_present: !!kvToken,
      relevant_env_vars: envKeys.sort(),
      hint: kvUrl && kvToken
        ? 'KV detected and ready. Remove ?debug=1 to see leads.'
        : 'KV not detected. Check that storage integration is connected to this project + redeployed.'
    }, null, 2), { status: 200, headers: { 'Content-Type': 'application/json' } });
  }

  if (!kvUrl || !kvToken) {
    return new Response(JSON.stringify({
      error: 'KV not configured',
      hint: 'Vercel → Storage → Marketplace → Upstash Redis → Connect to Project, then redeploy. Or open /api/leads?secret=<TOKEN>&debug=1 to see which env vars are present.'
    }), { status: 503, headers: { 'Content-Type': 'application/json' } });
  }

  const limit = Math.min(parseInt(url.searchParams.get('limit') || '500', 10), 1000);
  const csvMode = url.searchParams.get('csv') === '1';

  // Read from Redis list "leads" (newest first since we LPUSH)
  let leads = [];
  try {
    const resp = await fetch(`${kvUrl}/lrange/leads/0/${limit - 1}`, {
      headers: { Authorization: `Bearer ${kvToken}` }
    });
    const json = await resp.json();
    // Upstash returns { result: [string, string, ...] }
    leads = (json.result || []).map(s => {
      try { return JSON.parse(s); } catch { return { raw: s }; }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'KV read failed', detail: e.message }), {
      status: 502, headers: { 'Content-Type': 'application/json' }
    });
  }

  if (csvMode) {
    // CSV export
    const cols = ['ts', 'email', 'tier', 'source', 'role', 'company', 'url', 'ip'];
    const rows = [cols.join(',')];
    leads.forEach(l => {
      rows.push(cols.map(c => {
        let v = (l[c] ?? '').toString();
        // Defuse CSV formula injection (attacker-controlled email/company opened
        // in Excel/Sheets): prefix a leading =, +, -, @, tab or CR with a quote.
        if (/^[=+\-@\t\r]/.test(v)) v = "'" + v;
        v = v.replace(/"/g, '""');
        return /[",\n]/.test(v) ? `"${v}"` : v;
      }).join(','));
    });
    return new Response(rows.join('\n'), {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="metrictree-leads-${new Date().toISOString().slice(0, 10)}.csv"`
      }
    });
  }

  return new Response(JSON.stringify({
    ok: true,
    count: leads.length,
    leads
  }, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache'
    }
  });
}
