/* eslint no-underscore-dangle: 0 */
import Todo from '../scripts/todo';

describe('Todo', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  describe('getTodoContainerName', () => {
    it("get '.undone' class container if todo is not done yet", () => {
      const todo = new Todo('title', 'description', '25-11-2021', 'medium', 'notes', false, 'any');
      expect(todo.getTodoContainerName()).toBe('.undone');
    });
    it("get '.done' class container if todo is mark as done", () => {
      const todo = new Todo('title', 'description', '25-11-2021', 'medium', 'notes', true, 'any');
      expect(todo.getTodoContainerName()).toBe('.done');
    });
  });

  describe('saveTodo', () => {
    const todo = new Todo('title', 'description', '25-11-2021', 'medium', 'notes', false, 'any');
    todo.saveTodo();
    expect(JSON.parse(localStorage.__STORE__.todolistarr)).toHaveLength(1);
  });

  describe('getTodoListArr', () => {
    it('get todolist array from localStorage and parse it to Todo object', () => {
      expect(Todo.getTodoListArr()).toHaveLength(0);
      const todo = new Todo('title', 'description', '25-11-2021', 'medium', 'notes', false, 'any');
      todo.saveTodo();
      expect(Todo.getTodoListArr()).toHaveLength(1);
    });
  });

  describe('updateTodo', () => {
    it('update todo in localStorage with todo passed in parameters', () => {
      const todo = new Todo('update title', 'description', '25-11-2021', 'medium', 'notes', false, 'any');
      todo.saveTodo();
      const updatedTodo = { ...todo, checklist: true };
      todo.updateTodo(updatedTodo);
      expect(Todo.todoListArr()).toContainEqual(updatedTodo);
    });
  });

  describe('deleteTodo', () => {
    it('deletes todo from localStorage', () => {
      const todo = new Todo('update title', 'description', '25-11-2021', 'medium', 'notes', false, 'any');
      todo.saveTodo();
      expect(Todo.getTodoListArr()).toHaveLength(1);
      todo.deleteTodo();
      expect(Todo.getTodoListArr()).toHaveLength(0);
    });
  });
});