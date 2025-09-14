import { editTask } from "./edit-task.js";

const priorityEnum = {
    low: "پایین",
    medium: "متوسط",
    high: "بالا",
};
const priorityStyle = {
    low: {
        bg: "bg-green-100",
        text: "text-green-700",
        bgLabel: "bg-green-700",
    },
    medium: {
        bg: "bg-orange-100",
        text: "text-orange-500",
        bgLabel: "bg-orange-500",
    },
    high: { bg: "bg-red-100", text: "text-red-500", bgLabel: "bg-red-500" },
};

function generateHtmlTask(task) {
    console.log(priorityStyle[task.priority]);
    console.log(task.priority);
    const taskHtml = `
        <div class="task border border-primary-oil-04 rounded p-4 relative flex items-start justify-between w-full  mx-auto mt-4" id="task-container-${
            task.id
        }"
        data-id="${task.id}">
            <div class="absolute top-0 right-0  w-1 rounded-tl rounded-bl h-[76px] my-4 lg:my-2  item-center ${
                priorityStyle[task.priority].bgLabel
            }"></div>
            <!-- Right section: Task info + checkbox -->
            <div class="flex items-start gap-2">
                <!-- Checkbox -->
                
                <input type="checkbox"  class="mt-1 w-4 h-4 accent-blue-500 check-box " ${
                    task.isDone ? "checked" : ""
                }>

                <!-- Task title + description -->
                <div>
                    <div id="task-title-1" class="flex flex-col lg:flex-row items-start  lg:gap-4" >
                        <h3 class="text-4 font-bold text-primary-oil-10">${
                            task.title
                        }</h3>
                        <span class="text-[10px] font-semibold ${
                            priorityStyle[task.priority].bg
                        } ${
        priorityStyle[task.priority].text
    } rounded-[2px] px-2 py-0.5 mb-4 mt-1 lg:mb-[110x]">${
        priorityEnum[task.priority]
    }</span>
                    </div>
                    <p class="text-[12px] text-primary-neutral-700">${
                        task.description
                    }</p>
                </div>

            </div>
            <!-- Left section: Priority badge and menu icon -->
            <div class="flex items-start gap-2  relative" id="task-menu-${
                task.id
            }">
                <!-- Menu icon -->
                <button>
                    <img src="/src/assets/icons/edit_and_del_icon.png" alt="menu icon" class="w-4 h-4 object-contain"/>
                </button>
                <section class="flex gap-3 absolute top-[45px] left-0  border border-gray-300" id="optionList">
                <img
                    src="./src/assets/icons/edite.svg"
                    alt="edit"
                    class="w-[20px] h-[20px] cursor-pointer edit-btn"
                    id="edit"
                  />
                  <img
                    src="./src/assets/icons/delete.svg"
                    alt="delete"
                    class="w-[20px] h-[20px] cursor-pointer delete-btn"
                    id="delete"
                  />
                  
            </section>
            </div> 
        </div>
    `;

    return taskHtml;
}

export function Render(tasks) {
    // console.log(tasks);
    let isDoneTaskList = [];
    let inProgressTaskList = [];
    const inProgressTaskContainer = document.getElementById(
        "in-progress-tasks-list"
    );
    const isDoneTaskContainer = document.getElementById("is-done-tasks-list");
    tasks.map((task) => {
        if (task.isDone) isDoneTaskList.push(task);
        else inProgressTaskList.push(task);
    });
    if (inProgressTaskList.length !== 0) {
        document.getElementById(
            "add-task-form"
        ).nextElementSibling.style.display = "none";
    }
    inProgressTaskContainer.innerHTML = inProgressTaskList
        .sort((a, b) => a.id - b.id)
        .map((task) => generateHtmlTask(task))
        .join("");
    inProgressTaskList.forEach((task) => {
        const taskMenu = inProgressTaskContainer.querySelector(
            `#task-menu-${task.id}`
        );
        const openinMenu = taskMenu.querySelector("#optionList");
        taskMenu.firstElementChild.addEventListener("click", (e) => {
            e.stopPropagation();
            openinMenu.classList.remove("hidden");
        });
        // openinMenu.addEventListener("click", (e) => {
        //     e.stopPropagation();
        //     if (e.target) openinMenu.classList.add("hidden");
        // });
        // openinMenu.addEventListener("click", (e) => {
        //     e.stopPropagation();
        //     if (e.target.id === "edit") editTask(task);
        // });

        document.addEventListener("click", () => {
            openinMenu.classList.add("hidden");
        });
    });

    isDoneTaskContainer.innerHTML = isDoneTaskList
        .sort((a, b) => a.id - a.id)
        .map((task) => generateHtmlTask(task))
        .join("");
    // console.log(isDoneTaskList);
    const doneInfoText = document.querySelector("#completed-task-info p");
    if (doneInfoText) {
        doneInfoText.textContent =
            isDoneTaskList.length > 0
                ? `${isDoneTaskList.length} تسک انجام شده است.`
                : "تسکی برای امروز نداری!";
    }

    const inProgressInfoText = document.querySelector(
        "#in-progress-task-info p"
    );
    if (inProgressInfoText) {
        inProgressInfoText.textContent =
            inProgressTaskList.length > 0
                ? `${inProgressTaskList.length} تسک برای انجام داری.`
                : "تسکی برای امروز نداری!";
    }
}
