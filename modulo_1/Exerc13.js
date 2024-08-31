
// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números. 

const prompt = require('prompt-sync')();


let sum = 0;
let count = 0;
let num  = 1;

while (num != 0) {
  num = parseFloat(prompt("Digite um número decimal (para sair digite 0): "));
  if (num != 0) {
    sum += num;
    count++;
  }
}

let average = sum / count;
console.log(`A média aritimética dos números digitados é: ${average.toFixed(1)}`);