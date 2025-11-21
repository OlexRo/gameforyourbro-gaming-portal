let user = document.querySelector('#user');
let modalWindow = document.querySelector('#modal-window');
let escTwo = document.querySelector('#esc-two');
let userMini = document.querySelector('#user-mini');

user.onclick = function () {
    modalWindow.style.visibility = "visible";
    modalWindow.style.opacity = "1"
}
escTwo.onclick = function () {
    modalWindow.style.visibility = "hidden";
    modalWindow.style.opacity = "0"
}
window.onclick = function (e) {
    if(e.target == modalWindow) {
        modalWindow.style.visibility = 'hidden';
        modalWindow.style.opacity = "0"
    }
}

userMini.onclick = function () {
    modalWindow.style.visibility = "visible";
    modalWindow.style.opacity = "1"
}




