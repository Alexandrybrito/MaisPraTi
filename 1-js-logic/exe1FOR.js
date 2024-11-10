//Reforçando - Estruturas de controle: repetição
//27 de jul.
//Exercícios com 'for'

//1 - Imprima a sequência de Fibonacci até o 10º termo

//Escreva um programa que use um loop for para imprimir os primeiros 
//10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
//Dica: A sequência de Fibonacci é calculada somando os dois termos 
//anteriores para obter o próximo termo.

const prompt = require('prompt-sync')()


let n = 10;
let sum = 0;
let previous = 0;
let next = 1;


for (let i=0; i<n; i++) {
    sum = previous + next;        // 0 = 0 + 1
    previous = next;              // 0 = 1
    next = sum;                   // 1 = 1 
    console.log(previous); 
}

/*

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

let n = 10; // Número de termos da sequência
console.log(fibonacci(n));

********************************
//Array

let fibonacci = Array();
fibonacci[0] = 0;
fibonacci[1] = 1;
for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci);
*/


// 2 - Verifique se um número é primo
// Escreva um programa que use um loop for para verificar se um número 
// fornecido (por exemplo, 29) é primo. Imprima "É primo" ou "Não é 
// primo".
// Dica: Um número primo só é divisível por 1 e por ele mesmo.
/*
let n = Number(prompt('Digite um número: '));

for (let i=0; i<n; i++) {
    if ((n % i === 0) && (i !== 1) ) {
        console.log('Não é primo');
    } else if (n === 2) {
        console.log('É primo')
    }
}
*/

// 3 - Imprima um triângulo de números

// Escreva um programa que use um loop for para imprimir um triângulo 
// de números.
// Dica: Utilize dois loops for, um dentro do outro.

/*
let n1 = parseInt(prompt('Digite um numero: '));

for (let i=1; i<=n1; i++) {
    let linha = '';
    for (let j=1; j<=i; j++) {
        linha += j + '';
    }
    console.log(linha);
} 
*/   


// Exercícios com 'while'

// 4 - Calcule o fatorial de um número
// Escreva um programa que use um loop while para calcular o fatorial 
// de um número fornecido (por exemplo, 5). O fatorial de 5 (5!) é 120.
// Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n.
// o resultado multiplica pelo proximo número

/*
(1ª opção)

let n = parseInt(prompt('Digite um número: '));
let resultado = 1;
let fat = 1;

while (fat <= n) {
    resultado = resultado * fat;
    fat++;
    console.log(resultado);
}
*/

/*
(2ª opção)

fat = 1;
i = 1;
n = parseInt(prompt('digite: '));

while (i<=n) {
    fat = fat * i;  
    i++;            
    console.log(fat);    
}
*/

/*
(3ª opção)

fat = 1;
i = 1;
n = parseInt(prompt('digite: '));
for (i=1; i<=n; i++) {
    fat=fat*i;
    console.log(fat);

}
*/

/*
function fatorial(n) {
    let resultado = 1;
    let i = n;
    while (i > 1) {
      resultado *= i;
      i--;
    }
    return resultado;
  }
  console.log(fatorial(5)); // Saída: 120
*/

// 5 - Inverta os dígitos de um número

// Escreva um programa que use um loop while para inverter os dígitos 
// de um número fornecido (por exemplo, 1234 deve ser impresso como 4321).
// Dica: Use operações de módulo e divisão para extrair os dígitos.
/*
let num = parseInt(prompt('Digite um number: '));
let invertNum = 0;

while (num > 0) {
    let digit = num % 10; // Obtém o último dígito 3 
    invertNum = (invertNum * 10) + digit; // Adiciona o dígito ao número invertido 3
    num = (num - digit) / 10

    //num = Math.floor(num / 10); // Remove o último dígito do número original
    console.log(invertNum);
}

console.log(invertNum);
*/

// 6 - Verifique se um número é palíndromo

// Escreva um programa que use um loop while para verificar se um número
// fornecido (por exemplo, 121) é um palíndromo. 
// Um número é palíndromo se ele é igual ao seu reverso.
// Exercícios com 'do while'

// Solicita ao usuário um número

/*
let numero = parseInt(prompt("Digite um número: "));
let original = numero;
let reverso = 0;

while (numero > 0) {
    let digito = numero % 10;
    reverso = (reverso * 10) + digito;
    numero = (numero - digito) / 10
    //numero = Math.floor(numero / 10);
}

if (original === reverso) {
    console.log("O número é um palíndromo.");
} else {
    console.log("O número não é um palíndromo.");
}
*/

// 7 - Conte o número de dígitos de um número

// Escreva um programa que use um loop do while para contar o número de
// dígitos de um número fornecido (por exemplo, 12345 tem 5 dígitos).
// Dica: Use operações de divisão para reduzir o número até que ele seja
// zero.
/*
let numero = parseInt(prompt("Digite um número: "));
let contador = 0;

do {
    numero = Math.floor(numero / 10);
    contador++;
} while (numero !== 0);

console.log("O número de dígitos é: " + contador);
*/


// 8 - Calcule a soma dos dígitos de um número
       
// Escreva um programa que use um loop do while para calcular a soma dos
// dígitos de um número fornecido (por exemplo, a soma dos dígitos de
// 1234 é 10).
// Dica: Use operações de módulo para extrair os dígitos e depois 
// some-os.

/*
let numero = Number(prompt('Digite um ai: '))
let soma = 0;

do {
    soma += numero % 10; 
    numero = Math.floor(numero / 10); 
    console.log(soma);
} while (numero > 0);

console.log(`A soma dos números digitados é: ${soma}`); 
*/


// 9 - Imprima um padrão de estrela decrescente

// Escreva um programa que use um loop do while para imprimir um padrão
// de estrelas decrescente.
// Dica: Utilize dois loops, um dentro do outro.
/*
let n = Number(prompt('Digite um número: '));

do {
    let linha = '';
    for (let i=0; i<n; i++) {
        linha += '*';
    }
    console.log(linha);
    n--;
} while (n>0);
*/


// 10 - Encontre o maior divisor comum (MDC) de dois números
// Escreva um programa que use um loop do while para encontrar o maior
//  divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).
// Dica: Utilize o algoritmo de Euclides, onde você repete o processo
//  de substituir o maior número pela diferença dos dois números até
//  que ambos sejam iguais.
/*
let num1 = Number(prompt('Informe o primeiro valor: ')); 56
let num2 = Number(prompt('Informe o segundo valor: ')); 98

let a = num1;
let b = num2;

do {
    let temp = b;
    b = a % b;
    a = temp;
} while (b !== 0);

const MDC = a;

console.log(`O maior divisor comum de ${num1} e ${num2} é ${MDC}`);
*/