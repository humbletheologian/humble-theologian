---
permalink: /articles/
layout: page
title: "Articles"
description: "All Humble Theologian articles in one place, listed by date."
kicker: "Article archive"
---

This page lists the main articles on Humble Theologian in reverse date order. For a guided pathway, start with [Start Here]({{ '/start-here/' | relative_url }}). For subject browsing, use [Topics]({{ '/topics/' | relative_url }}).

You can also [subscribe by RSS]({{ '/feed.xml' | relative_url }}) to follow new articles.

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in posts_by_year %}
## {{ year.name }}

{% assign posts = year.items | sort: "date" | reverse %}
{% for post in posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.description }}  
  <span class="meta">{{ post.date | date: "%d %B %Y" }}{% if post.category %} · {{ post.category }}{% endif %}{% if post.topic %} · {{ post.topic }}{% endif %}</span>
{% endfor %}

{% endfor %}
