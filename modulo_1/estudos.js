// For - For in - For of - Foreach

// Estrutura de Repetição - LOOP
//     - FOR
//         1) INICIALIZAÇÃO - Criar uma variável e colocar um valor inicial

//         2) CONDIÇÃO - Enquanto o for true, o laço continuará iterando,
//                       ele irá verificar antes de cada iteração.
    
//         3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o laço der uma volta


//         for([inicialização]; [condição]; [expressão final]) {
//             seu código
//         }

//const users = ['Maria', 'João', 'Lúcia', 'Paula'];

// for(let i=0; i<users.length; i++){
//     console.log(users[i]);
// }

//------------------------------------------------------------------
// Estrutura de Repetição - LOOP
//     - FOR OF
//     - Itera todos os itens do array

// for(let name of users){
//     console.log(name);
// }

//------------------------------------------------------------------
// Estrutura de Repetição - LOOP
//     - FOR IN
//     - Usado para iterar Objetos

// const user = {
//     name: 'Alexandry',
//     age: 49,
//     street: 'Rua Azaleia, 188'
// }

// console.log(user);  // mostra todo o objeto com atributo (key) e valor
// console.log('-----------------------------');
// console.log(user.name); // 2 formas de apresentar somente o valor do atributo
// console.log(user['street']);
// console.log('-----------------------------');

// for(let chave in user){
//     console.log(`${chave} : ${user[chave]}`);
// }

//------------------------------------------------------------------
// Estrutura de Repetição - LOOP
//     - FOR EACH (item, index, array)

//      item - Dados?Informações contidos na posição atual do array
//      index - Número da posição. sempre começando em 0
//      array - Retorna o array completo

const users = [
    {name: 'Rodolfo', age: 16, contact: '(19) 94343-3434'},
    {name: 'Paula', age: 43, contact: '(51) 99887-6655'},
    {name: 'Alexandry', age: 12, contact: '(42) 98765-4321'},
    {name: 'Libélula', age: 25, contact: '(21) 99331-1211'}
];

users.forEach(function (item, index) {
    if(item.age < 18) {
        console.log(`O cliente ${item.name}, da posição, ${index}, tem ${item.age} é menor de idade`);
    }
})
