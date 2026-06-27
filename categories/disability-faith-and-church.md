---
permalink: /categories/disability-faith-and-church/
layout: page
title: "Disability, Faith and Church"
description: "Articles and resources in the Disability, Faith and Church section."
kicker: "Topic"
---

Reflections on dignity, embodiment, belonging, accessibility, healing, pastoral care and church life with disabled Christians. See also the [Disability and Church hub]({{ '/disability-and-church/' | relative_url }}).

<div class="post-list">
{% assign topic_posts = site.posts | where: "category", "Disability, Faith and Church" %}
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
