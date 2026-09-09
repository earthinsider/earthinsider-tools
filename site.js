/* =====================================================================
   Global site JS — one file, loaded by every page via base.njk.
   ===================================================================== */

/* ---------- SEARCH (dropdown quick-preview; Enter/icon submits the real
   <form> to /search/?q=... like a normal search engine) ---------- */
let searchIndex = [];
fetch('/search-index.json').then(r => r.json()).then(data => { searchIndex = data; });

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchCheck = document.getElementById('searchCheck');
const searchWrap = document.getElementById('searchWrap');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) { searchResults.classList.remove('open'); searchResults.innerHTML = ''; return; }
    const matches = searchIndex.filter(t => t.title.toLowerCase().includes(q)).slice(0, 8);
    searchResults.innerHTML = matches.length
      ? matches.map(t => `<a href="${t.url}"><span class="type-tag ${t.type}">${t.type}</span><span>${t.title}</span></a>`).join('')
      : `<div class="search-empty">No matches for "${q}" — press Enter to search anyway</div>`;
    searchResults.classList.add('open');
  });
}
if (searchCheck) {
  searchCheck.addEventListener('change', () => { if (searchCheck.checked) searchInput.focus(); });
}
document.addEventListener('click', e => {
  if (searchWrap && !e.target.closest('.search-wrap')) {
    searchResults && searchResults.classList.remove('open');
    if (searchCheck) searchCheck.checked = false;
  }
});

/* ---------- KEYBOARD SHORTCUTS ---------- */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && searchCheck) { searchCheck.checked = false; return; }
  const typing = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
  if (e.key === '/' && !typing) {
    e.preventDefault();
    if (searchCheck) searchCheck.checked = true;
    if (searchInput) searchInput.focus();
  }
});

/* ---------- THEME TOGGLE ---------- (defaults to the visitor's OS
   preference on first visit, instead of always starting in light mode) */
const themeToggle = document.getElementById('themeToggle');
const iconMoon = document.getElementById('iconMoon');
const iconSun = document.getElementById('iconSun');
if (themeToggle) {
  const saved = localStorage.getItem('ei_theme');
  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let currentTheme = saved || (systemDark ? 'dark' : 'light');
  function applyTheme(t) {
    document.body.setAttribute('data-theme', t);
    if (iconMoon && iconSun) {
      iconMoon.style.display = t === 'dark' ? 'none' : 'block';
      iconSun.style.display = t === 'dark' ? 'block' : 'none';
    }
  }
  applyTheme(currentTheme);
  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('ei_theme', currentTheme);
    applyTheme(currentTheme);
  });
}

/* ---------- COOKIES ---------- */
const cookieBanner = document.getElementById('cookieBanner');
if (cookieBanner) {
  if (!localStorage.getItem('ei_cookie_consent')) cookieBanner.classList.add('show');
  document.getElementById('cookieAccept').addEventListener('click', () => {
    localStorage.setItem('ei_cookie_consent', 'accepted');
    cookieBanner.classList.remove('show');
  });
  document.getElementById('cookieDecline').addEventListener('click', () => {
    localStorage.setItem('ei_cookie_consent', 'declined');
    cookieBanner.classList.remove('show');
  });
}

/* ---------- Mobile Ad Slot / Desktop Ad Slot visibility on resize ---------- */
function handleAdVisibility() {
  const isMobile = window.innerWidth <= 768;
  document.querySelectorAll('.ad-unit.desktop').forEach(ad => ad.style.display = isMobile ? 'none' : 'flex');
  document.querySelectorAll('.ad-unit.mobile').forEach(ad => ad.style.display = isMobile ? 'flex' : 'none');
}
handleAdVisibility();
window.addEventListener('resize', handleAdVisibility);

/* ---------- RECENTLY USED ---------- (localStorage only, nothing sent
   anywhere — tracks the last 6 individual tool pages visited) */
(function trackRecentlyUsed(){
  if (!document.querySelector('.tool-widget')) return; // only real tool pages have this
  const h1 = document.querySelector('h1');
  const title = h1 ? h1.textContent.trim() : document.title;
  const url = window.location.pathname;
  let recent = [];
  try { recent = JSON.parse(localStorage.getItem('ei_recent') || '[]'); } catch(e) {}
  recent = recent.filter(r => r.url !== url);
  recent.unshift({ title, url });
  localStorage.setItem('ei_recent', JSON.stringify(recent.slice(0, 6)));
})();
(function renderRecentlyUsed(){
  const section = document.getElementById('recentlyUsedSection');
  const grid = document.getElementById('recentlyUsedGrid');
  if (!section || !grid) return;
  let recent = [];
  try { recent = JSON.parse(localStorage.getItem('ei_recent') || '[]'); } catch(e) {}
  if (!recent.length) return;
  grid.innerHTML = recent.map(r => `<a class="tool-card" href="${r.url}"><h3 class="tool-title">${r.title}</h3></a>`).join('');
  section.style.display = 'block';
})();

/* ---------- COPY WITH CONFIRMATION ----------
   Shells call this instead of navigator.clipboard.writeText directly, so
   every "Copy" button shows a brief "Copied!" confirmation. */
window.EI_copyText = function(text, btnEl) {
  navigator.clipboard.writeText(text).then(() => {
    if (!btnEl) return;
    const original = btnEl.textContent;
    btnEl.textContent = 'Copied! ✓';
    btnEl.disabled = true;
    setTimeout(() => { btnEl.textContent = original; btnEl.disabled = false; }, 1500);
  });
};

/* ---------- SHARE / COPY LINK ---------- */
document.querySelectorAll('.share-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: document.title, url }).catch(() => {});
    } else {
      window.EI_copyText(url, btn);
    }
  });
});

/* ---------- SERVICE WORKER (offline support, network-first) ---------- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/assets/sw.js').catch(() => {});
  });
}
