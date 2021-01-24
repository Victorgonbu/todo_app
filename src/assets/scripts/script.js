import '../css/reset.css';
import '../css/style.css';
import storage from './storage';
import Todo from './todo';
import Project from './project';
import ProjectUI from './projectUI';
import TodoUI from './todoUI';



const ADDNEWPROJECTBTN = document.querySelector('.new-project');
const ADDNEWPROJECTINPUT = document.querySelector('.new-project-input');
const ADDTODOBTNS = document.querySelectorAll('.submit-todo');


ADDNEWPROJECTBTN.addEventListener('click', () => {
  ADDNEWPROJECTBTN.classList.toggle('active-btn');
  ADDNEWPROJECTINPUT.classList.toggle('active-input');
  if (ADDNEWPROJECTBTN.textContent === 'Add Project') {
    ADDNEWPROJECTBTN.textContent = 'New Project';
  } else {
    ADDNEWPROJECTBTN.textContent = 'Add Project';
  }
  if (ADDNEWPROJECTINPUT.value) {
    const newProject = Project(ADDNEWPROJECTINPUT.value, storage.getTodoListArr);
    storage.addProject(newProject);
    newProject.newProject();
    
    
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
    const form = document.querySelector('.add-todo-form');
    const newTodo = Todo(title, description, dueDate, priority, notes,
      checkbox, project);

    newTodo.displayNewTodo();
    storage.addTodo(newTodo);
    form.reset();
  });
});



const defaultPage = Project("All To-Do's", storage.getTodoListArr);
defaultPage.newProject();

storage.savedProjects();
//setTimeout(defaultContainer.click(), 500);
//PROJECTLIST.insertBefore(defaultContainer, PROJECTLIST.firstChild);
