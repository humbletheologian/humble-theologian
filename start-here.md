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

# Start Here

Welcome to **Humble Theologian**.

This site is for Bible college students, thoughtful Christians and anyone who wants to take Scripture and theology seriously without turning faith into a competition of who can sound the most clever.

The aim is simple: **serious theology without the ego**.

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

## What you will find here

### Core Christian Beliefs

These articles explain the central convictions of historic Christianity, along with some important areas where Christians disagree.

<ul>
  {% if gospel_post %}<li><a href="{{ gospel_post.url | relative_url }}">What Is the Gospel?</a></li>{% endif %}
  {% if essentials_post %}<li><a href="{{ essentials_post.url | relative_url }}">What Are the Essential Christian Beliefs?</a></li>{% endif %}
  {% if new_creation_post %}<li><a href="{{ new_creation_post.url | relative_url }}">New Creation, Not Escape</a></li>{% endif %}
  {% if soul_sleep_post %}<li><a href="{{ soul_sleep_post.url | relative_url }}">Soul Sleep and the Hope of Resurrection</a></li>{% endif %}
</ul>

### Bible and Interpretation

This section is for readers who want to understand the Bible more carefully: where it came from, how it should be read and how context, genre, culture and application matter.

<ul>
  {% if bible_post %}<li><a href="{{ bible_post.url | relative_url }}">How We Got the Bible</a></li>{% endif %}
  {% if interpretation_post %}<li><a href="{{ interpretation_post.url | relative_url }}">How to Interpret the Bible</a></li>{% endif %}
  {% if ot_law_post %}<li><a href="{{ ot_law_post.url | relative_url }}">How Should Christians Read Old Testament Law?</a></li>{% endif %}
</ul>

### Disability, Faith and Church

This is one of the more personal parts of the site. It explores disability, dignity, healing, embodiment, accessibility and the role of disabled Christians in the church.

The focus is not only ministry *to* disabled people, but ministry *with* and *by* disabled people.

<ul>
  {% if disability_image_post %}<li><a href="{{ disability_image_post.url | relative_url }}">Disability and the Image of God</a></li>{% endif %}
  {% if disability_church_post %}<li><a href="{{ disability_church_post.url | relative_url }}">What Churches Need to Understand About Disability</a></li>{% endif %}
</ul>

### Hell, Judgment and Hope

These articles explain the major Christian views of hell and judgment while also being honest about where I currently lean.

<ul>
  {% if hell_intro_post %}<li><a href="{{ hell_intro_post.url | relative_url }}">What Do Christians Believe About Hell?</a></li>{% endif %}
  {% if annihilationism_post %}<li><a href="{{ annihilationism_post.url | relative_url }}">Why I Currently Lean Toward Annihilationism</a></li>{% endif %}
</ul>

### Where I Stand

Some articles explain my current theological positions. They are not meant to be a creed or a test of fellowship. They are simply a way of being transparent.

<ul>
  {% if arminian_post %}<li><a href="{{ arminian_post.url | relative_url }}">Arminian, Calvinist, Provisionist or Molinist?</a></li>{% endif %}
  {% if gender_post %}<li><a href="{{ gender_post.url | relative_url }}">Soft Complementarian, Drifting Egalitarian</a></li>{% endif %}
  {% if rapture_post %}<li><a href="{{ rapture_post.url | relative_url }}">Post-Trib, Premillennial and No Secret Rapture</a></li>{% endif %}
</ul>

### Love as a Verb

This is the devotional side of Humble Theologian. The original site included a 365-day devotional series called **Love as a Verb**. The relaunch preserves that material and makes it available as part of the wider site.

The central idea is that Christian love is not merely a feeling. Love becomes visible in action, service, sacrifice, patience, forgiveness and faithfulness.

## How to use this site

If you are a Bible college student, start with **Bible and Interpretation** and then browse the articles connected to your current unit.

If you are a church member wanting to go deeper, start with **Core Christian Beliefs** or **Love as a Verb**.

If you are interested in disability and church life, start with **Disability, Faith and Church**.

If you want to know my theological leanings, start with **Where I Stand**.

## A note on disagreement

Christians disagree about important things. Sometimes those disagreements matter deeply. But not every disagreement needs to become a fight.

My goal is to present views honestly, avoid cheap caricatures and remain open to correction. I will not always get that right. When I do not, I hope to be humble enough to fix it.

## A note on sources

Some content on this site is adapted from my Bible college work. Assignments will normally be rewritten before appearing here so they are more useful for public readers and do not simply reproduce academic submissions.

Where I rely on books, articles or other resources, I will try to acknowledge them clearly. The goal is not to replace good scholarship, but to help ordinary Christians engage with it.

Take your time. Read prayerfully. Test everything.
