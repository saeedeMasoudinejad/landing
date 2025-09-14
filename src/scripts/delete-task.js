export function deleteTask(onDelete) {
    document.addEventListener("click", (event) => {
        const deleteBtn = event.target.closest(".delete-btn");

        if (deleteBtn) {
            const taskElement = deleteBtn.closest(".task");
            const id = taskElement.dataset.id;
            onDelete(id);
        }
    });
}
