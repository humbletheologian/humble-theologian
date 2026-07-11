# Devotions Site Integration Patch

This patch makes the new `Ordinary Faithfulness` devotions findable across the site.

Upload these files to the root:

- `devotions.md`
- `index.html`
- `start-here.md`
- `topics.md`
- `resources.md`

Upload these to `_includes`:

- `_includes/header.html`
- `_includes/footer.html`

What changes:

- Adds a new `/devotions/` hub page.
- Adds `Devotions` to the main menu.
- Keeps `Love as a Verb` and `Spurgeon` reachable through the new devotions hub.
- Adds devotions to the homepage.
- Adds devotions to Start Here.
- Adds a devotions pointer on Topics.
- Adds Ordinary Faithfulness and the Devotions hub to Resources.

Test these URLs after upload and rebuild:

- `/devotions/`
- `/ordinary-faithfulness-devotions/`
- `/`
- `/start-here/`
- `/topics/`
- `/resources/`
