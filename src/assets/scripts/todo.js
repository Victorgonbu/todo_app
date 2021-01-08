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

  function selectCardFields(todoCard) {
    let fields = ['title', 'description', 'dueDate', 'notes'];
    const cardFields = [];
    fields.forEach(field => {
      let cardField = todoCard.querySelector(`.${field}-card`);
      cardFields.push(cardField);
    });
    return cardFields;
  }

  function displayNewTodo() {
    let todoCard = document.createElement('div');

    todoCard = addPriorityClass(this, todoCard);

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerHTML = "<span>&times;</span>";

    const editButton =  document.createElement('span');
    editButton.innerHTML = "<i class='fas fa-edit edit-button'></i>";


    removeButton.addEventListener('click', () => {
      const card = removeButton.closest('.todo-card');
      removeCard(card);
      deleteTodo(this);
    });

    todoCard.appendChild(removeButton);
      
    editButton.addEventListener('click', () => {
      
      const todoCard = editButton.closest('.todo-card');

      let editTodo = []

      editTodo = selectCardFields(todoCard)
      
    
      editTodo.forEach(editField => {
        const fieldContent = editField.textContent;
        const classes = editField.classList;
        
      
        if (editField === editTodo[2]) {
          editField.innerHTML = `<input type='date' placeholder='${fieldContent}' class='edit-input ${classes[1]}-edit'>`;
        }else {
          editField.innerHTML = `<input type='text' placeholder='${fieldContent}' class='edit-input ${classes[1]}-edit'>`;
        }
       
        
      });

      todoCard.removeChild(todoCard.lastChild);

      const saveButton = document.createElement('button');
      saveButton.classList.add('save-button');
      saveButton.innerHTML = "<span>Save</span>";

      saveButton.addEventListener('click', () => {
        const editedTitle = todoCard.querySelector('.title-card-edit').value;
        const editedDescription = todoCard.querySelector('.description-card-edit').value;
        const editedDuedate = todoCard.querySelector('.dueDate-card-edit').value;
        const editedNotes = todoCard.querySelector('.notes-card-edit').value;

        this.title = editedTitle;
        this.description = editedDescription;
        this.dueDate = editedDuedate;
        this.notes = editedNotes;
        updateTodo(this);

        todoCard.removeChild(todoCard.lastChild);

        const checkbox = createTagsContainer('checklist', this);
        checkbox.classList.add('checkbox-card');

        todoCard.appendChild(checkbox);

        editTodo[0].textContent = this.title;
        editTodo[1].textContent = this.description;
        editTodo[2].textContent = this.dueDate;
        editTodo[3].textContent = this.notes;

      });

      todoCard.appendChild(saveButton);
    });

    todoCard.appendChild(editButton);

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
      todo.checklist = true;
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
      checkbox.classList.add('checkbox-card');
      checkbox.setAttribute('type', 'checkbox');
      checkbox = checkboxEventListener(checkbox, todo);
      elementTag.appendChild(checkbox);
      
    } else {
      elementTag.innerHTML = `<span class="${attribute}-span">${capitalizeString(attribute)}: </span> <span class='${attribute}-${todo.priority} ${attribute}-card'> ${todo[attribute]}</span>`;
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