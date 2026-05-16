"""
Generate the static og-image.png — 1200x630 PNG with brand layout.
Runs once locally; commit the resulting og-image.png alongside.

No external SVG converter needed — draws directly with Pillow.
"""
from PIL import Image, ImageDraw, ImageFont
import os, sys

OUT = os.path.join(os.path.dirname(__file__), 'og-image.png')
W, H = 1200, 630

# Brand colors
BG       = (10, 12, 14)        # #0A0C0E
BG_PANEL = (20, 23, 28)        # #14171C
TEXT     = (232, 234, 237)     # #E8EAED
MUTED    = (107, 111, 117)     # #6b6f75
ACCENT   = (42, 109, 244)      # #2A6DF4
GREEN    = (76, 175, 80)
YELLOW   = (255, 193, 7)
RED      = (244, 67, 54)


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    """Best-available font on Windows; fall back to default if missing."""
    candidates_bold = [
        r'C:\Windows\Fonts\seguibd.ttf',     # Segoe UI Bold
        r'C:\Windows\Fonts\arialbd.ttf',
        r'C:\Windows\Fonts\Verdana Bold.ttf',
    ]
    candidates_reg = [
        r'C:\Windows\Fonts\segoeui.ttf',     # Segoe UI
        r'C:\Windows\Fonts\arial.ttf',
        r'C:\Windows\Fonts\verdana.ttf',
    ]
    for p in (candidates_bold if bold else candidates_reg):
        try:
            return ImageFont.truetype(p, size)
        except OSError:
            continue
    return ImageFont.load_default()


def rounded_rect(draw: ImageDraw.ImageDraw, xy, radius, fill=None, outline=None, width=1):
    """Polyfill for older Pillow versions."""
    x0, y0, x1, y1 = xy
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)


def main():
    img = Image.new('RGB', (W, H), BG)
    d = ImageDraw.Draw(img)

    # Top accent strip (gradient simulation via 4 stops)
    for i in range(6):
        d.line([(0, i), (W * 0.65, i)], fill=ACCENT)

    # Brand mark + label
    pad_x = 70
    d.rounded_rectangle((pad_x, 60, pad_x + 26, 86), radius=4, fill=ACCENT)
    d.text((pad_x + 38, 58), 'METRICTREE', fill=MUTED, font=load_font(26, bold=True))

    # Metric name (huge)
    d.text((pad_x, 140), 'MetricTree', fill=TEXT, font=load_font(120, bold=True))

    # Subtitle
    d.text((pad_x, 290), '52 product metrics calculator', fill=TEXT, font=load_font(40))

    # Formula chip
    chip_x, chip_y = pad_x, 360
    formula = 'LTV · CAC · MRR · NRR · Runway · Burn Multiple · Rule of 40 · …'
    f_formula = load_font(24, bold=True)
    text_bbox = d.textbbox((0, 0), formula, font=f_formula)
    chip_w = text_bbox[2] + 40
    chip_h = 56
    chip_bg = (42, 109, 244, 46)
    overlay = Image.new('RGBA', (chip_w, chip_h), chip_bg)
    img.paste(overlay, (chip_x, chip_y), overlay)
    d.rounded_rectangle((chip_x, chip_y, chip_x + chip_w, chip_y + chip_h), radius=12, outline=(42, 109, 244, 80), width=1)
    d.text((chip_x + 20, chip_y + 15), formula, fill=ACCENT, font=f_formula)

    # Benchmark badges
    badges = [
        ('Free, no signup', GREEN),
        ('3 languages', ACCENT),
        ('Goal mode', GREEN),
        ('Embed-ready', YELLOW),
    ]
    bx, by = pad_x, 460
    f_badge = load_font(20, bold=True)
    for text, color in badges:
        tb = d.textbbox((0, 0), text, font=f_badge)
        bw = tb[2] + 36
        bh = 44
        d.rounded_rectangle((bx, by, bx + bw, by + bh), radius=22, outline=color, width=2)
        d.text((bx + 18, by + 11), text, fill=color, font=f_badge)
        bx += bw + 12

    # Footer
    d.text((pad_x, H - 50), 'metricstree.vercel.app', fill=MUTED, font=load_font(22, bold=True))
    f_tag = load_font(20)
    tag = 'LTV · CAC · MRR · Goal mode · RU · EN · UZ'
    tb = d.textbbox((0, 0), tag, font=f_tag)
    d.text((W - pad_x - tb[2], H - 48), tag, fill=TEXT, font=f_tag)

    img.save(OUT, 'PNG', optimize=True)
    size_kb = os.path.getsize(OUT) / 1024
    print(f'OK  {OUT}  ({size_kb:.1f} KB, {W}x{H})')


if __name__ == '__main__':
    main()
