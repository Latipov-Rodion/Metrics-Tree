// Tiny helper for tests: pull a JS object literal out of app.js source without
// executing the whole app (which needs a DOM). Handles strings, template
// literals, comments and regex literals well enough for app.js.
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

export function sliceLiteral(src, marker) {
  const at = src.indexOf(marker);
  if (at < 0) throw new Error(`marker not found: ${marker}`);
  let i = src.indexOf('{', at + marker.length - 1);
  const start = i;
  let depth = 0;
  let prevSig = '';
  while (i < src.length) {
    const c = src[i], n = src[i + 1];
    if (c === '/' && n === '/') { i = src.indexOf('\n', i); if (i < 0) break; continue; }
    if (c === '/' && n === '*') { i = src.indexOf('*/', i + 2) + 2; continue; }
    if (c === '"' || c === "'") {
      i++;
      while (src[i] !== c) { if (src[i] === '\\') i++; i++; }
      i++; prevSig = 'x'; continue;
    }
    if (c === '`') {
      i++;
      while (src[i] !== '`') {
        if (src[i] === '\\') { i += 2; continue; }
        if (src[i] === '$' && src[i + 1] === '{') {
          const sub = sliceLiteral(src.slice(i + 1), '{');
          i += 1 + sub.length; continue;
        }
        i++;
      }
      i++; prevSig = 'x'; continue;
    }
    if (c === '/' && /^[(,=:[!&|?{};+\-*%<>~^]?$/.test(prevSig)) {
      i++;
      let inClass = false;
      for (;;) {
        const d = src[i];
        if (d === '\\') { i += 2; continue; }
        if (d === '[') inClass = true; else if (d === ']') inClass = false;
        else if (d === '/' && !inClass) break;
        i++;
      }
      i++;
      while (/[a-z]/.test(src[i])) i++;
      prevSig = 'x'; continue;
    }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) return src.slice(start, i + 1); }
    if (!/\s/.test(c)) prevSig = /[A-Za-z0-9_$)\].]/.test(c) ? 'x' : c;
    i++;
  }
  throw new Error('unbalanced literal for ' + marker);
}

export function evalLiteral(src, marker, ctx = {}) {
  const code = '(' + sliceLiteral(src, marker) + ')';
  const sandbox = {
    sanitizeNumber: v => {
      const n = parseFloat(String(v ?? '').replace(/\s/g, '').replace(',', '.'));
      return Number.isFinite(n) ? n : null;
    },
    window: {},
    ...ctx,
  };
  return vm.runInNewContext(code, sandbox);
}

export function loadAppSource() {
  return readFileSync(new URL('../app.js', import.meta.url), 'utf8');
}
