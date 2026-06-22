# GitHub Pages Setup

## First upload

1. Create a GitHub repository, for example `humble-theologian`.
2. Upload all files from this starter package.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and `/root` folder.
6. Save.
7. GitHub will publish the site at a temporary GitHub Pages URL.

## Custom domain later

After the GitHub Pages site is working, connect `www.humbletheologian.com` or `humbletheologian.com` through Name.com DNS. Do not change email forwarding records until they are documented.

## Adding an article manually

Create a new file in `_posts` using this format:

`YYYY-MM-DD-short-title.md`

Example:

`2026-07-01-how-should-christians-read-old-testament-law.md`

Use this front matter:

```yaml
---
layout: post
title: "How Should Christians Read Old Testament Law?"
date: 2026-07-01
author: "Shayne Johnston"
category: "Theology Guides"
topic: "Old Testament Law and Christian Life"
tags: ["Old Testament", "Law", "Bible Study"]
description: "A short description for cards and search previews."
words: 2000
---
```

Then write the article below the front matter.

## CMS option

This package includes `.pages.yml`, an optional Pages CMS configuration. Pages CMS can be added later to edit articles and pages through a browser while still storing the files in GitHub.


## Important link note for first upload

For the least confusing first GitHub test, create either:

1. a **user/organisation site** repository named `YOUR-GITHUB-USERNAME.github.io`, or
2. a project repository named `humble-theologian` and set `_config.yml` `baseurl` to `/humble-theologian`.

If you later point `humbletheologian.com` directly at the site, set `baseurl` back to an empty value: `baseurl: ""`.

The `static-preview` folder is only for checking the design on your computer. Do not upload only that folder as the website source. Upload the whole package contents.
