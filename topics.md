---
permalink: /topics/
layout: page
title: "Topics"
description: "Browse Humble Theologian articles by subject."
kicker: "Library"
---

Use this page as the main doorway into the site's article library. It is organised by subject so you can follow a thread rather than simply read whatever was published most recently. You can also [search the site]({{ '/search/' | relative_url }}) if you are looking for something specific.

For guided group material, visit the [Bible Studies page]({{ '/bible-studies/' | relative_url }}).

<div class="topic-list">
<a class="topic-pill" href="#core-christian-beliefs">Core Christian Beliefs</a>
<a class="topic-pill" href="#bible-and-interpretation">Bible and Interpretation</a>
<a class="topic-pill" href="#disability-faith-and-church">Disability, Faith and Church</a>
<a class="topic-pill" href="#hell-judgment-and-hope">Hell, Judgment and Hope</a>
<a class="topic-pill" href="#church-and-pastoral-care">Church and Pastoral Care</a>
<a class="topic-pill" href="#christian-living-and-formation">Christian Living and Formation</a>
<a class="topic-pill" href="#personal-reflections">Personal Reflections</a>
<a class="topic-pill" href="#book-and-resource-recommendations">Book and Resource Recommendations</a>
</div>

## Follow new articles and studies

New articles appear here automatically after they are published. You can browse everything on the [Articles page]({{ '/articles/' | relative_url }}) or [subscribe by RSS]({{ '/feed.xml' | relative_url }}). Bible studies are gathered separately on the [Bible Studies page]({{ '/bible-studies/' | relative_url }}).

## Article standard

Major articles normally aim for **1,800 to 2,200 words**. They are written for Bible college students and serious theologically minded Christians, with enough depth to be useful and enough clarity to remain readable.

## Articles by topic

{% assign all_posts = site.posts | sort: "date" | reverse %}

### Core Christian Beliefs
{: id="core-christian-beliefs" }

Foundational articles on the gospel, the shared convictions of historic Christianity, salvation, creeds, doctrine and the core shape of Christian faith.

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

Resources for understanding Scripture, canon, Bible translation, genre, context, hermeneutics, theological frameworks and faithful application today.

{% assign topic_posts = all_posts | where: "category", "Bible and Interpretation" %}
{% if topic_posts.size > 0 %}
{% for post in topic_posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.description }}
{% endfor %}
{% else %}
More articles will be added here soon.
{% endif %}

### Disability, Faith and Church
{: id="disability-faith-and-church" }

Reflections on dignity, embodiment, belonging, accessibility, healing, pastoral care and church life with disabled Christians. See also the [Disability and Church hub]({{ '/disability-and-church/' | relative_url }}).

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

Articles on judgment, hell, annihilationism, resurrection, new creation, end-times views and Christian hope.

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

Reflections on church life, leadership, pastoral care, public faith, culture and Christian community.

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

Resources on discipleship, spiritual formation, everyday faith and learning to follow Jesus faithfully.

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
- [Organisations and Tools]({{ '/organisations/' | relative_url }})
- [Bible Studies]({{ '/bible-studies/' | relative_url }})
- [Resources]({{ '/resources/' | relative_url }})
