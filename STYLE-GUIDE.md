# Humble Theologian Style Guide

This file is for maintaining consistency across the site.

## Site purpose

Humble Theologian is a free resource for Bible college students, thoughtful Christians and people who want to explore Christian faith carefully without losing sight of humility, discipleship and pastoral care.

## Tone

- Conversational but thoughtful.
- Clear enough for serious non-specialists.
- Humble about disputed issues.
- Fair to Christians who disagree.
- Pastoral rather than combative.

## Approved article categories

Use one of these category names exactly:

- Core Christian Beliefs
- Bible and Interpretation
- Old Testament Law and Christian Life
- Disability, Faith and Church
- Hell, Judgment and Hope
- Church and Pastoral Care
- Christian Living and Formation
- Personal Reflections

The `category` field controls where the article appears on the Topics page.

## Article front matter template

```yaml
---
layout: post
title: "Article Title"
date: 2026-06-24
author: Shayne Johnston
category: "Core Christian Beliefs"
topic: "Specific topic"
description: "One clear sentence describing the article."
permalink: /clean-article-url/
tags:
  - theology
  - Bible study
words: 2000
---
```

## Article structure

Most major articles should use this pattern:

1. Opening explanation of the issue
2. Several clear sections with descriptive headings
3. A pastoral or practical “why this matters” movement near the end
4. `## Sources and Further Reading`

## Sources format

Use this heading exactly:

```markdown
## Sources and Further Reading
```

Website articles should usually avoid footnote-style citations unless specifically needed. Use a readable article body and a serious source list at the end.

## Permalinks

Use clean, stable permalinks:

```yaml
permalink: /what-is-the-gospel/
```

Avoid category-generated URLs with spaces, commas or `%20`.

## Love as a Verb

Do not rework or reupload the Love as a Verb devotional archive unless a specific file or link is broken.

## Static pages

Static pages should generally include:

- a `kicker`
- a `title`
- a one-sentence `description`
- an opening paragraph that explains the purpose of the page

The page layout automatically adds a “Where to next?” section.
