// Manipulação de Objetos
// 1. Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.


const carro = {
    marca: 'General Motors',
    modelo: 'Camaro',
    ano: '2023',
    cor: 'Prata'
}

for (const key in carro) {
        console.log(key, carro[key])   
}