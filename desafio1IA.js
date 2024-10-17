const form = document.getElementById('formPesquisa');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Cria a mensagem de agradecimento
    mensagem.textContent = 'Obrigado por responder ao formulário!';

    // Limpa os campos do formulário (opcional)
    form.reset();
});
