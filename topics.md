---
permalink: /topics/
layout: page
title: "Topics"
description: "Browse Humble Theologian articles by subject."
kicker: "Browse by subject"
---

Use this page when you want to browse by subject rather than date. For a guided first pathway, start with [Start Here]({{ '/start-here/' | relative_url }}). For every article in date order, visit [Articles]({{ '/articles/' | relative_url }}).

{% assign all_posts = site.posts | sort: "date" | reverse %}

<nav aria-label="Topic list">
  <ul>
    <li><a href="#core-christian-beliefs">Core Christian Beliefs</a></li>
    <li><a href="#bible-and-interpretation">Bible and Interpretation</a></li>
    <li><a href="#disability-faith-and-church">Disability, Faith and Church</a></li>
    <li><a href="#hell-judgment-and-hope">Hell, Judgment and Hope</a></li>
    <li><a href="#church-and-pastoral-care">Church and Pastoral Care</a></li>
    <li><a href="#christian-living-and-formation">Christian Living and Formation</a></li>
    <li><a href="#personal-reflections">Personal Reflections</a></li>
    <li><a href="#book-and-resource-recommendations">Book and Resource Recommendations</a></li>
  </ul>
</nav>

## Core Christian Beliefs
{: id="core-christian-beliefs" }

Foundational articles on the gospel, Christian doctrine, salvation, resurrection, hope and the shape of historic Christian faith.

{% assign topic_posts = all_posts | where: "category", "Core Christian Beliefs" %}
{% if topic_posts.size > 0 %}
{% for post in topic_posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.description }}
{% endfor %}
{% else %}
More articles will be added here soon.
{% endif %}

## Bible and Interpretation
{: id="bible-and-interpretation" }

Resources on Scripture, canon, context, genre, hermeneutics and faithful application.

{% assign topic_posts = all_posts | where: "category", "Bible and Interpretation" %}
{% if topic_posts.size > 0 %}
{% for post in topic_posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.description }}
{% endfor %}
{% else %}
More articles will be added here soon.
{% endif %}

## Disability, Faith and Church
{: id="disability-faith-and-church" }

Reflections on dignity, embodiment, belonging, accessibility, healing assumptions, pastoral care and church life.

{% assign topic_posts = all_posts | where: "category", "Disability, Faith and Church" %}
{% if topic_posts.size > 0 %}
{% for post in topic_posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.description }}
{% endfor %}
{% else %}
More articles will be added here soon.
{% endif %}

## Hell, Judgment and Hope
{: id="hell-judgment-and-hope" }

Careful discussions of judgment, hell, annihilationism, resurrection and Christian hope.

{% assign topic_posts = all_posts | where: "category", "Hell, Judgment and Hope" %}
{% if topic_posts.size > 0 %}
{% for post in topic_posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.description }}
{% endfor %}
{% else %}
More articles will be added here soon.
{% endif %}

## Church and Pastoral Care
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

## Christian Living and Formation
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

## Personal Reflections
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

For books, YouTube channels, devotional material and other recommended resources, visit the resource pages:

- [Resources]({{ '/resources/' | relative_url }})
- [Recommended Reading]({{ '/recommended-reading/' | relative_url }})
- [Recommended YouTube Channels and Ministries]({{ '/recommended-youtube/' | relative_url }})
- [Glossary]({{ '/glossary/' | relative_url }})
