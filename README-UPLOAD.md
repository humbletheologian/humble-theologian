# Hub Navigation Cleanup Patch

This patch makes the navigation hierarchy more consistent.

Principle used:

- Broad pages point to hub pages.
- Hub pages list individual resources.

What this changes:

- `Start Here` now points to the Devotions hub instead of listing Devotions plus individual devotional collections.
- `Start Here` now points to the Bible Studies hub instead of listing Bible Studies plus individual Bible studies.
- `Resources` now points to the Devotions hub and Bible Studies hub instead of duplicating the individual entries.
- `Home` now promotes the Devotions hub and Bible Studies hub rather than duplicating individual collection/study links.
- `Devotions` remains the page where Ordinary Faithfulness, Love as a Verb and Spurgeon are listed.
- The Bible Studies hub remains the place where individual Bible studies are listed.

Upload these files to the root:

- `index.html`
- `start-here.md`
- `resources.md`
- `topics.md`
- `devotions.md`

Upload these files to `_includes`:

- `_includes/header.html`
- `_includes/footer.html`

Test after upload:

- `/`
- `/start-here/`
- `/resources/`
- `/topics/`
- `/devotions/`
- `/bible-studies/`
