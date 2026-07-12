---
permalink: /start-here/
layout: page
title: "Start Here"
description: "A guided entry point for new readers."
kicker: "Welcome"
---

{% assign gospel_post = site.posts | where: "title", "What Is the Gospel?" | first %}
{% assign essentials_post = site.posts | where: "title", "What Are the Essential Christian Beliefs?" | first %}
{% assign bible_post = site.posts | where: "title", "How We Got the Bible" | first %}
{% assign interpretation_post = site.posts | where: "title", "How to Interpret the Bible" | first %}
{% assign ot_law_post = site.posts | where: "title", "How Should Christians Read Old Testament Law?" | first %}
{% assign hell_intro_post = site.posts | where: "title", "What Do Christians Believe About Hell?" | first %}
{% assign annihilationism_post = site.posts | where: "title", "Why I Currently Lean Toward Annihilationism" | first %}
{% assign disability_image_post = site.posts | where: "title", "Disability and the Image of God" | first %}
{% assign disability_church_post = site.posts | where: "title", "What Churches Need to Understand About Disability" | first %}
{% assign new_creation_post = site.posts | where: "title", "New Creation, Not Escape: Why Heaven Is Not the Final Destination" | first %}
{% assign soul_sleep_post = site.posts | where: "title", "Soul Sleep and the Hope of Resurrection" | first %}
{% assign rapture_post = site.posts | where: "title", "Post-Trib, Premillennial and No Secret Rapture" | first %}
{% assign arminian_post = site.posts | where: "title", "Arminian, Calvinist, Provisionist or Molinist? Where I Currently Lean" | first %}
{% assign gender_post = site.posts | where: "title", "Soft Complementarian, Drifting Egalitarian" | first %}

Welcome to **Humble Theologian**.

Humble Theologian is written for Bible college students, thoughtful Christians and people who want to explore Christian faith carefully without losing sight of humility, discipleship and pastoral care.

This site is for readers who want to take Scripture and theology seriously without turning faith into a competition over who can sound the cleverest. The aim is simple: **serious theology without the ego**.

## The best first pathway

If you are new to the site, I suggest starting here:

<ol>
  {% if gospel_post %}<li><a href="{{ gospel_post.url | relative_url }}">What Is the Gospel?</a></li>{% endif %}
  {% if essentials_post %}<li><a href="{{ essentials_post.url | relative_url }}">What Are the Essential Christian Beliefs?</a></li>{% endif %}
  {% if bible_post %}<li><a href="{{ bible_post.url | relative_url }}">How We Got the Bible</a></li>{% endif %}
  {% if interpretation_post %}<li><a href="{{ interpretation_post.url | relative_url }}">How to Interpret the Bible</a></li>{% endif %}
  {% if ot_law_post %}<li><a href="{{ ot_law_post.url | relative_url }}">How Should Christians Read Old Testament Law?</a></li>{% endif %}
</ol>

That path moves from the good news of Jesus, to core Christian beliefs, to the Bible itself, then to faithful interpretation and one of the harder parts of Christian reading: Old Testament law.

## New to Christianity?

Start with the gospel and the core beliefs shared across historic Christianity.

<ul>
  {% if gospel_post %}<li><a href="{{ gospel_post.url | relative_url }}">What Is the Gospel?</a></li>{% endif %}
  {% if essentials_post %}<li><a href="{{ essentials_post.url | relative_url }}">What Are the Essential Christian Beliefs?</a></li>{% endif %}
  {% if new_creation_post %}<li><a href="{{ new_creation_post.url | relative_url }}">New Creation, Not Escape</a></li>{% endif %}
</ul>

## Trying to understand the Bible?

These articles are for readers who want to understand Scripture carefully, not just collect isolated proof texts.

<ul>
  {% if bible_post %}<li><a href="{{ bible_post.url | relative_url }}">How We Got the Bible</a></li>{% endif %}
  {% if interpretation_post %}<li><a href="{{ interpretation_post.url | relative_url }}">How to Interpret the Bible</a></li>{% endif %}
  {% if ot_law_post %}<li><a href="{{ ot_law_post.url | relative_url }}">How Should Christians Read Old Testament Law?</a></li>{% endif %}
</ul>

## Interested in disability, dignity and church life?

This is one of the more personal parts of the site. It explores disability, dignity, healing, embodiment, accessibility and the role of disabled Christians in the church.

The focus is not only ministry *to* disabled people, but ministry *with* and *by* disabled people.

<ul>
  {% if disability_image_post %}<li><a href="{{ disability_image_post.url | relative_url }}">Disability and the Image of God</a></li>{% endif %}
  {% if disability_church_post %}<li><a href="{{ disability_church_post.url | relative_url }}">What Churches Need to Understand About Disability</a></li>{% endif %}
</ul>

## Exploring disputed doctrines?

Christians disagree about important things. These articles try to explain the issues without turning every disagreement into a fight.

<ul>
  {% if hell_intro_post %}<li><a href="{{ hell_intro_post.url | relative_url }}">What Do Christians Believe About Hell?</a></li>{% endif %}
  {% if annihilationism_post %}<li><a href="{{ annihilationism_post.url | relative_url }}">Why I Currently Lean Toward Annihilationism</a></li>{% endif %}
  {% if soul_sleep_post %}<li><a href="{{ soul_sleep_post.url | relative_url }}">Soul Sleep and the Hope of Resurrection</a></li>{% endif %}
  {% if rapture_post %}<li><a href="{{ rapture_post.url | relative_url }}">Post-Trib, Premillennial and No Secret Rapture</a></li>{% endif %}
</ul>

## Where I currently stand

Some articles explain my current theological positions. They are not a creed or a test of fellowship. They are simply a way of being transparent about how I currently read the evidence.

<ul>
  {% if arminian_post %}<li><a href="{{ arminian_post.url | relative_url }}">Arminian, Calvinist, Provisionist or Molinist?</a></li>{% endif %}
  {% if gender_post %}<li><a href="{{ gender_post.url | relative_url }}">Soft Complementarian, Drifting Egalitarian</a></li>{% endif %}
</ul>

## Love as a Verb

This is the devotional side of Humble Theologian. The original site included a 365-day devotional series called **Love as a Verb**. The relaunch preserves that material and makes it available as part of the wider site.

The central idea is that Christian love is not merely a feeling. Love becomes visible in action, service, sacrifice, patience, forgiveness and faithfulness.

## How I write

I write as a Bible college student, church volunteer and developing pastoral care practitioner. These articles are not meant to settle every issue or replace local church wisdom. They are meant to help readers think carefully, read Scripture responsibly and follow Jesus faithfully.

The site will keep growing, but the best next steps are simple:

- [Browse all articles]({{ '/articles/' | relative_url }})
- [Explore topics]({{ '/topics/' | relative_url }})
- [Use the glossary]({{ '/glossary/' | relative_url }})
- [Contact me]({{ '/contact/' | relative_url }})
