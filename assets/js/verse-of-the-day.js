(function () {
  function chooseRandomIndex(length) {
    if (length <= 1) return 0;

    if (window.crypto && window.crypto.getRandomValues) {
      const values = new Uint32Array(1);
      window.crypto.getRandomValues(values);
      return values[0] % length;
    }

    return Math.floor(Math.random() * length);
  }

  function displayRandomVerse() {
    const verseText = document.getElementById("daily-verse-text");
    const verseReference = document.getElementById("daily-verse-reference");

    if (!verseText || !verseReference) return;

    const verses = Array.isArray(window.HUMBLE_THEOLOGIAN_VERSES)
      ? window.HUMBLE_THEOLOGIAN_VERSES.filter(function (item) {
          return item &&
                 typeof item.reference === "string" &&
                 item.reference.trim() &&
                 typeof item.text === "string" &&
                 item.text.trim();
        })
      : [];

    if (!verses.length) {
      verseText.textContent =
        "Your word is a lamp to my feet, and a light for my path.";
      verseReference.textContent = "Psalm 119:105 (WEB)";
      return;
    }

    let index = chooseRandomIndex(verses.length);
    const currentReference = verseReference.dataset.selectedReference || "";

    if (verses.length > 1 && verses[index].reference === currentReference) {
      index = (index + 1 + chooseRandomIndex(verses.length - 1)) % verses.length;
    }

    const selected = verses[index];
    verseText.textContent = selected.text;
    verseReference.textContent = selected.reference + " (WEB)";
    verseReference.dataset.selectedReference = selected.reference;
  }

  window.addEventListener("DOMContentLoaded", displayRandomVerse);

  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      displayRandomVerse();
    }
  });

  if (document.readyState !== "loading") {
    displayRandomVerse();
  }
})();
