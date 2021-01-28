
import Project from '../scripts/project';
import Todo from '../scripts/todo';

describe('storage', () => {
    
    beforeEach(() => {
        localStorage.clear();
    
    });

    describe('getProjectArr', () => {
        it('return an array containing Project objects', () => {
            const project = Project('name', () => {});
            localStorage.setItem('projectarr', JSON.stringify([project]));
            expect(storage.getProjectArr()).toHaveLength(1);
        });
        it('return an empty array if there are no projects saved in localStorage', () => {
            const project = Project('name', () => {});
            expect(storage.getProjectArr()).toStrictEqual([]);
        });
    });

    describe('updateTodo', () => {
        it('update passed in todo in localStorage', () => {
            const todo = Todo('manolo', 'description', 'dueDate', 'priority', 'notes', false, 'specific');
            storage.addTodo(todo);
            todo.checklist = true;
            storage.updateTodo(todo);
            
            expect(localStorage.__STORE__['todolistarr']).toEqual(JSON.stringify([updatedTodo]));
        });
    });

    describe('deleteTodo', () => {
        it('delete todo passed in arguments', () => {
            const newTodo = Todo('wilintonq', 'description', 'dueDate', 'priority', 'notes', true, 'specific');
            storage.addTodo(newTodo);
            storage.deleteTodo(newTodo);
   
            
            expect(localStorage.__STORE__['todolistarr']).toBe('[]');
        });
    });
});