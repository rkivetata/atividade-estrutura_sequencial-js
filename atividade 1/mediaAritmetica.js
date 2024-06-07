//Faça um programa que receba três notas, calcule e mostre a média aritmética entre elas.

let nota1 = parseFloat(prompt('Digite sua primeira nota'));

let nota2 = parseFloat(prompt('Digite sua segunda nota'));

let nota3 = parseFloat(prompt('Digite sua terceira nota'));


mediaAritmetica = (nota1+nota2+nota3)/3;

alert(`A média aritmética das notas é ${mediaAritmetica}`);