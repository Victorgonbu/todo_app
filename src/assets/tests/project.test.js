/* eslint no-underscore-dangle: 0 */
import Project from '../scripts/project';
import Todo from '../scripts/todo';

describe('Project', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  describe('allOrSpecific', () => {
    it('Return specific-project todos', () => {
      const todo = new Todo('name', 'description', 'dueDate', 'priority', 'notes', false, 'specific');
      todo.saveTodo();
      expect(Project.allOrSpecific('specific')).toHaveLength(1);
    });
    it('Return All todos', () => {
      const todo = new Todo('name', 'description', 'dueDate', 'priority', 'notes', false, 'project1');
      const todo2 = new Todo('name', 'description', 'dueDate', 'priority', 'notes', false, 'project2');
      todo.saveTodo();
      todo2.saveTodo();
      expect(Project.allOrSpecific("All To-Do's")).toHaveLength(2);
    });
  });

  describe('getProjectArr', () => {
    it('get project array from localStorage', () => {
      expect(Project.getProjectArr()).toHaveLength(0);
      const project = new Project('name');
      project.saveProject();
      expect(Project.getProjectArr()).toHaveLength(1);
    });
  });

  describe('saveProject', () => {
    it('save project in LocalStorage', () => {
      const project = new Project();
      project.saveProject();
      expect(localStorage);
      expect(JSON.parse(localStorage.__STORE__.projectarr)).toHaveLength(1);
    });
  });
});
