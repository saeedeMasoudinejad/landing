/* -------------------------------------------------------------------------- */
/*                  THIS JS CODE IS WRITTEN BY MEHDI ALIZADEH                 */
/* -------------------------------------------------------------------------- */
let selectedPriority = null;
const priorityList = document.getElementById("priority-values");
console.log(priorityList);
const buttons = priorityList.querySelectorAll("button")
buttons.forEach((button) => {
    console.log(priorityList)
    button.addEventListener("click", () => {
        selectedPriority = button.textContent.trim();
    });
});

export function getSelectedPriority() {
    return selectedPriority;
}
export function resetSelectedPriority() {
    selectedPriority = null;
}