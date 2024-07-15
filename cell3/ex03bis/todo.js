$(document).ready(function() {
    const newTodoBtn = $('#newTodo');
    const ftList = $('#ft_list');

    loadTasks();

    newTodoBtn.click(function() {
        const taskText = prompt("Nueva tarea:");
        if (taskText !== null && taskText.trim() !== "") {
            addTask(taskText);
        }
    });

    function addTask(text) {
        const div = $('<div></div>').text(text).click(function() {
            if (confirm("¿Eliminar esta tarea?")) {
                $(this).remove();
                saveTasks();
            }
        });
        ftList.prepend(div);
        saveTasks();
    }

    function saveTasks() {
        const tasks = ftList.children().map(function() {
            return $(this).text();
        }).get();
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