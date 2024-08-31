
// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. 
// Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra. 

const prompt = require('prompt-sync')();

let macas = Number(prompt('Quantas maçãs você quer? '));

let valorParaUnit = 0.30;
let valorParaDuzia = 0.25;
let precoTotal


function desconto() {
    if (macas < 12) {
        precoTotal = macas * valorParaUnit;
        console.log(`Você está comprando ${macas} maçãs, e o custo total é ${precoTotal.toFixed(2)}`)
    } else {
        precoTotal = macas * valorParaDuzia;
        console.log(`Você está comprando ${macas} maçãs, e o custo total é ${precoTotal.toFixed(2)}`);
    }
}
desconto();
