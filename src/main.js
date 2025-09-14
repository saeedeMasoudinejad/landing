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






import {attachTaskMenuListeners, toggleTaskList} from "./scripts/task-list-toggle.js";
import {addTask} from "./scripts/add-task.js";
import {taskFormToggle} from "./scripts/task-form-toggle.js";
import {Render} from "./scripts/render.js";


document.addEventListener("DOMContentLoaded", () => {
    /* ------------------------- about showing task form ------------------------ */
    taskFormToggle();
    /* -------------------------- about rendering tasks ------------------------- */
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    ;
    Render(tasks)
    const submitTaskButton = document.getElementById("submit-add-task");
    submitTaskButton.addEventListener("click", (e) => {
        e.preventDefault();
        addTask((newTask) => {
            tasks = [...tasks, newTask];
        });
        Render(tasks);
    });
});