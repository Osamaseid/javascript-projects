
const taskInput = document.getElementById('task-input') as HTMLInputElement;
const addBtn = document.getElementById('add-btn') as HTMLButtonElement;
const taskList = document.getElementById('task-list') as HTMLUListElement;

// Event Listeners

addBtn.addEventListener('click', () => {
  if (taskInput.value !== '') {
    const taskText = taskInput.value;
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox" class="task-checkbox">
      <span class="task-text">${taskText}</span>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(listItem);
    taskInput.value = '';
  }
});

taskList.addEventListener('click', (event) => {
  const targetElement = event.target as HTMLElement;

  if (targetElement.classList.contains('delete-btn')) {
    const listItem = targetElement.parentElement as HTMLLIElement;
    taskList.removeChild(listItem);
  }

  if (targetElement.classList.contains('edit-btn')) {
    const listItem = targetElement.parentElement as HTMLLIElement;
    const taskText = listItem.querySelector('.task-text') as HTMLElement;
    const editText = prompt('Edit Task:', taskText.textContent);
    if (editText) {
      taskText.textContent = editText;
    }
  }

  if (targetElement.classList.contains('task-checkbox')) {
    const listItem = targetElement.parentElement as HTMLLIElement;
    const taskText = listItem.querySelector('.task-text') as HTMLElement;
    const checkbox = targetElement as HTMLInputElement;
    taskText.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
  }
});