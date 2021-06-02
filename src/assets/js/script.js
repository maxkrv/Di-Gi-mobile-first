let nav_btn = document.getElementById("nav_btn");
let nav_list = document.getElementById("nav_list");

nav_btn.addEventListener("click", () => {
    nav_list.classList.toggle("nav__list--active");
});