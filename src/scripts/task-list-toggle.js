export function toggleTaskList() {
    // const menuTaskButton = document.getElementById("task-menu");
    // const isDoneTaskContainer = document.getElementById('is-done-tasks-list');
    const inProgressTaskContainer = document.getElementById('in-progress-tasks-list');


    inProgressTaskContainer.addEventListener("mouseover", (e) => {
        e.stopPropagation()
        const t = inProgressTaskContainer.querySelectorAll('.task-menu');
        console.log(t)
        console.log(t.lastElementChild)
       t.classList.remove('hidden');
    })
    inProgressTaskContainer.addEventListener("mouseout", (e) => {
        e.stopPropagation()
        inProgressTaskContainer.lastElementChild.classList.add('hidden');
    })

}

export function attachTaskMenuListeners() {
    const taskMenus = document.querySelectorAll("#task-menu");

    taskMenus.forEach(menu => {
        menu.addEventListener("mouseenter", () => {
            menu.querySelector(".openin").classList.remove("hidden");
        });
        menu.addEventListener("mouseleave", () => {
            menu.querySelector(".openin").classList.add("hidden");
        });
    });
}
