import {resetSelectedPriority} from "./select-priority.js";

export function taskFormToggle() {
    const addTaskBtn = document.getElementById("add-task-btn");
    const addTaskForm = document.getElementById("add-task-form");
    const priorityButton = document.getElementById("priority-button");
    const priorityList = document.getElementById("priority-values")
    const taskPriority = document.createElement("button");
    const clearNewTaskBtn = document.getElementById("clear-task-button");
    taskPriority.type = "button";
    taskPriority.id = "removePriority";
    const defaultTaskPriorityClass = `flex gap-1 rounded px-2 py-1 mr-4 text-sm`
    taskPriority.className = defaultTaskPriorityClass;
    taskPriority.innerHTML = `
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
                پایین: {bg: "bg-green-100", text: "text-green-600"},
                متوسط: {bg: "bg-yellow-100", text: "text-yellow-600"},
                بالا: {bg: "bg-red-100", text: "text-red-600"},
            };
            const color = colors[showingPriority];
            console.log(taskPriority)
            taskPriority.classList.add(color.bg, color.text)
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
        taskPriority.className = defaultTaskPriorityClass;
        console.log(taskPriority);
        priorityButton.querySelectorAll("img").forEach((img) => {
            img.classList.toggle('hidden')
        })
        priorityList.classList.add("hidden");

    });

    clearNewTaskBtn.addEventListener("click", (e) => {
        // console.log(e.target.id);
        const taskTitleInput = document.getElementById("task-title-input");
        const taskDescription = document.getElementById("task-description");
        taskTitleInput.value = "";
        taskDescription.value = "";
        priorityButton.classList.remove("hidden");
        const [firstImg, secondImg] = priorityButton.querySelectorAll("img")
        firstImg.classList.remove("hidden");
        secondImg.classList.add("hidden");
        resetSelectedPriority();
        taskPriority.remove()
        taskPriority.className = defaultTaskPriorityClass;
        priorityList.classList.add("hidden");
        resetSelectedPriority()

    })

}


// export function resetTaskFrom(taskTitle, taskDescription) {
//     const priorityButton = document.getElementById("priority-button");
//     const priorityList = document.getElementById("priority-values");
//     const taskPriorityButton = document.getElementById("removePriority");
//     if (taskTitle.value) taskTitle.value = "";
//     if (taskDescription.value) taskDescription.value = "";
//     priorityList.classList.add("hidden");
//     priorityButton.classList.remove("hidden");
//     const tagImages = priorityButton.querySelectorAll("img")
//     tagImages.firstElementChild.classList.remove("hidden");
//     tagImages.lastElementChild.classList.add("hidden");
//     console.log(taskPriority);
// taskPriority.remove();
// taskPriorityButton?.remove();

// }
