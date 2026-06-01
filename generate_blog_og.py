"""
Generate per-post Open Graph images for the blog (1200x630), so each post gets
a branded share card with its own title instead of the generic og-image.png.

    python generate_blog_og.py

Reads the `title:` frontmatter from blog-src/*.md (RU) and blog-src/en/*.md (EN)
and writes:
  blog-og/<slug>.png        — RU posts  → used as og:image for /blog/<slug>
  blog-og/en/<slug>.png      — EN posts  → used as og:image for /en/blog/<slug>

build-blog.mjs picks these up automatically when present. Uses DejaVu (Cyrillic).
"""
from PIL import Image, ImageDraw, ImageFont
import os, re

ROOT = os.path.dirname(__file__)
W, H = 1200, 630
BG = (10, 12, 14)
ACCENT = (42, 109, 244)
TEXT = (232, 234, 237)
MUTED = (107, 111, 117)


def font(size, bold=True):
    name = 'DejaVuSans-Bold.ttf' if bold else 'DejaVuSans.ttf'
    try:
        return ImageFont.truetype(name, size)
    except OSError:
        return ImageFont.load_default()


def parse_title(path):
    with open(path, encoding='utf-8') as fh:
        txt = fh.read()
    m = re.search(r'^title:\s*(.+)$', txt, re.M)
    return m.group(1).strip() if m else None


def wrap(draw, text, fnt, max_w):
    lines, cur = [], ''
    for word in text.split():
        trial = (cur + ' ' + word).strip()
        if draw.textlength(trial, font=fnt) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def render(title, lang):
    img = Image.new('RGB', (W, H), BG)
    d = ImageDraw.Draw(img)
    pad = 80

    d.rectangle([0, 0, 12, H], fill=ACCENT)                       # left accent stripe
    d.rounded_rectangle([pad, 64, pad + 30, 94], radius=7, fill=ACCENT)
    d.text((pad + 44, 64), 'METRICTREE', fill=MUTED, font=font(28, True))

    size = 64 if len(title) <= 46 else 54 if len(title) <= 72 else 46
    fnt = font(size, True)
    lines = wrap(d, title, fnt, W - 2 * pad)[:4]
    line_h = size + 14
    y = 200
    for ln in lines:
        d.text((pad, y), ln, fill=TEXT, font=fnt)
        y += line_h

    d.text((pad, H - 80), 'metricstree.vercel.app', fill=ACCENT, font=font(30, True))
    label = 'Product metrics guide' if lang == 'en' else 'Гайд по продуктовым метрикам'
    d.text((pad, H - 42), label, fill=MUTED, font=font(24, False))
    return img


def main():
    out = os.path.join(ROOT, 'blog-og')
    os.makedirs(os.path.join(out, 'en'), exist_ok=True)
    n = 0
    for sub, lang in [('blog-src', 'ru'), (os.path.join('blog-src', 'en'), 'en')]:
        src = os.path.join(ROOT, sub)
        if not os.path.isdir(src):
            continue
        for f in sorted(os.listdir(src)):
            if not f.endswith('.md'):
                continue
            title = parse_title(os.path.join(src, f))
            if not title:
                continue
            slug = f[:-3]
            dest = os.path.join(out, 'en', slug + '.png') if lang == 'en' else os.path.join(out, slug + '.png')
            render(title, lang).save(dest, 'PNG')
            n += 1
    print(f'  generated {n} blog OG images → /blog-og/')


if __name__ == '__main__':
    main()
