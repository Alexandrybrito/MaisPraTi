
// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for. 

const prompt = require('prompt-sync')();


let multiplicador = Number(prompt('Qual tabuada você quer? '));
let tabuada = 0;

for (let i=1; i<=10; i++) {
    tabuada = multiplicador * i;
    console.log(tabuada);
}