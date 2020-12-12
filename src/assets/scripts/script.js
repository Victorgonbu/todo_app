import todo from "./todo.js";

const projectsArr = [];

const todolist = [];

const addNewProjectBtn = document.querySelector('.new-project');
const addNewProjectInput = document.querySelector('.new-project-input');
let projectsContainer = document.querySelector('.projects');
const mainContainer = document.querySelector('.main-container');


const generateProjectBoard = (project, board) => {

    while(board.firstChild) {
        board.removeChild(board.lastChild);
    }
   
    const header = document.createElement('h2');
    header.textContent = project.textContent;
    board.appendChild(header);

    let todos = todolist.filter(todo => todo.project == project.textContent);

    if(todos) {
        todos.forEach(todo => {
            const title = document.createElement('p');
            title.textContent = todo.title;
            board.appendChild(title);
        });
    }
}


const justAdded = (text) => {
    const list = document.querySelector('.list');
    const project = document.createElement('li');
    project.classList.add('project-item');
    project.textContent = text; 
    
    project.addEventListener('click', () => {
        const board = document.querySelector('.display-board');
        const subBoard = document.querySelector('.board');
        board.classList.add('active-board');
        
        generateProjectBoard(project, subBoard);
    });
    list.appendChild(project);
}

const display = () => {
    console.log(projectsArr);
};

addNewProjectBtn.addEventListener('click', () => {
    addNewProjectBtn.classList.toggle('active-btn');
    addNewProjectInput.classList.toggle('active-input');
    if(addNewProjectBtn.textContent == 'Add project') {
        addNewProjectBtn.textContent = 'New project';
    } else {
        addNewProjectBtn.textContent = 'Add project';
    }
    if(addNewProjectInput.value) {
        projectsArr.push(addNewProjectInput.value);
        justAdded(addNewProjectInput.value);
        const form = projectsContainer.querySelector('form');
        form.reset();
    }
    display();
});

const projectItem = document.querySelectorAll('.project-item');

const newtodo = todo('exercise', 'joggin session', 'tomorrow', 1, 'none', false, 'today');

todolist.push(newtodo);

console.log(todolist);

