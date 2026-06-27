---
permalink: /disability-and-church/
layout: page
title: "Disability and Church"
description: "A hub for Humble Theologian resources on disability, dignity, belonging, accessibility, healing assumptions and church life."
kicker: "Disability, faith and church"
---

This hub gathers the material on Humble Theologian that relates to disability, dignity, embodiment, belonging and church life.

This is likely to become one of the main focuses of the site. The aim is not simply to ask how churches can minister *to* disabled people, but how churches can recognise the gifts, presence, leadership and full participation of disabled Christians.

<div class="callout">
  <p><strong>Core conviction:</strong> disabled people are not problems to solve, inspirational objects, failed healing projects or ministry add-ons. They are people made in the image of God, members of Christ's body and participants in the life and mission of the church.</p>
</div>

{% assign disability_image_post = site.posts | where: "title", "Disability and the Image of God" | first %}
{% assign disability_church_post = site.posts | where: "title", "What Churches Need to Understand About Disability" | first %}

## Start here

<div class="hub-grid">
  {% if disability_image_post %}
  <article class="hub-card">
    <p class="eyebrow">Theological foundation</p>
    <h2><a href="{{ disability_image_post.url | relative_url }}">{{ disability_image_post.title }}</a></h2>
    <p>{{ disability_image_post.description }}</p>
  </article>
  {% endif %}

  {% if disability_church_post %}
  <article class="hub-card">
    <p class="eyebrow">Church practice</p>
    <h2><a href="{{ disability_church_post.url | relative_url }}">{{ disability_church_post.title }}</a></h2>
    <p>{{ disability_church_post.description }}</p>
  </article>
  {% endif %}
</div>

## Articles in this area

{% assign disability_posts = site.posts | where: "category", "Disability, Faith and Church" | sort: "date" | reverse %}
{% if disability_posts.size > 0 %}
{% for post in disability_posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.description }}  
  <span class="meta">{{ post.date | date: "%d %B %Y" }}{% if post.topic %} · {{ post.topic }}{% endif %}{% if post.words %} · Approx. {{ post.words }} words{% endif %}</span>
{% endfor %}
{% else %}
More disability and church articles will be added here soon.
{% endif %}

## Themes I expect to keep developing

- the image of God, embodiment and human dignity
- accessibility as hospitality rather than inconvenience
- healing theology and harmful assumptions
- pastoral care that does not reduce people to their disability
- belonging, leadership and participation in the body of Christ
- disability and theological education
- weakness, dependence and Christian community

## A note on tone

This section will try to be honest without being bitter, theological without being abstract and practical without reducing disabled Christians to a checklist. The goal is a church life where disabled people are not merely included in the room, but recognised as fellow members of Christ's body.
