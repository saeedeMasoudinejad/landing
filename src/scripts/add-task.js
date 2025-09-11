import {
    getSelectedPriority,
    resetSelectedPriority,
} from "./select-priority.js";
import {isSubmitValid} from "./validation-submit.js";
// import {resetTaskFrom} from "./task-form-toggle.js";
//How can you make the submit button react to the state of each input field at runtime?
const addTaskForm = document.getElementById("add-task-form");

isSubmitValid();

export function addTask(onCreate) {
    const taskTitleInput = document.getElementById("task-title-input");
    const taskTitle = taskTitleInput.value;
    //prettier-ignore
    const taskDescriptionInput = document.getElementById("task-description");
    const taskDescription = taskDescriptionInput.value;
    const priorityButton = document.getElementById("priority-button");
    const priorityList = document.getElementById("priority-values")
    const taskPriorityButton = document.getElementById("removePriority")
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
        // resetTaskFrom(taskTitleInput, taskDescriptionInput);

        priorityList.classList.add("hidden");
        priorityButton.classList.toggle("hidden");
        priorityButton.querySelectorAll("img").forEach((img) => {
            img.classList.toggle('hidden')
        })
        taskPriorityButton.remove();
        addTaskForm.classList.toggle("hidden");
    } else {
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
        resetSelectedPriority();
    }
}