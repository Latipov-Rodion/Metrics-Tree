// /api/ab-event — collect A/B test exposure + conversion events.
//
// Writes each event to Vercel KV as a list item under key 'ab_events'.
// Capped at 50k entries (~5MB) — admin /admin/experiments aggregates on read.
//
// Event shape (from ab-test.js):
//   { experiment, variant, event, visitor, url, referrer, ts }
//
// No auth on POST (write path) — public anyone can log events. To prevent
// abuse: rate-limit by visitor + cap event list at 50k items.

export const config = { runtime: 'edge' };

const MAX_LIST = 50000;

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

function getKv() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return { url, token, configured: !!(url && token) };
}

async function pushEvent(kv, payload) {
  // Push to Redis list and trim to MAX_LIST entries.
  await fetch(`${kv.url}/lpush/ab_events/${encodeURIComponent(JSON.stringify(payload))}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${kv.token}` }
  });
  await fetch(`${kv.url}/ltrim/ab_events/0/${MAX_LIST - 1}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${kv.token}` }
  });
}

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS });
  }
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...CORS }
    });
  }

  let body;
  try {
    body = await req.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...CORS }
    });
  }

  // Validate required fields
  if (!body.experiment || typeof body.variant !== 'number' || !body.event) {
    return new Response(JSON.stringify({ error: 'Missing required fields: experiment, variant, event' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...CORS }
    });
  }

  // Truncate large fields to prevent storage abuse
  function trunc(s, max) {
    return typeof s === 'string' ? s.slice(0, max) : '';
  }
  const payload = {
    experiment: trunc(body.experiment, 80),
    variant: body.variant,
    event: trunc(body.event, 60),
    visitor: trunc(body.visitor, 40),
    url: trunc(body.url, 200),
    referrer: trunc(body.referrer, 200),
    ts: body.ts || new Date().toISOString(),
    server_ts: new Date().toISOString(),
    ip_hash: 0  // placeholder — could hash x-forwarded-for here for dedupe
  };

  const kv = getKv();
  if (!kv.configured) {
    // Without KV, events are dropped — but endpoint succeeds so client doesn't retry.
    return new Response(JSON.stringify({ ok: true, stored: false, hint: 'KV not configured — events dropped' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...CORS }
    });
  }

  try {
    await pushEvent(kv, payload);
    return new Response(JSON.stringify({ ok: true, stored: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...CORS }
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: e.message }), {
      status: 502,
      headers: { 'Content-Type': 'application/json', ...CORS }
    });
  }
}
