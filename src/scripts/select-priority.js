/* -------------------------------------------------------------------------- */
/*                  THIS JS CODE IS WRITTEN BY MEHDI ALIZADEH                 */
/* -------------------------------------------------------------------------- */
let selectedPriority = null;
const priorityList = document.getElementById("priorityList");

priorityList.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
        selectedPriority = li.textContent.trim();
    });
});

export function getSelectedPriority() {
    return selectedPriority;
}
export function resetSelectedPriority() {
    selectedPriority = null;
}
