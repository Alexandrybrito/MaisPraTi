
// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if. 


const prompt = require('prompt-sync')();


let num = Number(prompt('Passe um valor: '));

if (num % 2 === 0) {
    console.log('Número recebido é Par!')
} else {
    console.log('Número recebido é Impar!')
}