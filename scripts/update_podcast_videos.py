"""Record the YouTube video of each new podcast episode in data/podcast_videos.yaml.

The site links an episode to its video by matching titles against the channel's feed, but
that feed only lists the 15 newest videos. This script writes each match into the data file
while it is still in the feed, so the link stays after the video drops out of it.

Run by .github/workflows/scheduled-deploy.yml; can also be run by hand from the repo root:

    python scripts/update_podcast_videos.py

It only adds entries; existing ones are never changed. Uses the standard library only.
"""

import re
import sys
import tomllib
import urllib.request
import xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_FILE = ROOT / "data" / "podcast_videos.yaml"
ATOM = "{http://www.w3.org/2005/Atom}"
YT = "{http://www.youtube.com/xml/schemas/2015}"


def fetch(url: str) -> ET.Element:
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, timeout=30) as response:
        return ET.fromstring(response.read())


def normalise(title: str | None) -> str:
    return (title or "").strip().lower()


def main() -> int:
    params = tomllib.loads((ROOT / "hugo.toml").read_text(encoding="utf-8"))["params"]
    channel_id = params["youtubeChannelId"]
    video_feed = "https://www.youtube.com/feeds/videos.xml?playlist_id=UULF" + channel_id.removeprefix("UC")

    videos = {
        normalise(entry.findtext(f"{ATOM}title")): entry.findtext(f"{YT}videoId")
        for entry in fetch(video_feed).iter(f"{ATOM}entry")
    }

    text = DATA_FILE.read_text(encoding="utf-8")
    known = set(re.findall(r'^"?(\d{6})"?\s*:', text, flags=re.MULTILINE))

    added = []
    for item in fetch(params["podcastFeed"]).iter("item"):
        video_id = videos.get(normalise(item.findtext("title")))
        if not video_id:
            continue
        # Same page name the site gives the episode: its publish date in UTC, as YYMMDD
        key = parsedate_to_datetime(item.findtext("pubDate")).strftime("%y%m%d")
        if key not in known:
            known.add(key)
            added.append(f'"{key}": "{video_id}"')

    if added:
        lines = sorted(added)
        DATA_FILE.write_text(text.rstrip("\n") + "\n" + "\n".join(lines) + "\n", encoding="utf-8", newline="\n")
        print("Added:", ", ".join(lines))
    else:
        print("Nothing to add.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
