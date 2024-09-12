// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.





let transacoes = [
    { tipo: 'entrada', valor: 5579.89 },
    { tipo: 'saída', valor: 1154.77 },
    { tipo: 'entrada', valor: 2799.70},
    { tipo: 'saída', valor: 1815.28 },
    { tipo: 'saída', valor: 2256.65},
    { tipo: 'entrada', valor: 6699.78},
    { tipo: 'entrada', valor: 9989.12}
];


let saldoEntradas = 0;
let saldoSaidas = 0;
let saldoFinal = 0;


transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
        saldoEntradas += transacao.valor;
    } else if (transacao.tipo === 'saída') {
        saldoSaidas += transacao.valor;
    }
});


saldoFinal = saldoEntradas - saldoSaidas;

console.log(`Saldo das Entradas: R$${saldoEntradas.toFixed(2)}`);
console.log(`Saldo das Saídas: R$${saldoSaidas.toFixed(2)}`);
console.log(`Saldo final entre entradas e saidas: R$${saldoFinal.toFixed(2)}`);
