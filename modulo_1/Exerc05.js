
// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else. 

const prompt = require('prompt-sync')();


let peso = prompt('Passe seu peso: ');
let altura = prompt('Passe sua altura: ');
let imc = peso / (altura * altura);
console.log('O IMC é ' + imc.toFixed(2));

if (imc < 18.50 ) {
    console.log('Abaixo do Peso');
} else if (imc <= 24.90) {
    console.log('Peso Normal');
} else if (imc <= 29.90 ) {
    console.log('Sobrepeso');
} else if (imc <= 34.90) {
    console.log('Obesidade I');
} else if (imc >= 39.90) {
    console.log('Obesidade II');
} else {
    console.log('Obesidade Mórbida')
}