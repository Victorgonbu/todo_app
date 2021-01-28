import PubSub from 'pubsub-js';

class Todo {
  constructor(title, description, dueDate, priority, notes, checklist, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.project = project;
  }

  saveTodo() {
    const todoList = Todo.getTodoListArr();
    todoList.push(this);
    localStorage.setItem('todolistarr', JSON.stringify(todoList));
  }

  static toTodo(todoList) {
    if (todoList.length > 0) {
      return todoList.map(todo => new Todo(todo.title, todo.description,
        todo.dueDate, todo.priority, todo.notes, todo.checklist, todo.project));
    }
    return todoList;
  }

  static todoListArr() {
    return JSON.parse(localStorage.getItem('todolistarr')) || [];
  }

  static getTodoListArr() {
    let todoList = this.todoListArr();
    todoList = Todo.toTodo(todoList);
    return todoList;
  }

  getIndex(todoList) {
    for (let i = 0; i < todoList.length; i += 1) {
      if (JSON.stringify(todoList[i]) === JSON.stringify(this)) {
        return i;
      }
    }
    return -1;
  }

  updateTodo(updatedTodo) {
    const todoList = Todo.todoListArr();
    const index = this.getIndex(todoList);
    todoList[index] = updatedTodo;
    localStorage.setItem('todolistarr', JSON.stringify(todoList));
  }

  deleteTodo() {
    const todoList = Todo.todoListArr();
    const index = this.getIndex(todoList);

    todoList.splice(index, 1);
    localStorage.setItem('todolistarr', JSON.stringify(todoList));
  }

  getTodoContainerName() {
    if (this.checklist === true) {
      return '.done';
    }
    return '.undone';
  }

  displayNewTodo() {
    PubSub.publish('todo-info', {
      todo: this,
      status: this.getTodoContainerName(),
    });
  }
}


export default Todo;
