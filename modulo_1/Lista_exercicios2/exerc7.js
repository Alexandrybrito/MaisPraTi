// Manipulação de Arrays de Objetos com forEach
// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.


let produtos = [
    {
        nome: 'Sofá',
        preco: 2590.80,
        desconto: 0
    },
    {
        nome: 'Cama',
        preco: 1999.90,
        desconto: 0
    },
    {
        nome: 'Armário',
        preco: 3975.90,
        desconto: 4.80
    },
    {
        nome: 'Estante',
        preco: 2350.90,
        desconto: 0
    }
];

produtos.forEach(produto => {
    let precoComDesconto = produto.preco -(produto.preco * 0.10);
    console.log(`O produto ${produto.nome}, custa ${produto.preco} e sai por ${precoComDesconto.toFixed(2)} no pagamento à vista.`)
});

