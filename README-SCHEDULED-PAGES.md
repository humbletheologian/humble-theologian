# Scheduled GitHub Pages rebuild

Upload `.github/workflows/scheduled-pages-rebuild.yml` to your repository.

After committing it, go to Settings > Pages and set the source to **GitHub Actions** if it is not already using Actions.

The workflow builds and deploys the site:

- on every push to `main`
- manually via **Actions > Build and deploy GitHub Pages > Run workflow**
- every Friday at 02:15 UTC, which is 10:15am in Perth

This weekly rebuild lets Friday-dated Jekyll posts become visible without making a manual commit.
