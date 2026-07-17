(function () {
  const verseText = document.getElementById("daily-verse-text");
  const verseReference = document.getElementById("daily-verse-reference");
  if (!verseText || !verseReference) return;

  const verses = Array.isArray(window.HUMBLE_THEOLOGIAN_VERSES)
    ? window.HUMBLE_THEOLOGIAN_VERSES.filter(function (item) {
        return item && item.reference && item.text;
      })
    : [];

  if (!verses.length) {
    verseText.textContent = "Your word is a lamp to my feet, and a light for my path.";
    verseReference.textContent = "Psalm 119:105 (WEB)";
    return;
  }

  let index = Math.floor(Math.random() * verses.length);
  const previousReference = sessionStorage.getItem("humbleTheologianLastVerseReference");

  if (verses.length > 1 && verses[index].reference === previousReference) {
    index = (index + 1 + Math.floor(Math.random() * (verses.length - 1))) % verses.length;
  }

  const selected = verses[index];
  sessionStorage.setItem("humbleTheologianLastVerseReference", selected.reference);
  verseText.textContent = selected.text;
  verseReference.textContent = selected.reference + " (WEB)";
})();
