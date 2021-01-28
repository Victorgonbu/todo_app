import PubSub from 'pubsub-js';

class Todo {
  static todoListArr() {
    return JSON.parse(localStorage.getItem('todolistarr')) || [];
  }

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

  static getTodoListArr() {
    let todoList = this.todoListArr();
    todoList = Todo.toTodo(todoList);
    return todoList;
  }

  static getIndex(todoList, todo) {
    for (let i = 0; i < todoList.length; i += 1) {
      if (JSON.stringify(todoList[i]) === JSON.stringify(todo)) {
        return i;
      }
    }
    return -1;
  }

  static updateTodo(todo, updatedTodo) {
    const todoList = this.todoListArr();
    const index = this.getIndex(todoList, todo);
    todoList[index] = updatedTodo;
    localStorage.setItem('todolistarr', JSON.stringify(todoList));
  }

  static deleteTodo(todo) {
    const todoList = Todo.todoListArr();
    const index = this.getIndex(todoList, todo);

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
