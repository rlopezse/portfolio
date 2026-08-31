(function () {
  var STORAGE_KEY = 'lang';
  var TITLE_ES = 'Ronald López - Desarrollador de Software';
  var TITLE_EN = 'Ronald López - Software Developer';

  var toggleBtn = document.getElementById('lang-toggle');
  var elements = document.querySelectorAll('[data-es]');

  function setLang(lang) {
    document.documentElement.lang = lang;
    document.title = lang === 'es' ? TITLE_ES : TITLE_EN;

    elements.forEach(function (el) {
      if (lang === 'es') {
        if (el.dataset.en === undefined) {
          el.dataset.en = el.innerHTML;
        }
        el.innerHTML = el.dataset.es;
      } else if (el.dataset.en !== undefined) {
        el.innerHTML = el.dataset.en;
      }
    });

    toggleBtn.textContent = lang === 'es' ? 'English' : 'Español';
    toggleBtn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
    localStorage.setItem(STORAGE_KEY, lang);
  }

  toggleBtn.addEventListener('click', function () {
    var current = document.documentElement.lang === 'es' ? 'es' : 'en';
    setLang(current === 'es' ? 'en' : 'es');
  });

  if (localStorage.getItem(STORAGE_KEY) === 'es') {
    setLang('es');
  }
})();
