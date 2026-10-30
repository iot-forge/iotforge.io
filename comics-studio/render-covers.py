"""Render cover.png and strip.png for each comic.

cover.png is the social preview: the first two panels side by side at 1200x600.
It is picked up automatically as og:image / twitter:image because it is named cover.*.

strip.png is the whole strip, two panels per row at 1200px wide (1200x1200 for a
four-panel comic). The share bar offers it as the "PNG" download and attaches it
to the native share sheet on phones; the download only appears once the file exists.

Usage, with the Hugo preview server running (hugo server -D -F):

    python comics-studio/render-covers.py                # every comic
    python comics-studio/render-covers.py hit-order      # just these
    python comics-studio/render-covers.py --base http://localhost:1313

Re-run it whenever a strip's art or text changes.
"""
import argparse
import math
import os
import re
import shutil
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
COMICS = os.path.join(ROOT, "content", "comics")
BROWSERS = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
]


def find_browser():
    for path in BROWSERS:
        if os.path.exists(path):
            return path
    for name in ("google-chrome", "chromium", "chromium-browser", "chrome", "msedge"):
        found = shutil.which(name)
        if found:
            return found
    sys.exit("No Chrome or Edge found; install one or add its path to BROWSERS.")


def panel_count(slug):
    """Number of panels in a comic, read from the `- art:` entries of its front matter."""
    with open(os.path.join(COMICS, slug, "index.md"), encoding="utf-8") as f:
        return len(re.findall(r"^\s*-\s*art:", f.read(), re.MULTILINE))


def render(browser, url, out, width, height):
    cmd = [browser, "--headless=new", "--disable-gpu", "--hide-scrollbars",
           "--window-size=%d,%d" % (width, height), "--screenshot=" + out, url]
    # Headless Chrome occasionally hangs on exit, so give it a time limit and one retry.
    for attempt in (1, 2):
        try:
            subprocess.run(cmd, check=True, timeout=45,
                           stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            return
        except subprocess.TimeoutExpired:
            if attempt == 2:
                sys.exit("Timed out rendering %s" % url)


def main():
    parser = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    parser.add_argument("slugs", nargs="*", help="comic folder names (default: all)")
    parser.add_argument("--base", default="http://localhost:1313", help="preview server address")
    args = parser.parse_args()

    slugs = args.slugs or sorted(
        d for d in os.listdir(COMICS) if os.path.isfile(os.path.join(COMICS, d, "index.md"))
    )
    browser = find_browser()
    base = args.base.rstrip("/")
    for slug in slugs:
        page = "%s/comics/%s/" % (base, slug)
        folder = os.path.join(COMICS, slug)

        cover = os.path.join(folder, "cover.png")
        render(browser, page + "#cover-render", cover, 1200, 600)

        rows = max(1, math.ceil(panel_count(slug) / 2))
        strip = os.path.join(folder, "strip.png")
        render(browser, page + "#strip-render", strip, 1200, 600 * rows)

        print("%s -> %s, %s" % (slug, os.path.relpath(cover, ROOT), os.path.relpath(strip, ROOT)))


if __name__ == "__main__":
    main()
