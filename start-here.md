---
permalink: /start-here/
layout: page
title: "Start Here"
description: "A guided entry point for new readers."
kicker: "Welcome"
---

{% assign bible_post = site.posts | where: "title", "How We Got the Bible" | first %}
{% assign hell_intro_post = site.posts | where: "title", "What Do Christians Believe About Hell?" | first %}
{% assign annihilationism_post = site.posts | where: "title", "Why I Currently Lean Toward Annihilationism" | first %}
{% assign new_creation_post = site.posts | where: "title", "New Creation, Not Escape" | first %}
{% assign ot_law_post = site.posts | where: "title", "How Should Christians Read Old Testament Law?" | first %}
{% assign disability_post = site.posts | where: "title", "Disability and the Image of God" | first %}
{% assign soul_sleep_post = site.posts | where: "title", "Soul Sleep and Resurrection Hope" | first %}
{% assign rapture_post = site.posts | where: "title", "Post-Trib, Premillennial, No Secret Rapture" | first %}
{% assign arminian_post = site.posts | where: "title", "Arminian, Calvinist, Provisionist, Molinist" | first %}
{% assign gender_post = site.posts | where: "title", "Soft Complementarian, Drifting Egalitarian" | first %}

# Start Here

Welcome to **Humble Theologian**.

This site is for Bible college students, thoughtful Christians and anyone who wants to take Scripture and theology seriously without turning faith into a competition of who can sound the most clever.

The aim is simple: **serious theology without the ego**.

## What you will find here

### Theology Guides
These are plain-English guides to major Christian beliefs and debates. The goal is to explain the main views fairly, show why Christians disagree and then, where appropriate, explain where I currently stand.

Good places to begin:

<ul>
  {% if bible_post %}<li><a href="{{ bible_post.url | relative_url }}">How We Got the Bible</a></li>{% endif %}
  {% if hell_intro_post %}<li><a href="{{ hell_intro_post.url | relative_url }}">What Do Christians Believe About Hell?</a></li>{% endif %}
  {% if annihilationism_post %}<li><a href="{{ annihilationism_post.url | relative_url }}">Why I Currently Lean Toward Annihilationism</a></li>{% endif %}
  {% if new_creation_post %}<li><a href="{{ new_creation_post.url | relative_url }}">New Creation, Not Escape</a></li>{% endif %}
  {% if ot_law_post %}<li><a href="{{ ot_law_post.url | relative_url }}">How Should Christians Read Old Testament Law?</a></li>{% endif %}
</ul>

### Bible College Help
This section is for students who are learning how to read, write and think theologically. It will include assignment planning, essay structure, exegesis help, referencing tips and reflections on how to study theology without losing your own voice.

Good places to begin:

<ul>
  {% if bible_post %}<li><a href="{{ bible_post.url | relative_url }}">How We Got the Bible</a></li>{% endif %}
  {% if ot_law_post %}<li><a href="{{ ot_law_post.url | relative_url }}">How Should Christians Read Old Testament Law?</a></li>{% endif %}
</ul>

More Bible college help articles will be added over time, including guides to exegesis, comparing theological views fairly and reading academic theology without losing your own voice.

### Disability, Faith and Church
This is one of the more personal parts of the site. It explores disability, dignity, healing, embodiment, accessibility and the role of disabled Christians in the church.

The focus is not only ministry *to* disabled people, but ministry *with* and *by* disabled people.

Good places to begin:

<ul>
  {% if disability_post %}<li><a href="{{ disability_post.url | relative_url }}">Disability and the Image of God</a></li>{% endif %}
</ul>

More articles on disability, healing theology, weakness, dependence and Christian community will be added gradually.

### Love as a Verb
This is the devotional side of Humble Theologian. The original site included a 365-day devotional series called **Love as a Verb**. The relaunch preserves that material and makes it available as part of the wider site.

The central idea is that Christian love is not merely a feeling. Love becomes visible in action, service, sacrifice, patience, forgiveness and faithfulness.

### Where I Stand
This section explains my current theological positions. It is not meant to be a creed or a test of fellowship. It is simply a way of being transparent.

I want to cover different theological camps fairly. But fairness does not require pretending I have no convictions. So where I have reached a position, I will say so. Where I am still unsure, I will say that too.

Good places to begin:

<ul>
  {% if soul_sleep_post %}<li><a href="{{ soul_sleep_post.url | relative_url }}">Soul Sleep and Resurrection Hope</a></li>{% endif %}
  {% if rapture_post %}<li><a href="{{ rapture_post.url | relative_url }}">Post-Trib, Premillennial, No Secret Rapture</a></li>{% endif %}
  {% if arminian_post %}<li><a href="{{ arminian_post.url | relative_url }}">Arminian, Calvinist, Provisionist, Molinist</a></li>{% endif %}
  {% if gender_post %}<li><a href="{{ gender_post.url | relative_url }}">Soft Complementarian, Drifting Egalitarian</a></li>{% endif %}
</ul>

## How to use this site

If you are a Bible college student, start with **Bible College Help** and the theology guides related to your current unit.

If you are a church member wanting to go deeper, start with **Theology Guides** or **Love as a Verb**.

If you are interested in disability and church life, start with **Disability, Faith and Church**.

If you want to know my theological leanings, start with **Where I Stand**.

## A note on disagreement

Christians disagree about important things. Sometimes those disagreements matter deeply. But not every disagreement needs to become a fight.

My goal is to present views honestly, avoid cheap caricatures and remain open to correction. I will not always get that right. When I do not, I hope to be humble enough to fix it.

## A note on sources

Some content on this site is adapted from my Bible college work. Assignments will normally be rewritten before appearing here so they are more useful for public readers and do not simply reproduce academic submissions.

Where I rely on books, articles or other resources, I will try to acknowledge them clearly. The goal is not to replace good scholarship, but to help ordinary Christians engage with it.

## Begin here

A good first pathway is:

1. Read **About Humble Theologian**
2. Browse **Where I Stand**
3. Read one **Theology Guide**
4. Visit **Love as a Verb**
5. Explore **Disability, Faith and Church**

Take your time. Read prayerfully. Test everything.
