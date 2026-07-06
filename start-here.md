---
permalink: /start-here/
layout: page
title: "Start Here"
description: "A guided entry point for new readers."
kicker: "Welcome"
---

{% assign why_started_post = site.posts | where: "title", "Why I Started Humble Theologian" | first %}
{% assign learning_loving_post = site.posts | where: "title", "Learning, Loving and Living the Faith" | first %}
{% assign gospel_post = site.posts | where: "title", "What Is the Gospel?" | first %}
{% assign essentials_post = site.posts | where: "title", "What Are the Essential Christian Beliefs?" | first %}
{% assign bible_post = site.posts | where: "title", "How We Got the Bible" | first %}
{% assign interpretation_post = site.posts | where: "title", "How to Interpret the Bible" | first %}
{% assign bible_translations_post = site.posts | where: "title", "Bible Translations: Why They Differ and How to Choose One" | first %}
{% assign ot_law_post = site.posts | where: "title", "How Should Christians Read Old Testament Law?" | first %}
{% assign hell_intro_post = site.posts | where: "title", "What Do Christians Believe About Hell?" | first %}
{% assign annihilationism_post = site.posts | where: "title", "Why I Currently Lean Toward Annihilationism" | first %}
{% assign disability_image_post = site.posts | where: "title", "Disability and the Image of God" | first %}
{% assign disability_church_post = site.posts | where: "title", "What Churches Need to Understand About Disability" | first %}
{% assign christian_influence_post = site.posts | where: "title", "Christian Influence Without Theocracy: Are We a Christian Nation?" | first %}
{% assign new_creation_post = site.posts | where: "title", "New Creation, Not Escape: Why Heaven Is Not the Final Destination" | first %}
{% assign soul_sleep_post = site.posts | where: "title", "Soul Sleep and the Hope of Resurrection" | first %}
{% assign rapture_post = site.posts | where: "title", "Post-Trib, Premillennial and No Secret Rapture" | first %}
{% assign arminian_post = site.posts | where: "title", "Arminian, Calvinist, Provisionist or Molinist? Where I Currently Lean" | first %}
{% assign gender_post = site.posts | where: "title", "Soft Complementarian, Drifting Egalitarian" | first %}

# Start Here

Welcome to **Humble Theologian**.

This site is for Bible college students, thoughtful Christians and anyone who wants to take Scripture and theology seriously without turning faith into a competition over who can sound the cleverest.

The aim is simple: **serious theology without the ego**. Humble Theologian is about learning, loving and living the faith. That means thinking carefully, loving God and neighbour and letting theology become faithful discipleship in ordinary life.

<div class="quick-search">
  <form action="{{ '/search/' | relative_url }}" method="get">
    <input type="search" name="q" placeholder="Search topics such as gospel, disability, hell, canon or exegesis" aria-label="Search Humble Theologian">
    <button type="submit">Search</button>
  </form>
</div>

## The best first pathway

If you are new to the site, I suggest starting here:

<ol>
  {% if why_started_post %}<li><a href="{{ why_started_post.url | relative_url }}">Why I Started Humble Theologian</a></li>{% endif %}
  {% if learning_loving_post %}<li><a href="{{ learning_loving_post.url | relative_url }}">Learning, Loving and Living the Faith</a></li>{% endif %}
  {% if gospel_post %}<li><a href="{{ gospel_post.url | relative_url }}">What Is the Gospel?</a></li>{% endif %}
  {% if essentials_post %}<li><a href="{{ essentials_post.url | relative_url }}">What Are the Essential Christian Beliefs?</a></li>{% endif %}
  {% if bible_post %}<li><a href="{{ bible_post.url | relative_url }}">How We Got the Bible</a></li>{% endif %}
  {% if interpretation_post %}<li><a href="{{ interpretation_post.url | relative_url }}">How to Interpret the Bible</a></li>{% endif %}
  {% if bible_translations_post %}<li><a href="{{ bible_translations_post.url | relative_url }}">Bible Translations: Why They Differ and How to Choose One</a></li>{% endif %}
  {% if ot_law_post %}<li><a href="{{ ot_law_post.url | relative_url }}">How Should Christians Read Old Testament Law?</a></li>{% endif %}
  {% if disability_image_post %}<li><a href="{{ disability_image_post.url | relative_url }}">Disability and the Image of God</a></li>{% endif %}
  {% if disability_church_post %}<li><a href="{{ disability_church_post.url | relative_url }}">What Churches Need to Understand About Disability</a></li>{% endif %}
  {% if hell_intro_post %}<li><a href="{{ hell_intro_post.url | relative_url }}">What Do Christians Believe About Hell?</a></li>{% endif %}
  {% if annihilationism_post %}<li><a href="{{ annihilationism_post.url | relative_url }}">Why I Currently Lean Toward Annihilationism</a></li>{% endif %}
  {% if christian_influence_post %}<li><a href="{{ christian_influence_post.url | relative_url }}">Christian Influence Without Theocracy</a></li>{% endif %}
</ol>

That path begins with the purpose and tone of the site, then moves into the gospel, core beliefs, Scripture, interpretation, disability, disputed doctrines and public faith.

## New to Christianity?

Start with the gospel and the core beliefs shared across historic Christianity.

<ul>
  {% if gospel_post %}<li><a href="{{ gospel_post.url | relative_url }}">What Is the Gospel?</a></li>{% endif %}
  {% if essentials_post %}<li><a href="{{ essentials_post.url | relative_url }}">What Are the Essential Christian Beliefs?</a></li>{% endif %}
  {% if new_creation_post %}<li><a href="{{ new_creation_post.url | relative_url }}">New Creation, Not Escape</a></li>{% endif %}
</ul>


## Want to study Scripture with a group?

The Bible Studies section is for thoughtful Christians, group leaders and readers who want guided studies rather than standalone articles. These studies are aimed at seasoned Christians, but they are written clearly enough to stretch newer Christians without discouraging them.

- [Bible Studies]({{ '/bible-studies/' | relative_url }})
- [Identity in Christ]({{ '/bible-studies/identity-in-christ/' | relative_url }})
- [Prayer]({{ '/bible-studies/prayer/' | relative_url }})
- [What Is the Gospel?]({{ '/bible-studies/what-is-the-gospel/' | relative_url }})
- [Disability, Belonging and the Church]({{ '/bible-studies/disability-belonging-and-the-church/' | relative_url }})
- [Suffering, Healing and Hope]({{ '/bible-studies/suffering-healing-and-hope/' | relative_url }})
- [How to Read the Bible Well]({{ '/bible-studies/how-to-read-the-bible-well/' | relative_url }})
- [Ephesians: Grace, Identity and the Church]({{ '/bible-studies/ephesians-grace-identity-and-the-church/' | relative_url }})

## Trying to understand the Bible?

These articles are for readers who want to understand Scripture carefully, not just collect isolated proof texts.

<ul>
  {% if bible_post %}<li><a href="{{ bible_post.url | relative_url }}">How We Got the Bible</a></li>{% endif %}
  {% if interpretation_post %}<li><a href="{{ interpretation_post.url | relative_url }}">How to Interpret the Bible</a></li>{% endif %}
  {% if bible_translations_post %}<li><a href="{{ bible_translations_post.url | relative_url }}">Bible Translations: Why They Differ and How to Choose One</a></li>{% endif %}
  {% if ot_law_post %}<li><a href="{{ ot_law_post.url | relative_url }}">How Should Christians Read Old Testament Law?</a></li>{% endif %}
</ul>

## Interested in Christian living and formation?

Christian maturity is not only about knowing more. It is about learning what is true, loving God and neighbour and living faithfully in ordinary places.

<ul>
  {% if learning_loving_post %}<li><a href="{{ learning_loving_post.url | relative_url }}">Learning, Loving and Living the Faith</a></li>{% endif %}
</ul>

## Interested in disability, dignity and church life?

This is one of the more personal parts of the site. It explores disability, dignity, healing, embodiment, accessibility and the role of disabled Christians in the church.

The focus is not only ministry *to* disabled people, but ministry *with* and *by* disabled people.

For a collected pathway through this material, visit the [Disability and Church hub]({{ '/disability-and-church/' | relative_url }}).

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

## Faith in public life

Christians should be able to serve society, contribute to public life and seek the good of their neighbours. At the same time, people should be persuaded by the gospel, not legislated into faith.

<ul>
  {% if christian_influence_post %}<li><a href="{{ christian_influence_post.url | relative_url }}">Christian Influence Without Theocracy</a></li>{% endif %}
</ul>

## Where I currently stand

Some articles explain my current theological positions. They are not a creed or a test of fellowship. They are simply a way of being transparent about how I currently read the evidence.

<ul>
  {% if arminian_post %}<li><a href="{{ arminian_post.url | relative_url }}">Arminian, Calvinist, Provisionist or Molinist?</a></li>{% endif %}
  {% if gender_post %}<li><a href="{{ gender_post.url | relative_url }}">Soft Complementarian, Drifting Egalitarian</a></li>{% endif %}
</ul>

## Useful next steps

- [Search the site]({{ '/search/' | relative_url }}) if you are looking for a particular topic.
- [Browse all articles]({{ '/articles/' | relative_url }}) in date order.
- [Use the Bible studies]({{ '/bible-studies/' | relative_url }}) for guided group discussion and deeper engagement with Scripture.
- [Browse by topic]({{ '/topics/' | relative_url }}) if you want to follow a theme.
- [Organisations and Tools]({{ '/organisations/' | relative_url }}) gives some background on communities, tools and ministries connected with the site.

## Love as a Verb

This is the devotional side of Humble Theologian. The original site included a 365-day devotional series called **Love as a Verb**. The relaunch preserves that material and makes it available as part of the wider site.

The central idea is that Christian love is not merely a feeling. Love becomes visible in action, service, sacrifice, patience, forgiveness and faithfulness.

## How I write

I write as a Bible college student, church volunteer and developing pastoral care practitioner. These articles are not meant to settle every issue or replace local church discipleship. They are meant to help readers think carefully, read Scripture responsibly and follow Jesus faithfully.

Some content is adapted from my Bible college work. Assignments will normally be rewritten before appearing here so they are more useful for public readers and do not simply reproduce academic submissions.

Where I rely on books, articles or other resources, I will try to acknowledge them clearly. The goal is not to replace good scholarship, but to help ordinary Christians engage with it.

Take your time. Read prayerfully. Test everything.
