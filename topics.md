---
permalink: /topics/
layout: page
title: "Topics"
description: "A library index for theology guides, Bible study resources, devotional writing and pastoral reflections."
kicker: "Library"
---

Use this page as the main doorway into the site. The goal is not to overwhelm readers with a massive menu, but to help them find a path into the content.

<div class="topic-list">
<a class="topic-pill" href="{{ '/categories/theology-guides/' | relative_url }}">Theology Guides</a>
<a class="topic-pill" href="{{ '/categories/hell-judgment-and-hope/' | relative_url }}">Hell, Judgment and Hope</a>
<a class="topic-pill" href="{{ '/categories/disability-faith-and-church/' | relative_url }}">Disability, Faith and Church</a>
<a class="topic-pill" href="{{ '/categories/old-testament-law/' | relative_url }}">Old Testament Law and Christian Life</a>
<a class="topic-pill" href="{{ '/categories/bible-college-help/' | relative_url }}">Bible College Help</a>
<a class="topic-pill" href="{{ '/categories/church-and-ministry/' | relative_url }}">Church and Ministry</a>
<a class="topic-pill" href="{{ '/categories/personal-reflections/' | relative_url }}">Personal Reflections</a>
<a class="topic-pill" href="{{ '/recommended-reading/' | relative_url }}">Book Recommendations</a>
</div>

## Article standard

Major articles should normally aim for **1,800 to 2,200 words**. They are written for Bible college students and serious theologically minded Christians, with enough depth to be useful and enough clarity to remain readable.

## Current articles

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.description }}
{% endfor %}

