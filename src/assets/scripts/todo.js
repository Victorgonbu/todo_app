const Todo = (title, description, dueDate, priority, notes, checklist, project, updateTodo, deleteTodo) => {
  function addPriorityClass(todo, todoCard) {
    switch (todo.priority) {
      case 'High':
        todoCard.classList.add('high-priority');
        break;
      case 'Medium':
        todoCard.classList.add('medium-priority');
        break;
      default:
        todoCard.classList.add('low-priority');
    }

    return todoCard;
  }

  function appendNewTodo(todo, todoCard) {
    const undoneContainer = document.querySelector('.undone');
    const doneContainer = document.querySelector('.done');

    if (todo.checklist === false) {
      undoneContainer.appendChild(todoCard);
    } else {
      doneContainer.appendChild(todoCard);
    }
  }

  function displayNewTodo() {
    let todoCard = document.createElement('div');

    todoCard = addPriorityClass(this, todoCard);

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerHTML = "<span>&times;</span>";

    removeButton.addEventListener('click', () => {
      const card = removeButton.closest('.todo-card');
      removeCard(card);
      deleteTodo(this);
    });
    
    todoCard.appendChild(removeButton);

       

    todoCard.classList.add('todo-card');
    const todoTags = this.generateTodoTags();
    todoTags.forEach(tag => {
      todoCard.appendChild(tag);
    });

    appendNewTodo(this, todoCard);
  }

  function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function removeCard(card) {
    const todoContainers = document.querySelectorAll('.todos-container');
    if (todoContainers[0].contains(card)) {
      todoContainers[0].removeChild(card);
    }else {
      todoContainers[1].removeChild(card);
    }
  }

  function checkboxEventListener(checkbox, todo) {
    checkbox.addEventListener('click', () => {
      updateTodo(todo);
      const card = checkbox.closest('.todo-card');
      removeCard(card);
      todo.displayNewTodo();
    });
    return checkbox;
  }

  function createTagsContainer(attribute, todo) {
    const elementTag = document.createElement('p');
    elementTag.classList.add(`${attribute}-field`);
    elementTag.classList.add('card-field');
  
   
    if (attribute === 'checklist') {
      if (todo.checklist === true) return elementTag;
      let checkbox = document.createElement('input');
      checkbox.classList.add('.checkbox-card');
      checkbox.setAttribute('type', 'checkbox');
      checkbox = checkboxEventListener(checkbox, todo);
      elementTag.appendChild(checkbox);
    } else {
      elementTag.innerHTML = `<span class="${attribute}-span">${capitalizeString(attribute)}: </span> <span class='${attribute}-${todo.priority} priority'> ${todo[attribute]}</span>`;
    }
    return elementTag;
  }
  function generateTodoTags() {
    const tags = ['title', 'description', 'dueDate', 'priority', 'notes', 'checklist'];
    const generatedtags = [];
    tags.forEach(tag => {
      generatedtags.push(createTagsContainer(tag, this));
    });
   
    return generatedtags;
  }
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
    project,
    generateTodoTags,
    displayNewTodo,
  };
};

export default Todo;