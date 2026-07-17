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

  function cleanVerseText(text) {
    if (typeof text !== "string") return "";

    return text
      // Remove Strong's, lemma and other pipe attributes while preserving words.
      .replace(/\|(?:[A-Za-z0-9_+:-]+="[^"]*"\s*)+/g, "")
      // Remove any remaining USFM word markers.
      .replace(/\\\+?w\*?/g, "")
      // Repair apostrophe spacing.
      .replace(/\b([A-Za-z]+)([’'])\s+([A-Za-z])\b/g, "$1$2$3")
      // Remove spaces before punctuation.
      .replace(/\s+([,.;:!?])/g, "$1")
      // Normalise whitespace.
      .replace(/\s+/g, " ")
      .trim();
  }

  function showRandomVerse() {
    const textElement = document.getElementById("daily-verse-text");
    const referenceElement = document.getElementById("daily-verse-reference");
    const verses = Array.isArray(window.HUMBLE_THEOLOGIAN_VERSES)
      ? window.HUMBLE_THEOLOGIAN_VERSES
      : [];

    if (!textElement || !referenceElement || !verses.length) {
      return;
    }

    let nextIndex = randomIndex(verses.length);

    try {
      const previousIndex = Number(sessionStorage.getItem("humbleVerseIndex"));
      if (
        verses.length > 1 &&
        Number.isInteger(previousIndex) &&
        nextIndex === previousIndex
      ) {
        nextIndex = (nextIndex + 1 + randomIndex(verses.length - 1)) % verses.length;
      }
      sessionStorage.setItem("humbleVerseIndex", String(nextIndex));
    } catch (error) {
      // Continue even if browser storage is unavailable.
    }

    const selected = verses[nextIndex];
    const cleanedText = cleanVerseText(selected && selected.text);

    textElement.textContent =
      cleanedText || "Your word is a lamp to my feet, and a light for my path.";

    referenceElement.textContent =
      selected && selected.reference
        ? selected.reference + " (WEB)"
        : "Psalm 119:105 (WEB)";
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
