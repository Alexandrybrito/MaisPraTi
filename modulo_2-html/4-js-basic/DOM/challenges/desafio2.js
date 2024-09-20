// const titulo = document.getElementById('titulo');
// const itemList = document.getElementById('itemList');
// const itemInput = document.getElementById('itemInput');
// const buttonAdd = document.getElementById('buttonAdd');
// const buttonListar = document.getElementById('buttonListar');
// const buttonConcluir = document.getElementById('buttonConcluir');

const titulo = document.getElementById('titulo');
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const listAllButton = document.getElementById('listAllButton');
const taskList = document.getElementById('taskList');
const buttonConcluir = document.getElementById('buttonConcluir');
const buttonNaoConcluir = document.getElementById('buttonNaoConcluir');

let tasks = [];

addTaskButton.addEventListener('click', addTask);
listAllButton.addEventListener('click', listTasks);

function addTask() {
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
        const task = {
            id: Date.now(),
            name: taskName,
            completed: false
        };
        tasks.push(task);
        taskInput.value = '';
        listTasks();
    } else {
        alert('Por favor, digite uma tarefa!');
    }
}

function listTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            ${task.name}
            <button onclick="toggleTask(${task.id})">${task.completed ? 'Não Concluir' : 'Concluir'}</button>
            <button onclick="editTask(${task.id})">Editar</button>
            <button onclick="deleteTask(${task.id})">Excluir</button>
        `;
        taskList.appendChild(li);
    });
}

function toggleTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        listTasks();
    } else {
        alert('Por favor, digite uma tarefa!');
    }
}

function editTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        const newName = prompt('Edite a tarefa:', task.name);
        if (newName !== null && newName.trim() !== '') {
            task.name = newName;
            listTasks();
        }
    } else {
        alert('Por favor, digite uma tarefa!');
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    listTasks();
}
