---
layout: default
title: Program zápasů
permalink: /zapasy
---

<section class="section">
  <div class="wrap">

    <!-- A) PROBĚHLÉ ZÁPASY -->
    <div class="section-header">
      <h2 class="section-title">Proběhlé zápasy</h2>
      <div class="section-line"></div>
    </div>
    <div class="matches" style="margin-bottom: 4rem;">
      {% for zapas in site.data.zapasy %}
      {% if zapas.typ == 'vysledek' %}
      <div class="match">
        <span class="match-date">{{ zapas.datum }}</span>
        <span class="match-team match-team--home">{{ zapas.domaci }}</span>
        <span class="match-score match-score--played">{{ zapas.skore }}</span>
        <span class="match-team match-team--away">{{ zapas.hoste }}</span>
        <span class="match-venue">{{ zapas.misto }}</span>
      </div>
      {% endif %}
      {% endfor %}
    </div>

  </div>
</section>

<section class="section" style="background: var(--grey); padding: 3rem 0;">
  <div class="wrap">
    <!-- B) NEJBLIŽŠÍ ZÁPAS -->
    <div class="section-header">
      <h2 class="section-title">Nejbližší zápas</h2>
      <div class="section-line"></div>
    </div>
    <div class="matches" style="margin-bottom: 4rem;">
      {% for zapas in site.data.zapasy %}
      {% if zapas.typ == 'nadchazejici' %}
      <div class="match">
        <span class="match-date">{{ zapas.datum }}</span>
        <span class="match-team match-team--home">{{ zapas.domaci }}</span>
        <span class="match-score">{{ zapas.skore }}</span>
        <span class="match-team match-team--away">{{ zapas.hoste }}</span>
        <span class="match-venue">{{ zapas.misto }}</span>
      </div>
      {% endif %}
      {% endfor %}
    </div>

  </div>
</section>

<section class="section">
  <div class="wrap">
    <!-- C) JEŠTĚ NÁS ČEKAJÍ -->
    <div class="section-header">
      <h2 class="section-title">Ještě nás čekají</h2>
      <div class="section-line"></div>
    </div>
    <div class="matches">
      {% for zapas in site.data.zapasy %}
      {% if zapas.typ == 'program' %}
      <div class="match">
        <span class="match-date">{{ zapas.datum }}</span>
        <span class="match-team match-team--home">{{ zapas.domaci }}</span>
        <span class="match-score">{{ zapas.skore }}</span>
        <span class="match-team match-team--away">{{ zapas.hoste }}</span>
        <span class="match-venue">{{ zapas.misto }}</span>
      </div>
      {% endif %}
      {% endfor %}
    </div>

  </div>
</section>
