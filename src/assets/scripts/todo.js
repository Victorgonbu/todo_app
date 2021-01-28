import PubSub from 'pubsub-js';
class Todo  {
  

  static todoListArr() {
    return JSON.parse(localStorage.getItem('todolistarr')) || []
  };

  constructor(title, description, dueDate, priority, notes, checklist, project){
    this.ID = this.generateID();
    this.title = title;
    this.description = description;
    this.dueDate =  dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.project = project;
    this.todoID;
  }

  saveTodo() {
    let todoList = Todo.getTodoListArr();
    todoList.push(this);
    localStorage.setItem('todolistarr', JSON.stringify(todoList));
  };

  static toTodo(todoList) {
    if (todoList.length > 0) {
      return todoList.map(todo => new Todo(todo.title, todo.description,
        todo.dueDate, todo.priority, todo.notes, todo.checklist, todo.project));
    }
    return todoList;
  };

  static getTodoListArr() {
    let todoList = this.todoListArr();
    todoList = Todo.toTodo(todoList);
    return todoList;
  };

  static updateTodo(todo) {
    const todoList  = Todo.getTodoListArr();
    const index = todoList.map(_todo => _todo.ID).indexOf(todo.ID);
    todoList[index] = todo;
    localStorage.setItem('todolistarr', JSON.stringify(todoList));
  };

  static deleteTodo(todo) {
    const todoList = Todo.getTodoListArr();
    const index = todoList.map(_todo => _todo.ID).indexOf(todo.ID);
    todoList.splice(index, 1);
    localStorage.setItem('todolistarr', JSON.stringify(todoList));
  };

  generateID() {
    if(this.todoID >= 0){
      this.todoID += 1;
    }else {
      this.todoID = 0;
    }
  }

  getTodoContainerClass(todoStatus) {
    if (todoStatus === true) {
      return '.done';
    }
    return '.undone';
  }

  displayNewTodo() {
  
    PubSub.publish('todo-info', {
      todo: this,
      status: this.getTodoContainerClass(this.checklist),
    });
  }
};


export default Todo;
