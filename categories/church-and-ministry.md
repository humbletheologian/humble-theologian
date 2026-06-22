---
permalink: /categories/church-and-ministry/
layout: page
title: "Church and Ministry"
description: "Articles and resources in the Church and Ministry section."
kicker: "Topic"
---

This topic page gathers related Humble Theologian articles in one place.

<div class="post-list">
{% assign p = site.posts | where: 'slug', 'christianity-us-australia-western-culture' | first %}{% if p %}{% include post-card.html post=p %}{% endif %}
{% assign p = site.posts | where: 'slug', 'disability-and-the-image-of-god' | first %}{% if p %}{% include post-card.html post=p %}{% endif %}
{% assign p = site.posts | where: 'slug', 'soft-complementarian-drifting-egalitarian' | first %}{% if p %}{% include post-card.html post=p %}{% endif %}
</div>

<p><a href="{{ '/topics/' | relative_url }}">Back to all topics</a></p>
