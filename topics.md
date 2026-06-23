---
permalink: /topics/
layout: page
title: "Topics"
description: "A library index for theology guides, Bible study resources, devotional writing and pastoral reflections."
kicker: "Library"
---

Use this page as the main doorway into the site. The goal is not to overwhelm readers with a massive menu, but to help them find a path into the content.

<div class="topic-list">
<a class="topic-pill" href="#theology-guides">Theology Guides</a>
<a class="topic-pill" href="#hell-judgment-and-hope">Hell, Judgment and Hope</a>
<a class="topic-pill" href="#disability-faith-and-church">Disability, Faith and Church</a>
<a class="topic-pill" href="#old-testament-law-and-christian-life">Old Testament Law and Christian Life</a>
<a class="topic-pill" href="#bible-college-help">Bible College Help</a>
<a class="topic-pill" href="#church-and-ministry">Church and Ministry</a>
<a class="topic-pill" href="#personal-reflections">Personal Reflections</a>
<a class="topic-pill" href="{{ '/recommended-reading/' | relative_url }}">Book Recommendations</a>
</div>

## Follow new articles

New articles will appear below automatically after they are published. You can also subscribe by RSS:

[Subscribe to the RSS feed]({{ '/feed.xml' | relative_url }})

## Article standard

Major articles should normally aim for **1,800 to 2,200 words**. They are written for Bible college students and serious theologically minded Christians, with enough depth to be useful and enough clarity to remain readable.

## Articles by topic

{% assign grouped_posts = site.posts | group_by: "category" | sort: "name" %}
{% for group in grouped_posts %}
### {{ group.name }}
{: id="{{ group.name | slugify }}" }

{% assign posts = group.items | sort: "date" | reverse %}
{% for post in posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.description }}
{% endfor %}

{% endfor %}
