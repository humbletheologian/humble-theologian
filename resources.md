---
permalink: /resources/
layout: page
title: "Resources"
description: "Reading lists, devotional material and Bible study resources for thoughtful Christians."
kicker: "Resources"
---

Resources are here to help readers keep learning without making the site feel cluttered. The aim is to point people toward material that supports Bible study, theological reflection, pastoral care and Christian formation.

## Current resources

- [Recommended Reading]({{ '/recommended-reading/' | relative_url }}) - a curated list of books from my library, with brief notes on why each one matters and who it may help.
- [Love as a Verb]({{ '/love-as-a-verb/' | relative_url }}) - devotional reflections on love as something lived, practised and embodied.
- [Spurgeon Devotionals]({{ '/spurgeon/' | relative_url }}) - public-domain devotional classics with brief Humble Theologian reflections.
- [Topics]({{ '/topics/' | relative_url }}) - a library-style index for theology guides, Bible college help, disability theology, pastoral care and church life.
- [Recommended YouTube Channels and Ministries](/recommended-youtube/)

## How resources will be handled

The site will avoid uploading large files where normal web pages will work better. Devotionals and articles should be readable on phones, searchable and easy to link to directly.

Published books will not be republished here. Instead, the site will list books with short summaries, reading guidance and personal notes.


## Spurgeon Devotionals

These classic devotional texts are included as devotional resources, with attribution to Charles H. Spurgeon.

{% for item in site.spurgeon %}
- [{{ item.title }}]({{ item.url | relative_url }})
{% endfor %}
