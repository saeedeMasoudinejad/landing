//////// show task function creat by mohammad ariani asl ///////

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
  const threepoint = document.querySelector(".threepint");
  const updating = document.querySelector(".updating");
  const threepoint1 = document.querySelector(".threepint1");
  const updating1 = document.querySelector(".updating1");
  const threepoint2 = document.querySelector(".threepint2");
  const updating2 = document.querySelector(".updating2");
  const container = document.querySelector("#container");
  hamburger.addEventListener("click", () => {
    nav.style.display = "flex";
    overlay.style.display = "block";
    header.style.display = "none";
    users.style.display = "none";
    container.style.display = "none";
    nav.style.position = "fixed";
  });
  close.addEventListener("click", () => {
    nav.style.display = "none";
    overlay.style.display = "none";
    header.style.display = "flex";
    users.style.display = "flex";
    taskbar.style.display = "flex";
    container.style.display = "flex";
  });
  overlay.addEventListener("click", () => {
    nav.style.display = "none";
    nav.style.display = "none";
    overlay.style.display = "none";
    header.style.display = "flex";
    users.style.display = "flex";
    taskbar.style.display = "flex";
    container.style.display = "flex";
  });
  menuhov1.addEventListener("click", (e) => {
    e.stopPropagation();
    op.style.display = "flex";
  });
  window.addEventListener("click", () => {
    op.style.display = "none";
  });
  menuhov2.addEventListener("click", (e) => {
    e.stopPropagation();
    op1.style.display = "flex";
  });
  window.addEventListener("click", () => {
    op1.style.display = "none";
  });
  menuhov3.addEventListener("click", (e) => {
    e.stopPropagation();
    op2.style.display = "flex";
  });
  window.addEventListener("click", () => {
    op2.style.display = "none";
  });
  threepoint.addEventListener("click", (e) => {
    e.stopPropagation();
    updating.style.display = "flex";
  });
  window.addEventListener("click", () => {
    updating.style.display = "none";
  });
  threepoint1.addEventListener("click", (e) => {
    e.stopPropagation();
    updating1.style.display = "flex";
  });
  window.addEventListener("click", () => {
    updating1.style.display = "none";
  });
  threepoint2.addEventListener("click", (e) => {
    e.stopPropagation();
    updating2.style.display = "flex";
  });
  window.addEventListener("click", () => {
    updating2.style.display = "none";
  });
}

showtask();

//////// End  show task function creat by mohammad ariani asl ///////

///////////////////////////////////////////

//////// Delete task function creat by zeinab  hosseini ///////

function deletelist1() {
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
deletelist1();
function deletelist() {
  const deleteIcons = document.querySelectorAll(
    ".updating img[src*='delete'], .updating1 img[src*='delete'], .updating2 img[src*='delete']"
  );

  function deleteTask(e) {
    const task = e.target.closest("section#task-down, section.flex.flex-col");
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

//////// End Delete task function creat by zeinab  hosseini ///////

////////////////////////////////////////////////////

//////// update task function creat by zeinab  hosseini ///////

function updatelist() {
  const taskbarNav = document.getElementById("taskbar-nav");
  const taskDown = document.getElementById("task-down");

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const taskItem = event.target.closest("section");

      if (event.target.checked) {
        taskDown.appendChild(taskItem);
      } else {
        taskbarNav.appendChild(taskItem);
      }
    });
  });
}
updatelist();
//////// End update task function creat by zeinab  hosseini ///////
