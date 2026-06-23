---
permalink: /topics/
layout: page
title: "Topics"
description: "A library index for theology guides, Bible study resources, devotional writing and pastoral reflections."
kicker: "Library"
---

Use this page as the main doorway into the site. The goal is not to overwhelm readers with a massive menu, but to help them find a path into the content.

<div class="topic-list">
<a class="topic-pill" href="#core-christian-beliefs">Core Christian Beliefs</a>
<a class="topic-pill" href="#bible-and-interpretation">Bible and Interpretation</a>
<a class="topic-pill" href="#old-testament-law-and-christian-life">Old Testament Law and Christian Life</a>
<a class="topic-pill" href="#disability-faith-and-church">Disability, Faith and Church</a>
<a class="topic-pill" href="#hell-judgment-and-hope">Hell, Judgment and Hope</a>
<a class="topic-pill" href="#church-and-pastoral-care">Church and Pastoral Care</a>
<a class="topic-pill" href="#christian-living-and-formation">Christian Living and Formation</a>
<a class="topic-pill" href="#personal-reflections">Personal Reflections</a>
<a class="topic-pill" href="{{ '/recommended-reading/' | relative_url }}">Book and Resource Recommendations</a>
</div>

## Follow new articles

New articles will appear below automatically after they are published. You can also subscribe by RSS:

[Subscribe to the RSS feed]({{ '/feed.xml' | relative_url }})

## Article standard

Major articles should normally aim for **1,800 to 2,200 words**. They are written for Bible college students and serious theologically minded Christians, with enough depth to be useful and enough clarity to remain readable.

## Articles by topic

{% assign all_posts = site.posts | sort: "date" | reverse %}

### Core Christian Beliefs
{: id="core-christian-beliefs" }

The central beliefs of historic Christianity and the doctrines that shape Christian hope, discipleship and worship.

{% assign topic_posts = all_posts | where: "category", "Core Christian Beliefs" %}
{% if topic_posts.size > 0 %}
{% for post in topic_posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.description }}
{% endfor %}
{% else %}
More articles will be added here soon.
{% endif %}

### Bible and Interpretation
{: id="bible-and-interpretation" }

How the Bible came to us, how to read it well and how to handle genre, context, culture and application.

{% assign topic_posts = all_posts | where: "category", "Bible and Interpretation" %}
{% if topic_posts.size > 0 %}
{% for post in topic_posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.description }}
{% endfor %}
{% else %}
More articles will be added here soon.
{% endif %}

### Old Testament Law and Christian Life
{: id="old-testament-law-and-christian-life" }

How Christians can read Old Testament law faithfully without either ignoring it or applying it woodenly.

{% assign topic_posts = all_posts | where: "category", "Old Testament Law and Christian Life" %}
{% if topic_posts.size > 0 %}
{% for post in topic_posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.description }}
{% endfor %}
{% else %}
More articles will be added here soon.
{% endif %}

### Disability, Faith and Church
{: id="disability-faith-and-church" }

Theology and pastoral reflection on disability, dignity, embodiment, belonging and church life.

{% assign topic_posts = all_posts | where: "category", "Disability, Faith and Church" %}
{% if topic_posts.size > 0 %}
{% for post in topic_posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.description }}
{% endfor %}
{% else %}
More articles will be added here soon.
{% endif %}

### Hell, Judgment and Hope
{: id="hell-judgment-and-hope" }

Articles on judgment, hell, annihilationism, final hope and related Christian disagreements.

{% assign topic_posts = all_posts | where: "category", "Hell, Judgment and Hope" %}
{% if topic_posts.size > 0 %}
{% for post in topic_posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.description }}
{% endfor %}
{% else %}
More articles will be added here soon.
{% endif %}

### Church and Pastoral Care
{: id="church-and-pastoral-care" }

Reflections on church life, leadership, pastoral care, culture and Christian community.

{% assign topic_posts = all_posts | where: "category", "Church and Pastoral Care" %}
{% if topic_posts.size > 0 %}
{% for post in topic_posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.description }}
{% endfor %}
{% else %}
More articles will be added here soon.
{% endif %}

### Christian Living and Formation
{: id="christian-living-and-formation" }

Resources on discipleship, spiritual formation and everyday faith.

{% assign topic_posts = all_posts | where: "category", "Christian Living and Formation" %}
{% if topic_posts.size > 0 %}
{% for post in topic_posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.description }}
{% endfor %}
{% else %}
More articles will be added here soon.
{% endif %}

### Personal Reflections
{: id="personal-reflections" }

More personal pieces about learning, ministry, faith and the process of thinking theologically.

{% assign topic_posts = all_posts | where: "category", "Personal Reflections" %}
{% if topic_posts.size > 0 %}
{% for post in topic_posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.description }}
{% endfor %}
{% else %}
More articles will be added here soon.
{% endif %}


## Book and Resource Recommendations
{: id="book-and-resource-recommendations" }

For books, YouTube channels and other recommended resources, visit the resources pages:

- [Recommended Reading]({{ '/recommended-reading/' | relative_url }})
- [Recommended YouTube Channels and Ministries]({{ '/recommended-youtube/' | relative_url }})
- [Resources]({{ '/resources/' | relative_url }})
