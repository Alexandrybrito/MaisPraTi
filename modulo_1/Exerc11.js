
// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for. 

const prompt = require('prompt-sync')();


let sum = 0;

for (let i=0; i<5; i++) {
    let num = Number(prompt('Digite um valor: '));
    sum += num;
}
console.log(`A soma de todos os valores é ${sum}`);