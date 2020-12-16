import storage from './storage.js';

const Project = (name, TODOLIST) => {

    function generateProjectTitle (project) {
        const header = document.createElement('h2');
        header.classList.add('project-title');
        header.textContent = project.textContent;
        return header;
    }
    
    function generateProjectTodos(project, doneContainer, undoneContainer) {
        let todos = TODOLIST.filter(todo => todo.project == project.textContent);

        if(todos) {
            todos.forEach(todo => {
            
                const container = document.createElement('div');
                container.classList.add('todo-card');
                if(todo.priority == 'High') {
                    container.classList.add('high-priority');
                }else if(todo.priority == 'Medium') {
                    container.classList.add('medium-priority');
                }else {
                    container.classList.add('low-priority');
                }
                if(todo.checklist == false) {
                    undoneContainer.appendChild(container);
                }else {
                    doneContainer.appendChild(container);
                }
                let todoAttributes = todo.generateTodoTags();
                todoAttributes.forEach(attribute => {
                    container.appendChild(attribute);
                });
                
            });
            
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
            clearProjectBoard(subBoard);
            const doneTodo = document.createElement('div');
            doneTodo.classList.add('done');
            const undoneTodo = document.createElement('div');
            undoneTodo.classList.add('undone');
            
            subBoard.appendChild(undoneTodo);
            subBoard.insertBefore(doneTodo, subBoard.firstChild);
            board.classList.add('active-board');
           

            let projectTitle = generateProjectTitle(project, subBoard);
            subBoard.insertBefore(projectTitle, subBoard.firstChild);
            generateProjectTodos(project, doneTodo, undoneTodo);
        
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