let burgerMenu = document.querySelector('#burger-menu');
let ContentBurgerMenu = document.querySelector('#content-burger-menu');
let esc = document.querySelector('#esc');

burgerMenu.onclick = function () {
    ContentBurgerMenu.style.visibility = "visible";
    ContentBurgerMenu.style.opacity = "1"
}

esc.onclick = function () {
    ContentBurgerMenu.style.visibility = "hidden";
    ContentBurgerMenu.style.opacity = "0"
}


