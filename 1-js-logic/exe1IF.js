//Reforçando - Estruturas de controle: condicionais

//Exercícios com if

//1 - Verifique se um número é positivo, negativo ou zero

//Escreva um programa que leia um número e use uma estrutura if
//para verificar se o número é positivo, negativo ou zero. Imprima 
//uma mensagem apropriada para cada caso.

const prompt = require('prompt-sync')();

/*
let num = Number(prompt('Digite um número: '));

if (num === 0) {
    console.log('Você digitou zero!');
} else if (num < 0) {
    console.log('Você digitou o número negativo: ', num);
} else if {
    console.log('Você digitou o número positivo: ', num);
} else {
    console.log('Erro! Informe um número!');
}
*/

//2 - Verifique se um ano é bissexto

//Escreva um programa que leia um ano e use uma estrutura if para
//verificar se o ano é bissexto. Um ano é bissexto se for divisível 
//por 4, mas não por 100, exceto se também for divisível por 400.
// Imprima uma mensagem apropriada.
//366 dias de 4 em 4 anos

/*  ***
const year = Number(prompt('Informe o ano: '));

if ((year % 4 === 0)&&(year % 100 !== 0)||(year % 400 === 0)) {
    console.log(`O ano ${year} é bissexto`);
}else {
    console.log(`${year} não é um ano bissexto`);
}
*/

//Exercícios com if/else

//3 - Calcule a média de três números e determine o conceito
//Escreva um programa que leia três notas de um aluno, calcule a
//média e use uma estrutura if/else para determinar o conceito 
//(A, B, C, D, F) baseado na média. Imprima o conceito.

/*
let nota1 = Number(prompt('Primeira nota: '));
let nota2 = Number(prompt('Segunda nota: '));
let nota3 = Number(prompt('Terceira nota: '));

let media = (nota1 + nota2 + nota3) / 3;

if (media > 9.5) {
    console.log('Conceito A, Excelente!');
} else if (media > 8.5 && media < 9.5) {
    console.log('Conceito B, Muito Bom!');
} else if (media > 7.5 && media < 8.5) {
    console.log('Conceito c, na Média');
} else if (media > 6.5 && media < 7.5) {
    console.log('Conceito D, Regular');
} else if (media > 5.5 && media < 6.5) {
    console.log('Conceito E, Abaixo da Média');
} else {
    console.log('Reprovado');
}
*/

//4 - Verifique se um número é par ou ímpar

//Escreva um programa que leia um número e use uma estrutura
//if/else para verificar se o número é par ou ímpar. Imprima uma 
//mensagem apropriada.
/*
let num = Number(prompt('Digite um valor: '));

if (num % 2 == 0) {
    console.log('Número é PAR!');    
} else {
    console.log('Número é IMPAR!')
}
*/


//5 - Verifique a categoria de um nadador

//Escreva um programa que leia a idade de um nadador e use uma 
//estrutura if/else para determinar a categoria do nadador de acordo 
//com a idade:
//            Infantil A: 5 - 7 anos
//            Infantil B: 8 - 10 anos
//            Juvenil A: 11 - 13 anos
//            Juvenil B: 14 - 17 anos
//            Adulto: 18 anos ou mais
/*
let idade = Number(prompt('Digite sua idade: '));

if (idade < 8 && idade >= 5) {
    console.log('Categoria Infantil A')
}else if (idade < 11 && idade >= 8) {
    console.log('Categoria Infantil B');
}else if (idade < 14 && idade >= 11) {
    console.log('Categoria Juvenil A');
}else if (idade < 18 && idade >= 14) {
    console.log('Categoria Juvenil B');
}else if (idade >= 18 && idade < 40) {
    console.log('Categoria Adulto');
}else {
    console.log('Não se enquadra a nenhuma categoria')
}
*/

//Exercícios com switch

//6 - Verifique o dia da semana
//Escreva um programa que leia um número de 1 a 7 e use uma
//estrutura switch para imprimir o dia da semana correspondente. 
//(1 = Domingo, 2 = Segunda-feira, etc.)
/*
let diaSemana = Number(prompt('Digite o dia da semana: '));

switch (diaSemana) {
    case 1:
        console.log('Hoje é Domingo');
        break;
    case 2:
        console.log('Hoje é Segunda-feira');
        break;
    case 3:
        console.log('Hoje é Terça-feira');
        break;
    case 4:
        console.log('Hoje é Quarta-feira');
        break;
    case 5:
        console.log('Hoje é Quinta-feira');
        break;
    case 6:
        console.log('Hoje é Sexta-feira');
        break;
    case 7:
        console.log('Hoje é Sábado');
        break;
    default:
        console.log('Invalido!')
        break;
}
*/


//7 - Calcule o valor de uma expressão matemática simples

//Escreva um programa que leia dois números e um operador (+, -, *,/) 
//e use uma estrutura switch para calcular o resultado da operação.
//Imprima o resultado.

//Dica: Utilize os operadores aritméticos em cada caso do switch.
/*
let n1 = Number(prompt('Digite um número: '));
let n2 = Number(prompt('Digite outro númerto: '));
let operador = prompt('Qual operação deseja:(+, -, *, /)');

switch (operador) {
    case '+':
        console.log(n1+n2);
        break;
    case '-':
        console.log(n1-n2);
        break;
    case '*':
        console.log(n1*n2);
        break;
    case '/':
        console.log(n1/n2);
        break;
    default:
        console.log('Operação inválida!')
        break;
}
*/


//8 - Verifique a estação do ano

//Escreva um programa que leia um número de 1 a 4 e use uma
//estrutura switch para imprimir a estação do ano correspondente. 
//(1 = Primavera, 2 = Verão, 3 = Outono, 4 = Inverno)
/*
let estacao = Number(prompt('Digite um número de 1 a 4: '));

switch (estacao) {
    case 1:
        console.log('Spring');
        break;
    case 2:
        console.log('Summer');
        break;
    case 3:
        console.log('Autumn')
        break;
    case 4:
        console.log('Winter')
        break;
    default:
        console.log('Invalid')
        break;
}
*/

//Exercícios combinados

//9 - Verifique a faixa etária de uma pessoa
//Escreva um programa que leia a idade de uma pessoa e use uma 
//estrutura if/else para determinar a faixa etária:
//            Criança: 0 - 12 anos
//            Adolescente: 13 - 17 anos
//            Adulto: 18 - 59 anos
//            Idoso: 60 anos ou mais

//Dica: Utilize uma estrutura switch fora do bloco if/else para 
//imprimir uma mensagem específica para cada faixa etária.

/*
let idade = Number(prompt('Digite sua idade: '));
let faixaEtaria

if (idade >=0 && idade <=12) {
    faixaEtaria = (1);
}else if (idade >=12 && idade <=17) {
    faixaEtaria = (2);
}else if (idade >=18 && idade <=59) {
    faixaEtaria = (3);
}else if (idade >= 60) {
    faixaEtaria = (4);
}else {
    faixaEtaria = (5);
}

switch (faixaEtaria) {
    case 1:
        console.log('Criança: faixa etária de 0 a 12 anos');
        break;
    case 2:
        console.log('Adolescente: faixa etária de 13 a 17 anos');
        break;
    case 3:
        console.log('Adulto: faixa etária de 18 a 59 anos');
        break;
    case 4:
        console.log('Idoso: faixa etária de 60 anos ou mais')
    default:
        console.log('Idade indefinida!');
        break;
}
*/

//10 - Calcule o IMC e determine a categoria

//Escreva um programa que leia o peso (kg) e a altura (m) de uma
//pessoa, calcule o Índice de Massa Corporal (IMC) e use uma estrutura
//if/else para determinar a categoria:
//            Abaixo do peso: IMC < 18.5
//            Peso normal: IMC 18.5 - 24.9
//            Sobrepeso: IMC 25 - 29.9
//            Obesidade grau I: IMC 30 - 34.9
//            Obesidade grau II: IMC 35 - 39.9
//            Obesidade grau III: IMC >= 40
//Dica: O IMC é calculado como peso dividido pela altura ao quadrado 
//(IMC = peso / altura²).


let peso = Number(prompt('Digite seu peso (kg): '));
let altura = Number(prompt('Digite sua altura (m): '));
let imc = (peso / altura**2);

if (imc < 18.5) {
    console.log('Abaixo do Peso');
} else if (imc > 18.5 && imc < 24.9) {
    console.log('Peso Normal');
}else if (imc >= 25 && imc < 29.9) {
    console.log('Sobrepeso');
}else if (imc >= 30 && imc < 34.9) {
    console.log('Obesidade grau I');
}else if (imc >= 35 && imc < 39.9) {
    console.log('Obesidade grau II');
}else if (imc >= 40) {
    console.log('Obesidade grau III');
}