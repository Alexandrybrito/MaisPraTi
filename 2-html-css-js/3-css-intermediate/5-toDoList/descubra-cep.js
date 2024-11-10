// viacep.com.br/ws/RS/Porto Alegre/Domingos Jose/json/

const rua = document.querySelector('#rua');
const cidade = document.querySelector('#cidade');
const uf = document.querySelector('#estado');
const btnCep = document.querySelector('#btn-buscar-cep');
const listaCep = document.querySelector('#lista-cep');

rua.value = 'Domingos Jose';
cidade.value = 'Porto Alegre';
uf.value = 'RS';

btnCep.addEventListener('click', function(e) {
    e.preventDefault();
    //alert(uf.value);

    let urlBase = 'https://viacep.com.br/ws/';
    let parametros = uf.value +'/'+ cidade.value +'/'+ rua.value +'/json/';
    let callback = '?callback=retornaMeuCep';

    let script = document.createElement('script');
    script.src = urlBase + parametros + callback;
    document.body.appendChild(script);
});

function retornaMeuCep(resposta) {
    
    if (!Array.isArray(resposta)) {
        alert('O retorno não é uma lista de CEPs');
        return;
    }

    resposta.forEach(function(i) {

        let li = document.createElement('li');
        let endereco = i.logradouro + '|' + i.bairro + '|' + i.localidade + '|' + i.uf + '|' + i.cep;
        li.innerHTML = endereco;

        li.setAttribute('onclick', 'exibirCep('+i.cep.replace('-', '')+')')
        listaCep.appendChild(li);
    });
}

function exibirCep(cep) {
    alert(cep);
}

