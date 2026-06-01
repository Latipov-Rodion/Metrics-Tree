"""
Generate PWA / Apple-touch icons — a brand-colored bar-chart mark on the dark
MetricTree background. Run once locally; commit the resulting PNGs.

    python generate_icons.py

Produces (at repo root):
  icon-192.png         — PWA manifest icon (any + maskable)
  icon-512.png         — PWA manifest icon (any + maskable)
  apple-touch-icon.png — 180x180 for iOS home screen

No external SVG converter needed — drawn directly with Pillow.
"""
from PIL import Image, ImageDraw
import os

ROOT = os.path.dirname(__file__)

BG = (10, 12, 14, 255)        # #0A0C0E
ACCENT = (42, 109, 244, 255)  # #2A6DF4
WHITE = (255, 255, 255, 255)


def render(size):
    """Render the icon at the given square size."""
    # Draw at 512 then downscale for crisp edges.
    S = 512
    img = Image.new('RGBA', (S, S), BG)
    d = ImageDraw.Draw(img)

    # Accent rounded square, kept inside the maskable safe zone (center ~80%).
    pad = 96
    d.rounded_rectangle([pad, pad, S - pad, S - pad], radius=72, fill=ACCENT)

    # Three ascending white bars (a metrics / chart motif).
    baseline = 360
    bar_w, gap = 48, 28
    heights = [70, 120, 170]
    group_w = len(heights) * bar_w + (len(heights) - 1) * gap
    x = pad + ((S - 2 * pad) - group_w) // 2
    for h in heights:
        d.rounded_rectangle([x, baseline - h, x + bar_w, baseline], radius=10, fill=WHITE)
        x += bar_w + gap

    if size != S:
        img = img.resize((size, size), Image.LANCZOS)
    return img


def main():
    targets = {
        'icon-192.png': 192,
        'icon-512.png': 512,
        'apple-touch-icon.png': 180,
    }
    for name, size in targets.items():
        out = os.path.join(ROOT, name)
        render(size).save(out, 'PNG')
        print(f'  wrote {name} ({size}x{size})')

    # Multi-resolution favicon.ico (index.html references /favicon.ico).
    render(256).save(os.path.join(ROOT, 'favicon.ico'),
                     sizes=[(16, 16), (32, 32), (48, 48)])
    print('  wrote favicon.ico (16/32/48)')


if __name__ == '__main__':
    main()
