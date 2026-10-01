/* EarthInsider Tools – site.js (deferred) */
(function(){
  /* ---- HAMBURGER ---- */
  var mBtn=document.getElementById('mobileMenuBtn'),
      mPanel=document.getElementById('mobileMenuPanel');
  if(mBtn&&mPanel){
    mBtn.addEventListener('click',function(e){
      e.stopPropagation();
      mPanel.classList.toggle('open');
    });
    document.addEventListener('click',function(e){
      if(mPanel.classList.contains('open')&&!mPanel.contains(e.target)&&e.target!==mBtn)
        mPanel.classList.remove('open');
    });
  }

  /* ---- THEME (dark default, light on demand) ---- */
  var themeBtn=document.getElementById('themeToggle');
  var iconM=document.getElementById('iconMoon');
  var iconS=document.getElementById('iconSun');
  var saved=localStorage.getItem('ei_theme');
  var sysDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme:dark)').matches;
  var isDark=saved?saved==='dark':sysDark;

  function applyTheme(dark){
    if(dark){
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme','light');
    }
    if(iconM) iconM.style.display=dark?'inline-flex':'none';
    if(iconS) iconS.style.display=dark?'none':'inline-flex';
  }
  applyTheme(isDark);

  if(themeBtn){
    themeBtn.addEventListener('click',function(){
      isDark=!isDark;
      localStorage.setItem('ei_theme',isDark?'dark':'light');
      applyTheme(isDark);
    });
  }

  /* ---- SEARCH (dropdown + /search/ navigation) ---- */
  var idx=[];
  function loadIdx(cb){
    if(idx.length){cb();return;}
    fetch('/search-index.json').then(function(r){return r.json();}).then(function(d){idx=d;cb();}).catch(function(){});
  }
  function makeDropdown(inp,drop){
    if(!inp||!drop) return;
    inp.addEventListener('focus',function(){loadIdx(function(){});});
    inp.addEventListener('input',function(){
      var q=inp.value.trim().toLowerCase();
      if(!q){drop.classList.remove('open');drop.innerHTML='';return;}
      loadIdx(function(){
        var m=idx.filter(function(t){return t.title.toLowerCase().includes(q);}).slice(0,8);
        drop.innerHTML=m.length
          ? m.map(function(t){return '<a href="'+t.url+'"><span class="type-tag '+t.type+'">'+t.type+'</span> '+t.title+'</a>';}).join('')
          : '<div class="search-empty">No matches — press Enter to search all</div>';
        drop.classList.add('open');
      });
    });
    inp.addEventListener('keydown',function(e){
      if(e.key==='Enter'&&inp.value.trim())
        window.location.href='/search/?q='+encodeURIComponent(inp.value.trim());
      if(e.key==='Escape') drop.classList.remove('open');
    });
    document.addEventListener('click',function(e){
      if(!inp.contains(e.target)&&!drop.contains(e.target)) drop.classList.remove('open');
    });
  }
  makeDropdown(document.getElementById('desktopSearch'),document.getElementById('desktopDrop'));
  makeDropdown(document.getElementById('mobileSearch'),document.getElementById('mobileDrop'));

  /* ---- KEYBOARD: / to focus search ---- */
  document.addEventListener('keydown',function(e){
    var tag=document.activeElement.tagName;
    if(e.key==='/'&&tag!=='INPUT'&&tag!=='TEXTAREA'){
      e.preventDefault();
      var inp=document.getElementById('desktopSearch')||document.getElementById('mobileSearch');
      if(inp) inp.focus();
    }
  });

  /* ---- RECENTLY USED ---- */
  function getRecent(){try{return JSON.parse(localStorage.getItem('ei_recent')||'[]');}catch(e){return[];}}
  if(document.querySelector('.tool-widget')){
    var h1=document.querySelector('h1');
    var t=h1?h1.textContent.trim():document.title;
    var u=window.location.pathname;
    var rec=getRecent().filter(function(r){return r.url!==u;});
    rec.unshift({title:t,url:u});
    localStorage.setItem('ei_recent',JSON.stringify(rec.slice(0,6)));
  }
  var rSec=document.getElementById('recentlyUsedSection');
  var rGrid=document.getElementById('recentlyUsedGrid');
  if(rSec&&rGrid){
    var rec=getRecent();
    if(rec.length){
      rGrid.innerHTML=rec.map(function(r){return '<a class="recent-card" href="'+r.url+'">'+r.title+'</a>';}).join('');
      rSec.classList.add('show');
    }
  }

  /* ---- COPY HELPER ---- */
  window.EI_copy=function(text,btn){
    navigator.clipboard.writeText(text).then(function(){
      if(!btn)return;
      var o=btn.textContent;
      btn.textContent='Copied ✓';btn.disabled=true;
      setTimeout(function(){btn.textContent=o;btn.disabled=false;},1500);
    });
  };

  /* ---- SHARE BUTTONS ---- */
  document.querySelectorAll('.share-btn').forEach(function(b){
    b.addEventListener('click',function(){
      if(navigator.share) navigator.share({title:document.title,url:window.location.href}).catch(function(){});
      else window.EI_copy(window.location.href,b);
    });
  });

  /* ---- SERVICE WORKER ---- */
  if('serviceWorker' in navigator)
    window.addEventListener('load',function(){navigator.serviceWorker.register('/assets/sw.js').catch(function(){});});
})();
