/* -------------------------------------------------------------------------- */
/*                  THIS JS CODE IS WRITTEN BY MEHDI ALIZADEH                 */
/* -------------------------------------------------------------------------- */

import { resetSelectedPriority } from "./select-priority.js";

export function taskFormToggle() {
    const addTaskBtn = document.getElementById("add-task-btn");
    const addTaskForm = document.getElementById("add-task-form");
    const priorityButton = document.getElementById("priorityButton");
    const priorityList = document.getElementById("priorityList");

    let showingPriority = null;

    addTaskBtn.addEventListener("click", () => {
        addTaskForm.classList.toggle("hidden");
        priorityList.classList.add("hidden");
        priorityButton.querySelector("img").src =
            "./src/assets/icons/tags-closed.png";
    });

    priorityButton.addEventListener("click", () => {
        priorityList.classList.toggle("hidden");
        priorityButton.querySelector("img").src =
            priorityList.classList.contains("hidden")
                ? "./src/assets/icons/tags-closed.png"
                : "./src/assets/icons/tags-open.png";
    });

    priorityList.querySelectorAll("li").forEach((li) => {
        li.addEventListener("click", () => {
            showingPriority = li.textContent.trim();
            priorityList.classList.add("hidden");

            const colors = {
                پایین: { bg: "bg-green-100", text: "text-green-600" },
                متوسط: { bg: "bg-yellow-100", text: "text-yellow-600" },
                بالا: { bg: "bg-red-100", text: "text-red-600" },
            };
            const color = colors[showingPriority];

            priorityButton.innerHTML = `
            <button id="removePriority" class="ml-2 text-gray-400 hover:text-black hover:font-bold" >x</button>
            <span>${showingPriority}</span>
            `;
            priorityButton.className = `flex gap-1 rounded px-2 py-1 text-sm ${color.bg} ${color.text} w-fit`;
        });
    });

    priorityButton.addEventListener("click", (e) => {
        if (e.target.id === "removePriority") {
            showingPriority = null;
            resetSelectedPriority();
            priorityButton.innerHTML = `<img src="./src/assets/icons/tags-open.png" alt="tags" /> تگ‌ها`;
            priorityButton.className =
                "flex gap-1 border border-gray-150 rounded px-2 py-1 text-sm text-gray-700 w-fit";
            priorityList.classList.remove("hidden");
        }
    });

    document.addEventListener("click", (e) => {
        if (e.target.id === "submit-add-task") {
            showingPriority = null;
            priorityButton.innerHTML = `<img src="./src/assets/icons/tags-closed.png" alt="tags" /> تگ‌ها`;
            priorityButton.className =
                "flex gap-1 border border-gray-150 rounded px-2 py-1 text-sm text-gray-700 w-fit";
            priorityList.classList.add("hidden");
        }
    });
}
