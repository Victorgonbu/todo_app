const storage = (() => {
    const PROJECTARR = [];
    const TODOLISTARR = [];
    
    function getProjectArr() {
        return PROJECTARR;
    }

    function getTodoListArr() {
        return TODOLISTARR;
    }
    function addProject(project) {
        PROJECTARR.push(project);
    }

    function addTodo(todo) {
        TODOLISTARR.push(todo);
    }

    return {
        getProjectArr, getTodoListArr, addProject, addTodo
    }
})();

export default storage;