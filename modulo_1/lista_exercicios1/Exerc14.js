
// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while. 

const prompt = require('prompt-sync')();


let num = prompt('passe um valor: ');

let fatorial = 1;
for (let i=1; i<=num; i++) {
    fatorial = fatorial * i;
    console.log(fatorial);
}
console.log(`O calculo de fatorial de ${num} é ${fatorial}.`);