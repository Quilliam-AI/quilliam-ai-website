#!/usr/bin/env python3
"""Build Quilliam AI wordmark SVGs (icon + 'Quilliam AI' text) and PNG variants.

Output: writes to ./wordmark/
  - logo-wordmark-dark.svg, logo-wordmark-white.svg, logo-wordmark-emerald.svg
  - PNG variants at 256, 512, 1024, 2048 widths for each colour
"""
import re
import subprocess
import tempfile
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parent
SRC_ICON = ROOT / "svg" / "logo-dark.svg"
OUT = ROOT / "wordmark"
OUT.mkdir(exist_ok=True)


def measure_text_width(text: str, font_family: str, font_weight: int, font_size: int, letter_spacing: int) -> int:
    """Render the text alone via librsvg and read the resulting PNG width.

    rsvg-convert measures the actual ink bounds when the SVG has no explicit viewBox,
    so we use that to get a true width before composing the final wordmark.
    """
    measure_svg = f'''<?xml version="1.0" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg">
  <text x="0" y="{font_size}"
        font-family="{font_family}"
        font-weight="{font_weight}"
        font-size="{font_size}"
        letter-spacing="{letter_spacing}">{text}</text>
</svg>'''
    with tempfile.NamedTemporaryFile("w", suffix=".svg", delete=False) as f:
        f.write(measure_svg)
        svg_path = f.name
    out = subprocess.run(
        ["rsvg-convert", "--format=png", svg_path],
        capture_output=True, check=True,
    )
    # PNG width is bytes 16-19 big-endian
    width = int.from_bytes(out.stdout[16:20], "big")
    Path(svg_path).unlink()
    return width

# Extract the <g>...</g> inner markup from the source icon so we can recolour it
src = SRC_ICON.read_text()
icon_inner = re.search(r"<g[\s\S]+</g>", src).group(0)


def recolour(g_block: str, fill: str) -> str:
    return re.sub(r'fill="#[0-9A-Fa-f]+"', f'fill="{fill}"', g_block, count=1)


VARIANTS = {
    "dark":    {"icon": "#080E1C", "text": "#080E1C"},
    "white":   {"icon": "#FFFFFF", "text": "#FFFFFF"},
    "emerald": {"icon": "#10B981", "text": "#080E1C"},
}

# Layout — icon viewBox is 810x810. Place text to its right.
ICON_W = 810
ICON_H = 810
GAP = 120

FONT_FAMILY = "Helvetica Neue, Helvetica, Arial, sans-serif"
FONT_WEIGHT = 800
FONT_SIZE = 600
LETTER_SPACING = -18
TEXT = "Quilliam AI"

# Measure actual rendered text width so the SVG viewBox doesn't crop it
TEXT_W = measure_text_width(TEXT, FONT_FAMILY, FONT_WEIGHT, FONT_SIZE, LETTER_SPACING)
TEXT_W = int(TEXT_W * 1.02)  # 2% trailing breathing room

TOTAL_W = ICON_W + GAP + TEXT_W
TOTAL_H = ICON_H

TEXT_X = ICON_W + GAP
TEXT_Y = 600   # baseline; visually balances middle of icon

print(f"  measured text width: {TEXT_W}px → total wordmark: {TOTAL_W}x{TOTAL_H}")

WORDMARK_SVG = """<?xml version="1.0" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {tw} {th}" width="{tw}" height="{th}">
  {icon_g}
  <text x="{tx}" y="{ty}"
        font-family="{ff}"
        font-weight="{fw}"
        font-size="{fs}"
        letter-spacing="{ls}"
        fill="{text_fill}">{text}</text>
</svg>
"""


def write_svg(name: str, icon_fill: str, text_fill: str) -> Path:
    g = recolour(icon_inner, icon_fill)
    svg = WORDMARK_SVG.format(
        tw=TOTAL_W, th=TOTAL_H,
        icon_g=g,
        tx=TEXT_X, ty=TEXT_Y,
        ff=FONT_FAMILY,
        fw=FONT_WEIGHT,
        fs=FONT_SIZE,
        ls=LETTER_SPACING,
        text_fill=text_fill,
        text=TEXT,
    )
    out = OUT / f"logo-wordmark-{name}.svg"
    out.write_text(svg)
    return out


def render_pngs(svg_path: Path, name: str) -> None:
    for w in (256, 512, 1024, 2048):
        png = OUT / f"logo-wordmark-{name}-{w}.png"
        subprocess.run([
            "rsvg-convert",
            "--width", str(w),
            "--keep-aspect-ratio",
            "--background-color=none",
            "--output", str(png),
            str(svg_path),
        ], check=True)


for name, cols in VARIANTS.items():
    svg_path = write_svg(name, cols["icon"], cols["text"])
    print(f"  · {svg_path.relative_to(ROOT)}")
    render_pngs(svg_path, name)
    for w in (256, 512, 1024, 2048):
        print(f"    + logo-wordmark-{name}-{w}.png")
