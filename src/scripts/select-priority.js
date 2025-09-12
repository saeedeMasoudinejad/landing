/* -------------------------------------------------------------------------- */
/*                  THIS JS CODE IS WRITTEN BY MEHDI ALIZADEH                 */
/* -------------------------------------------------------------------------- */
let selectedPriority = null;
const priorityList = document.getElementById("priority-values");

const buttons = priorityList.querySelectorAll("button")

buttons.forEach((button) => {
    console.log(priorityList)
    button.addEventListener("click", () => {
        selectedPriority = button.value;
        // selectedPriority = button.textContent.trim();
    });
});

export function getSelectedPriority() {
    return selectedPriority;
}

export function resetSelectedPriority() {
    if (selectedPriority) selectedPriority = null;
}