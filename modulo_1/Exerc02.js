
// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')();


let idade = Number(prompt('Digite sua idade: '));

if ((idade >=0) && (idade <=10)) {
    console.log(`Sua categoria é criança!`);
} else if ((idade >=11) && (idade <=17)) {
    console.log(`Sua categoria é adolescente`);
} else if ((idade >=18) && (idade <60)) {
    console.log(`Sua categoria é adulto!`);
} else if (idade >60) {
    console.log(`Sua categoria é idoso!`);
} else {
    console.log(`Valor inválido!`)
}