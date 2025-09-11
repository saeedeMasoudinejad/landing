
/* -------------------------------------------------------------------------- */
/*                  THIS JS CODE IS WRITTEN BY MEHDI ALIZADEH                 */
/* -------------------------------------------------------------------------- */

import { resetSelectedPriority } from "./select-priority.js";

export function taskFormToggle() {
    const addTaskBtn = document.getElementById("add-task-btn");
    const addTaskForm = document.getElementById("add-task-form");
    const priorityButton = document.getElementById("priority-button");
    const priorityList = document.getElementById("priority-values")
    const taskPriority = document.createElement("button");
    taskPriority.type = "button";
    taskPriority.id = "removePriority";
    taskPriority.className =`flex gap-1 rounded px-2 py-1 mr-4 text-sm`;
    taskPriority.innerHTML =`
                <img src="./src/assets/icons/close-circle.png" class="w-5 y-5"/>
                <span></span>
            `

    let showingPriority = null;

    addTaskBtn.addEventListener("click", () => {
        addTaskForm.classList.toggle("hidden");
        priorityList.classList.add("hidden");
    });

    priorityButton.addEventListener("click", () => {
        priorityList.classList.toggle("hidden");
        priorityButton.querySelectorAll("img").forEach((img) => {
            img.classList.toggle('hidden')
        })
    });

    priorityList.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
            showingPriority = button.textContent.trim();

            const colors = {
                پایین: { bg: "bg-green-100", text: "text-green-600" },
                متوسط: { bg: "bg-yellow-100", text: "text-yellow-600" },
                بالا: { bg: "bg-red-100", text: "text-red-600" },
            };
            const color = colors[showingPriority];
            taskPriority.classList.add( color.bg ,color.text)
            taskPriority.querySelector("span").textContent = `${showingPriority}`;
            priorityButton.parentNode.appendChild(taskPriority);
            priorityList.classList.add("hidden");
            priorityButton.classList.add("hidden");
        });
    });

    taskPriority.addEventListener("click", (e) => {
        showingPriority = null;
        resetSelectedPriority();
        priorityButton.classList.toggle("hidden");
        taskPriority.remove()
        priorityButton.querySelectorAll("img").forEach((img) => {
            img.classList.toggle('hidden')
        })
        priorityList.classList.add("hidden");

    });

    document.addEventListener("click", (e) => {
        if (e.target.id === "submit-add-task") {
            showingPriority = null;
            priorityButton.querySelectorAll("img").forEach((img) => {
                img.classList.toggle('hidden')
            })
            // priorityButton.innerHTML = `<img src="./src/assets/icons/tags-closed.png" alt="tags" /> تگ‌ها`;
            // priorityButton.className =
            //     "flex gap-1 border border-gray-150 rounded px-2 py-1 text-sm text-gray-700 w-fit";
            priorityList.classList.add("hidden");
        }
    });
}
