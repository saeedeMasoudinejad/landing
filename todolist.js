function showtask() {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navigation-bar");
  const overlay = document.querySelector(".overlay");
  const header = document.querySelector(".header");
  const close = document.querySelector(".close");
  const users = document.querySelector(".profile-users");
  const taskbar = document.querySelector("#taskbar-nav");
  const menuhov1 = document.querySelector(".menuhov");
  const op = document.querySelector(".openin");
  const menuhov2 = document.querySelector(".menuhov1");
  const op1 = document.querySelector(".openin1");
  const menuhov3 = document.querySelector(".menuhov2");
  const op2 = document.querySelector(".openin2");

  hamburger.addEventListener("click", () => {
    nav.style.display = "flex";
    overlay.style.display = "block";
    header.style.display = "none";
    nav.style.margin = "0";
    nav.style.animation = "menu";
    users.style.display = "none";
    taskbar.style.display = "none";
  });
  close.addEventListener("click", () => {
    nav.style.display = "none";
    overlay.style.display = "none";
    header.style.display = "flex";
    users.style.display = "flex";
    taskbar.style.display = "flex";
    nav.style.transition = "all 0.3s easy";
  });
  menuhov1.addEventListener("click", (e) => {
    e.stopPropagation();
    op.style.display = "flex";
  });
  window.addEventListener("click", () => {
    op.style.display = "none"; // هرجا کلیک شد، ببند
  });
  menuhov2.addEventListener("click", (e) => {
    e.stopPropagation();
    op1.style.display = "flex";
  });
  window.addEventListener("click", () => {
    op1.style.display = "none"; // هرجا کلیک شد، ببند
  });
  menuhov3.addEventListener("click", (e) => {
    e.stopPropagation();
    op2.style.display = "flex";
  });
  window.addEventListener("click", () => {
    op2.style.display = "none"; // هرجا کلیک شد، ببند
  });
}
showtask();

function deletelist() {
  const deleteIcons = document.querySelectorAll(
    ".openin img[src*='delete'], .openin1 img[src*='delete'], .openin2 img[src*='delete']"
  );

  function deleteTask(e) {
    const task = e.target.closest(
      "section.taskbar-nav1, section.flex.flex-col"
    );
    if (task) task.remove();
  }

  deleteIcons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteTask(e);
    });
  });
}
deletelist();

function updatelist() {
  document.addEventListener("DOMContentLoaded", () => {
    const taskbarNav = document.getElementById("taskbar-nav");
    const taskDownSection = document.querySelector(".task-down > section");

    document.body.addEventListener("change", (event) => {
      const checkbox = event.target;
      if (checkbox.type === "checkbox") {
        const taskItem = checkbox.closest("section");
        if (!taskItem) return;

        if (checkbox.checked) {
          taskItem.classList.add("completed-task");
          if (taskDownSection) {
            taskDownSection.appendChild(taskItem);
          }
        } else {
          taskItem.classList.remove("completed-task");
          if (taskbarNav) {
            taskbarNav.appendChild(taskItem);
          }
        }
      }
    });
  });
}
updatelist();
