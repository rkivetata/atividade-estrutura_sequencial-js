let  salario = parseFloat(prompt('Informe seu salário.'));

let porcentagem = 25;

var calculoPorcentagem = porcentagem/100;
console.log(calculoPorcentagem);

var porcentagemDeSalario = calculoPorcentagem * salario;
console.log(porcentagemDeSalario);

var valorFinalPrimeiroSalario = salario + porcentagemDeSalario;
alert(`Seu salário é de R$${valorFinalPrimeiroSalario}`);

valorFinal = valorFinalPrimeiroSalario + porcentagemDeSalario;

alert(`Você teve mais um aumento de 25%!! Seu salário agora é de R$${valorFinal}`);
