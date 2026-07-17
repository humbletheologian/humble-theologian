# One-time setup for the 1,000-verse local pool

The live site uses only local files. It does not call a Bible API.

After uploading this repository to GitHub:

1. Open the repository's **Actions** tab.
2. Select **Build local WEB verse pool**.
3. Choose **Run workflow**.
4. Wait for the workflow to finish and commit `assets/data/verse-pool.json`.

The workflow downloads the official public-domain World English Bible Protestant
USFM source from eBible.org, screens verses for reasonable standalone length,
builds a balanced pool of 1,000 verses, then commits the resulting local JSON file.

After that one-time run, every page refresh selects another local verse. The script
uses `sessionStorage` to avoid immediately repeating the same verse in one browser tab.
