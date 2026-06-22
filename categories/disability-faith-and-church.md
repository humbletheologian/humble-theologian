---
permalink: /categories/disability-faith-and-church/
layout: page
title: "Disability, Faith and Church"
description: "Articles and resources in the Disability, Faith and Church section."
kicker: "Topic"
---

This topic page gathers related Humble Theologian articles in one place.

<div class="post-list">
{% assign topic_posts = site.posts | where: "category", "Disability, Faith and Church" %}
{% for post in topic_posts %}
  {% include post-card.html post=post %}
{% endfor %}
</div>

<p><a href="{{ '/topics/' | relative_url }}">Back to all topics</a></p>
