//let titulo = document.getElementById('titulo');
//console.log(titulo.textContent);

//titulo.textContent = 'Orbit'

/*
//titulo.innerHTML = "Orbita"

titulo.style.color = 'red'

let botao = document.getElementById('botao');

/*
function alertaClick() {
    alert('Você clicou na Odisséia!!!');
}
botao.addEventListener('click', alertaClick());


botao.addEventListener('click', () => {   //mais usada função anonima = callback
    alert('Você entrou em uma Odisséia!!!')
});

let novoParagrafo = document.createElement('p');

novoParagrafo.innerHTML = "Este é um novo paragrafo criado via JS";

document.body.appendChild(novoParagrafo);

let paragrafo = document.querySelector('.paragrafo');
paragrafo.remove();
*/

/*
const itemInput = document.getElementById('itemInput');
const botaoAdicionar = document.getElementById('adiciona');
const botaoRemove = document.getElementById('remove');
let lista = document.getElementById('lista');

function addItem() {
    let li = document.createElement('li');
    li.innerHTML = `Item: ${lista.children.length+1}`;
    lista.appendChild(li);
    titulo.innerHTML = 'Adicionando itens';
    titulo.style.color = 'green'
}

function removeItem() {
    if (lista.children.length > 0) {
        lista.removeChild(lista.lastElementChild);
        titulo.innerHTML = 'Removendo itens';
        titulo.style.color = 'red';
    } else if (lista.children.length < 0) {
        titulo.innerHTML = 'Lista vazia';
        titulo.style.color = 'blue'
    }
}
botaoAdicionar.addEventListener('click', addItem);
botaoRemove.addEventListener('click', removeItem);
*/

const titulo = document.getElementById('titulo');
const itemInput = document.getElementById('itemInput');
const botaoAdd = document.getElementById('adiciona');
const botaoRemove = document.getElementById('remove');
const itemList = document.getElementById('itemList');

// Adiciona um item à lista
adiciona.onclick = function() {
    let itemText = itemInput.value.trim();
        if (itemText) {
            let li = document.createElement('li');
            li.textContent = itemText;
            itemList.appendChild(li);
            itemInput.value = ''; //limpa o campo de entrada
            titulo.innerHTML = 'Adicionando itens';
            titulo.style.color = 'green';
        } else {
            alert('Por favor, digite um item.');
        }
};

  // Remove o último item da lista
remove.onclick = function() {
    let lastItem = itemList.lastElementChild;
            if (lastItem) {
                itemList.removeChild(lastItem);
                titulo.innerHTML = 'Removendo itens';
                titulo.style.color = 'red'
            } else {
                alert('Não há itens para remover.');
                titulo.innerHTML = 'Não há mais itens para a remoção.';
                titulo.style.color = 'gray'
    }
}

/*
        // Adiciona um item à lista
        addButton.onclick = function() {
            const itemText = itemInput.value.trim();
            if (itemText) {
                const li = document.createElement('li');
                li.textContent = itemText;
                itemList.appendChild(li);
                itemInput.value = ''; // Limpa o campo de entrada
            } else {
                alert('Por favor, digite um item.');
            }
        };

        // Remove o último item da lista
        removeButton.onclick = function() {
            const lastItem = itemList.lastElementChild;
            if (lastItem) {
                itemList.removeChild(lastItem);
            } else {
                alert('Não há itens para remover.');
            }
        };
        */