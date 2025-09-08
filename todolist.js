const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation-bar");
const overlay = document.querySelector(".overlay");
const header = document.querySelector(".header");
const close = document.querySelector(".close");
hamburger.addEventListener("click", () => {
  nav.style.display = "flex";
  overlay.style.display = "block";
  header.style.display = "none";
  nav.style.margin = "0";
  nav.style.animation = "menu";
});
close.addEventListener("click", () => {
  nav.style.display = "none";
  overlay.style.display = "none";
  header.style.display = "flex";
});
