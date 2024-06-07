//Faça um programa que receba três notas e seus respectivos pesos, calcule e mostre amédia ponderada dessas notas.

let notaPonderada1 = parseFloat(prompt('Digite sua primeira nota'));

let pesoPonderada1 = parseInt(prompt('Digite o peso de sua primeira nota'));
var xiFi1 = notaPonderada1 * pesoPonderada1;
console.log(xiFi1);

//======================================================================================================================

let notaPonderada2 = parseFloat(prompt('Digite sua segunda nota'));

let pesoPonderada2 = parseInt(prompt('Digite o peso de sua segunda nota'));
var xiFi2 = notaPonderada2 * pesoPonderada2;
console.log(xiFi2);


//======================================================================================================================

let notaPonderada3 = parseFloat(prompt('Digite sua terceira nota'));

let pesoPonderada3 = parseInt(prompt('Digite o peso de sua terceira nota')); 
var xiFi3 = notaPonderada3 * pesoPonderada3;
console.log(xiFi3);

//======================================================================================================================

var somaXiFi= xiFi1 + xiFi2 + xiFi3;
console.log(somaXiFi);

var somaPeso = pesoPonderada1 + pesoPonderada2 + pesoPonderada3;
console.log(somaPeso);

var mediaPonderada = (somaXiFi / somaPeso);
alert(`A média ponderada é ${mediaPonderada}`)
console.log(mediaPonderada);

