// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

let estoque = [
    {produto: 'Arroz', qtde: 35, minimo: 50},
    {produto: 'Feijão', qtde: 27, minimo: 20},
    {produto: 'Farinha', qtde: 19, minimo: 30},
    {produto: 'Macarrão', qtde: 9, minimo: 15},
    {produto: 'Enlatados', qtde: 8, minimo: 10},
    {produto: 'Perecíveis', qtde: 5, minimo: 5}
]

estoque.forEach( produto => {
    if (produto.qtde < produto.minimo) {
        produto.qtde *=2;
    }
});

console.log(estoque);