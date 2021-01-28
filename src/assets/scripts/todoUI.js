import PubSub from 'pubsub-js';
import Todo from './todo';

const TodoUI = (() => {
  function addPriorityClass(todo, todoCard) {
    todoCard.classList.add(`${todo.priority}-priority`);
    return todoCard;
  }

  function removeCard(card, todoStatus) {
    const container = document.querySelector(todoStatus);

    container.removeChild(card);
  }

  function removeButtonListener(todo, removeButton, todoStatus) {
    removeButton.addEventListener('click', () => {
      const card = removeButton.closest('.todo-card');
      removeCard(card, todoStatus);

      todo.deleteTodo();
    });
  }

  function fieldsToEdit(todoCard) {
    const fields = ['title', 'description', 'dueDate', 'notes'];
    const cardFields = [];
    fields.forEach(field => {
      const cardField = todoCard.querySelector(`.${field}-card`);
      cardFields.push(cardField);
    });
    return cardFields;
  }

  function makeEditable(editFields) {
    editFields.forEach(editField => {
      const fieldContent = editField.textContent;
      const classes = editField.classList;

      const dateField = editFields[2];

      if (editField === dateField) {
        editField.innerHTML = `<input type='date' value='${fieldContent}' class='edit-input ${classes[1]}-edit'>`;
      } else {
        editField.innerHTML = `<input type='text' value='${fieldContent}' class='edit-input ${classes[1]}-edit'>`;
      }
    });
  }

  function checkboxListener(checkbox, todo, todoStatus) {
    checkbox.addEventListener('click', () => {
      const oldTodo = { ...todo };
      todo.checklist = true;

      todo.updateTodo(oldTodo);
      // updateTodo(todo); possible error
      const card = checkbox.closest('.todo-card');
      removeCard(card, todoStatus);

      todo.displayNewTodo();
    });
    return checkbox;
  }

  function createCheckbox(todo, todoStatus) {
    let checkbox = document.createElement('input');
    checkbox.classList.add('checkbox-card');
    checkbox.setAttribute('type', 'checkbox');
    checkbox = checkboxListener(checkbox, todo, todoStatus);
    return checkbox;
  }


  function createTagsContainer(attribute, todo, todoStatus) {
    const elementTag = document.createElement('p');
    elementTag.classList.add(`${attribute}-field`);
    elementTag.classList.add('card-field');

    if (attribute === 'checklist') {
      if (todo.checklist === true) return elementTag;
      const checkbox = createCheckbox(todo, todoStatus);
      elementTag.appendChild(checkbox);
    } else {
      elementTag.innerHTML = `<span class="${attribute}-span">${attribute}: </span> <span class='${attribute}-${todo.priority} ${attribute}-card'> ${todo[attribute]}</span>`;
    }
    return elementTag;
  }

  function saveButtonListener(saveButton, todoCard, todo, editFields, todoStatus) {
    saveButton.addEventListener('click', () => {
      const editedTitle = todoCard.querySelector('.title-card-edit').value;
      const editedDescription = todoCard.querySelector('.description-card-edit').value;
      const editedDuedate = todoCard.querySelector('.dueDate-card-edit').value;
      const editedNotes = todoCard.querySelector('.notes-card-edit').value;
      const oldTodo = { ...todo };

      todo.title = editedTitle;
      todo.description = editedDescription;
      todo.dueDate = editedDuedate;
      todo.notes = editedNotes;

      todo.updateTodo(oldTodo);
      // updateTodo(todo); possible error

      todoCard.removeChild(todoCard.lastChild);

      const checkbox = createTagsContainer('checklist', todo, todoStatus);
      checkbox.classList.add('checkbox-card');

      todoCard.appendChild(checkbox);

      editFields[0].textContent = todo.title;
      editFields[1].textContent = todo.description;
      editFields[2].textContent = todo.dueDate;
      editFields[3].textContent = todo.notes;
    });
  }

  function createSaveButton(todo, todoCard, editFields, todoStatus) {
    const saveButton = document.createElement('button');
    saveButton.classList.add('save-button');
    saveButton.innerHTML = '<span>Save</span>';
    // const todoCard = editButton.closest('.todo-card');
    saveButtonListener(saveButton, todoCard, todo, editFields, todoStatus);

    return saveButton;
  }

  function editButtonListener(todo, editButton, todoCard, todoStatus) {
    editButton.addEventListener('click', () => {
      let editFields = [];

      editFields = fieldsToEdit(todoCard);


      makeEditable(editFields);

      todoCard.removeChild(todoCard.lastChild);

      const saveButton = createSaveButton(todo, todoCard, editFields, todoStatus);

      todoCard.appendChild(saveButton);
    });
  }

  function generateTodoTags(todo, todoStatus) {
    const tags = ['title', 'description', 'dueDate', 'priority', 'notes', 'checklist'];
    const generatedtags = [];
    tags.forEach(tag => {
      generatedtags.push(createTagsContainer(tag, todo, todoStatus));
    });

    return generatedtags;
  }


  function appendFields(todoCard, todo, todoStatus) {
    const todoTags = generateTodoTags(todo, todoStatus);
    todoTags.forEach(tag => {
      todoCard.appendChild(tag);
    });
  }


  function appendNewTodo(todoCard, statusContainer) {
    const container = document.querySelector(statusContainer);
    container.appendChild(todoCard);
  }

  function setUp() {
    PubSub.subscribe('todo-info', (tag, data) => {
      let todoCard = document.createElement('div');
      todoCard.classList.add('todo-card');
      const removeButton = document.createElement('button');
      removeButton.classList.add('remove-button');
      removeButton.innerHTML = '<span>&times;</span>';
      const editButton = document.createElement('span');
      editButton.innerHTML = "<i class='fas fa-edit edit-button'></i>";
      todoCard = addPriorityClass(data.todo, todoCard);
      removeButtonListener(data.todo, removeButton, data.status);
      todoCard.appendChild(removeButton);
      editButtonListener(data.todo, editButton, todoCard, data.status);
      todoCard.appendChild(editButton);
      appendFields(todoCard, data.todo, data.status);

      appendNewTodo(todoCard, data.status);
    });
  }

  return {
    setUp,
  };
})();

export default TodoUI;