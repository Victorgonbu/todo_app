const Project = (name, storage) => {
  function generateProjectTitle(project) {
    const header = document.createElement('h2');
    header.classList.add('project-title');
    header.textContent = project.textContent;
    return header;
  }

  function generateProjectTodos(project) {
    
    const todos = storage().filter(todo => todo.project == project.textContent);

    if (todos) {
      todos.forEach(todo => {
        todo.displayNewTodo();
      });
    }
  }

  function clearProjectBoard(todolist) {
    while (todolist.firstChild) {
      todolist.removeChild(todolist.firstChild);
    }
  }

  function generateContainer(tag, tagClass, textContent = '') {
    const container = document.createElement(tag);
    container.classList.add(tagClass);
    container.textContent = textContent;
    return container;
  }

  function projectClickListener(project) {
    project.addEventListener('click', () => {
      const board = document.querySelector('.display-board');
      const subBoard = document.querySelector('.todo-lists');

      clearProjectBoard(subBoard);

      const doneTodoContainer = generateContainer('div', 'done');
      const undoneTodoContainer = generateContainer('div', 'undone');

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

  function displayNewProject() {
    const project = document.createElement('li');
    project.classList.add('project-item');
    project.textContent = this.name;
    projectClickListener(project);

    return project;
  }

  return { name, displayNewProject };
};

export default Project;