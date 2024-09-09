// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

let clients = [
    {
        name: 'Alexandre',
        age: 49,
        town: 'Cachoeirinha'
    },
    {
        name: 'Paula',
        age: 37,
        town: 'São paulo'
    },
    {
        name: 'Wagner',
        age: 26,
        town: 'Paraisópolis'
    },
    {
        name: 'Betowen',
        age: 75,
        town: 'Veneza'
    },
    {
        name: 'Saramago',
        age: 54,
        town: 'Lisboa'
    }

];

let clientsMore30 = 0;

clients.forEach(client => {
    if (client.age > 30) {
        clientsMore30++;
    }
});

console.log(`A quantidade de clientes com idades acima de 30 anos são ${clientsMore30}.`);