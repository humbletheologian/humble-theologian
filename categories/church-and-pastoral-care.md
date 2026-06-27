---
permalink: /categories/church-and-pastoral-care/
layout: page
title: "Church and Pastoral Care"
description: "Articles and resources in the Church and Pastoral Care section."
kicker: "Topic"
---

Reflections on church life, leadership, pastoral care, public faith, culture and Christian community.

<div class="post-list">
{% assign topic_posts = site.posts | where: "category", "Church and Pastoral Care" %}
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
