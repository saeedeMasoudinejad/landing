import {resetSelectedPriority} from "./select-priority.js";

export function editTask(onEditTask) {
    const taskElement = onEditTask
    const id = taskElement.id;


    const priorityEnum = {
        low: 'پایین', medium: 'متوسط', high: 'بالا'
    }
    const colors = {
        low: "bg-teal-100 text-teal-600",
        medium: "bg-amber-100 text-amber-400",
        high: "bg-rose-100 text-orange-600",
    };
    const priorities = {
        پایین: "low",
        متوسط: "medium",
        بالا: "high",
    };
    const editingTitle = taskElement.title;
    const editingDescription = taskElement.description;
    const editingPriority = priorityEnum[taskElement.priority];
    const color = colors[taskElement.priority];
    const editDefaultTaskPriorityClass = `flex gap-1 cursor-pointer rounded px-2 py-1 mr-4 text-sm w-fit`
    const editForm = document.createElement("form");
    editForm.id = `edit-task-form-${taskElement.id}`;
    editForm.className =
        "border-[1px] w-[100%] border-gray-300 rounded-lg mt-[45px] lg:mt-[20px] shadow-[0px_4px_58.5px_0px_rgba(0,0,0,0.06)] border-primary-light_2";
    editForm.innerHTML = `
        <div class=" mb-[24px] mr-[16px]">
            <input id="edit-title-input" type="text"
                class="outline-none w-full block  placeholder:text-primary-neutral-700 placeholder:text-[14px] text-primary-neutral-900 mt-[16px]"
                value="${editingTitle}"/>
            <textarea id="edit-description-input" placeholder="توضیحات"
              class="outline-none resize-none w-full block placeholder:text-primary-neutral-600 placeholder:text-[12px] text-primary-neutral-800 mt-[8px] mb-[16px]">${editingDescription}</textarea>
        </div>
        <!------------------ Tags Button ----------------->
        <div class="relative flex flex-col gap-3 items-start mr-4"> 
<!--        <div>      -->
            <button type="button" id="task-priority-button-${taskElement.id}" class="${editDefaultTaskPriorityClass} ${color}">
                <img class="w-5 y-5"  src="./src/assets/icons/close-circle.png" id="edit-task-img"/>
                <span>${editingPriority}</span>
            </button>

            <button type="button" id="edit-priority-button" class="hidden flex items-center border border-primary-oil-04 rounded px-2 py-1 mr-4 gap-1 transition-all duration-200">
                <img class="w-4 mr-1" src="src/assets/icons/tags_closed_icon.png" alt="default tag icon"/>
                <img class="w-4 mr-1 hidden" src="src/assets/icons/tags_open_icon.png" alt="hover tag icon"/>
                <span class="text-primary-neutral-600 text-xs ml-1">تگ‌ها</span>
            </button>
<!--        </div>         -->
            <div id="edit-priority-values"
             class="hidden flex w-[213px] mt-6 mr-4 p-2 gap-4 rounded-lg border border-primary-border-light shadow-sm">
            <!-- Low -->
            <button type="button" id="one"
                    class="px-2 py-0.5 text-xs rounded bg-green-100 text-green-700 hover:bg-green-200 focus:outline-none"
                    value="low">
                پایین
            </button>
            <div class="w-px bg-primary-border-light"></div>

            <!-- Medium -->
            <button type="button"
                    class="px-2 py-0.5 text-xs rounded bg-orange-100 text-orange-700 hover:bg-orange-200 focus:outline-none"
                    value="medium">
                متوسط
            </button>
            <div class="w-px bg-primary-border-light"></div>

            <!-- High -->
            <button type="button"
                    class="px-2 py-0.5 text-xs rounded bg-red-100 text-red-700 hover:bg-red-200 focus:outline-none"
                    value="high">
                بالا
            </button>
        </div>
        </div>
        <!---------------------------- Divider ---------------------------->
        <hr id='divider' class="border-t border-primary-gray mt-6 mb-4">
        <div class="flex justify-end items-center gap-[6px] my-4 ml-4">
            <!-- Clear / Cancel button -->
            <button type="button" id="clear-task-button" class="w-8 h-8 mx-1">
                <img src="./src/assets/icons/clear_icon.png" alt="clear form" class="w-full h-full object-contain"/>
            </button>

            <!-- Submit / Add Task button -->
            <button type="submit" id="edit-task-button"
                    class="border rounded-md px-4 py-1.5 text-primary-on-light text-xs bg-primary-light ml-4">
                ویرایش تسک 
            </button>
        </div>
            `;
    const taskElementContainer = document.getElementById(`task-container-${taskElement.id}`);
    const editButton = document.getElementById("edit-task-button");

    if (taskElementContainer) {
        taskElementContainer.insertAdjacentElement("afterend", editForm);
        const editTaskForm = document.getElementById(`edit-task-form-${taskElement.id}`);
        let showingPriority = null;
        if (editTaskForm) {
            const taskPriorityBtn = document.getElementById(`task-priority-button-${taskElement.id}`);
            const PriorityBtn = document.getElementById('edit-priority-button');
            const PriorityList = document.getElementById('edit-priority-values');
            console.log(PriorityList);
            taskPriorityBtn.addEventListener("click", (e) => {
               console.log(e.target.tagName.toLowerCase());
                if (e.target.tagName.toLowerCase() ==='img') {
                    console.log(e.target);
                    console.log("injjjjjja")
                    taskPriorityBtn.classList.add("hidden");
                    // taskPriorityBtn.removeAttribute(value);
                    console.log("PriorityBtn is:", PriorityBtn);
                    PriorityBtn.classList.remove("hidden");
                }
            })
            console.log(PriorityBtn);
            PriorityBtn.addEventListener("click", (e) => {
                console.log(e.target);
                PriorityList.classList.remove("hidden");
                PriorityBtn.querySelectorAll("img").forEach((img) => {
                    img.classList.toggle('hidden')
                })
            })
            PriorityList.querySelectorAll("button").forEach((button) => {
                button.addEventListener("click", () => {
                    showingPriority = button.textContent.trim();

                    const colors = {
                        پایین: {bg: "bg-green-100", text: "text-green-600"},
                        متوسط: {bg: "bg-yellow-100", text: "text-yellow-600"},
                        بالا: {bg: "bg-red-100", text: "text-red-600"},
                    };
                    const color = colors[showingPriority];
                    taskPriorityBtn.classList.add(color.bg, color.text)
                    taskPriorityBtn.querySelector("span").textContent = `${showingPriority}`;
                    // taskPriorityBtn.value = priorities[showingPriority];
                    PriorityList.classList.add("hidden");
                    PriorityBtn.classList.add("hidden");
                    taskPriorityBtn.classList.remove("hidden");
                });
            });

            editButton.addEventListener("click", (e) => {
                e.preventDefault();
                const newTitle =
                    editForm.querySelector("#edit-title-input").value;
                const newDescription = editForm.querySelector(
                    "#edit-description-input"
                ).value;
                const finalPriority = 'low';
                if (newTitle && newTitle.trim() && finalPriority) {
                    onEdit(id, {
                        title: newTitle,
                        description: newDescription,
                        priority:priorities[finalPriority],
                    });
                    editForm.remove();
                }
            });

        }


        // const editPriorityButton =
        //     document.getElementById("editPriorityButton");
        //
        // const editPriorityList =
        //     document.getElementById("editPriorityList");
        // editPriorityButton.addEventListener("click", () => {
        //     // editPriorityList.classList.toggle("hidden");
        //     editPriorityButton.querySelector("img").src =
        //         editPriorityList.classList.contains("hidden")
        //             ? "../src/assets/icons/tags_closed_icon.png"
        //             : "../src/assets/icons/tags_open_icon.png";
        // });
        //
        // editPriorityButton.addEventListener("click", (e) => {
        //     if (e.target.id === "editRemovePriority") {
        //         selectedPriority = null;
        //         editPriorityButton.innerHTML = `<img src="../assets/icons/tags_closed_icon.png""/> تگ‌ها`;
        //         editPriorityButton.className =
        //             "flex gap-1 cursor-pointer border border-gray-150 rounded px-2 py-1 text-sm text-gray-700 w-fit";
        //         editPriorityList.classList.add("hidden");
        //     }
        // });
        //
        // editPriorityList.querySelectorAll("li").forEach((li) => {
        //     li.addEventListener("click", () => {
        //         selectedPriority = li.textContent.trim();
        //         editPriorityList.classList.toggle("hidden");
        //         editPriorityButton.innerHTML = `<button id="editRemovePriority" class="ml-2 text-gray-400 hover:text-black hover:font-bold" >x</button>
        //         <span>${selectedPriority}</span>`;
        //         editPriorityButton.className = `flex gap-1 cursor-pointer rounded px-2 py-1 text-sm ${colors[selectedPriority]} w-fit`;
        //     });
        // });
        //
        // const editTaskButton = document.getElementById("edit-task-button");
        // const priorities = {
        //     پایین: "low",
        //     متوسط: "medium",
        //     بالا: "high",
        // };
        // const finalPriority = priorities[selectedPriority];
        // editTaskButton.addEventListener("click", (e) => {
        //     e.preventDefault();
        //     const newTitle =
        //         editForm.querySelector("#edit-title-input").value;
        //     const newDescription = editForm.querySelector(
        //         "#edit-description-input"
        //     ).value;
        //     const finalPriority = priorities[selectedPriority];
        //     if (newTitle && newTitle.trim() && finalPriority) {
        //         onEdit(id, {
        //             title: newTitle,
        //             description: newDescription,
        //             priority: finalPriority,
        //         });
        //         editForm.remove();
        //     }
        // });
    }
}