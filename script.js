const menuButton = document.querySelector(".button_menu");
const closeButton = document.querySelector(".button_close");
const navbar = document.querySelector(".main_nav");

menuButton.addEventListener("click", () => {
  navbar.classList.add("active");
});

closeButton.addEventListener("click", () => {
  navbar.classList.remove("active")
})
