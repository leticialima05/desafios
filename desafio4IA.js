let saldoInicial = parseFloat(prompt("Digite o saldo inicial:"));
let taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal:")) / 100;
let pagamentoMensal = parseFloat(prompt("Digite o pagamento mensal:"));
let numMeses = parseInt(prompt("Digite o número de meses:"));

let saldoAtual = saldoInicial;
for (let mes = 0; mes < numMeses; mes++) {
    let juros = saldoAtual * taxaJuros;
    saldoAtual += juros - pagamentoMensal;
}

console.log("Saldo final após", numMeses, "meses:", saldoAtual);
