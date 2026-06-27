---
permalink: /resources/
layout: page
title: "Resources"
description: "Reading lists, devotional material and recommended resources for thoughtful Christians."
kicker: "Resources"
---

Resources are here to help readers keep learning without making the site feel cluttered. The aim is to point people toward material that supports Bible study, theological reflection, pastoral care and Christian formation.

## Search and site navigation

- [Search the site]({{ '/search/' | relative_url }}) - find articles, pages, devotional resources and topics by keyword.
- [Articles]({{ '/articles/' | relative_url }}) - all articles in date order.
- [Topics]({{ '/topics/' | relative_url }}) - articles grouped by subject.
- [RSS Feed]({{ '/feed.xml' | relative_url }}) - subscribe to new articles.

## Recommended resources

- [Recommended Reading]({{ '/recommended-reading/' | relative_url }}) - a curated list of books from my library, with brief notes on why each one matters and who it may help.
- [Recommended YouTube Channels and Ministries]({{ '/recommended-youtube/' | relative_url }}) - YouTube channels and ministries I follow or find useful for theology, Bible study, apologetics, church life and Christian discipleship.
- [Organisations and Tools]({{ '/organisations/' | relative_url }}) - churches, organisations and tools I interact with, belong to or support.

## Focus areas

- [Disability and Church]({{ '/disability-and-church/' | relative_url }}) - a hub for resources on disability, dignity, belonging, accessibility, healing assumptions and church life.

## Devotional resources

- [Love as a Verb]({{ '/love-as-a-verb/' | relative_url }}) - devotional reflections on love as something lived, practised and embodied.
- [Spurgeon Devotionals](#spurgeon-devotionals) - public-domain devotional classics with brief Humble Theologian reflections.

## How resources will be handled

The site will avoid uploading large files where normal web pages will work better. Devotionals and articles should be readable on phones, searchable and easy to link to directly.

Published books will not be republished here. Instead, the site will list books with short summaries, reading guidance and personal notes.

## Spurgeon Devotionals
{: id="spurgeon-devotionals" }

These classic devotional texts are included as devotional resources, with attribution to Charles H. Spurgeon.

{% for item in site.spurgeon %}
- [{{ item.title }}]({{ item.url | relative_url }})
{% endfor %}
