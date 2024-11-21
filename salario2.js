function calcular() {
    const nome = document.getElementById('nome').value;
    const salarioBruto = parseFloat(document.getElementById('salario').value);

    // Calcula o imposto de renda baseado nas faixas salariais
    let imposto = 0;
    if (salarioBruto > 5000) {
        imposto = salarioBruto * 0.175;
    } else if (salarioBruto > 4000) {
        imposto = salarioBruto * 0.12;
    } else if (salarioBruto > 3000) {
        imposto = salarioBruto * 0.075;
    } else if (salarioBruto > 1800) {
        imposto = salarioBruto * 0.035;
    }

    const salarioLiquido = salarioBruto - imposto;

    // Adiciona uma nova linha à tabela
    const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();
    const celulaNome = novaLinha.insertCell(0);
    const celulaSalarioBruto = novaLinha.insertCell(1);
    const celulaImposto = novaLinha.insertCell(2);
    const celulaSalarioLiquido = novaLinha.insertCell(3);

    celulaNome.textContent = nome;
    celulaSalarioBruto.textContent = salarioBruto.toFixed(2);
    celulaImposto.textContent = imposto.toFixed(2);
    celulaSalarioLiquido.textContent = salarioLiquido.toFixed(2);

    // Limpa os campos de nome e salário
    document.getElementById('nome').value = '';
    document.getElementById('salario').value = '';
}
