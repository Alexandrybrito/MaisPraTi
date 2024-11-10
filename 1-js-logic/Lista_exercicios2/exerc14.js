// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.


const empresa = {
    departamentos: [
        {
            nome: 'Informática',
            listaFunc: ['Paula', 'Daiane', 'Bruno','Isaac'],
        },
        {
            nome: 'Administração',
            listaFunc: ['Alexandry', 'Frank', 'Marisa', 'Simone'],
        },
        {
            nome: 'Marketing',
            listaFunc: ['Leandro', 'Antonia', 'Suzana'],
        },
        {
            nome: 'Comercial',
            listaFunc: ['Pedro', 'Emerson', 'Martha', 'Eduarda']
        },
    ],
};


for (let depart in empresa.departamentos) {
    let departamento = empresa.departamentos[depart];
    console.log('****************************');
    console.log(`Departamento: ${departamento.nome}`);
    
    for (let func of departamento.listaFunc) {
        console.log(`- Funcionário: ${func}`);
        
    }
   
}
