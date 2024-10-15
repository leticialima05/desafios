const imagens = document.querySelectorAll('.galeria img');

imagens.forEach(imagem => {
    imagem.addEventListener('click', () => {
        imagem.style.width = '300px';
        imagem.style.height = '300px';
        imagem.style.borderRadius = '20px';
        imagem.style.margin = '20px auto';
    });
});