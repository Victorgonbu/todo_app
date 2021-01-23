const Project = (name, todoListArr) => {

  const filterTodoList = (projectName) => {
    return todoListArr().filter(todo => todo.project === projectName);
  }

  const allOrSpecific = (projectName) => {

    let list = ((projectName === "All To-Do's") ? todoListArr() : filterTodoList(projectName));
    return list;
  }
 

  const newProject = () => {
    const projectInfo = 'Project-info';
    let project;
    PubSub.publish(projectInfo, {
      name: name,
      todos: allOrSpecific(name)
    });

  };


  return { name, newProject, allOrSpecific };
};



export default Project;
 
