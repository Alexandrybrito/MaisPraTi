
// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();


let valor1 = Number(prompt('Passe o primeiro valor: '));
let valor2 = Number(prompt('Passe o segundo valor: '));

if (valor1 < valor2) {
    console.log(`A ordem crescente dos valores são ${valor1} e ${valor2}`);
} else {
    console.log(`A ordem crescente dos valores são ${valor2} e ${valor1}`);
}