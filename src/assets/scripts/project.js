//import ProjectUI from './projectUI';
import PubSub from 'pubsub-js';

const Project = (name, todoListArr) => {

  const filterTodoList = (projectName) => {
    return todoListArr().filter(todo => todo.project === projectName);
  }

  const allOrSpecific = (projectName) => {

    if(projectName === "All To-Do's") {
       return todoListArr() 
    }else { 
      return  filterTodoList(projectName);
    }
    
  }
 

  const newProject = () => {
    const projectInfo = 'Project-info';

    PubSub.publish(projectInfo, {
      name: name,
      todos: allOrSpecific
    });

  };


  return {name, newProject, allOrSpecific };
};



export default Project;
 
