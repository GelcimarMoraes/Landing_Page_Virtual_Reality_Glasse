let minuIcon = document.querySelector(".menu-icon");
let minuMenu = document.querySelector(".menu-list");

minuIcon.addEventListener("click", () => {
    if (minuMenu.classList.contains("js-menu-hide")) {
        minuIcon.innerText = "X";
        minuMenu.classList.remove("js-menu-hide");
    } else {
        minuIcon.innerText = "|||";
        minuMenu.classList.add("js-menu-hide");
    }
});
