let productsList = [];

document.addEventListener('DOMContentLoaded',()=>{
    if(localStorage.getItem('products')){
        productsList = JSON.parse(localStorage.getItem('products'));
    }
})


function addProduct(name, price) {
    let product = {
        name: name,
        price: price,
        count: 1,
    }
    let exists = false;
    for (const i in productsList) {
        if (productsList[i].name == product.name) {
            productsList[i].count++;
            exists = true;
        }
    }
    if (!exists) {
        productsList.push(product);
    }
    updateCart();
    ShowCart();
}

function updateCart() {
    localStorage.setItem('products', JSON.stringify(productsList));

}

function ShowCart() {
    console.log("-----------------------------------------------------")
    let totalPrice = 0;
    for (const i in productsList) {
        console.log("Nombre: " + productsList[i].name + " $" + productsList[i].price + " X" + productsList[i].count + " =" + (productsList[i].price * productsList[i].count))
        totalPrice += (productsList[i].price * productsList[i].count);
    }
    console.log(" ")
    console.log("Total: " + totalPrice);
   
    console.log("-----------------------------------------------------")
}