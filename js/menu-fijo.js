//Permite el movimiento del menu al momento de hacer scroll cuando se encuentre fijo
window.addEventListener("scroll", function() {
    let menu = this.document.querySelector("header");
    menu.classList.toggle("abajo", this.window.scrollY > 0);
});