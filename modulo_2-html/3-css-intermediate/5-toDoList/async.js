// async function funcaoAssincrona() {
//     console.log('Inicio da minha função');
//     let promessa = await new Promise((resolve) =>
// setTimeout(() => resolve('Promise Resolvida'),
// 3000))
// console.log(promessa);
// console.log('Finalizei minha função')
// }

// funcaoAssincrona();
// console.log('Código fora da função ainda está sendo executado');



function fazerPedido(Cafe) {
    return new Promise((resolve, reject) => {
        
        if (Cafe === "expresso") {
            setTimeout(() => resolve(`Seu ${Cafe} já está pronto!`), 2000);
        } else if (Cafe === "latte") {
            setTimeout(() => resolve(`Seu ${Cafe} já está pronto!`), 3000);
        } else if (Cafe === "mochacci") {
            setTimeout(() => resolve(`Seu ${Cafe} já está pronto!`), 5000)
        } else {
            reject("Esse café não está disponível");
        }
    });
}

async function realizarPedido(Cafe) {
    fazerPedido(Cafe)
        .then((resultado) => {
            console.log("Pedido realizado com sucesso:", resultado);
        })
        .catch((erro) => {
            console.error("Erro ao realizar o pedido:", erro);
        });
}


realizarPedido("expresso"); // Após 2 segundos: "Seu expresso está pronto!"
realizarPedido("latte");    // Após 3 segundos: "Seu latte está pronto!"
realizarPedido("mochacci");  // Após 5 segundos: "Seu mochacci está pronto!"
realizarPedido("extra latte"); // Imediatamente: "Café não disponível"
