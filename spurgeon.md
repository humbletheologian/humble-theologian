---
permalink: /spurgeon/
layout: page
title: "Spurgeon Devotionals"
description: "Public-domain devotional classics from Charles H. Spurgeon with brief Humble Theologian reflections."
kicker: "Devotional archive"
---

These classic devotional texts are included as devotional resources, with attribution to Charles H. Spurgeon. They sit alongside **Love as a Verb** as part of the devotional side of Humble Theologian.

{% if site.spurgeon.size > 0 %}
<ul>
  {% assign spurgeon_items = site.spurgeon | sort: "title" %}
  {% for item in spurgeon_items %}
    <li><a href="{{ item.url | relative_url }}">{{ item.title }}</a></li>
  {% endfor %}
</ul>
{% else %}
<p>Spurgeon devotional entries will appear here once they are available.</p>
{% endif %}

## Where to next?

- [Love as a Verb]({{ '/love-as-a-verb/' | relative_url }})
- [Resources]({{ '/resources/' | relative_url }})
- [Start Here]({{ '/start-here/' | relative_url }})
