// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.


let pedidos = [
    {cliente: 'Anakin', produto: 'Painel solar', qtde: 11},
    {cliente: 'Seth', produto: 'Gerador 100kva', qtde: 3},
    {cliente: 'Luke', produto: 'Transformador 25kva', qtde: 5},
    {cliente: 'Rippley', produto: 'Propulsor', qtde: 8},
    {cliente: 'Cypher', produto: 'condensador', qtde: 15},
    {cliente: 'Spokie', produto: 'Exaustor 15"', qtde: 18}
]

let produtosCliente = {};

pedidos.forEach(pedido => {
    if (produtosCliente[pedido.cliente]) {
        produtosCliente[pedido.cliente] += pedido.qtde;
    } else {
        produtosCliente[pedido.cliente] = pedido.qtde;
    }
});

console.log('Segue lista dos clientes e a quantidade de itens comprados', produtosCliente);