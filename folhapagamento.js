function calcular() {
    // Pega os valores dos inputs
    const nome = document.getElementById('nome').value;
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);

    // Calcula o imposto (10% no exemplo)
    const imposto = salarioBruto * 0.1;

    // Calcula o salário líquido
    const salarioLiquido = salarioBruto - imposto;

    // Exibe o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Resultado</h2>
        <p>Nome: ${nome}</p>
        <p>Salário Bruto: R$ ${salarioBruto.toFixed(2)}</p>
        <p>Imposto: R$ ${imposto.toFixed(2)}</p>
        <p>Salário Líquido: R$ ${salarioLiquido.toFixed(2)}</p>
    `;
}