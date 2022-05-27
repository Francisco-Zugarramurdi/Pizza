let filter = document.getElementById("filter");
let products = document.getElementsByClassName("product");

filter.addEventListener("change", filterUpdate);

function filterUpdate() {
    console.log(filter.flavor.value)
    resetFilter();
    let chosen = document.getElementsByClassName(filter.flavor.value);
    for(let i = 0; i < chosen.length; i ++){
        chosen[i].classList.remove("hidden");
    }
}
function resetFilter(){
    for(let i = 0; i < products.length; i ++){
        products[i].classList.add("hidden");
    }
}