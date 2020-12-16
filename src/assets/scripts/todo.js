import storage from "./storage";

const Todo = (title, description, dueDate, priority, notes, checklist, project) => {
    function displayNewTodo() {
        const undoneTodo = document.querySelector('.undone');
        const doneTodo = document.querySelector('.done');
        const todoCard = document.createElement('div');
        if(this.priority == 'High') {
            todoCard.classList.add('high-priority');
        }else if(this.priority == 'Medium') {
            todoCard.classList.add('medium-priority');
        }else {
            todoCard.classList.add('low-priority');
        }
        if(this.checklist == false) {
            undoneTodo.appendChild(todoCard);
        }else {
            doneTodo.appendChild(todoCard);
        }
        todoCard.classList.add('todo-card');
        const todoTags = this.generateTodoTags();
        todoTags.forEach(tag => {
            todoCard.appendChild(tag);
        });
    }

    function createTagContainer(attribute, todo) {
        const elementTag = document.createElement('p');
        elementTag.innerHTML = `<span>${attribute}: </span> ${todo[attribute]}`;
        return elementTag
    }
    function generateTodoTags() {
        let tags = ['title', 'description', 'dueDate', 'priority', 'notes', 'checklist']
        let generatedtags = [];
        tags.forEach(tag => {
            generatedtags.push(createTagContainer(tag, this));
        })
        return generatedtags;

    }
    return {title, description, dueDate, priority, notes, checklist, project, generateTodoTags, displayNewTodo};
}

export default Todo;