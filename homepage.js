// BiosImport - Homepage sekce
// GitHub: vyslouzildenis-maker/shoptet-custom

(function() {
  var CDN = 'https://cdn.jsdelivr.net/gh/vyslouzildenis-maker/shoptet-custom@main/';

  document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    if (path !== '/' && path !== '/uvod/' && path !== '/uvod' && path !== '') return;

    var footer = document.querySelector('#footer, footer, .footer, [id*="footer"], [class*="footer"]');

    function vloz(el) {
      if (footer) footer.parentNode.insertBefore(el, footer);
      else document.body.appendChild(el);
    }

    // =============================================
    // 1. PARTNEŘI
    // =============================================
    var partneri = document.createElement('section');
    partneri.id = 'partneri-sekce';
    partneri.innerHTML =
      '<style>' +
      '#partneri-sekce{background:#f0f0f0;padding:50px 20px;text-align:center;font-family:inherit;}' +
      '#partneri-sekce h2{font-size:2em;font-weight:800;color:#1a1a1a;margin:0 0 40px;}' +
      '#partneri-sekce .pg{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:40px 60px;max-width:1100px;margin:0 auto;}' +
      '#partneri-sekce .pl img{height:60px;width:auto;max-width:200px;object-fit:contain;filter:grayscale(30%);opacity:.85;transition:all .3s;}' +
      '#partneri-sekce .pl img:hover{filter:grayscale(0%);opacity:1;transform:scale(1.05);}' +
      '</style>' +
      '<h2>Naši partneři</h2>' +
      '<div class="pg">' +
        '<div class="pl"><img src="' + CDN + 'zeppelin_logo.svg" alt="Zeppelin"></div>' +
        '<div class="pl"><img src="' + CDN + 'logo_galaxy.webp" alt="Galaxy Agricultural Machinery"></div>' +
        '<div class="pl"><img src="' + CDN + 'rhinoceros-tractor-logo.webp" alt="Rhinoceros Tractor"></div>' +
        '<div class="pl"><img src="' + CDN + 'LOGO-VARES.webp" alt="Vares"></div>' +
      '</div>';
    vloz(partneri);

    // =============================================
    // 2. POBOČKY
    // =============================================
    var pobocky = document.createElement('section');
    pobocky.id = 'pobocky-sekce';
    pobocky.innerHTML =
      '<style>' +
      '#pobocky-sekce{background:#f8f8f8;padding:60px 20px;font-family:inherit;}' +
      '#pobocky-sekce .ph{text-align:center;margin-bottom:40px;}' +
      '#pobocky-sekce .ph h2{font-size:2.2em;font-weight:800;color:#1a1a1a;margin:0 0 10px;}' +
      '#pobocky-sekce .ph p{color:#666;margin:0;}' +
      '#pobocky-sekce .pbg{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1200px;margin:0 auto;}' +
      '@media(max-width:900px){#pobocky-sekce .pbg{grid-template-columns:1fr;}}' +
      '#pobocky-sekce .pbk{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08);}' +
      '#pobocky-sekce .pbi{padding:24px;}' +
      '#pobocky-sekce .pbi h3{font-size:1.4em;font-weight:700;color:#1a1a1a;margin:0 0 8px;}' +
      '#pobocky-sekce .pbi .pp{color:#555;font-size:.9em;margin:0 0 14px;line-height:1.5;}' +
      '#pobocky-sekce .pbi .pa{color:#f5a623;font-weight:600;font-size:.95em;margin:0 0 14px;}' +
      '#pobocky-sekce .pbi .po{font-size:.9em;color:#1a1a1a;}' +
      '#pobocky-sekce .pbi .po strong{display:block;margin-bottom:3px;}' +
      '#pobocky-sekce .pbm iframe{display:block;width:100%;height:220px;border:none;}' +
      '</style>' +
      '<div class="ph"><h2>Navštivte naše pobočky</h2><p>Vyzkoušejte si naše traktory osobně</p></div>' +
      '<div class="pbg">' +
        '<div class="pbk">' +
          '<div class="pbi">' +
            '<h3>Herálec</h3>' +
            '<p class="pp">Pobočka a výdejní místo. Malotraktory, příslušenství a servis.</p>' +
            '<p class="pa">📍 Farma Herálec 134, Herálec, 582 55</p>' +
            '<div class="po"><strong>Otevírací doba:</strong>Po – Pá 8:00 – 14:00</div>' +
          '</div>' +
          '<div class="pbm"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2579.5!2d15.7297!3d49.7583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d8f5b5b5b5b5b%3A0x1!2sFarma+Her%C3%A1lec+134%2C+Her%C3%A1lec+582+55!5e0!3m2!1scs!2scz!4v1" allowfullscreen loading="lazy"></iframe></div>' +
        '</div>' +
        '<div class="pbk">' +
          '<div class="pbi">' +
            '<h3>Hradec Králové</h3>' +
            '<p class="pp">Pobočka a výdejní místo. Malotraktory, příslušenství.</p>' +
            '<p class="pa">📍 Vlčkovická 223/1a, Plačice, 500 04</p>' +
            '<div class="po"><strong>Otevírací doba:</strong>Po – St – Pá 8:00 – 16:00, Út – Čt 10:00 – 18:00</div>' +
          '</div>' +
          '<div class="pbm"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.0!2d15.9012!3d50.2227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c2b1a1a1a1a1a%3A0x1!2sVl%C4%8Dovick%C3%A1+223%2F1a%2C+Pla%C4%8Dice+500+04!5e0!3m2!1scs!2scz!4v1" allowfullscreen loading="lazy"></iframe></div>' +
        '</div>' +
        '<div class="pbk">' +
          '<div class="pbi">' +
            '<h3>Bratislava</h3>' +
            '<p class="pp">Výdejní místo.</p>' +
            '<p class="pa">📍 Stará Vajnorská, 831 04</p>' +
            '<div class="po"><strong>Otevírací doba:</strong>Dle telefonické domluvy.</div>' +
          '</div>' +
          '<div class="pbm"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.5!2d17.1324!3d48.1762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89401234abcd%3A0x1!2sStar%C3%A1+Vajnorsk%C3%A1%2C+Bratislava+831+04!5e0!3m2!1scs!2ssk!4v1" allowfullscreen loading="lazy"></iframe></div>' +
        '</div>' +
      '</div>';
    vloz(pobocky);

    // =============================================
    // 3. POPTÁVKOVÝ FORMULÁŘ
    // =============================================
    var poptavka = document.createElement('section');
    poptavka.id = 'poptavka-sekce';
    poptavka.innerHTML =
      '<style>' +
      '#poptavka-sekce{background:#f0f0f0;padding:60px 20px;font-family:inherit;}' +
      '#poptavka-sekce .pw{display:grid;grid-template-columns:1fr 1fr;gap:30px;max-width:1100px;margin:0 auto;}' +
      '@media(max-width:768px){#poptavka-sekce .pw{grid-template-columns:1fr;}}' +
      '#poptavka-sekce .pi,#poptavka-sekce .pf{background:#fff;border-radius:12px;padding:40px;box-shadow:0 2px 16px rgba(0,0,0,.08);}' +
      '#poptavka-sekce h2{font-size:1.8em;font-weight:800;color:#1a1a1a;margin:0 0 16px;}' +
      '#poptavka-sekce .perex{font-weight:600;color:#1a1a1a;margin:0 0 28px;line-height:1.5;}' +
      '#poptavka-sekce .tr{margin-bottom:4px;}' +
      '#poptavka-sekce .tr a{color:#f5a623!important;font-weight:700;font-size:1.05em;text-decoration:none!important;}' +
      '#poptavka-sekce .tp{color:#666;font-size:.88em;margin:2px 0 16px 26px;}' +
      '#poptavka-sekce .er{margin:4px 0 28px;}' +
      '#poptavka-sekce .er a{color:#f5a623!important;font-weight:600;text-decoration:none!important;}' +
      '#poptavka-sekce .fak{border-top:1px solid #eee;padding-top:20px;}' +
      '#poptavka-sekce .fak h3{font-size:1em;font-weight:700;margin:0 0 10px;}' +
      '#poptavka-sekce .upoz{background:#e8f4fd;border-radius:6px;padding:10px 14px;font-size:.85em;font-weight:600;margin-bottom:10px;}' +
      '#poptavka-sekce .adr{font-size:.9em;color:#555;line-height:1.7;}' +
      '#poptavka-sekce .fg{margin-bottom:14px;}' +
      '#poptavka-sekce .fg label{display:block;font-size:.9em;font-weight:500;margin-bottom:5px;color:#1a1a1a;}' +
      '#poptavka-sekce .fg input,#poptavka-sekce .fg textarea{width:100%;border:1.5px solid #e0e0e0;border-radius:8px;padding:12px 16px;font-size:.95em;background:#fafafa;box-sizing:border-box;font-family:inherit;}' +
      '#poptavka-sekce .fg input:focus,#poptavka-sekce .fg textarea:focus{border-color:#f5a623;outline:none;background:#fff;}' +
      '#poptavka-sekce .fg textarea{min-height:120px;resize:vertical;}' +
      '#poptavka-sekce .souhlas{display:flex;align-items:flex-start;gap:8px;font-size:.88em;color:#555;margin:14px 0;}' +
      '#poptavka-sekce .souhlas input{margin-top:2px;flex-shrink:0;}' +
      '#poptavka-sekce .btn-send{width:100%;background:#f5a623;color:#1a1a1a;font-weight:700;font-size:1em;padding:16px;border:none;border-radius:8px;cursor:pointer;text-transform:uppercase;letter-spacing:.5px;font-family:inherit;}' +
      '#poptavka-sekce .btn-send:hover{background:#e09610;}' +
      '#poptavka-sekce .uspech{display:none;text-align:center;padding:40px 20px;color:#2d7a2d;font-weight:600;font-size:1.1em;}' +
      '#poptavka-sekce .chyba{display:none;color:#cc0000;font-size:.88em;margin-top:8px;text-align:center;}' +
      '</style>' +
      '<div class="pw">' +
        '<div class="pi">' +
          '<h2>Poptávkový formulář</h2>' +
          '<p class="perex">V případě zájmu o naše produkty nám napište nebo rovnou volejte.</p>' +
          '<div class="tr">📞 <a href="tel:+420735135242">+420 735 135 242</a></div>' +
          '<p class="tp">Prodej malotraktorů</p>' +
          '<div class="tr">📞 <a href="tel:+420735199881">+420 735 199 881</a></div>' +
          '<p class="tp">Prodej příslušenství, zákaznický servis</p>' +
          '<div class="er">✉ <a href="mailto:info@biosimport.cz">info@biosimport.cz</a></div>' +
          '<div class="fak">' +
            '<h3>Fakturační adresa</h3>' +
            '<div class="upoz">ℹ️ Pouze pro fakturační účely – nikoli pro doručování zboží!</div>' +
            '<div class="adr">Sídlo firmy, korespondenční adresa:<br>B. Kobzinové 2020, 580 01 Havlíčkův Brod<br>IČ: 17543169, DIČ: CZ17543169</div>' +
          '</div>' +
        '</div>' +
        '<div class="pf">' +
          '<div class="uspech" id="p-uspech">✅ Děkujeme! Poptávka odeslána. Ozveme se co nejdříve.</div>' +
          '<form id="p-form" action="https://formspree.io/f/mbdazjlz" method="POST">' +
            '<div class="fg"><label>Jméno a příjmení</label><input type="text" name="jmeno" placeholder="Jan Novák" required></div>' +
            '<div class="fg"><label>E-mail</label><input type="email" name="email" placeholder="jannovak@gmail.com" required></div>' +
            '<div class="fg"><label>Mobil</label><input type="tel" name="mobil" placeholder="+420 123 456 789"></div>' +
            '<div class="fg"><label>Poznámka</label><textarea name="message" placeholder="Váš dotaz nebo zájem..."></textarea></div>' +
            '<label class="souhlas"><input type="checkbox" required> Souhlasím se zpracováním osobních údajů *</label>' +
            '<button type="submit" class="btn-send">Odeslat poptávku</button>' +
            '<div class="chyba" id="p-chyba">Nepodařilo se odeslat. Zkuste to prosím znovu.</div>' +
          '</form>' +
        '</div>' +
      '</div>';
    vloz(poptavka);

    // AJAX odeslání
    document.getElementById('p-form').addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = this.querySelector('.btn-send');
      btn.textContent = 'Odesílám...';
      btn.disabled = true;
      fetch('https://formspree.io/f/mbdazjlz', {
        method: 'POST',
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
      }).then(function(r) {
        if (r.ok) {
          document.getElementById('p-form').style.display = 'none';
          document.getElementById('p-uspech').style.display = 'block';
        } else {
          document.getElementById('p-chyba').style.display = 'block';
          btn.disabled = false;
          btn.textContent = 'Odeslat poptávku';
        }
      }).catch(function() {
        document.getElementById('p-chyba').style.display = 'block';
        btn.disabled = false;
        btn.textContent = 'Odeslat poptávku';
      });
    });

  });
})();
