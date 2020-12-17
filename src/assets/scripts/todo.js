import storage from "./storage";

const Todo = (title, description, dueDate, priority, notes, checklist, project) => {

    function displayNewTodo() {
        const undoneContainer = document.querySelector('.undone');
        const doneContainer = document.querySelector('.done');
        
        const todoCard = document.createElement('div');
        if(this.priority == 'High') {
            todoCard.classList.add('high-priority');
        }else if(this.priority == 'Medium') {
            todoCard.classList.add('medium-priority');
        }else {
            todoCard.classList.add('low-priority');
        }

        if(this.checklist == false) {
            undoneContainer.appendChild(todoCard);
        }else {
            doneContainer.appendChild(todoCard);
        }
        todoCard.classList.add('todo-card');
        const todoTags = this.generateTodoTags();
        todoTags.forEach(tag => {
            todoCard.appendChild(tag);
        });

        
    }

    function capitalizeString(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    function removeCard(card) {
        const undoneTodos = document.querySelector('.undone');
        undoneTodos.removeChild(card);
    }

    function createTagsContainer(attribute, todo) {
        let elementTag = document.createElement('p');
        elementTag.classList.add(`${attribute}-field`);
        elementTag.classList.add('card-field');
       
        if(attribute == 'checklist'){
            if(todo.checklist == true) return elementTag;
            const checkbox = document.createElement('input');
            checkbox.classList.add('.checkbox-card');
            checkbox.setAttribute('type','checkbox');
            elementTag.appendChild(checkbox);

            checkbox.addEventListener('click', () => {
                todo.checklist = true;
                const card = checkbox.closest('.todo-card');
                removeCard(card);
                todo.displayNewTodo();
            });
            
        }else {
            elementTag.innerHTML = `<span class="${attribute}-span">${capitalizeString(attribute)}: </span> <span class='${attribute}-${todo.priority} priority'> ${todo[attribute]}</span>`;
        }
        return elementTag
    }
    function generateTodoTags() {
        let tags = ['title', 'description', 'dueDate', 'priority', 'notes', 'checklist']
        let generatedtags = [];
        tags.forEach(tag => {
            generatedtags.push(createTagsContainer(tag, this));
        })
        return generatedtags;

    }
    return {title, description, dueDate, priority, notes, checklist, project, generateTodoTags, displayNewTodo};
}

export default Todo;