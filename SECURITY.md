# Security Policy

## Reporting a vulnerability

If you find a security issue in MetricTree, please **do not open a public issue**.
Instead, report it privately:

- Email: **rodion.121093@gmail.com** (subject: `MetricTree security`)
- Or use GitHub's [private vulnerability reporting](https://github.com/Latipov-Rodion/Metrics-Tree/security/advisories/new).

Please include steps to reproduce, the affected URL/endpoint, and the impact.
We aim to acknowledge within **72 hours** and to ship a fix or mitigation as
quickly as the severity warrants.

## Scope

In scope:

- The static site and calculator (`index.html` and the generated pages).
- The Vercel Edge Functions under `api/` (`calc.js`, `lead.js`, `leads.js`).
- The embeddable widget (`?embed=1`) and the admin dashboard (`/admin`).

Out of scope:

- The third-party platforms we rely on (Vercel, Resend, Telegram, Upstash) —
  report those to the respective vendors.
- Findings that require a compromised admin secret or physical/host access.
- Volumetric DoS (the public `/api/calc` is intentionally open with a soft,
  best-effort rate limit).

## Notes for researchers

- No real personal data is required to exercise the app; please use test data.
- Secrets live only in Vercel environment variables — never in the repo. If you
  ever find a committed secret, treat it as a finding and report it.
- The admin endpoint (`/api/leads`) is protected by a single shared secret sent
  via the `Authorization: Bearer` header (with a `?secret=` fallback).
