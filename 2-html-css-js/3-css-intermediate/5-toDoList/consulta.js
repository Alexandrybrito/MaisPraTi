const cep = document.querySelector('#cep');
const rua = document.querySelector('#rua');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');

cep.value = '';

cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=retornaEnd'
    document.body.appendChild(script);
});

function retornaEnd(res) {
    
    if ('erro' in res) {
        alert('CEP não encontrado');
        return;
    }

    console.log(res);
    rua.value = res.logradouro;
    bairro.value = res.bairro;
    cidade.value = res.localidade;
    estado.value = res.estado;
}


// bairro
// : 
// "Sé"
// cep
// : 
// "01001-000"
// complemento
// : 
// "lado ímpar"
// ddd
// : 
// "11"
// estado
// : 
// "São Paulo"
// gia
// : 
// "1004"
// ibge
// : 
// "3550308"
// localidade
// : 
// "São Paulo"
// logradouro
// : 
// "Praça da Sé"
// regiao
// : 
// "Sudeste"
// siafi
// : 
// "7107"
// uf
// : 
// "SP"
// unidade
// : 
// ""