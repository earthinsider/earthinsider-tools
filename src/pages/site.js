/* =====================================================================
   Global site JS — one file, loaded by every page via base.njk.
   ===================================================================== */

/* ---------- SEARCH ---------- */
/* Pulls /search-index.json (generated at build time from tools.json)
   instead of embedding data inline, so it's always in sync. */
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
    const matches = searchIndex.filter(t => t.title.toLowerCase().includes(q));
    searchResults.innerHTML = matches.length
      ? matches.map(t => `<a href="${t.url}"><span class="type-tag ${t.type}">${t.type}</span><span>${t.title}</span></a>`).join('')
      : `<div class="search-empty">No matches for "${q}"</div>`;
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
document.addEventListener('keydown', e => { if (e.key === 'Escape' && searchCheck) searchCheck.checked = false; });

/* ---------- THEME TOGGLE ---------- */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
if (themeToggle) {
  let currentTheme = localStorage.getItem('ei_theme') || 'light';
  document.body.setAttribute('data-theme', currentTheme);
  if (themeIcon) themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('ei_theme', currentTheme);
    if (themeIcon) themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
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
