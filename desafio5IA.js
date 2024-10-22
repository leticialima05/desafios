const images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('click', () => {
    images.forEach(img => img.classList.remove('active'));
    image.classList.add('active');
  });
});

// Mostrar a primeira imagem por padrão
images[0].classList.add('active');