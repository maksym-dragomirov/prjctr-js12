'use strict';

const taskInput = document.querySelector('.task-input');
const tasksList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const form = document.querySelector('.create-task-form');
let deleteSingleItemButton;
const editSingleItemButton = document.querySelector('.edit-item');
const listSection = document.querySelector('.filter-task-block');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (taskInput.value.trim() === '') {
        taskInput.value = '';
        return;
    }

    const task = {
        id: Date.now().toString(),
        text: taskInput.value,
    }

    createSingleTaskElement(task);
    storeTaskInLocalStorage(task);

    taskInput.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
    const tasks = localStorage.getItem('tasks') !== null
        ? JSON.parse(localStorage.getItem('tasks')) : [];

    tasks.forEach((task) => {
        createSingleTaskElement(task);
    });
})

listSection.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-item') || event.target.parentElement.classList.contains('delete-item')) {
        deleteSingleTaskElement(event.target.closest('li'));
    }
    if (event.target.classList.contains('edit-item') || event.target.parentElement.classList.contains('edit-item')) {
        editSingleTaskElement(event.target.closest('li'));
    }
})


clearBtn.addEventListener('click', () => {
    if (confirm('Are you sure?')) {
        localStorage.clear();
        tasksList.innerHTML = '';
    }
})

function deleteSingleTaskElement(task) {
    if (confirm('Are you sure?')) {
        const taskId = task.dataset.id;
        task.remove();
        removeTaskFromLocalStorage(taskId);
    }
}

function editSingleTaskElement(task) {
    const taskId = task.dataset.id;
    const currentText = task.textContent.trim();
    const editedText = prompt("Please enter new note", currentText);

    if (editedText !== null && editedText.trim() !== '') {
        task.firstChild.textContent = editedText;
        editSingleTaskElementInStorage(taskId, editedText);
    }
}

function createSingleTaskElement(taskInput) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.dataset.id = taskInput.id;

    li.appendChild(document.createTextNode(taskInput.text));

    const deleteElement = document.createElement('span');
    deleteElement.className = 'delete-item';
    deleteElement.innerHTML = ' <i class="fa fa-remove"></i> ';

    const editElement = document.createElement('span');
    editElement.className = 'edit-item';
    editElement.innerHTML = ' <i class="fa fa-edit"></i> ';

    li.appendChild(deleteElement);
    li.appendChild(editElement);

    tasksList.appendChild(li);
}

function storeTaskInLocalStorage(task) {
    const tasks = localStorage.getItem('tasks') !== null
        ? JSON.parse(localStorage.getItem('tasks')) : [];

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskId) {
    let tasks = localStorage.getItem('tasks') !== null
        ? JSON.parse(localStorage.getItem('tasks')) : [];

    tasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editSingleTaskElementInStorage(taskId, inputText) {
    let tasks = localStorage.getItem('tasks') !== null
        ? JSON.parse(localStorage.getItem('tasks')) : [];

    tasks.map(task => {
        if (task.id === taskId) {
            task.text = inputText;
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}