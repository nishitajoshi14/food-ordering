// Initialize cart
let cart = [];

// Function to add item to cart
function addToCart(itemName, itemPrice, itemImage) {
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: itemName, price: parseFloat(itemPrice), quantity: 1, image: itemImage });
    }
    
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    const cartItemsElement = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    cartItemsElement.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItemHTML = `
            <tr class="cart-item">
                <td><img src="${item.image}" alt="${item.name}" class="cart-item-image"></td>
                <td>${item.name}</td>
                <td>${item.price}rs</td>
                <td><input type="number" class="quantity-input" data-name="${item.name}" value="${item.quantity}" min="1"></td>
                <td><button class="remove-btn" data-name="${item.name}">Remove</button></td>
            </tr>
        `;
        cartItemsElement.innerHTML += cartItemHTML;
    });

    totalPriceElement.textContent = `Total: ${total}rs`;

    // Add event listeners for quantity input and remove buttons
    const quantityInputs = document.querySelectorAll(".quantity-input");
    quantityInputs.forEach(input => {
        input.addEventListener("change", (event) => {
            const itemName = event.target.getAttribute("data-name");
            const newQuantity = parseInt(event.target.value);
            updateQuantity(itemName, newQuantity);
        });
    });

    const removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const itemName = event.target.getAttribute("data-name");
            removeFromCart(itemName);
        });
    });
}

// Function to update item quantity
function updateQuantity(itemName, newQuantity) {
    const item = cart.find(item => item.name === itemName);
    if (item && newQuantity > 0) {
        item.quantity = newQuantity;
        updateCartDisplay();
    }
}

// Function to remove item from cart
function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    updateCartDisplay();
}

// Event listeners for adding to cart
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (event) => {
        const itemName = event.target.getAttribute("data-name");
        const itemPrice = event.target.getAttribute("data-price");
        const itemImage = event.target.closest(".box").querySelector("img").getAttribute("src");
        addToCart(itemName, itemPrice, itemImage);
    });
});

// Filtering by category
document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", (event) => {
        const category = event.target.getAttribute("data-category");
        document.querySelectorAll(".category").forEach(section => {
            section.style.display = section.classList.contains(category) ? "block" : "none";
        });
    });
});

// Search functionality
document.getElementById("search-button").addEventListener("click", () => {
    const query = document.getElementById("search-input").value.toLowerCase();
    document.querySelectorAll(".box").forEach(box => {
        const itemName = box.querySelector("h3").textContent.toLowerCase();
        if (itemName.includes(query)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
});

// Checkout button functionality (you can add more actions here)
document.getElementById("checkout-btn").addEventListener("click", () => {
    

    window.location.href = "checkout.html";
});


// Function to add item to cart
function addToCart(itemName, itemPrice, itemImage) {
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: itemName, price: parseFloat(itemPrice), quantity: 1, image: itemImage });
    }
    
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    const cartItemsElement = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    cartItemsElement.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItemHTML = `
            <tr class="cart-item">
                <td><img src="${item.image}" alt="${item.name}" class="cart-item-image"></td>
                <td>${item.name}</td>
                <td>${item.price} rs</td>
                <td><input type="number" class="quantity-input" data-name="${item.name}" value="${item.quantity}" min="1"></td>
                <td><button class="remove-btn" data-name="${item.name}">Remove</button></td>
            </tr>
        `;
        cartItemsElement.innerHTML += cartItemHTML;
    });

    totalPriceElement.textContent = `Total: ${total} rs`;

    // Save cart and total price to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totalPrice", total);

    // Add event listeners for quantity input and remove buttons
    const quantityInputs = document.querySelectorAll(".quantity-input");
    quantityInputs.forEach(input => {
        input.addEventListener("change", (event) => {
            const itemName = event.target.getAttribute("data-name");
            const newQuantity = parseInt(event.target.value);
            updateQuantity(itemName, newQuantity);
        });
    });

    const removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const itemName = event.target.getAttribute("data-name");
            removeFromCart(itemName);
        });
    });
}

// Checkout button functionality
document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    // Redirect to checkout.html
    window.location.href = "checkout.html";
});
