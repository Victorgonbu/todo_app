import Project from '../scripts/project';
import Todo from '../scripts/todo';

describe('Project', () => {
    describe('allOrSpecific', () => {
        it('Return either all or specific todos', () => {
            
            const deleteTodo = (todo) => {

            }
            const updateTodo = (todo) => {

            }

            const projectListArr = () => {
                const todo = Todo('name', 'description', 'dueDate', 'priority', 'notes', false, 'any', updateTodo, deleteTodo );
                return [todo]
            };
            const project = Project('name', projectListArr);
            expect(project.allOrSpecific('any')).toHaveLength(1);
        });
    });
});


