const menu = document.querySelector(".menu")
const menuBtn = document.querySelector(".header__icon")
const menuBtnIcon = document.querySelector(".header__icon i")
menuBtn.addEventListener("click", () => {
    if (menuBtnIcon.classList.contains("fa-bars")) {
        menu.style.left = "0"
        menuBtnIcon.classList = "fa fa-times"
    }
    else {
        menu.style.left = "-16rem"
        menuBtnIcon.classList = "fa fa-bars"
    }
})
function loaderFunction() {
    const loader = document.querySelector('.loader');
    const loadingIcon = document.querySelector('.loader i');
    setTimeout(() => {
        loader.style.right = "0";
        loadingIcon.style.color = "#87BC25";
    }, 500)
    window.addEventListener('DOMContentLoaded', () => {
       //setTimeout(() => {
            loader.style.left = "100%";
            loader.firstElementChild.remove();
        //}, 3000);
    });
}
loaderFunction();
