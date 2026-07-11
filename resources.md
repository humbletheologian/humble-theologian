---
permalink: /resources/
layout: page
title: "Resources"
description: "Bible studies, reading lists, devotional material and recommended resources for thoughtful Christians."
kicker: "Resources"
---

Resources are here to help readers keep learning without making the site feel cluttered. The aim is to point people toward material that supports Bible study, theological reflection, pastoral care and Christian formation.

## Site resources

- [Bible Studies]({{ '/bible-studies/' | relative_url }}) - guided studies for thoughtful Christians, group leaders and readers who want Scripture to shape discussion, prayer and practice.
- [Devotions]({{ '/devotions/' | relative_url }}) - devotional resources for prayer, reflection and ordinary discipleship.
- [Search the site]({{ '/search/' | relative_url }}) - find articles, pages, devotional resources and topics by keyword.
- [Glossary]({{ '/glossary/' | relative_url }}) - short definitions of theological, biblical and church terms used across the site.
- [Articles]({{ '/articles/' | relative_url }}) - all articles in date order.
- [Topics]({{ '/topics/' | relative_url }}) - articles grouped by subject.
- [RSS Feed]({{ '/feed.xml' | relative_url }}) - subscribe to new articles.
- [Privacy]({{ '/privacy/' | relative_url }}) - a simple note about email contact, analytics and external links.

## Bible studies

- [Bible Studies]({{ '/bible-studies/' | relative_url }}) - the main Bible studies hub, gathering study resources for personal use, small groups and church settings.

## Recommended resources

- [Recommended Reading]({{ '/recommended-reading/' | relative_url }}) - a curated list of books from my library, with brief notes on why each one matters and who it may help.
- [Recommended YouTube Channels and Ministries]({{ '/recommended-youtube/' | relative_url }}) - YouTube channels and ministries I follow or find useful for theology, Bible study, apologetics, church life and Christian discipleship.
- [Organisations and Tools]({{ '/organisations/' | relative_url }}) - churches, organisations and tools I interact with, belong to or support.

## Focus areas

- [Disability and Church]({{ '/disability-and-church/' | relative_url }}) - a hub for resources on disability, dignity, belonging, accessibility, healing assumptions and church life.

## Devotional resources

- [Devotions]({{ '/devotions/' | relative_url }}) - the main devotional hub, gathering original Humble Theologian devotions, Love as a Verb and classic public-domain devotional readings.

## How resources will be handled

The site will avoid uploading large files where normal web pages will work better. Devotionals, Bible studies and articles should be readable on phones, searchable and easy to link to directly.

Published books will not be republished here. Instead, the site will list books with short summaries, reading guidance and personal notes.

## Spurgeon Devotionals
{: id="spurgeon-devotionals" }

These classic devotional texts are included as devotional resources, with attribution to Charles H. Spurgeon.

{% for item in site.spurgeon %}
- [{{ item.title }}]({{ item.url | relative_url }})
{% endfor %}
