const imagens = document.querySelectorAll('.imagem');
const modal = document.getElementById('modal');
const imagemGrande = document.querySelector('.imagem-grande');
const fechar = document.querySelector('.fechar');

imagens.forEach((imagem) => {
	imagem.addEventListener('click', () => {
		modal.style.display = 'flex';
		imagemGrande.src = imagem.src;
	});
});

fechar.addEventListener('click', () => {
	modal.style.display = 'none';
});
