---
permalink: /categories/theology-guides/
layout: page
title: "Theology Guides"
description: "Articles and resources in the Theology Guides section."
kicker: "Topic"
---

This topic page gathers related Humble Theologian articles in one place.

<div class="post-list">
{% assign topic_posts = site.posts | where: "category", "Theology Guides" %}
{% for post in topic_posts %}
  {% include post-card.html post=post %}
{% endfor %}
</div>

<p><a href="{{ '/topics/' | relative_url }}">Back to all topics</a></p>
