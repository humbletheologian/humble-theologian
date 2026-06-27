---
permalink: /categories/bible-and-interpretation/
layout: page
title: "Bible and Interpretation"
description: "Articles and resources in the Bible and Interpretation section."
kicker: "Topic"
---

Resources for understanding Scripture, canon, Bible translation, genre, context, hermeneutics, theological frameworks and faithful application today.

<div class="post-list">
{% assign topic_posts = site.posts | where: "category", "Bible and Interpretation" %}
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
