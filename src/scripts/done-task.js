export function checkTask(onCheck) {
    document.addEventListener("click", (event) => {
        const checkTask = event.target.closest(".check-box");
        if (checkTask) {
            const taskElement = checkTask.closest(".task");
            const id = taskElement.dataset.id;
            onCheck(id);
        }
    });
}
