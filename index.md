---
layout: default
title: Home
permalink: /
description: "Humble Theologian is a free theology and Bible study resource for Bible college students and thoughtful Christians."
---

<section class="hero">
  <p class="kicker">Learning, loving and living the faith.</p>
  <h1>Serious theology without the ego.</h1>
  <p>Humble Theologian is a free resource for Bible college students and thoughtful Christians who want to learn Scripture, love people well and live the faith with humility.</p>

  <p class="button-row">
    <a class="button" href="/start-here/">Start Here</a>
    <a class="button button-secondary" href="/articles/">Read Articles</a>
    <a class="button button-secondary" href="/topics/">Browse Topics</a>
  </p>
</section>

<section class="home-section verse-feature" aria-labelledby="verse-heading">
  <p class="kicker">Pause with Scripture</p>
  <h2 id="verse-heading">A verse for today</h2>

  <blockquote class="daily-verse">
    <p id="daily-verse-text">Your word is a lamp for my feet, a light on my path.</p>
    <footer id="daily-verse-reference">Psalm 119:105 (NIV)</footer>
  </blockquote>

  <p class="small-text">A different verse is selected whenever this page is refreshed.</p>
  <p class="scripture-copyright">Scripture taken from the Holy Bible, NEW INTERNATIONAL VERSION®, NIV® Copyright © 1973, 1978, 1984, 2011 by Biblica, Inc.® Used by permission. All rights reserved worldwide.</p>
</section>

<script>
(function () {
  const verses = [
    {
      text: "Your word is a lamp for my feet, a light on my path.",
      reference: "Psalm 119:105 (NIV)"
    },
    {
      text: "Be still, and know that I am God.",
      reference: "Psalm 46:10 (NIV)"
    },
    {
      text: "The Lord is my shepherd, I lack nothing.",
      reference: "Psalm 23:1 (NIV)"
    },
    {
      text: "When I am afraid, I put my trust in you.",
      reference: "Psalm 56:3 (NIV)"
    },
    {
      text: "The Lord is good to all; he has compassion on all he has made.",
      reference: "Psalm 145:9 (NIV)"
    },
    {
      text: "Rejoice in hope, be patient in affliction, faithful in prayer.",
      reference: "Romans 12:12 (NIV)"
    },
    {
      text: "We love because he first loved us.",
      reference: "1 John 4:19 (NIV)"
    },
    {
      text: "Cast all your anxiety on him because he cares for you.",
      reference: "1 Peter 5:7 (NIV)"
    },
    {
      text: "Let all that you do be done in love.",
      reference: "1 Corinthians 16:14 (NIV)"
    },
    {
      text: "The Lord is near to all who call on him.",
      reference: "Psalm 145:18 (NIV)"
    },
    {
      text: "He must become greater; I must become less.",
      reference: "John 3:30 (NIV)"
    },
    {
      text: "The fruit of the righteous is a tree of life.",
      reference: "Proverbs 11:30 (NIV)"
    }
  ];

  const selected = verses[Math.floor(Math.random() * verses.length)];
  const textElement = document.getElementById("daily-verse-text");
  const referenceElement = document.getElementById("daily-verse-reference");

  if (textElement && referenceElement) {
    textElement.textContent = selected.text;
    referenceElement.textContent = selected.reference;
  }
})();
</script>

<section class="home-section">
  <p class="kicker">New here?</p>
  <h2>Start with the foundations.</h2>
  <p>If you are new to the site, begin with <a href="/what-is-the-gospel/">What Is the Gospel?</a>, then <a href="/essential-christian-beliefs/">What Are the Essential Christian Beliefs?</a>, then <a href="/how-we-got-the-bible/">How We Got the Bible</a>.</p>
  <p><a href="/start-here/">Follow the guided pathway</a></p>
</section>

<section class="home-section">
  <h2>Start with these areas</h2>
  <p>The site is designed as a small theology library: organised enough to be useful, personal enough to remain honest and humble.</p>

  <div class="home-grid">
    <article>
      <p class="kicker">Core Christian Beliefs</p>
      <h3>Gospel, doctrine and Christian hope</h3>
      <p>Foundational guides to the gospel, Christian doctrine, salvation, resurrection, new creation and the shape of historic Christian faith.</p>
    </article>

    <article>
      <p class="kicker">Bible and Interpretation</p>
      <h3>Reading Scripture carefully</h3>
      <p>Resources on Scripture, canon, context, genre, hermeneutics and faithful application without flattening the Bible into isolated proof texts.</p>
    </article>

    <article>
      <p class="kicker">Disability, Faith and Church</p>
      <h3>Dignity, belonging and participation</h3>
      <p>Reflections on image of God, embodiment, access, healing assumptions, pastoral care and church life with disabled Christians.</p>
    </article>
  </div>
</section>

<section class="home-section">
  <p class="kicker">Where I stand</p>
  <h2>Conviction with humility.</h2>
  <p>I am still learning. This site is transparent about where I currently stand, while trying to represent other Christian views fairly.</p>
  <p><a href="/where-i-stand/">Read where I currently stand</a></p>
</section>

<section class="home-section">
  <h2>Latest articles</h2>

  {% assign visible_posts = site.posts | where_exp: "post", "post.date <= site.time" %}
  {% for post in visible_posts limit:3 %}
  <article class="post-preview">
    {% if post.category %}
    <p class="kicker">{{ post.category }}</p>
    {% endif %}

    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>

    {% if post.description %}
    <p>{{ post.description }}</p>
    {% endif %}

    <p class="post-meta">
      {{ post.date | date: "%d %b %Y" }}
      {% if post.topic %} · {{ post.topic }}{% endif %}
      {% if post.words %} · Approx. {{ post.words }} words{% endif %}
    </p>
  </article>
  {% endfor %}

  <p><a href="/articles/">Browse all articles</a></p>
</section>
