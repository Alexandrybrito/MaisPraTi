// Manipulação de Arrays de Objetos com for of
// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.


let pessoas = [
    {
        firstName: 'Alexandre',
        lastName: 'Brito',
        age: '49',
        town: 'Salvador'
    },
    {
        firstName: 'Paula',
        lastName: 'Martins',
        age: '35',
        town: 'Toronto'
    },
    {
        firstName: 'Epitáfio',
        lastName: 'Pendragon',
        age: '54',
        town: 'London'
    }
];


for (const pessoa of pessoas) {
console.log(`Nome: ${pessoa.firstName} ${pessoa.lastName} tem ${pessoa.age} de idade, e vive em ${pessoa.town}.`);
}