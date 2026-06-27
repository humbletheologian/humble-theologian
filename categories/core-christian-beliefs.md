---
permalink: /categories/core-christian-beliefs/
layout: page
title: "Core Christian Beliefs"
description: "Articles and resources in the Core Christian Beliefs section."
kicker: "Topic"
---

Foundational articles on the gospel, the shared convictions of historic Christianity, salvation, creeds, doctrine and the core shape of Christian faith.

<div class="post-list">
{% assign topic_posts = site.posts | where: "category", "Core Christian Beliefs" %}
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
