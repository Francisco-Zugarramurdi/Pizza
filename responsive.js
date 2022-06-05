let displaying = false;
let nav = document.getElementById("mobile-nav-menu")
function navClick() {
    if (displaying) {
        nav.classList.add("hidden");
    } else {
        nav.classList.remove("hidden");
    }
    displaying = !displaying;
}