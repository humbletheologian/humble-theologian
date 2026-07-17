#!/usr/bin/env python3
"""Build a local pool of 1,000 WEB Protestant verses from official eBible USFM."""

from __future__ import annotations

import io
import json
import random
import re
import urllib.request
import zipfile
from collections import defaultdict
from pathlib import Path

SOURCE_URL = "https://ebible.org/Scriptures/engwebp_usfm.zip"
OUTPUT = Path("assets/data/verse-pool.json")
JS_OUTPUT = Path("assets/js/random-verse.js")
POOL_SIZE = 1000
SEED = 20260717

BOOK_NAMES = {
    "GEN": "Genesis", "EXO": "Exodus", "LEV": "Leviticus", "NUM": "Numbers",
    "DEU": "Deuteronomy", "JOS": "Joshua", "JDG": "Judges", "RUT": "Ruth",
    "1SA": "1 Samuel", "2SA": "2 Samuel", "1KI": "1 Kings", "2KI": "2 Kings",
    "1CH": "1 Chronicles", "2CH": "2 Chronicles", "EZR": "Ezra", "NEH": "Nehemiah",
    "EST": "Esther", "JOB": "Job", "PSA": "Psalms", "PRO": "Proverbs",
    "ECC": "Ecclesiastes", "SNG": "Song of Songs", "ISA": "Isaiah",
    "JER": "Jeremiah", "LAM": "Lamentations", "EZK": "Ezekiel", "DAN": "Daniel",
    "HOS": "Hosea", "JOL": "Joel", "AMO": "Amos", "OBA": "Obadiah",
    "JON": "Jonah", "MIC": "Micah", "NAM": "Nahum", "HAB": "Habakkuk",
    "ZEP": "Zephaniah", "HAG": "Haggai", "ZEC": "Zechariah", "MAL": "Malachi",
    "MAT": "Matthew", "MRK": "Mark", "LUK": "Luke", "JHN": "John", "ACT": "Acts",
    "ROM": "Romans", "1CO": "1 Corinthians", "2CO": "2 Corinthians",
    "GAL": "Galatians", "EPH": "Ephesians", "PHP": "Philippians",
    "COL": "Colossians", "1TH": "1 Thessalonians", "2TH": "2 Thessalonians",
    "1TI": "1 Timothy", "2TI": "2 Timothy", "TIT": "Titus", "PHM": "Philemon",
    "HEB": "Hebrews", "JAS": "James", "1PE": "1 Peter", "2PE": "2 Peter",
    "1JN": "1 John", "2JN": "2 John", "3JN": "3 John", "JUD": "Jude",
    "REV": "Revelation",
}

GROUPS = {
    "wisdom": {
        "books": {"JOB", "PSA", "PRO", "ECC"},
        "target": 280,
    },
    "gospels": {
        "books": {"MAT", "MRK", "LUK", "JHN"},
        "target": 260,
    },
    "church": {
        "books": {"ACT", "ROM", "1CO", "2CO", "GAL", "EPH", "PHP", "COL",
                  "1TH", "2TH", "1TI", "2TI", "TIT", "PHM", "HEB", "JAS",
                  "1PE", "2PE", "1JN", "2JN", "3JN", "JUD", "REV"},
        "target": 300,
    },
    "old_testament": {
        "books": {"GEN", "EXO", "DEU", "JOS", "JDG", "RUT", "1SA", "2SA",
                  "1KI", "2KI", "EZR", "NEH", "EST", "ISA", "JER", "LAM",
                  "EZK", "DAN", "HOS", "JOL", "AMO", "OBA", "JON", "MIC",
                  "NAM", "HAB", "ZEP", "HAG", "ZEC", "MAL"},
        "target": 160,
    },
}

INLINE_MARKERS = re.compile(
    r"\\(?:add|bd|bdit|bk|dc|em|it|k|nd|ord|pn|qt|sc|sig|sls|tl|wj)\*?"
)
FOOTNOTES = re.compile(r"\\(?:f|x)\s+.*?\\(?:f|x)\*", re.DOTALL)
CROSSREF_PARTS = re.compile(r"\\(?:fr|ft|fk|fq|fqa|fl|fp|fv|fdc|fm|xo|xk|xq|xt|xta|xop|xot|xnt|xdc)\*?")
OTHER_MARKERS = re.compile(r"\\[a-z0-9+\-]+\*?")
SPACES = re.compile(r"\s+")

BAD_STARTS = (
    "and he said", "and she said", "and they said", "and it happened", "then he said",
    "then she said", "then they said", "he said to", "she said to", "they said to",
    "these are the generations", "the sons of", "the children of", "the border went",
)


def clean_text(text: str) -> str:
    text = FOOTNOTES.sub("", text)
    text = CROSSREF_PARTS.sub("", text)
    text = INLINE_MARKERS.sub("", text)
    text = OTHER_MARKERS.sub("", text)
    text = text.replace("~", " ")
    text = SPACES.sub(" ", text).strip()
    text = text.strip("¶ ")
    return text


def parse_usfm(raw: str) -> list[dict[str, object]]:
    book_match = re.search(r"^\\id\s+([1-3A-Z]{3})\b", raw, re.MULTILINE)
    if not book_match:
        return []
    code = book_match.group(1)
    if code not in BOOK_NAMES:
        return []

    chapter = 0
    current = None
    verses = []

    for line in raw.splitlines():
        chapter_match = re.match(r"^\\c\s+(\d+)", line)
        if chapter_match:
            if current:
                verses.append(current)
                current = None
            chapter = int(chapter_match.group(1))
            continue

        verse_match = re.match(r"^\\v\s+([0-9]+)(?:-[0-9]+)?\s+(.*)", line)
        if verse_match:
            if current:
                verses.append(current)
            current = {
                "book_code": code,
                "book": BOOK_NAMES[code],
                "chapter": chapter,
                "verse": int(verse_match.group(1)),
                "text": verse_match.group(2),
            }
            continue

        if current and line and not line.startswith("\\"):
            current["text"] += " " + line
        elif current and re.match(r"^\\(?:q[1-4]?|m|p|pi[1-4]?|mi|nb|pc|pr)\s+", line):
            current["text"] += " " + re.sub(r"^\\\S+\s*", "", line)

    if current:
        verses.append(current)

    for item in verses:
        item["text"] = clean_text(str(item["text"]))
        item["reference"] = f'{item["book"]} {item["chapter"]}:{item["verse"]}'
    return verses


def suitable(item: dict[str, object]) -> bool:
    text = str(item["text"])
    words = re.findall(r"[A-Za-zÀ-ÖØ-öø-ÿ’'-]+", text)
    if not 7 <= len(words) <= 48:
        return False
    if len(text) < 35 or len(text) > 310:
        return False
    lower = text.lower().lstrip('“\"')
    if lower.startswith(BAD_STARTS):
        return False
    if text.count("[") or text.count("]"):
        return False
    if not re.search(r"[.!?’”]$", text):
        return False
    if re.search(r"\b(?:cubits?|talents?|shekels?|genealogy|generations)\b", lower):
        return False
    return True


def main() -> None:
    request = urllib.request.Request(SOURCE_URL, headers={"User-Agent": "Humble-Theologian-Verse-Builder/1.0"})
    with urllib.request.urlopen(request, timeout=90) as response:
        archive = response.read()

    all_verses = []
    with zipfile.ZipFile(io.BytesIO(archive)) as zf:
        for name in zf.namelist():
            if not name.lower().endswith((".usfm", ".sfm")):
                continue
            raw = zf.read(name).decode("utf-8-sig", errors="replace")
            all_verses.extend(parse_usfm(raw))

    candidates = [item for item in all_verses if suitable(item)]
    by_code = defaultdict(list)
    for item in candidates:
        by_code[str(item["book_code"])].append(item)

    rng = random.Random(SEED)
    selected = []
    selected_refs = set()

    for group in GROUPS.values():
        pool = [item for code in group["books"] for item in by_code.get(code, [])]
        rng.shuffle(pool)
        for item in pool:
            if item["reference"] in selected_refs:
                continue
            selected.append(item)
            selected_refs.add(item["reference"])
            if sum(1 for chosen in selected if chosen["book_code"] in group["books"]) >= group["target"]:
                break

    if len(selected) < POOL_SIZE:
        remainder = [item for item in candidates if item["reference"] not in selected_refs]
        rng.shuffle(remainder)
        selected.extend(remainder[: POOL_SIZE - len(selected)])

    selected = selected[:POOL_SIZE]
    if len(selected) != POOL_SIZE:
        raise RuntimeError(f"Only found {len(selected)} suitable verses")

    # Remove internal fields and sort by reference for a stable, reviewable file.
    output = [
        {"reference": item["reference"], "text": item["text"], "translation": "WEB"}
        for item in selected
    ]
    output.sort(key=lambda x: x["reference"])

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    JS_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    javascript = """window.HUMBLE_THEOLOGIAN_VERSES = """ + json.dumps(output, ensure_ascii=False) + """;

(function () {
  function randomIndex(length) {
    if (length <= 1) return 0;

    if (window.crypto && window.crypto.getRandomValues) {
      const values = new Uint32Array(1);
      window.crypto.getRandomValues(values);
      return values[0] % length;
    }

    return Math.floor(Math.random() * length);
  }

  function showRandomVerse() {
    const textElement = document.getElementById("daily-verse-text");
    const referenceElement = document.getElementById("daily-verse-reference");
    const verses = window.HUMBLE_THEOLOGIAN_VERSES;

    if (!textElement || !referenceElement || !Array.isArray(verses) || !verses.length) {
      return;
    }

    let nextIndex = randomIndex(verses.length);
    const previousIndex = Number(sessionStorage.getItem("humbleVerseIndex"));

    if (
      verses.length > 1 &&
      Number.isInteger(previousIndex) &&
      nextIndex === previousIndex
    ) {
      nextIndex = (nextIndex + 1 + randomIndex(verses.length - 1)) % verses.length;
    }

    const selected = verses[nextIndex];
    textElement.textContent = selected.text;
    referenceElement.textContent = selected.reference + " (WEB)";
    sessionStorage.setItem("humbleVerseIndex", String(nextIndex));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showRandomVerse, { once: true });
  } else {
    showRandomVerse();
  }

  window.addEventListener("pageshow", function (event) {
    if (event.persisted) showRandomVerse();
  });
})();
"""
    JS_OUTPUT.write_text(javascript, encoding="utf-8")
    print(f"Wrote {len(output)} verses to {OUTPUT} and {JS_OUTPUT}")


if __name__ == "__main__":
    main()
