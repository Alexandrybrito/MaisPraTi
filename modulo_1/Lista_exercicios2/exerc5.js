// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.


let alunos = [
    {nome: 'Paula', nota1: 89.90, nota2: 95.30, nota3: 65.60},
    {nome: 'Marcos', nota1: 70.20, nota2: 68.95, nota3: 71.25},
    {nome: 'Edina', nota1: 90.50, nota2: 91.15, nota3: 82.60},
    {nome: 'Alex', nota1: 67.10, nota2: 59.90, nota3: 71.05}
]

for (let dado in alunos) {
    console.log(alunos[dado]);
}



for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2 + aluno.nota3) /3;

    if (media > 70.0) {
        console.log(`O(A) aluno(a) ${aluno.nome} obteve média ${media.toFixed(2)}, e foi Aprovado(a)!`);
    } else {
        console.log(`O(A) aluno(a) ${aluno.nome} obteve média ${media.toFixed(2)}, e foi Reprovado(a)!`);
    }
    
}
