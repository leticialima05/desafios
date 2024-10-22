function calcularDivida() {
    // Obtém os valores dos inputs
    const valorDivida = parseFloat(document.getElementById("valorDivida").value);
    const mesesAtraso = parseInt(document.getElementById("mesesAtraso").value);
    const taxaJuros = parseFloat(document.getElementById("taxaJuros").value) / 100;
  
    // Calcula a dívida total usando juros compostos
    let dividaTotal = valorDivida;
    for (let i = 0; i < mesesAtraso; i++) {
      dividaTotal *= (1 + taxaJuros);
    }
  
    // Formata o resultado e exibe na página
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `A dívida total após ${mesesAtraso} meses é de R$ ${dividaTotal.toFixed(2)}`;
  }