document.getElementById('payroll-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores dos inputs
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const salary = parseFloat(document.getElementById('salary').value);

    // Calculando o imposto com base na faixa salarial
    let discount = 0;

    if (salary > 5000) {
        discount = salary * 0.175; // Imposto de 17,5% para salários acima de 5000
    } else if (salary > 4000) {
        discount = salary * 0.12; // Imposto de 12% para salários acima de 4000
    } else if (salary > 3000) {
        discount = salary * 0.075; // Imposto de 7,5% para salários acima de 3000
    } else if (salary > 1800) {
        discount = salary * 0.035; // Imposto de 3,5% para salários acima de 1800
    } else {
        discount = 0; // Imposto de 0% para salários abaixo de 1800
    }

    // Calculando o salário líquido
    const netSalary = salary - discount;

    if (name && position && salary) {
        // Criando uma nova linha na tabela
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${position}</td>
            <td>R$ ${salary.toFixed(2)}</td>
            <td>R$ ${discount.toFixed(2)} (Imposto)</td>
            <td>R$ ${netSalary.toFixed(2)}</td>
        `;
        document.querySelector('#payroll-table tbody').appendChild(row);

        // Limpando os campos do formulário
        document.getElementById('payroll-form').reset();
    }
});

// Função para exibir o nome da pessoa responsável pela folha de pagamento
function displayResponsibleName() {
    const responsibleName = document.getElementById('responsible-name').value;
    const displayElement = document.getElementById('display-name');
   
    if (responsibleName) {
        displayElement.textContent = `Responsável: ${responsibleName}`;
    } else {
        displayElement.textContent = 'Por favor, insira o nome do responsável.';
    }
}

