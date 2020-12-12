const Todo = (title, description, dueDate, priority, notes, checklist, project) => {
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
    return {title, description, dueDate, priority, notes, checklist, project, generateTodoTags};
}

export default Todo;