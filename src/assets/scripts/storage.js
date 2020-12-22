import Project from './project.js';
import Todo from './todo.js';

const storage = (() => {
  let PROJECTARR;
  let TODOLISTARR;

  function getProjectArr() {
    PROJECTARR = JSON.parse(localStorage.getItem('projectarr'));
    if (PROJECTARR) {
      PROJECTARR = PROJECTARR.map(project => project = Project(project.name, storage.getTodoListArr));
    } else {
      PROJECTARR = [];
    }

    return PROJECTARR;
  }

  function updateTodo(todo) {
    const index = TODOLISTARR.indexOf(todo);
    todo.checklist = true;
    TODOLISTARR[index] = todo;
    localStorage.setItem('todolistarr', JSON.stringify(TODOLISTARR));
  }

  function getTodoListArr() {
    TODOLISTARR = JSON.parse(localStorage.getItem('todolistarr'));
    if (TODOLISTARR) {
      TODOLISTARR = TODOLISTARR.map(todo => todo = Todo(todo.title, todo.description, todo.dueDate, todo.priority, todo.notes, todo.checklist, todo.project, updateTodo));
    } else {
      TODOLISTARR = [];
    }
    return TODOLISTARR;
  }

  function addProject(project) {
    PROJECTARR.push(project);
    localStorage.setItem('projectarr', JSON.stringify(PROJECTARR));
  }

  function addTodo(todo) {
    TODOLISTARR.push(todo);
    localStorage.setItem('todolistarr', JSON.stringify(TODOLISTARR));
  }

  function savedProjects() {
    const projectList = document.querySelector('.list');

    if (getProjectArr().length > 0) {
      getProjectArr().forEach(project => {
        projectList.appendChild(project.displayNewProject());
      });
    }
  }

  return {
    getProjectArr, getTodoListArr, addProject, addTodo, savedProjects, updateTodo,
  };
})();

export default storage;