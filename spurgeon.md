---
permalink: /spurgeon/
layout: page
title: "Spurgeon Devotionals"
description: "Public-domain devotional reflections from Charles H. Spurgeon, gathered as a devotional resource for thoughtful Christian reading."
kicker: "Devotionals"
---

Charles H. Spurgeon remains one of the most widely read Baptist preachers in church history. These public-domain devotional pieces are included as classic devotional material for reflection, encouragement and theological formation.

They are not here because every sentence needs to be copied into modern church life without thought. They are here because older Christian voices can help us slow down, think deeply, repent honestly and worship more fully.

## How to use these devotionals

You may want to read them slowly, with a Bible open, asking:

- What truth about God is being emphasised?
- What does this expose in me?
- Where does this point me to Christ?
- How should this shape prayer, worship or obedience?

## Devotionals

{% assign spurgeon_items = site.spurgeon | sort: 'title' %}
{% for item in spurgeon_items %}
- [{{ item.title }}]({{ item.url | relative_url }}){% if item.description %} - {{ item.description }}{% endif %}
{% endfor %}
