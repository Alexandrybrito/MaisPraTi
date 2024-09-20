
// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')();


let nota = Number(prompt('Passe a nota do aluno: '));

if (nota >= 7.0) {
    console.log(`Aluno Aprovado!`);
} else if ((nota < 7.0 ) && (nota > 5.0)) {
    console.log(`Aluno em Recuperação!`);
} else {
    console.log(`Aluno Reprovado!`)
}