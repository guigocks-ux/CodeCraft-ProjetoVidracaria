// O seletor ".row.g-5 img" pega qualquer tag <img> dentro dessa div
const imagensGaleria = document.querySelectorAll('.row.g-5 img');

const modal = document.getElementById('modal-galeria');
const imgExpandida = document.getElementById('img-expandida');
const btnFechar = document.querySelector('.fechar');

// Adiciona o evento de clique para cada imagem encontrada
imagensGaleria.forEach(imagem => {

    if (imagem.src.includes('localizacao.png')) {
        return; 
    }

    imagem.addEventListener('click', function() {
        modal.classList.add('aberto');
        imgExpandida.src = this.src;   // Pega a foto clicada
        imgExpandida.alt = this.alt;
    });
});

// Função para fechar o modal
function fecharModal() {
    modal.classList.remove('aberto');
}

// Fecha ao clicar no X
btnFechar.addEventListener('click', fecharModal);

// Fecha ao clicar no fundo preto (fora da imagem)
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        fecharModal();
    }
});

// Fecha ao apertar a tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        fecharModal();
    }
});