import PubSub from 'pubsub-js';

const ProjectUI = (() => {
  const setProjectTitle = (projectName) => {
    const projecth2 = document.querySelector('.project-title');
    projecth2.textContent = projectName;
  };

  const clearBoard = (todolist) => {
    while (todolist.childElementCount > 1) {
      todolist.removeChild(todolist.lastChild);
    }
  };
  const generateContainer = (tag, tagClass, textContent = '') => {
    const container = document.createElement(tag);
    tagClass.forEach(tClass => container.classList.add(tClass));
    container.textContent = textContent;
    return container;
  };

  const displayProjectTodos = (todos) => {
    if (todos) {
      todos.forEach(todo => { todo.displayNewTodo(); });
    }
  };

  const projectClickListener = (project, projectTodos, undoneContainer, doneContainer) => {
    project.addEventListener('click', () => {
      clearBoard(undoneContainer);
      clearBoard(doneContainer);
      setProjectTitle(project.textContent);
      displayProjectTodos(projectTodos(project.textContent));
    });
  };


  function setUp() {
    const form = document.querySelector('.project-form');
    const PROJECTLIST = document.querySelector('.list');

    const board = document.querySelector('.display-board');
    const subBoard = document.querySelector('.todo-lists');


    const doneTodoContainer = generateContainer('div', ['done', 'todos-container']);

    const undoneTodoContainer = generateContainer('div', ['undone', 'todos-container']);

    const doneTitle = generateContainer('h3', ['done-title'], 'Done');
    doneTodoContainer.insertBefore(doneTitle, doneTodoContainer.firstChild);

    const undoneTitle = generateContainer('h3', ['undone-title'], 'To Do');
    undoneTodoContainer.insertBefore(undoneTitle, undoneTodoContainer.firstChild);

    subBoard.appendChild(doneTodoContainer);
    subBoard.insertBefore(undoneTodoContainer, subBoard.firstChild);
    board.classList.add('active-board');


    PubSub.subscribe('Project-info', (tag, project) => {
      const projectTag = document.createElement('li');
      projectTag.classList.add('project-item');
      projectTag.textContent = project.name;
      projectClickListener(projectTag, project.todos, undoneTodoContainer, doneTodoContainer);
      PROJECTLIST.appendChild(projectTag);
      form.reset();
    });
  }

  return {
    setUp,
  };
})();

export default ProjectUI;
