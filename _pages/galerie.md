---
layout: default
title: Galerie
permalink: /galerie
---

<section class="section">
  <div class="wrap">

    <div class="section-header">
      <h2 class="section-title">Fotogalerie</h2>
      <div class="section-line"></div>
    </div>
    <div class="galerie-grid">
      {% for foto in site.data.galerie.fotky %}
      <a href="{{ foto.src | relative_url }}" class="galerie-item" target="_blank">
        <img src="{{ foto.src | relative_url }}" alt="{{ foto.popis }}" class="galerie-img">
        {% if foto.popis %}<span class="galerie-popis">{{ foto.popis }}</span>{% endif %}
      </a>
      {% endfor %}
    </div>

    {% if site.data.galerie.videa %}
    <div class="section-header" style="margin-top: 4rem;">
      <h2 class="section-title">Videa</h2>
      <div class="section-line"></div>
    </div>
    <div class="videa-grid">
      {% for video in site.data.galerie.videa %}
      <div class="video-item">
        <iframe src="{{ video.url }}" frameborder="0" allowfullscreen class="video-frame"></iframe>
        {% if video.popis %}<p class="video-popis">{{ video.popis }}</p>{% endif %}
      </div>
      {% endfor %}
    </div>
    {% endif %}

  </div>
</section>
