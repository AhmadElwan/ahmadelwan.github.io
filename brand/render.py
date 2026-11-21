#!/usr/bin/env python3
import argparse
import json
import os
import re
import sys
from pathlib import Path
from urllib.parse import quote

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent
BROWSERS = ("/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Render a brand template to a PNG.")
    parser.add_argument("template")
    parser.add_argument("--data", default="{}", help="JSON object with the template fields")
    parser.add_argument("--out", required=True)
    return parser.parse_args()


def template_size(template: Path) -> tuple[int, int]:
    match = re.search(r'name="size" content="(\d+)x(\d+)"', template.read_text())
    if not match:
        sys.exit(f"{template.name} does not declare a size")
    return int(match.group(1)), int(match.group(2))


def render(template: Path, data: str, out: Path) -> tuple[int, int]:
    width, height = template_size(template)
    url = f"{template.as_uri()}?data={quote(data)}"
    executable = next((path for path in BROWSERS if os.path.exists(path)), None)
    with sync_playwright() as playwright:
        browser = (
            playwright.chromium.launch(executable_path=executable, args=["--no-sandbox"])
            if executable
            else playwright.chromium.launch()
        )
        page = browser.new_page(viewport={"width": width, "height": height})
        page.goto(url)
        page.wait_for_selector("html[data-fonts='1']")
        page.wait_for_timeout(150)
        out.parent.mkdir(parents=True, exist_ok=True)
        page.screenshot(path=str(out), clip={"x": 0, "y": 0, "width": width, "height": height})
        browser.close()
    return width, height


def main() -> None:
    args = parse_args()
    template = ROOT / "templates" / f"{args.template}.html"
    if not template.exists():
        available = ", ".join(path.stem for path in (ROOT / "templates").glob("*.html"))
        sys.exit(f"Unknown template {args.template}. Available: {available}")
    json.loads(args.data)
    width, height = render(template, args.data, Path(args.out))
    print(f"wrote {args.out} {width}x{height}")


if __name__ == "__main__":
    main()
