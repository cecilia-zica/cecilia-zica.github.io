// Clique numa imagem de galeria para ver em tela cheia. Esc ou clique fora fecha.
(function () {
    var box = document.getElementById('lightbox');
    if (!box) return;
    var img = box.querySelector('img');
    var cap = box.querySelector('.lb-cap');

    function open(src, text) {
        img.src = src;
        cap.textContent = text || '';
        box.hidden = false;
        document.body.style.overflow = 'hidden';
    }
    function close() {
        box.hidden = true;
        img.removeAttribute('src');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.pgallery img, .proof-gallery img').forEach(function (el) {
        el.style.cursor = 'zoom-in';
        el.addEventListener('click', function () {
            var fig = el.closest('figure');
            var c = fig ? fig.querySelector('figcaption') : null;
            open(el.currentSrc || el.src, c ? c.textContent : el.alt);
        });
    });

    box.addEventListener('click', function (e) {
        if (e.target === box || e.target.classList.contains('lb-close')) close();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !box.hidden) close();
    });
})();
