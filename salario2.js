function calcular() {
    const nome = document.getElementById('nome').value;
    const salarioBruto = parseFloat(document.getElementById('salario').value);

    // Cálculo do imposto de renda
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

    // Adicionar linha na tabela
    const tabela = document.getElementById('corpo-tabela');
    const novaLinha = tabela.insertRow();
    novaLinha.insertCell(0).textContent = nome;
    novaLinha.insertCell(1).textContent = salarioBruto.toFixed(2);
    novaLinha.insertCell(2).textContent = imposto.toFixed(2);
    novaLinha.insertCell(3).textContent = salarioLiquido.toFixed(2);

    // Limpar campos de entrada
    document.getElementById('nome').value = '';
    document.getElementById('salario').value = '';
}
