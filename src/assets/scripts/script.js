const projectsArr = [];

const addNewProjectBtn = document.querySelector('.new-project');
const addNewProjectInput = document.querySelector('.new-project-input');
let projectsContainer = document.querySelector('.projects');


addNewProjectBtn.addEventListener('click', () => {
    addNewProjectBtn.classList.toggle('active-btn');
    addNewProjectInput.classList.toggle('active-input');
    if(addNewProjectBtn.textContent == 'Add project') {
        addNewProjectBtn.textContent = 'New project';
    } else {
        addNewProjectBtn.textContent = 'Add project';
    }
    if(addNewProjectInput.value) {
        projectsArr.push(addNewProjectInput.value);
        const form = projectsContainer.querySelector('form');
        form.reset();
    }
    display();
});

const display = () => {
    console.log(projectsArr);
};