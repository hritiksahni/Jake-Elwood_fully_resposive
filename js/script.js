const closeButton = document.querySelector(".close_nav");
const openButton = document.querySelector('.open_nav');
const nav = document.querySelector(".navi");



closeButton.addEventListener("click",() => {
     nav.classList.remove("navigation_open");

})
openButton.addEventListener("click", () => {
    nav.classList.add('navigation_open');
}); 