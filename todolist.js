document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    addTaskBtn: document.getElementById("add-task-btn"),
    addTaskForm: document.getElementById("add-task-form"),
    submitAddTaskBtn: document.getElementById("submit-add-task"),
    taskTitleInput: document.getElementById("task-title-input"),
    taskDescriptionTextarea: document.getElementById("task-description"),
    inProgressTasksList: document.getElementById("in-progress-tasks-list"),
    doneTasksList: document.getElementById("done-tasks-list"),
    priorityButtons: document.querySelectorAll("#priority-values button"),
  };

  let selectedPriority = null;

  elements.addTaskBtn.addEventListener("click", () => {
    elements.addTaskForm.classList.toggle("hidden");
  });

  elements.priorityButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      elements.priorityButtons.forEach((btn) =>
        btn.classList.remove("selected")
      );
      event.target.classList.add("selected");
      selectedPriority = event.target.value;
    });
  });

  const createTaskElement = (title, description, priority) => {
    const priorityData = {
      high: { color: "red-500", label: "بالا", bg: "bg-red-100" },
      medium: { color: "orange-500", label: "متوسط", bg: "bg-orange-100" },
      low: { color: "green-500", label: "پایین", bg: "bg-green-100" },
    }[priority];

    if (!priorityData) return null;

    const taskElement = document.createElement("section");
    taskElement.classList.add(
      "flex",
      "flex-col",
      "w-[328px]",
      "mt-[12px]",
      "h-auto",
      "border-2",
      "border-gray-100",
      "rounded-lg",
      "px-8",
      "py-5",
      "relative",
      "gap-3",
      "md:mt-[24px]",
      "md:w-[744px]",
      "md:h-auto"
    );

    taskElement.innerHTML = `
            <section class="w-[4px] h-full bg-${priorityData.color} absolute right-0 top-0"></section>
            <h1 class="px-3 text-[14px] font-semibold">${title}</h1>
            <h3 class="p-3 text-${priorityData.color} ${priorityData.bg} w-fit rounded-[10px] text-[10px] lg:absolute lg:left-[71%] lg:top-3">
                ${priorityData.label}
            </h3>
            <p class="px-3 text-[12px]">${description}</p>
            <input type="checkbox" name="task-done" class="absolute right-[0px] w-[50px] h-[20px] rounded-[50px] accent-${priorityData.color} transition delay-20 duration-20 ease-in-out" />
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute left-0 cursor-pointer menuhov">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
            
            <section class="flex gap-3 absolute top-[45px] left-0 hidden task-actions">
                <img src="./src/assets/icons/delete.svg" alt="delete" class="w-[20px] h-[20px] cursor-pointer delete-task" />
                <img src="./src/assets/icons/edite.svg" alt="edit" class="w-[20px] h-[20px] cursor-pointer edit-task" />
            </section>
        `;

    taskElement.querySelector(".menuhov").addEventListener("click", () => {
      taskElement.querySelector(".task-actions").classList.toggle("hidden");
    });

    taskElement.querySelector(".delete-task").addEventListener("click", () => {
      taskElement.remove();
    });

    taskElement
      .querySelector('input[type="checkbox"]')
      .addEventListener("change", (event) => {
        if (event.target.checked) {
          taskElement.classList.add("opacity-50", "line-through");
          elements.doneTasksList.appendChild(taskElement);
        } else {
          taskElement.classList.remove("opacity-50", "line-through");
          elements.inProgressTasksList.appendChild(taskElement);
        }
      });

    return taskElement;
  };

  elements.submitAddTaskBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const title = elements.taskTitleInput.value;
    const description = elements.taskDescriptionTextarea.value;

    if (title && selectedPriority) {
      const newTask = createTaskElement(title, description, selectedPriority);
      elements.inProgressTasksList.appendChild(newTask);

      elements.taskTitleInput.value = "";
      elements.taskDescriptionTextarea.value = "";
      elements.priorityButtons.forEach((btn) =>
        btn.classList.remove("selected")
      );
      selectedPriority = null;
      elements.addTaskForm.classList.add("hidden");
    } else {
      alert("لطفاً عنوان تسک و اولویت را انتخاب کنید.");
    }
  });
});
