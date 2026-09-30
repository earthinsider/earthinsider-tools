/* =====================================================================
   EarthInsider Tools — Global site.js
   One file, loaded on every page via base.njk.
   ===================================================================== */

/* ---------- HAMBURGER ---------- */
(function(){
  var btn = document.getElementById('mobileMenuBtn');
  var panel = document.getElementById('mobileMenuPanel');
  if(!btn || !panel) return;
  btn.addEventListener('click', function(){
    var open = panel.classList.contains('open');
    panel.classList.toggle('open');
    var icon = btn.querySelector('.hamburger-icon');
    if(icon) icon.textContent = open ? 'open' : 'close'; // label toggle (unused visually — icon is SVG)
  });
  document.addEventListener('click', function(e){
    if(!e.target.closest('header.site-header')) panel.classList.remove('open');
  });
})();

/* ---------- SEARCH ---------- */
(function(){
  var searchIndex = [];
  fetch('/search-index.json').then(function(r){ return r.json(); }).then(function(d){ searchIndex = d; });

  var searchInput = document.getElementById('searchInput');
  var searchResults = document.getElementById('searchResults');
  var desktopInput = document.getElementById('desktopSearchInput');

  function buildDropdown(input, results){
    if(!input || !results) return;
    input.addEventListener('input', function(){
      var q = input.value.trim().toLowerCase();
      if(!q){ results.classList.remove('open'); results.innerHTML=''; return; }
      var matches = searchIndex.filter(function(t){ return t.title.toLowerCase().includes(q); }).slice(0,8);
      results.innerHTML = matches.length
        ? matches.map(function(t){ return '<a href="'+t.url+'"><span class="type-tag '+t.type+'">'+t.type+'</span> '+t.title+'</a>'; }).join('')
        : '<div class="search-empty" style="padding:12px;font-size:.82rem;color:var(--outline)">No matches — press Enter to search</div>';
      results.classList.add('open');
    });
    input.addEventListener('keydown', function(e){
      if(e.key === 'Enter' && input.value.trim()){
        window.location.href = '/search/?q=' + encodeURIComponent(input.value.trim());
      }
    });
    document.addEventListener('click', function(e){
      if(!e.target.closest('.search-wrap') && !e.target.closest('.desktop-search'))
        results.classList.remove('open');
    });
  }
  buildDropdown(searchInput, searchResults);
  buildDropdown(desktopInput, document.getElementById('desktopSearchResults'));

  /* ---------- KEYBOARD SHORTCUT: / to focus search ---------- */
  document.addEventListener('keydown', function(e){
    var tag = document.activeElement.tagName;
    if(e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA'){
      e.preventDefault();
      var inp = desktopInput || searchInput;
      if(inp){ inp.focus(); }
    }
    if(e.key === 'Escape') document.querySelectorAll('.open').forEach(function(el){ el.classList.remove('open'); });
  });
})();

/* ---------- THEME (defaults to OS preference) ---------- */
(function(){
  var toggle = document.getElementById('themeToggle');
  var moonIcon = document.getElementById('iconMoon');
  var sunIcon = document.getElementById('iconSun');
  var saved = localStorage.getItem('ei_theme');
  var sysDark = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;
  var current = saved || (sysDark ? 'dark' : 'light');

  function apply(t){
    document.body.setAttribute('data-theme', t);
    if(moonIcon && sunIcon){
      moonIcon.style.display = t === 'dark' ? 'none' : 'inline-flex';
      sunIcon.style.display = t === 'dark' ? 'inline-flex' : 'none';
    }
  }
  apply(current);
  if(toggle){
    toggle.addEventListener('click', function(){
      current = current === 'light' ? 'dark' : 'light';
      localStorage.setItem('ei_theme', current);
      apply(current);
    });
  }
})();

/* ---------- RECENTLY USED ---------- */
(function(){
  if(document.querySelector('.tool-widget')){
    var title = (document.querySelector('h1') || {}).textContent || document.title;
    var url = window.location.pathname;
    var recent = [];
    try{ recent = JSON.parse(localStorage.getItem('ei_recent') || '[]'); }catch(e){}
    recent = recent.filter(function(r){ return r.url !== url; });
    recent.unshift({ title: title.trim(), url: url });
    localStorage.setItem('ei_recent', JSON.stringify(recent.slice(0,6)));
  }
  var section = document.getElementById('recentlyUsedSection');
  var grid = document.getElementById('recentlyUsedGrid');
  if(section && grid){
    var recent = [];
    try{ recent = JSON.parse(localStorage.getItem('ei_recent') || '[]'); }catch(e){}
    if(recent.length){
      grid.innerHTML = recent.map(function(r){
        return '<a class="recent-card" href="'+r.url+'">'+r.title+'</a>';
      }).join('');
      section.classList.add('show');
    }
  }
})();

/* ---------- COPY WITH CONFIRMATION ---------- */
window.EI_copyText = function(text, btn){
  navigator.clipboard.writeText(text).then(function(){
    if(!btn) return;
    var orig = btn.textContent;
    btn.textContent = 'Copied ✓';
    btn.disabled = true;
    setTimeout(function(){ btn.textContent = orig; btn.disabled = false; }, 1500);
  });
};

/* ---------- SHARE BUTTON ---------- */
document.querySelectorAll('.share-btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    var url = window.location.href;
    if(navigator.share){ navigator.share({ title: document.title, url: url }).catch(function(){}); }
    else{ window.EI_copyText(url, btn); }
  });
});

/* ---------- AD VISIBILITY (mobile/desktop) ---------- */
function handleAdVisibility(){
  var isMobile = window.innerWidth <= 768;
  document.querySelectorAll('.ad-unit.desktop').forEach(function(el){ el.style.display = isMobile ? 'none' : 'flex'; });
  document.querySelectorAll('.ad-unit.mobile').forEach(function(el){ el.style.display = isMobile ? 'flex' : 'none'; });
}
handleAdVisibility();
window.addEventListener('resize', handleAdVisibility);

/* ---------- SERVICE WORKER ---------- */
if('serviceWorker' in navigator){
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('/assets/sw.js').catch(function(){});
  });
}
