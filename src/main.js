const toggleMode = document.getElementById("toggle-mode");
const modeIcon = document.getElementById("mode-icon");

toggleMode.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
        modeIcon.src = "src/assets/icons/light_icon.png";
    } else {
        modeIcon.src = "src/assets/icons/dark_icon.png";
    }
});