document.addEventListener('DOMContentLoaded', function() {
    const newTodoBtn = document.getElementById('newTodo');
    const ftList = document.getElementById('ft_list');

    loadTasks();

    newTodoBtn.addEventListener('click', function() {
        const taskText = prompt("Nueva tarea:");
        if (taskText !== null && taskText.trim() !== "") {
            addTask(taskText);
        }
    });

    function addTask(text) {
        const div = document.createElement('div');
        div.textContent = text;
        div.addEventListener('click', function() {
            if (confirm("¿Eliminar esta tarea?")) {
                ftList.removeChild(div);
                saveTasks();
            }
        });
        ftList.insertBefore(div, ftList.firstChild);
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        for (let i = 0; i < ftList.children.length; i++) {
            tasks.push(ftList.children[i].textContent);
        }
        const tasksStr = JSON.stringify(tasks);
        document.cookie = `tasks=${tasksStr}; expires=Tue, 31 Dec 2024 23:59:59 GMT; path=/`;
    }

    function loadTasks() {
        const cookies = document.cookie.split('; ');
        let tasksStr = "";
        cookies.forEach(cookie => {
            if (cookie.startsWith('tasks=')) {
                tasksStr = cookie.substring(6);
            }
        });
        const tasks = JSON.parse(tasksStr || '[]');
        tasks.forEach(taskText => addTask(taskText));
    }
});
