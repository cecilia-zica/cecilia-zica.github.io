// Gaveta de projetos: tema, idioma e filtro. Tema e idioma sao compartilhados com a home.
(function () {
    var LANG_KEY = 'cz-lang', THEME_KEY = 'cz-theme';

    function readStore(key, fallback) {
        try { return localStorage.getItem(key) || fallback; } catch (e) { return fallback; }
    }
    function writeStore(key, value) {
        try { localStorage.setItem(key, value); } catch (e) { /* modo privado: segue sem lembrar */ }
    }

    function applyLang(lang) {
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
        document.querySelectorAll('[data-en][data-pt]').forEach(function (el) {
            var next = lang === 'pt' ? el.getAttribute('data-pt') : el.getAttribute('data-en');
            if (next !== null) el.textContent = next;
        });
        var btn = document.getElementById('lang');
        if (btn) btn.textContent = lang === 'pt' ? 'EN' : 'PT-BR';
        writeStore(LANG_KEY, lang);
    }

    function applyTheme(theme) {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        var btn = document.getElementById('theme');
        if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
        writeStore(THEME_KEY, theme);
    }

    var lang = readStore(LANG_KEY, 'en') === 'pt' ? 'pt' : 'en';
    var theme = readStore(THEME_KEY, 'dark') === 'light' ? 'light' : 'dark';
    applyLang(lang);
    applyTheme(theme);

    var langBtn = document.getElementById('lang');
    if (langBtn) langBtn.addEventListener('click', function () {
        lang = lang === 'en' ? 'pt' : 'en';
        applyLang(lang);
    });

    var themeBtn = document.getElementById('theme');
    if (themeBtn) themeBtn.addEventListener('click', function () {
        theme = theme === 'dark' ? 'light' : 'dark';
        applyTheme(theme);
    });

    // Filtro do armario: esconde o que nao e da categoria escolhida.
    var chips = document.querySelectorAll('.chip');
    var cards = document.querySelectorAll('.pcard');
    chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
            var filter = chip.getAttribute('data-filter');
            chips.forEach(function (c) { c.classList.toggle('on', c === chip); });
            var shown = 0;
            cards.forEach(function (card) {
                var match = filter === 'all' || card.getAttribute('data-cat') === filter;
                card.hidden = !match;
                if (match) { card.style.setProperty('--i', shown); shown += 1; }
            });
        });
    });
})();
