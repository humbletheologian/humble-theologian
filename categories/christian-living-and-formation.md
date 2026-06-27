---
permalink: /categories/christian-living-and-formation/
layout: page
title: "Christian Living and Formation"
description: "Articles and resources in the Christian Living and Formation section."
kicker: "Topic"
---

Resources on discipleship, spiritual formation, everyday faith and learning to follow Jesus faithfully.

<div class="post-list">
{% assign topic_posts = site.posts | where: "category", "Christian Living and Formation" %}
{% assign sorted_posts = topic_posts | sort: "date" | reverse %}
{% if sorted_posts.size > 0 %}
  {% for post in sorted_posts %}
    {% include post-card.html post=post %}
  {% endfor %}
{% else %}
  <p>More articles will be added here.</p>
{% endif %}
</div>

<p><a href="{{ '/topics/' | relative_url }}">Back to all topics</a></p>
