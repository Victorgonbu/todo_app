import PubSub from 'pubsub-js';

const Todo = (title, description, dueDate, priority, notes, checklist, project) => {
  function getTodoContainerClass(todoStatus) {
    if (todoStatus === true) {
      return '.done';
    }
    return '.undone';
  }

  function displayNewTodo() {
    PubSub.publish('todo-info', {
      todo: this,
      status: getTodoContainerClass(this.checklist),
    });
  }

  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
    project,
    displayNewTodo,
    getTodoContainerClass,
  };
};


export default Todo;
