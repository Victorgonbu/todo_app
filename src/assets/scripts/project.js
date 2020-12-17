import storage from './storage.js';

const Project = (name) => {
    const TODOLIST = storage.getTodoListArr();

    function generateProjectTitle (project) {
        const header = document.createElement('h2');
        header.classList.add('project-title');
        header.textContent = project.textContent;
        return header;
    }
    
    function generateProjectTodos(project) {
        let todos = TODOLIST.filter(todo => todo.project == project.textContent);
        console.log(todos); 
        if(todos) {
            todos.forEach(todo => {
                console.log(todo);
                todo.displayNewTodo();
            });
            
        }
    }

    function clearProjectBoard(todolist) {
        while(todolist.firstChild) {
            todolist.removeChild(todolist.firstChild);
        }
    }

    function projectClickListener(project) {
        project.addEventListener('click', () => {
            
            const board = document.querySelector('.display-board');
            const subBoard = document.querySelector('.todo-lists');
            clearProjectBoard(subBoard);    
            const doneTodoContainer = document.createElement('div');
            doneTodoContainer.classList.add('done');
            const undoneTodoContainer = document.createElement('div');
            undoneTodoContainer.classList.add('undone');

            const doneTitle = document.createElement('h3');
            doneTitle.textContent = 'Done';
            doneTodoContainer.insertBefore(doneTitle, doneTodoContainer.firstChild);
            
            const undoneTitle = document.createElement('h3');
            undoneTitle.textContent = 'To Do';
            undoneTodoContainer.insertBefore(undoneTitle, undoneTodoContainer.firstChild);
            
            subBoard.appendChild(doneTodoContainer);
            subBoard.insertBefore(undoneTodoContainer, subBoard.firstChild);
            board.classList.add('active-board');
           

            let projectTitle = generateProjectTitle(project);
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
    
    return {name, displayNewProject};
}

export default Project;