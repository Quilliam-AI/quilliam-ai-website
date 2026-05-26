#!/usr/bin/env python3
"""Capture desktop + mobile screenshots for the SEO audit."""
import os
import sys
from playwright.sync_api import sync_playwright

OUT = "/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/.seo-audit/screenshots"
os.makedirs(OUT, exist_ok=True)

PAGES = [
    ("/", "home"),
    ("/ai-automation-cornwall", "ai-automation-cornwall"),
    ("/ai-consultant-uk", "ai-consultant-uk"),
    ("/about", "about"),
    ("/service-areas", "service-areas"),
    ("/book", "book"),
]

VIEWPORTS = [
    ("desktop", 1440, 900, 1),
    ("mobile", 390, 844, 2),
]

BASE = "http://localhost:3000"

results = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    for vname, w, h, dsf in VIEWPORTS:
        ctx = browser.new_context(viewport={"width": w, "height": h}, device_scale_factor=dsf)
        for path, slug in PAGES:
            page = ctx.new_page()
            url = BASE + path
            out_atf = f"{OUT}/{slug}_{vname}_atf.png"
            out_full = f"{OUT}/{slug}_{vname}_full.png"
            try:
                page.goto(url, wait_until="networkidle", timeout=30000)
                page.wait_for_timeout(800)
                page.screenshot(path=out_atf, full_page=False)
                page.screenshot(path=out_full, full_page=True)
                # also capture scrolled state to test sticky nav
                if vname == "desktop" and path == "/":
                    page.evaluate("window.scrollTo(0, 600)")
                    page.wait_for_timeout(400)
                    page.screenshot(path=f"{OUT}/{slug}_{vname}_scrolled.png", full_page=False)
                results.append((slug, vname, "ok"))
                print(f"OK {slug} {vname}")
            except Exception as e:
                results.append((slug, vname, f"err: {e}"))
                print(f"ERR {slug} {vname}: {e}", file=sys.stderr)
            finally:
                page.close()
        ctx.close()
    browser.close()

print("\nSummary:")
for r in results:
    print(r)
