---
layout: default
title: Náš tým
permalink: /tym
---

<section class="section" style="padding-top: 3rem;">
  <div class="wrap">
    <div class="section-header">
      <h2 class="section-title">Náš tým</h2>
      <div class="section-line"></div>
    </div>
    <div class="team-grid">
      {% for hrac in site.data.hraci %}
      <div class="player-card">
        {% if hrac.foto and hrac.foto != "" %}
        <img src="{{ hrac.foto | relative_url }}" alt="{{ hrac.jmeno }}" class="player-card__img">
        {% else %}
        <div class="player-card__placeholder">
          {{ hrac.jmeno | split: " " | last | slice: 0 }}
        </div>
        {% endif %}
        <div class="player-card__info">
          <span class="player-number">#{{ hrac.cislo }}</span>
          <span class="player-name">{{ hrac.jmeno }}</span>
          <span class="player-pos">{{ hrac.pozice }}</span>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
