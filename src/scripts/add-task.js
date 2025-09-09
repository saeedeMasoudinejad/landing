/* -------------------------------------------------------------------------- */
/*                  THIS JS CODE IS WRITTEN BY MEHDI ALIZADEH                 */
/* -------------------------------------------------------------------------- */
import {
    getSelectedPriority,
    resetSelectedPriority,
} from "./select-priority.js";
import { isSubmitValid } from "./validation-submit.js";

const addTaskForm = document.getElementById("add-task-form");

isSubmitValid();

export function addTask(onCreate) {
    const taskTitleInput = document.getElementById("task-title-input");
    const taskTitle = taskTitleInput.value;
    //prettier-ignore
    const taskDescriptionInput = document.getElementById("task-description-input");
    const taskDescription = taskDescriptionInput.value;
    const taskPriority = getSelectedPriority();

    if (taskTitle && taskTitle.trim() && taskPriority) {
        const newTask = {
            id: Date.now().toString(),
            title: taskTitle,
            description: taskDescription,
            priority: taskPriority,
            isDone: false,
            isEditing: false,
        };
        onCreate(newTask);
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
        resetSelectedPriority();
        addTaskForm.classList.toggle("hidden");
    } else {
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
        resetSelectedPriority();
    }
}
