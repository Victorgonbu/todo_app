const Project = (name, storage) => {

  const generateProjectTitle = (project) => {
    const header = document.createElement('h2');
    header.classList.add('project-title');
    header.textContent = project.textContent;
    return header;
  }

  const generateProjectTodos = (project) => {
    let todos;
   
    if(project.textContent === "All To-Do's") {
      
      todos = storage();
    
    }else {
      todos = storage().filter(todo => todo.project === project.textContent);
    }

    if (todos) {
      todos.forEach(todo => {
        todo.displayNewTodo();
      });
    }
  }

  const clearProjectBoard = (todolist) => {
    while (todolist.firstChild) {
      todolist.removeChild(todolist.firstChild);
    }
  }

  const generateContainer = (tag, tagClass, textContent = '') => {
    const container = document.createElement(tag);
    container.classList.add(tagClass);
    container.textContent = textContent;
    return container;
  }

  const projectClickListener = (project) => {
    project.addEventListener('click', () => {
      const board = document.querySelector('.display-board');
      const subBoard = document.querySelector('.todo-lists');

      clearProjectBoard(subBoard);

      const doneTodoContainer = generateContainer('div', 'done');
      doneTodoContainer.classList.add('todos-container');
      const undoneTodoContainer = generateContainer('div', 'undone');
      undoneTodoContainer.classList.add('todos-container');

      const doneTitle = generateContainer('h3', 'done-title', 'Done');
      doneTodoContainer.insertBefore(doneTitle, doneTodoContainer.firstChild);

      const undoneTitle = generateContainer('h3', 'undone-title', 'To Do');
      undoneTodoContainer.insertBefore(undoneTitle, undoneTodoContainer.firstChild);

      subBoard.appendChild(doneTodoContainer);
      subBoard.insertBefore(undoneTodoContainer, subBoard.firstChild);
      board.classList.add('active-board');


      const projectTitle = generateProjectTitle(project);
      subBoard.insertBefore(projectTitle, subBoard.firstChild);
      generateProjectTodos(project);
    });
  }

  const displayNewProject = () => {
    const project = document.createElement('li');
    project.classList.add('project-item');
    project.textContent = name;
    projectClickListener(project);

    return project;
  }

  return { name, displayNewProject };
};

export default Project;