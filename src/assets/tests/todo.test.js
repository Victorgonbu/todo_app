/* eslint no-underscore-dangle: 0 */
import Todo from '../scripts/todo';

describe('Todo', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.getItem.mockClear();
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

  describe('toTodo', () => {
    it('takes an array of objects and returns a Todo object array', () => {
      let object = {
        title: 'title',
        description: 'description',
        dueDate: 'dueDate',
        priority: 'priority',
        notes: 'notes',
        checklist: false,
        project: 'project'
      }
      let objectArr = [];
      objectArr.push(object);
      objectArr = Todo.toTodo(objectArr);
      expect(objectArr[0] instanceof Todo).toBe(true);
    });
  });

  describe('todoListArr', () => {
    it('returns todo list object array from localStorage', () => {
      const todo = new Todo('title', 'description', '25-11-2021', 'medium', 'notes', true, 'any');
      todo.saveTodo()
      expect(Todo.todoListArr()).toHaveLength(1);
      expect(localStorage.getItem).toHaveBeenLastCalledWith('todolistarr');
    });
  });

  describe('getIndex', () => {
      describe("get an object's index in the passed in array", () => {
          const todo = new Todo('title', 'description', '25-11-2021', 'medium', 'notes', true, 'any');
          let array = [];
          array.push(todo);
       
        it('return positive index if exist in array', () => {
          expect(todo.getIndex(array)).toBe(0);
        });
        it('return -1 if does not exits in array', () => {
          array.pop()
          expect(todo.getIndex(array)).toBe(-1);
        });
      });
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