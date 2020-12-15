import storage from './storage.js';
import Todo from "./todo.js";
import Project from "./project.js"

const ADDNEWPROJECTBTN = document.querySelector('.new-project');
const ADDNEWPROJECTINPUT = document.querySelector('.new-project-input');
const PROJECTSCONTAINER = document.querySelector('.projects');
const ADDTODOBTNS = document.querySelectorAll('.submit-todo');
const PROJECTLIST = document.querySelector('.list');

ADDNEWPROJECTBTN.addEventListener('click', () => {
    ADDNEWPROJECTBTN.classList.toggle('active-btn');
    ADDNEWPROJECTINPUT.classList.toggle('active-input');
    if(ADDNEWPROJECTBTN.textContent == 'Add project') {
        ADDNEWPROJECTBTN.textContent = 'New project';
    } else {
        ADDNEWPROJECTBTN.textContent = 'Add project';
    }
    if(ADDNEWPROJECTINPUT.value) {
        const newProject = Project(ADDNEWPROJECTINPUT.value, storage.getTodoListArr());
        const project = newProject.displayNewProject();
        PROJECTLIST.appendChild(project);
        const form = PROJECTSCONTAINER.querySelector('form');
        form.reset();
    }
});

ADDTODOBTNS.forEach(btn => {
    btn.addEventListener('click', () => {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('due-date').value;
        const checkbox = document.getElementById('check').checked;
        const notes = document.getElementById('notes').value;
        const priority = document.getElementById('priority').value;
        const project = document.querySelector('.project-title').textContent;
        let newTodo = Todo(title, description, dueDate, priority, notes, checkbox, project);
        storage.addTodo(newTodo);
        console.log(storage.getTodoListArr());
    });
});

