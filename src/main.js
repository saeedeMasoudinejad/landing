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



console.log(document.body.dataset)
import { addTask } from "./scripts/add-task.js";
import { taskFormToggle } from "./scripts/task-form-toggle.js";

document.addEventListener("DOMContentLoaded", () => {
    /* ------------------------- about showing task form ------------------------ */
    taskFormToggle();
    /* -------------------------- about rendering tasks ------------------------- */
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    //renderTasks(tasks);
    const submitTaskButton = document.getElementById("submit-add-task");
    submitTaskButton.addEventListener("click", (e) => {
        e.preventDefault();
        addTask((newTask) => {
            tasks = [...tasks, newTask];
        });
        //renderTasks(tasks);
    });
});