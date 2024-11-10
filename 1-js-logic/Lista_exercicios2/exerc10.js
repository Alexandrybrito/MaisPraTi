// Combinação de Estruturas
// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.


let vendas = [
    {produto: 'Smart Tv', qtde: 2, valor: 1599.90},
    {produto: 'Micro System', qtde: 1, valor: 2750.89},
    {produto: 'Smart phone', qtde: 5, valor: 3890.60},
    {produto: 'Bicicleta', qtde: 3, valor: 1099.79},
    {produto: 'notebook', qtde: 2, valor: 4788.90}
]

let valorCompra=0;

vendas.forEach(venda => {
    valorCompra += venda.qtde * venda.valor;
});

console.log(`O valor total da vendas dos itens discriminados é R$ ${valorCompra}.`)
