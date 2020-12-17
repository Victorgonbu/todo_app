import Project from './project.js';
const storage = (() => {
    let PROJECTARR = [];
    let TODOLISTARR = [];

    
    function getProjectArr() {
        if(localStorage.getItem('projectarr')) {
            PROJECTARR = localStorage.getItem('projectarr');
            PROJECTARR = JSON.parse(PROJECTARR);
        }
        console.log(PROJECTARR);
        return PROJECTARR;
        
    }

    function getTodoListArr() {
        if(localStorage.getItem('todolistarr')) {
            TODOLISTARR = localStorage.getItem('todolistarr');
            TODOLISTARR = JSON.parse(TODOLISTARR);
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
        
        if(getProjectArr().length > 0) {
            getProjectArr().forEach(project => {
                console.log(project);
                project = Project(project.name) 
                projectList.appendChild(project.displayNewProject());
            });
        }
    }

    return {
        getProjectArr, getTodoListArr, addProject, addTodo, savedProjects
    }
})();

export default storage;