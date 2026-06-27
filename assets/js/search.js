(function () {
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var summary = document.getElementById('search-summary');
  var searchData = [];

  if (!input || !results) return;

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function normalise(value) {
    return String(value || '').toLowerCase();
  }

  function getQueryFromUrl() {
    try {
      return new URLSearchParams(window.location.search).get('q') || '';
    } catch (error) {
      return '';
    }
  }

  function setQueryInUrl(query) {
    if (!window.history || !window.history.replaceState) return;
    var url = new URL(window.location.href);
    if (query) {
      url.searchParams.set('q', query);
    } else {
      url.searchParams.delete('q');
    }
    window.history.replaceState({}, '', url.toString());
  }

  function scoreItem(item, terms) {
    var title = normalise(item.title);
    var category = normalise(item.category);
    var topic = normalise(item.topic);
    var description = normalise(item.description);
    var content = normalise(item.content);
    var haystack = [title, category, topic, description, content].join(' ');

    for (var i = 0; i < terms.length; i++) {
      if (haystack.indexOf(terms[i]) === -1) return 0;
    }

    var score = 1;
    terms.forEach(function (term) {
      if (title.indexOf(term) !== -1) score += 10;
      if (topic.indexOf(term) !== -1) score += 5;
      if (category.indexOf(term) !== -1) score += 4;
      if (description.indexOf(term) !== -1) score += 3;
      if (content.indexOf(term) !== -1) score += 1;
    });
    return score;
  }

  function render(query) {
    var trimmed = query.trim();
    setQueryInUrl(trimmed);

    if (trimmed.length < 2) {
      results.innerHTML = '';
      summary.textContent = 'Start typing to search the site.';
      return;
    }

    var terms = trimmed.toLowerCase().split(/\s+/).filter(Boolean);
    var matches = searchData
      .map(function (item) {
        return { item: item, score: scoreItem(item, terms) };
      })
      .filter(function (match) { return match.score > 0; })
      .sort(function (a, b) { return b.score - a.score || a.item.title.localeCompare(b.item.title); })
      .slice(0, 30);

    if (!matches.length) {
      summary.textContent = 'No results found for “' + trimmed + '”.';
      results.innerHTML = '<p>No results found. Try a broader term such as Bible, disability, gospel, hell or church.</p>';
      return;
    }

    summary.textContent = matches.length + (matches.length === 1 ? ' result' : ' results') + ' for “' + trimmed + '”.';
    results.innerHTML = matches.map(function (match) {
      var item = match.item;
      var meta = [item.category, item.topic].filter(Boolean).join(' · ');
      return '<article class="card search-result-card">' +
        '<p class="eyebrow">' + escapeHtml(meta || 'Result') + '</p>' +
        '<h3><a href="' + escapeHtml(item.url) + '">' + escapeHtml(item.title) + '</a></h3>' +
        '<p>' + escapeHtml(item.description || 'Open this result to read more.') + '</p>' +
        '</article>';
    }).join('');
  }

  fetch('/search.json', { cache: 'no-store' })
    .then(function (response) { return response.json(); })
    .then(function (data) {
      searchData = Array.isArray(data) ? data : [];
      var initialQuery = getQueryFromUrl();
      if (initialQuery) {
        input.value = initialQuery;
        render(initialQuery);
      } else {
        summary.textContent = 'Search is ready. Start typing to search ' + searchData.length + ' pages and articles.';
      }
    })
    .catch(function () {
      summary.textContent = 'Search could not load. Please try refreshing the page.';
    });

  input.addEventListener('input', function () {
    render(input.value);
  });
})();
