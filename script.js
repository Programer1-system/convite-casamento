// Espera o HTML carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona a área invisível e as telas
    const areaClicavel = document.getElementById('area-clicavel');
    const splash = document.getElementById('splash');
    const content = document.getElementById('content');

    // Adiciona o evento de clique na área invisível
    areaClicavel.addEventListener('click', function() {
        
        // Inicia a transição de saída da capa
        splash.classList.add('fade-out');

        // Após 1 segundo (tempo da animação), mostra o convite
        setTimeout(() => {
            splash.style.display = 'none'; // Remove a capa do fluxo para não atrapalhar
            content.classList.remove('hidden');
            
            // Se você quiser adicionar música, descomente as linhas abaixo e adicione o arquivo mp3
            // const audio = new Audio('suamusica.mp3');
            // audio.play().catch(error => console.log("Autoplay bloqueado pelo navegador."));
        }, 1000);
    });
});