

const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;
const modeIcon = document.getElementById("mode-icon");

// بررسی حالت فعلی (برای حفظ حالت در بارگذاری مجدد)
if (
  localStorage.getItem("theme") === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  htmlElement.classList.add("dark");
  modeIcon.src = "src/assets/icons/light_icon.png";
} else {
  htmlElement.classList.remove("dark");
  modeIcon.src = "src/assets/icons/dark_icon.png";
}

themeToggle.addEventListener("click", () => {
  // تغییر کلاس dark
  htmlElement.classList.toggle("dark");

  // تغییر آیکون بر اساس حالت جدید
  if (htmlElement.classList.contains("dark")) {
    modeIcon.src = "src/assets/icons/light_icon.png";
    localStorage.setItem("theme", "dark");
  } else {
    modeIcon.src = "src/assets/icons/dark_icon.png";
    localStorage.setItem("theme", "light");
  }
});

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
