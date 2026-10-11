"""Render cover.png (the social preview image) for each comic.

The cover is the first two panels side by side at 1200x600. It is picked up
automatically as og:image / twitter:image because it is named cover.*.

Usage, with the Hugo preview server running (hugo server -D -F):

    python comics-studio/render-covers.py                # every comic
    python comics-studio/render-covers.py hit-order      # just these
    python comics-studio/render-covers.py --base http://localhost:1313

Re-run it whenever a strip's art or text changes.
"""
import argparse
import os
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


def main():
    parser = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    parser.add_argument("slugs", nargs="*", help="comic folder names (default: all)")
    parser.add_argument("--base", default="http://localhost:1313", help="preview server address")
    args = parser.parse_args()

    slugs = args.slugs or sorted(
        d for d in os.listdir(COMICS) if os.path.isfile(os.path.join(COMICS, d, "index.md"))
    )
    browser = find_browser()
    for slug in slugs:
        out = os.path.join(COMICS, slug, "cover.png")
        url = "%s/comics/%s/#cover-render" % (args.base.rstrip("/"), slug)
        cmd = [browser, "--headless=new", "--disable-gpu", "--hide-scrollbars",
               "--window-size=1200,600", "--screenshot=" + out, url]
        # Headless Chrome occasionally hangs on exit, so give it a time limit and one retry.
        for attempt in (1, 2):
            try:
                subprocess.run(cmd, check=True, timeout=45,
                               stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                break
            except subprocess.TimeoutExpired:
                if attempt == 2:
                    sys.exit("Timed out rendering %s" % slug)
        print("%s -> %s" % (slug, os.path.relpath(out, ROOT)))


if __name__ == "__main__":
    main()
