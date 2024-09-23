// cart.js

function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ${item.price}rs`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    totalPriceElement.textContent = `Total: ${total}rs`;
}

function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
}

window.onload = displayCart;


// cart.js

function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ${item.price}rs`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    totalPriceElement.textContent = `Total: ${total}rs`;
}

function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
}

window.onload = displayCart;
