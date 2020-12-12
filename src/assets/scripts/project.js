const Project = (name) => {

    const projectClickListener = (project) => {
        project.addEventListener('click', () => {
            const board = document.querySelector('.display-board');
            const subBoard = document.querySelector('.board');
            board.classList.add('active-board');
            clearProjectBoard(subBoard);
            let projectTitle = generateProjectTitle(project, subBoard);
            subBoard.appendChild(projectTitle);
            let asociatedTodos = generateProjectTodos(project);
            asociatedTodos.forEach(todo => subBoard.appendChild(todo));
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