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

  describe('savedProjects', () => {
    it('get all saved projects from localStorage and display them', () => {
        const project = new Project('name');
        project.saveProject();
        
        expect(JSON.parse(localStorage.__STORE__['projectarr'])).toHaveLength(1);
    });
  });
});
