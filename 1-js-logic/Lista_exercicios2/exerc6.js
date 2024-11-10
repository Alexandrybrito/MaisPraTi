// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.


let funcionarios = [
    {
        nome: 'Alexandre',
        cargo: 'Desenvolvedor',
        salario: 5490
    },
    {
        nome: 'Patrícia',
        cargo: 'Secretária',
        salario: 2300
    },
    {
        nome: 'Daiane',
        cargo: 'Vendedora',
        salario: 4700
    },
    {
        nome: 'Pedro',
        cargo: 'Conferente',
        salario: 1980
    }
];

let mediaSalarial = 2000;

for (const func of funcionarios) {
    if (func.salario > mediaSalarial) {
    console.log(`O funcionário ${func.nome}, exerce o cargo de ${func.cargo}, tem ganhos de ${func.salario}, está na categoria exigida.`)
    }
}