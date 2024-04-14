
var taskInput = document.getElementById('task-input');
var addBtn = document.getElementById('add-btn');
var taskList = document.getElementById('task-list');
// Event Listeners
addBtn.addEventListener('click', function () {
    if (taskInput.value !== '') {
        var taskText = taskInput.value;
        var listItem = document.createElement('li');
        listItem.innerHTML = "\n      <input type=\"checkbox\" class=\"task-checkbox\">\n      <span class=\"task-text\">".concat(taskText, "</span>\n      <button class=\"edit-btn\">Edit</button>\n      <button class=\"delete-btn\">Delete</button>\n    ");
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});
taskList.addEventListener('click', function (event) {
    var targetElement = event.target;
    if (targetElement.classList.contains('delete-btn')) {
        var listItem = targetElement.parentElement;
        taskList.removeChild(listItem);
    }
    if (targetElement.classList.contains('edit-btn')) {
        var listItem = targetElement.parentElement;
        var taskText = listItem.querySelector('.task-text');
        var editText = prompt('Edit Task:', taskText.textContent);
        if (editText) {
            taskText.textContent = editText;
        }
    }
    if (targetElement.classList.contains('task-checkbox')) {
        var listItem = targetElement.parentElement;
        var taskText = listItem.querySelector('.task-text');
        var checkbox = targetElement;
        taskText.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    }
});
