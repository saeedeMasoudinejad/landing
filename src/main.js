// const toggleMode = document.getElementById("toggle-mode");
// const modeIcon = document.getElementById("mode-icon");
//
// toggleMode.addEventListener("click", () => {
//     document.documentElement.classList.toggle("dark");
//     if (document.documentElement.classList.contains("dark")) {
//         modeIcon.src = "src/assets/icons/light_icon.png";
//     } else {
//         modeIcon.src = "src/assets/icons/dark_icon.png";
//     }
// }   < --! Todo:merge with task manage project ---!>

// import {attachTaskMenuListeners, toggleTaskList} from "./scripts/task-list-toggle.js";
// import {
//     attachTaskMenuListeners,
//     toggleTaskList,
// } from "./scripts/task-list-toggle.js";

console.log(document.body.dataset);
import { addTask } from "./scripts/add-task.js";
import { taskFormToggle } from "./scripts/task-form-toggle.js";
import { Render } from "./scripts/render.js";
import { editTask } from "./scripts/edit-task.js";
import { deleteTask } from "./scripts/delete-task.js";

document.addEventListener("DOMContentLoaded", () => {
    /* ------------------------- about showing task form ------------------------ */
    taskFormToggle();
    /* -------------------------- about rendering tasks ------------------------- */
    let tasks = [];
    Render(tasks);
    const submitTaskButton = document.getElementById("submit-add-task");
    submitTaskButton.addEventListener("click", (e) => {
        e.preventDefault();
        addTask((newTask) => {
            tasks = [...tasks, newTask];
        });
        Render(tasks);
    });
    editTask((id, updatedTask) => {
        console.log("old tasks:", tasks);
        console.log("task to be updated:", id, updatedTask);
        tasks = tasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task
        );
        console.log("updated tasks:", tasks);
        Render(tasks);
    });
    deleteTask((id) => {
        tasks = tasks.filter((task) => task.id !== id);
        Render(tasks);
    });
});
