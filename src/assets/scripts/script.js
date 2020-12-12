import Todo from "./todo.js";
import Project from "./project.js"

const ADDNEWPROJECTBTN = document.querySelector('.new-project');
const ADDNEWPROJECTINPUT = document.querySelector('.new-project-input');
const PROJECTSCONTAINER = document.querySelector('.projects');

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
        const newProject = Project(ADDNEWPROJECTINPUT.value, Todo.TODOLIST);
        const project = newProject.displayNewProject();
        PROJECTLIST.appendChild(project);
        const form = PROJECTSCONTAINER.querySelector('form');
        form.reset();
    }
});

const newtodo = Todo('exercise', 'joggin session', 'tomorrow', 1, 'none', false, 'today');
const newtodo2 = Todo('exercise', 'joggin session', 'tomorrow', 1, 'none', false, 'today');


console.log(Todo.TODOLIST);

