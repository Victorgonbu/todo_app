import Project from './project';
import Todo from './todo';

const storage = (() => {
  let PROJECTARR;
  let TODOLISTARR;

  const getProjectArr = () => {
    PROJECTARR = JSON.parse(localStorage.getItem('projectarr'));
    if (PROJECTARR) {
      PROJECTARR = PROJECTARR.map(project => Project(project.name, storage.getTodoListArr));
    } else {
      PROJECTARR = [];
    }

    return PROJECTARR;
  };

  const updateTodo = (todo) => {
    const index = TODOLISTARR.indexOf(todo);
    TODOLISTARR[index] = todo;
    localStorage.setItem('todolistarr', JSON.stringify(TODOLISTARR));
  };

  const deleteTodo = (todo) => {
    const index = TODOLISTARR.indexOf(todo);
    TODOLISTARR.splice(index, 1);
    localStorage.setItem('todolistarr', JSON.stringify(TODOLISTARR));
  };

  const getTodoListArr = () => {
    TODOLISTARR = JSON.parse(localStorage.getItem('todolistarr'));
    if (TODOLISTARR) {
      TODOLISTARR = TODOLISTARR.map(todo => Todo(todo.title, todo.description,
        todo.dueDate, todo.priority, todo.notes, todo.checklist, todo.project));
    } else {
      TODOLISTARR = [];
    }
    return TODOLISTARR;
  };

  const addProject = (project) => {
    PROJECTARR.push(project);
    localStorage.setItem('projectarr', JSON.stringify(PROJECTARR));
  };

  const addTodo = (todo) => {
    TODOLISTARR.push(todo);
    localStorage.setItem('todolistarr', JSON.stringify(TODOLISTARR));
  };

  const savedProjects = () => {
    if (getProjectArr().length > 0) {
      getProjectArr().forEach(project => {
        project.newProject();
      });
    }
  };

  return {
    getProjectArr, getTodoListArr, addProject, addTodo, savedProjects, updateTodo, deleteTodo,
  };
})();

export default storage;