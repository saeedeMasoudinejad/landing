
/* -------------------------------------------------------------------------- */
/*                  THIS JS CODE IS WRITTEN BY MEHDI ALIZADEH                 */
/* -------------------------------------------------------------------------- */
import { getSelectedPriority } from "./select-priority.js";
const submitTaskButton = document.getElementById("submit-add-task");
const taskTitleInput = document.getElementById("task-title-input");
const taskDescription = document.getElementById("task-description");
const priorityListContainer = document.getElementById("priority-values");



export function isSubmitValid() {
    function checkFormValidity() {
        const title = taskTitleInput.value.trim();
        const description = taskDescription.value;
        const priority = getSelectedPriority();
        submitTaskButton.disabled = !(title && description && priority);
        if (submitTaskButton.disabled) {
            submitTaskButton.className =
                "bg-gray-400 text-white rounded px-4 py-2 text-sm cursor-not-allowed opacity-60";
        } else {
            submitTaskButton.className =
                "bg-blue-500 text-white rounded px-4 py-2 text-sm";
        }
    }

    taskTitleInput.addEventListener("input", checkFormValidity);
    priorityListContainer.addEventListener("click", checkFormValidity);
    document.addEventListener("click", (e) => {
        if (e.target.id === "removePriority") {
            checkFormValidity();
        }
    });
}

