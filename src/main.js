console.log(document.body.dataset);
import { addTask } from "./scripts/add-task.js";
import { taskFormToggle } from "./scripts/task-form-toggle.js";
import { Render } from "./scripts/render.js";

document.addEventListener("DOMContentLoaded", () => {
  /* ------------------------- about showing task form ------------------------ */
  taskFormToggle();
  /* -------------------------- about rendering tasks ------------------------- */
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  Render(tasks);
  const submitTaskButton = document.getElementById("submit-add-task");
  submitTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    addTask((newTask) => {
      tasks = [...tasks, newTask];
    });
    Render(tasks);
  });
});
