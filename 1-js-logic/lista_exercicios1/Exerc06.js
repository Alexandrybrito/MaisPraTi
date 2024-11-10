
// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')();


let A = Number(prompt('passe o valor do lado A: '));
let B = Number(prompt('Passe o valor do lado B: '));
let C = Number(prompt('Passe o valor do lado C: '));


let checkTriangle = () => {
    if (A < (B+C) && (B < (C+A)) && (C < (A+B))) {
        return console.log('Os valores atendem as condições para formar um triângulo');
    } else {
        return console.log('Os valores não atendem as condições para formar um triângulo');
    }
}

if ((A === B) && (B === C)) {
    console.log('É um Triângulo Equilátero');
} else if (A === B || B === C || C === A) {
    console.log('É um Triângulo Isóceles');
} else {
    console.log('É um Triângulo Escaleno')
}
//console.log((A+B),'-',(B+C),'-',(C+A));

checkTriangle();