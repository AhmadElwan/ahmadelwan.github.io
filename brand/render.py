#!/usr/bin/env python3
"""Render a brand template to PNG.

Run from the project root after `npm install` (needs `pip install playwright` + Chrome/Chromium):
  python3 brand/render.py banner --out brand/out/linkedin-banner.png
  python3 brand/render.py banner-dark --out brand/out/linkedin-banner-dark.png
  python3 brand/render.py profile --data '{"photo":"../assets/ahmad.jpg"}' --out brand/out/profile-picture.png
  python3 brand/render.py post-statement --data '{"bg":"paper","kicker":"AI & work","title":"Literacy should now include *AI*.","sub":"Reading and writing are no longer enough."}' --out brand/out/post.png
  python3 brand/render.py post-list --data '{"bg":"ink","title":"Why code reviews matter","items":["Find bugs *faster*","Keep things organized","Save time later"]}' --out brand/out/list.png
  python3 brand/render.py post-question --data '{"title":"Should interviews evolve with *AI*?","items":["Yes, test how we use it","No, keep it solo"]}' --out brand/out/q.png
  python3 brand/render.py post-stat --data '{"big":"2.5","title":"years building software","sub":"..."}' --out brand/out/stat.png

Data keys: theme (olive|red|blue|green|amber|violet|teal; default olive), bg (paper|ink|accent), size (l|m|s, title size), kicker, title, sub, big, items[], footer, pill, photo.
Wrap a word in *stars* to make it an accent word.
"""
import argparse, json, os, re, sys
from pathlib import Path
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parent
ap = argparse.ArgumentParser()
ap.add_argument("template")
ap.add_argument("--data", default="{}")
ap.add_argument("--out", required=True)
a = ap.parse_args()

tpl = root / "templates" / f"{a.template}.html"
if not tpl.exists():
    sys.exit(f"Unknown template {a.template}. Available: " + ", ".join(p.stem for p in (root / 'templates').glob('*.html')))
w, h = map(int, re.search(r'name="size" content="(\d+)x(\d+)"', tpl.read_text()).groups())
json.loads(a.data)  # validate
from urllib.parse import quote
url = tpl.as_uri() + "?data=" + quote(a.data)
exe = next((p for p in ("/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser") if os.path.exists(p)), None)
with sync_playwright() as p:
    b = p.chromium.launch(executable_path=exe, args=["--no-sandbox"]) if exe else p.chromium.launch()
    pg = b.new_page(viewport={"width": w, "height": h})
    pg.goto(url)
    pg.wait_for_selector("html[data-fonts='1']")
    pg.wait_for_timeout(150)
    Path(a.out).parent.mkdir(parents=True, exist_ok=True)
    pg.screenshot(path=a.out, clip={"x": 0, "y": 0, "width": w, "height": h})
    b.close()
print("wrote", a.out, f"{w}x{h}")
