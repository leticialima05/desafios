const imagem = document.getElementById('imagem');
const proximoBtn = document.getElementById('proximo');
const anteriorBtn = document.getElementById('anterior');

let imagens = ['morris.webp', 'taaça.jpeg', 'rosto.jpeg']; // Adicione mais imagens aqui
let indiceImagem = 0;

proximoBtn.addEventListener('click', () => {
    indiceImagem = (indiceImagem + 1) % imagens.length;
    imagem.src = imagens[indiceImagem];
});

anteriorBtn.addEventListener('click', () => {
    indiceImagem = (indiceImagem - 1 + imagens.length) % imagens.length;
    imagem.src = imagens[indiceImagem];
});