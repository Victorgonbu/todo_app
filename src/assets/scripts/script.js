import '../css/reset.css';
import '../css/style.css';

import Todo from './todo';
import Project from './project';
import ProjectUI from './projectUI';
import TodoUI from './todoUI';

ProjectUI.setUp();
TodoUI.setUp();

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
    const newProject = new Project(ADDNEWPROJECTINPUT.value);
    newProject.saveProject();
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
    const newTodo = new Todo(title, description, dueDate, priority, notes,
      checkbox, project);

    newTodo.displayNewTodo();
    newTodo.saveTodo();
    form.reset();
  });
});


const defaultPage = new Project("All To-Do's");
defaultPage.newProject();

Project.savedProjects();