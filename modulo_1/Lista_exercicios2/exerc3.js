// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.



let produto = {
    nome: 'notebook',
    preco: 2570,
    peso: 2,
    quantidade: 37,
    desconto: 190
};

let valor = 15;

function filtrarPropri(produto, valor) {
    let novoObjeto = {};
    for (let key in produto) {
        if (produto[key] > valor) {
            novoObjeto[key] = produto[key];
        }
    }
    return novoObjeto;
}

let resultado = filtrarPropri(produto, valor);
console.log(resultado);
