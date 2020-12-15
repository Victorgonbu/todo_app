import storage from './storage.js';

const Project = (name, TODOLIST) => {

    function generateProjectTitle (project) {
        const header = document.createElement('h2');
        header.textContent = project.textContent;
        return header;
    }
    
    function generateProjectTodos(project) {
        let todos = TODOLIST.filter(todo => todo.project == project.textContent);
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

    function clearProjectBoard(board) {
        while(board.firstChild) {
            board.removeChild(board.lastChild);
        }
    }

    function projectClickListener(project) {
        project.addEventListener('click', () => {
            const board = document.querySelector('.display-board');
            const subBoard = document.querySelector('.board');
            board.classList.add('active-board');
            clearProjectBoard(subBoard);
            let projectTitle = generateProjectTitle(project, subBoard);
            subBoard.appendChild(projectTitle);
            let asociatedTodos = generateProjectTodos(project, this);
            asociatedTodos.forEach(todo => subBoard.appendChild(todo));
        });
    }
    
    function displayNewProject() {
        storage.addProject(this);
        const project = document.createElement('li');
        project.classList.add('project-item');
        project.textContent = this.name; 
        projectClickListener(project);
       
        return project;
    }
    
    return {name, displayNewProject};
}

export default Project;