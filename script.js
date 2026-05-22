document.getElementById('area-clicavel').addEventListener('click', function() {
    const splash = document.getElementById('splash');
    const content = document.getElementById('content');
    const musica = document.getElementById('musica');

    // Força o carregamento do áudio antes de tocar
    musica.load(); 

    // Tenta tocar
    var playPromise = musica.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            console.log("Áudio começou a tocar com sucesso!");
        }).catch(error => {
            console.log("O navegador impediu o áudio: " + error);
            alert("Erro no áudio: Verifique se o arquivo está na mesma pasta!");
        });
    }

    splash.classList.add('fade-out');

    setTimeout(() => {
        splash.style.display = 'none';
        content.classList.remove('hidden');
    }, 1000);

    setTimeout(() => {
        musica.pause();
        musica.currentTime = 0;
    }, 30000);
});