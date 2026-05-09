---
layout: default
title: Kontakt
permalink: /kontakt
---

<!-- O NÁS -->
<section class="section">
  <div class="wrap">
    <div class="section-header">
      <h2 class="section-title">O nás</h2>
      <div class="section-line"></div>
    </div>
    <div class="o-nas">
      <p>TJ Sokol Choteč byl založen v roce 1943. Jsme fotbalový klub z Choteče s dlouhou tradicí a vášní pro fotbal.</p>
    </div>
  </div>
</section>

<!-- KONTAKTY A MAPA -->
<section class="section" style="background: var(--grey);">
  <div class="wrap">
    <div class="section-header">
      <h2 class="section-title">Kontakty a mapa</h2>
      <div class="section-line"></div>
    </div>
    <div class="kontakt-grid">
      <div class="kontakt-info">
        <p><strong>TJ Sokol Choteč</strong></p>
        <p>Choteč 123</p>
        <p>252 65 Choteč</p>
        <br>
        <p>Email: <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
      </div>
      <div class="kontakt-mapa">
        <iframe style="border:none" src="https://mapy.com/s/pupajeloru" width="500" height="333" frameborder="0">
        </iframe>
      </div>
    </div>
  </div>
</section>

<!-- KONTAKTNÍ FORMULÁŘ -->
<section class="section">
  <div class="wrap">
    <div class="section-header">
      <h2 class="section-title">Napište nám</h2>
      <div class="section-line"></div>
    </div>
    <div class="kontakt-form">
      <form method="POST" action="{{ site.data.settings.contact_settings.form_action | default: 'https://formspree.io/f/YOUR_ID' }}">
        <div class="input-group">
          <label for="name">Jméno</label>
          <input type="text" name="name" id="name" placeholder="Vaše jméno" required>
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Váš email" required>
        </div>
        <div class="input-group">
          <label for="message">Zpráva</label>
          <textarea name="message" id="message" rows="5" placeholder="Vaše zpráva" required></textarea>
        </div>
        <input type="hidden" name="_subject" value="Zpráva z webu TJ Sokol Choteč">
        <input type="text" name="_gotcha" style="display:none">
        <div class="input-submit">
          <input type="submit" value="Odeslat zprávu" class="btn btn-primary" style="color: var(--maroon); background: var(--white); border-color: var(--maroon);">
        </div>
      </form>
    </div>
  </div>
</section>
