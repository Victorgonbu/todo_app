import Project from '../scripts/project';
import Todo from '../scripts/todo';

describe('Project', () => {
  describe('allOrSpecific', () => {
    it('Return specific-project todos', () => {
      const projectListArr = () => {
        const todo = Todo('name', 'description', 'dueDate', 'priority', 'notes', false, 'specific');
        return [todo];
      };
      const project = Project('name', projectListArr);
      expect(project.allOrSpecific('specific')).toHaveLength(1);
    });
    it('Return All todos', () => {
      const projectListArr = () => {
        const todo = Todo('name', 'description', 'dueDate', 'priority', 'notes', false, 'project1');
        const todo2 = Todo('name', 'description', 'dueDate', 'priority', 'notes', false, 'project2');
        return [todo, todo2];
      };
      const project = Project('name', projectListArr);
      expect(project.allOrSpecific("All To-Do's")).toHaveLength(2);
    });
  });
});
