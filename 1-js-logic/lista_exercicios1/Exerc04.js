
// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada. 
5
const prompt = require('prompt-sync')();


let atendimento = parseInt(prompt('Opte por uma forma de atendiomento: (1-Video, 2-Audio, 3-Chat)'));

switch (atendimento) {
    case 1:
        console.log(`Opção 1 - Você será direcionado para o atendimento por video!`);
        break;
    case 2:
        console.log(`Opção 2 - Você será direcionado para o atendimento por audio!`);
        break;
    case 3:
        console.log(`Opção 3 - Você será direcionado para o atendimento por chat!`)
        break;
    default:
        console.log(`Opção inválida, retorne ao menu inicial!`)
        break;
}