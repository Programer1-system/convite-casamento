document.getElementById('area-clicavel').addEventListener('click', function() {
    const splash = document.getElementById('splash');
    const content = document.getElementById('content');
    const musica = document.getElementById('musica');

    // Toca a música
    musica.play().catch(e => console.log("Erro ao tocar música:", e));

    // Transição da capa
    splash.classList.add('fade-out');

    setTimeout(() => {
        splash.style.display = 'none';
        content.classList.remove('hidden');
    }, 1000);

    // Para a música após 30 segundos
    setTimeout(() => {
        musica.pause();
        musica.currentTime = 0;
    }, 30000);
});