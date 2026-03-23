#!/usr/bin/env python3
"""
Sacred Texts Archive Bulk Downloader
Downloads .gz/.zip ebook files from a pre-fetched URL list.
Uses curl for downloads (handles Cloudflare better than Python requests).

Usage:
    python sacred_texts_downloader.py

Output:
    ./sacred_texts/  — all downloaded files, preserving folder structure
    ./sacred_texts/download_log.txt — log of successes/failures
"""

import time
import logging
import cloudscraper
from pathlib import Path
from urllib.parse import urlparse

# ── Config ────────────────────────────────────────────────────────────────────

OUTPUT_DIR  = Path("./sacred_texts")
URL_FILE    = OUTPUT_DIR / "download_urls.txt"
LOG_FILE    = OUTPUT_DIR / "download_log.txt"

DELAY_BETWEEN_REQUESTS = 1.5
MAX_RETRIES            = 3
TIMEOUT                = 30

# ── Setup ─────────────────────────────────────────────────────────────────────

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

session = cloudscraper.create_scraper()

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s  %(levelname)s  %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE),
        logging.StreamHandler(),
    ],
)
log = logging.getLogger(__name__)

# ── Helpers ───────────────────────────────────────────────────────────────────

def url_to_local_path(url):
    parsed = urlparse(url)
    rel = parsed.path.lstrip("/")
    return OUTPUT_DIR / rel


def download_file(url, dest):
    if dest.exists() and dest.stat().st_size > 0:
        log.info(f"SKIP (already exists): {dest.name}")
        return True

    dest.parent.mkdir(parents=True, exist_ok=True)

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            resp = session.get(url, timeout=TIMEOUT, stream=True)
            resp.raise_for_status()
            with open(dest, "wb") as f:
                for chunk in resp.iter_content(chunk_size=8192):
                    f.write(chunk)
            log.info(f"OK  {dest.name}  ({dest.stat().st_size / 1024:.1f} KB)")
            return True
        except Exception as e:
            log.warning(f"Attempt {attempt}/{MAX_RETRIES} failed for {url}: {e}")
            if dest.exists():
                dest.unlink()
            if attempt < MAX_RETRIES:
                time.sleep(DELAY_BETWEEN_REQUESTS * attempt)

    log.error(f"FAILED: {url}")
    return False

# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    log.info("=== Sacred Texts Bulk Downloader ===")
    log.info(f"Output directory: {OUTPUT_DIR.resolve()}")

    if not URL_FILE.exists():
        log.error(f"URL file not found: {URL_FILE}")
        return

    file_urls = [
        line.strip() for line in URL_FILE.read_text().splitlines()
        if line.strip() and not line.startswith("#")
    ]
    # Deduplicate preserving order
    file_urls = list(dict.fromkeys(file_urls))
    log.info(f"Found {len(file_urls)} files to download.")

    success, fail = 0, 0
    for i, url in enumerate(file_urls, 1):
        dest = url_to_local_path(url)
        log.info(f"[{i}/{len(file_urls)}] {url}")
        if download_file(url, dest):
            success += 1
        else:
            fail += 1
        time.sleep(DELAY_BETWEEN_REQUESTS)

    log.info("=== Download Complete ===")
    log.info(f"Success: {success}  |  Failed: {fail}  |  Total: {len(file_urls)}")
    log.info(f"Files saved to: {OUTPUT_DIR.resolve()}")


if __name__ == "__main__":
    main()
