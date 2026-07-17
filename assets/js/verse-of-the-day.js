(function () {
  const verseText = document.getElementById("daily-verse-text");
  const verseReference = document.getElementById("daily-verse-reference");
  if (!verseText || !verseReference) return;

  const today = new Date();
  const key = String(today.getMonth() + 1).padStart(2, "0") + "-" +
              String(today.getDate()).padStart(2, "0");

  fetch("/assets/data/verse-of-the-day.json")
    .then(function (response) {
      if (!response.ok) throw new Error("Unable to load verse schedule.");
      return response.json();
    })
    .then(function (verses) {
      const selected = verses.find(function (item) { return item.date === key; });
      if (!selected) throw new Error("No verse assigned for today.");

      verseReference.textContent = selected.reference + " (NIV)";
      verseText.textContent = selected.text && selected.text.trim()
        ? selected.text
        : "Read today’s selected verse in your NIV Bible.";
    })
    .catch(function () {
      verseText.textContent = "Read today’s selected verse in your NIV Bible.";
      verseReference.textContent = "Psalm 119:105 (NIV)";
    });
})();
