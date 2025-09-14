export function editTask(onEditTask) {
    // document.addEventListener("click", (event) => {
    //     console.log("clicked");
    //     console.log(onEdit.getAttribute("id"));
    //
    //     const editBtn = event.target.closest("#task-menu-button");
    //     console.log("editBtn", editBtn);
    //     if (editBtn) {
    //         const taskElement = editBtn.closest(".task");
    //         const id = taskElement.dataset.id;
    //
    //         const editingTitle = taskElement.querySelector("h3").innerText;
    //         const editingDescription = taskElement.querySelector("p").innerText;
    //         const editingPriority = taskElement.querySelector("span").innerText;
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
    const editingTitle = taskElement.title;
    const editingDescription = taskElement.description;
    const editingPriority = priorityEnum[taskElement.priority];
    const color = colors[taskElement.priority];

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
            <button id="task-priority-button-${taskElement.id}" class="flex gap-1 cursor-pointer rounded px-2 py-1 mr-4 text-sm ${color} w-fit">
                <img class="w-5 y-5"  src="./src/assets/icons/close-circle.png" id="edit-task-img"/>
                <span>${editingPriority}</span>
            </button>
<!--                        <div class="flex justify-start hidden">-->
                <button type="button" id="priority-button"
                class="flex items-center border border-primary-oil-04 rounded px-2 py-1 mr-4 gap-1 transition-all duration-200">
                    <img class="w-4 mr-1" src="src/assets/icons/tags_closed_icon.png" alt="default tag icon"/>
                    <img class="w-4 mr-1 hidden" src="src/assets/icons/tags_open_icon.png" alt="hover tag icon"/>
                    <span class="text-primary-neutral-600 text-xs ml-1">تگ‌ها</span>
                </button>
<!--                        </div>-->
            <ul
                id="editPriorityList"
                class="hidden flex p-2 gap-3 items-center bg-white border border-gray-150 rounded-md shadow-[0_0_25px_rgba(0,0,0,0.05)] w-fit"
            >
                <li
                    class="cursor-pointer bg-green-100 text-green-600 px-2 py-0.5 rounded-md flex items-center text-sm"
                >
                    پایین
                </li>
                <span class="text-gray-200">|</span>
                <li
                    class="cursor-pointer bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded-md flex items-center text-sm"
                >
                    متوسط
                </li>
                <span class="text-gray-200">|</span>
                <li
                    class="cursor-pointer bg-red-100 text-red-600 px-2 py-0.5 rounded-md flex items-center text-sm"
                >
                    بالا
                </li>
            </ul>
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
    // console.log(taskElementContainer);
    if (taskElementContainer) {
        console.log(taskElementContainer);
        taskElementContainer.insertAdjacentElement("afterend", editForm);
        const editTaskForm = document.getElementById(`edit-task-form-${taskElement.id}`);
        console.log("@@@@@@@@@")
        console.log(editTaskForm);
        if (editTaskForm) {
            const taskPriorityBtn = document.getElementById(`task-priority-button-${taskElement.id}`);
            const PriorityBtn = document.getElementById('priority-button');
            console.log(taskPriorityBtn);
            console.log(PriorityBtn);
            taskPriorityBtn.addEventListener("click", (e) => {
                console.log(e.target);
                console.log("injjjjjja")
                // if (e.target.type ==='img') {
                //     taskPriorityBtn.classList.add("hidden");
                //     PriorityBtn.classList.remove("hidden");
                // }
            })
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