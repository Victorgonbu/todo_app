import Todo from "./todo.js";
import Project from "./project.js"

const projectsArr = [];

const todolist = [];

const addNewProjectBtn = document.querySelector('.new-project');
const addNewProjectInput = document.querySelector('.new-project-input');
let projectsContainer = document.querySelector('.projects');
const mainContainer = document.querySelector('.main-container');


function clearProjectBoard(board) {
    while(board.firstChild) {
        board.removeChild(board.lastChild);
    }
}

const generateProjectTitle = (project) => {

    const header = document.createElement('h2');
    header.textContent = project.textContent;
    return header;
}

function generateProjectTodos(project) {
    let todos = todolist.filter(todo => todo.project == project.textContent);
    let asociatedTodos = [];
    if(todos) {
        todos.forEach(todo => {
        
            const container = document.createElement('div');
            container.classList.add('todo-card');
            let todoAttributes = todo.generateTodoTags();
            todoAttributes.forEach(attribute => {
                container.appendChild(attribute);
            });
            asociatedTodos.push(container);
        });
        return asociatedTodos;
    }
}




const display = () => {
    console.log(projectsArr);
};

const list = document.querySelector('.list');

addNewProjectBtn.addEventListener('click', () => {
    addNewProjectBtn.classList.toggle('active-btn');
    addNewProjectInput.classList.toggle('active-input');
    if(addNewProjectBtn.textContent == 'Add project') {
        addNewProjectBtn.textContent = 'New project';
    } else {
        addNewProjectBtn.textContent = 'Add project';
    }
    if(addNewProjectInput.value) {
        const newProject = Project(addNewProjectInput.value);
        projectsArr.push(newProject);
        const project = newProject.displayNewProject();
        list.appendChild(project);
        const form = projectsContainer.querySelector('form');
        form.reset();
    }
    display();
});

const projectItem = document.querySelectorAll('.project-item');

const newtodo = Todo('exercise', 'joggin session', 'tomorrow', 1, 'none', false, 'today');
const newtodo2 = Todo('exercise', 'joggin session', 'tomorrow', 1, 'none', false, 'today');
todolist.push(newtodo);
todolist.push(newtodo2);

console.log(todolist);

