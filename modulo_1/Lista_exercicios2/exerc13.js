// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

let carrinho = {
    itens: [
        {nome: 'Caderno', qtde: 5, precoUnit: 29.98 },
        {nome: 'Caneta', qtde: 13, precoUnit: 5.79},
        {nome: 'Lapis', qtde: 20, precoUnit: 3.20},
        {nome: 'Regua', qtde: 2, precoUnit: 7.50},
        {nome: 'Borracha', qtde: 4, precoUnit: 4.89}
    ]
};

let valorCarrinho = 0;


carrinho.itens.forEach(item => {
    
    let valorItem = item.qtde * item.precoUnit;
    console.log(`Item: ${item.nome}, quantidade: ${item.qtde}, preço unitário: ${item.precoUnit}, valor total: R$ ${valorItem}`);

    valorCarrinho += item.qtde * item.precoUnit;
});


console.log(`Valor total do carrinho ficou em ${valorCarrinho}`);