export function editTask(onEdit) {
    document.addEventListener("click", (event) => {
        const editBtn = event.target.closest(".edit-btn");
        if (editBtn) {
            const taskElement = editBtn.closest(".task");
            const id = taskElement.dataset.id;

            const editingTitle = taskElement.querySelector("h3").innerText;
            const editingDescription = taskElement.querySelector("p").innerText;
            const editingPriority = taskElement.querySelector("span").innerText;

            const colors = {
                پایین: "bg-teal-100 text-teal-600",
                متوسط: "bg-amber-100 text-amber-400",
                بالا: "bg-rose-100 text-orange-600",
            };
            const color = colors[editingPriority];

            const editForm = document.createElement("form");
            editForm.id = "edit-task-form";
            editForm.className =
                "border-[1px] w-[100%] border-gray-300 rounded-lg mt-[45px] mb-[10px] lg:mt-[20px] shadow-[0px_4px_58.5px_0px_rgba(0,0,0,0.06)] border-primary-light_2";
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
                        <div
                            id="editPriorityButton"
                            class="flex gap-1 cursor-pointer rounded px-2 py-1 text-sm ${color} w-fit"
                        >
                            <button id="editRemovePriority" class="ml-2 text-gray-400 hover:text-black hover:font-bold">x</button>
                            <span>${editingPriority}</span>
                        </div>
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
<!--            &lt;!&ndash; Clear / Cancel button &ndash;&gt;-->
<!--            <button type="button" id="clear-task-button" class="w-8 h-8 mx-1">-->
<!--                <img src="./src/assets/icons/clear_icon.png" alt="clear form" class="w-full h-full object-contain"/>-->
<!--            </button>-->

            <!-- Submit / Add Task button -->
            <button type="submit" id="edit-task-button"
                    class="border rounded-md px-4 py-1.5 text-primary-on-light text-xs bg-primary-light ml-4">
                ویرایش تسک 
            </button>
        </div>
            `;

            taskElement.insertAdjacentElement("afterend", editForm);

            // const editLi = document.createElement("li");
            // editLi.appendChild(editForm);
            // li.insertAdjacentElement("afterend", editLi);

            let selectedPriority = editingPriority;

            const editPriorityButton =
                document.getElementById("editPriorityButton");

            const editPriorityList =
                document.getElementById("editPriorityList");
            editPriorityButton.addEventListener("click", () => {
                editPriorityList.classList.toggle("hidden");
                editPriorityButton.querySelector("img").src =
                    editPriorityList.classList.contains("hidden")
                        ? "./assets/icons/tags_closed_icon.png"
                        : "./src/assets/icons/tags_open_icon.png";
            });

            editPriorityButton.addEventListener("click", (e) => {
                if (e.target.id === "editRemovePriority") {
                    selectedPriority = null;
                    editPriorityButton.innerHTML = `<img src="./src/assets/icons/tags-open.png"/> تگ‌ها`;
                    editPriorityButton.className =
                        "flex gap-1 cursor-pointer border border-gray-150 rounded px-2 py-1 text-sm text-gray-700 w-fit";
                    editPriorityList.classList.remove("hidden");
                }
            });

            editPriorityList.querySelectorAll("li").forEach((li) => {
                li.addEventListener("click", () => {
                    selectedPriority = li.textContent.trim();
                    editPriorityList.classList.toggle("hidden");
                    editPriorityButton.innerHTML = `<button id="editRemovePriority" class="ml-2 text-gray-400 hover:text-black hover:font-bold" >x</button>
                    <span>${selectedPriority}</span>`;
                    editPriorityButton.className = `flex gap-1 cursor-pointer rounded px-2 py-1 text-sm ${colors[selectedPriority]} w-fit`;
                });
            });

            const editTaskButton = document.getElementById("edit-task-button");
            const priorities = {
                پایین: "low",
                متوسط: "medium",
                بالا: "high",
            };

            editTaskButton.addEventListener("click", (e) => {
                e.preventDefault();
                const newTitle =
                    editForm.querySelector("#edit-title-input").value;
                const newDescription = editForm.querySelector(
                    "#edit-description-input"
                ).value;
                const finalPriority = priorities[selectedPriority];
                if (newTitle && newTitle.trim() && finalPriority) {
                    onEdit(id, {
                        title: newTitle,
                        description: newDescription,
                        priority: finalPriority,
                    });
                    editForm.remove();
                }
            });
        }
    });
}
