function inserir(valor) {
    let tela = document.formulario.tela;

    if (isOperator(valor) && isOperator(tela.value[tela.value.length-1])) {
        return
    }
    tela.value += valor; 
}

function limparTela() {
    document.formulario.tela.value = "";
}

function deletar() {
    let tela = document.formulario.tela;
    tela.value = tela.value.slice(0, -1);
}

function calcularTotal() {
        let tela = document.formulario.tela;
        const expressao = tela.value;

        if (expressao && !isOperator(expressao[expressao.length-1])) {
            try {
                let resultado = calcularExpressao(expressao);
                tela.value = resultado;
            } catch (error) {
                alert('Expressão inválida!');
                limparTela();
            }
        }
}

function isOperator(char) {
    return['+','-','*','/'].includes(char);
}

function calcularExpressao(expressao) {
    //return new Function('return' + expressao)();
    return eval(expressao);
}