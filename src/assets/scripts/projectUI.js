const ProjectUI = (() => {

    const generateProjectTitle = (projectName) => {
        const header = document.createElement('h2');
        header.classList.add('project-title');
        header.textContent = projectName;
        return header;
      };

    const clearProjectBoard = (todolist) => {
        while (todolist.firstChild) {
          todolist.removeChild(todolist.firstChild);
        }
      };
    const generateContainer = (tag, tagClass, textContent = '') => {
    
        const container = document.createElement(tag);
        tagClass.forEach(tClass =>  container.classList.add(tClass) );
        container.textContent = textContent;
        return container;
      };

      const displayProjectTodos = (todos) => {
        if (todos) {
          todos.forEach(todo => { todo.displayNewTodo() });
        }
      };

      const projectClickListener = (project, projectTodos) => {
          console.log(project);
        project.addEventListener('click', () => {
            const projectTitle = generateProjectTitle(project.textContent);
            subBoard.insertBefore(projectTitle, subBoard.firstChild);
            displayProjectTodos(projectTodos);
        });
      };
    
    function draw() {
        const projectTag = document.createElement('li');
        const board = document.querySelector('.display-board');
        const subBoard = document.querySelector('.todo-lists');
        clearProjectBoard(subBoard);

        const doneTodoContainer = generateContainer('div', ['done', 'todos-container']);
      
        const undoneTodoContainer = generateContainer('div', ['undone', 'todos-container']);
        
        const doneTitle = generateContainer('h3', ['done-title'], 'Done');
        doneTodoContainer.insertBefore(doneTitle, doneTodoContainer.firstChild);
  
        const undoneTitle = generateContainer('h3', ['undone-title'], 'To Do');
        undoneTodoContainer.insertBefore(undoneTitle, undoneTodoContainer.firstChild);
  
        subBoard.appendChild(doneTodoContainer);
        subBoard.insertBefore(undoneTodoContainer, subBoard.firstChild);
        board.classList.add('active-board');


        PubSub.subscribe('projectName', (tag, project) => {
            projectTag.classList.add('project-item');
            projectTag.textContent = project.name;
            projectClickListener(projectTag, project.todos);
    
        });

     

      
        

    }

    return {
        draw
    }
})();

ProjectUI.draw();