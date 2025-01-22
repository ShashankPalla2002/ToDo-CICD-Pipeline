document.getElementById('addTask').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="this.parentNode.remove()">Delete</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});