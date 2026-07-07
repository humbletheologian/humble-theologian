document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('[data-bible-study-sessions]');
  if (!nav) return;

  var list = nav.querySelector('ol');
  var content = document.querySelector('.page-content .prose');
  if (!list || !content) return;

  var headings = Array.prototype.slice.call(content.querySelectorAll('h1, h2'))
    .filter(function (heading) {
      return /^(Week|Session)\s+\d+\b/i.test(heading.textContent.trim());
    });

  if (!headings.length) {
    nav.remove();
    return;
  }

  headings.forEach(function (heading, index) {
    if (!heading.id) {
      heading.id = 'session-' + (index + 1);
    }
    var item = document.createElement('li');
    var link = document.createElement('a');
    link.href = '#' + heading.id;
    link.textContent = heading.textContent.trim();
    item.appendChild(link);
    list.appendChild(item);
  });
});
