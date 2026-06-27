---
permalink: /categories/personal-reflections/
layout: page
title: "Personal Reflections"
description: "Articles and resources in the Personal Reflections section."
kicker: "Topic"
---

More personal pieces about learning, ministry, faith and the process of thinking theologically.

<div class="post-list">
{% assign topic_posts = site.posts | where: "category", "Personal Reflections" %}
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
