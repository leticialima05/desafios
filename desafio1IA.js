const form = document.getElementById('myForm');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Validação básica: verifica se o campo "nome" está preenchido
    const nome = document.getElementById('nome');
    if (nome.value === '') {
        alert('Por favor, preencha o campo "Nome".');
        return;
    }

    // Coleta os dados do formulário
    const dados = {
        nome: nome.value,
        telefone: document.getElementById('telefone').value,
        escolaridade: document.getElementById('escolaridade').value,
        cidade: document.getElementById('cidade').value,
        sexo: document.getElementById('sexo').value
    };

    // Envia os dados para o servidor (ajuste o endpoint)
    fetch('https://seu-servidor/receber-dados', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar os dados');
        }
        return response.json();
    })
    .then(data => {
        console.log('Dados enviados com sucesso:', data);
        mensagem.textContent = 'Obrigado por participar da pesquisa!';
        mensagem.style.display = 'block';
    })
    .catch(error => {
        console.error('Erro:', error);
        mensagem.textContent = 'Ocorreu um erro ao enviar os dados. Tente novamente mais tarde.';
        mensagem.style.display = 'block';
    });
});
