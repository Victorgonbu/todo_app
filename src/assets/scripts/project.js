// import ProjectUI from './projectUI';
import PubSub from 'pubsub-js';

const Project = (name, todoListArr) => {
  const filterList = (projectName) => todoListArr().filter(todo => todo.project === projectName);

  const allOrSpecific = (projectName) => {
    if (projectName === "All To-Do's") {
      return todoListArr();
    }
    return filterList(projectName);
  };


  const newProject = () => {
    const projectInfo = 'Project-info';

    PubSub.publish(projectInfo, {
      name,
      todos: allOrSpecific,
    });
  };


  return { name, newProject, allOrSpecific };
};


export default Project;
