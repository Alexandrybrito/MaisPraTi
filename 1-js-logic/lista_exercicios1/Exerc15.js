
// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

const prompt = require('prompt-sync')();


let num = 10;
let sum = 0;
let previous = 0;
let next = 1;

for (let i=0; i<num; i++) {
    sum = previous + next;
    previous = next;
    next = sum;
    console.log(previous);
}