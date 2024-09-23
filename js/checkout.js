

// Retrieve cart data from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const totalPrice = localStorage.getItem("totalPrice") || 0;

// Display the total price
document.getElementById("total-price").textContent = `${totalPrice} rs`;

// Populate the order table with cart details
const orderDetails = document.getElementById("order-details");

cart.forEach(item => {
    const row = document.createElement("tr");

    const itemNameCell = document.createElement("td");
    itemNameCell.textContent = item.name;
    row.appendChild(itemNameCell);

    const quantityCell = document.createElement("td");
    quantityCell.textContent = item.quantity;
    row.appendChild(quantityCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = `${item.price * item.quantity} rs`;
    row.appendChild(priceCell);

    orderDetails.appendChild(row);
});

// Payment and other functionalities remain the same


// Handle the payment process
const paymentBtn = document.getElementById("payment-btn");
const paymentOptions = document.getElementById("payment-options");

paymentBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Please select the menu items.");
        return;  // Stop further execution
    }
    
    paymentOptions.style.display = "block";
    paymentBtn.style.display = "none";
});

document.querySelectorAll('.payment-option').forEach(option => {
    option.addEventListener('click', () => {
        const method = option.getAttribute('data-method');
        
        // Hide all payment details forms
        document.querySelectorAll('.payment-details-form').forEach(form => {
            form.style.display = 'none';
        });
        
        // Display only the selected payment method details
        if (method === 'gpay') {
            document.getElementById('gpay-details').style.display = 'block';
        } else if (method === 'debitcard') {
            document.getElementById('debitcard-details').style.display = 'block';
        } else if (method === 'atm') {
            document.getElementById('atm-details').style.display = 'block';
        }
    });
});

// Handle form validation and submission
document.querySelectorAll('.submit-payment').forEach(button => {
    button.addEventListener('click', (event) => {
        const method = button.getAttribute('data-method');
        let valid = validatePaymentForm(method);

        if (valid) {
            alert(`Payment details for ${method} submitted.`);
            // Additional payment processing logic can go here
        } else {
            alert(`Please fill in all required details for ${method}.`);
        }
    });
});

// Validation function for payment forms
function validatePaymentForm(method) {
    let valid = true;
    
    if (method === 'gpay') {
        const phoneInput = document.getElementById('gpay-number');
        if (phoneInput && (phoneInput.value.length !== 10 || isNaN(phoneInput.value))) {
            valid = false;
            alert("Please enter a valid 10-digit phone number.");
            phoneInput.classList.add('invalid');
        } else {
            phoneInput.classList.remove('invalid');
        }
    } else if (method === 'debitcard') {
        const cardNumber = document.getElementById('card-number');
        const expiryDate = document.getElementById('expiry-date');
        const cvv = document.getElementById('cvv');
        if (!cardNumber.value || !expiryDate.value || !cvv.value) {
            valid = false;
        }
    } else if (method === 'atm') {
        const atmNumber = document.getElementById('atm-number');
        const atmPin = document.getElementById('atm-pin');
        if (!atmNumber.value || !atmPin.value) {
            valid = false;
        }
    }
    
    return valid;
}

// Validation function for payment forms
function validatePaymentForm(method) {
    let valid = true;
    
    if (method === 'gpay') {
        const phoneInput = document.getElementById('gpay-number');
        if (phoneInput.value.length !== 10 || isNaN(phoneInput.value)) {
            valid = false;
            alert("Please enter a valid 10-digit phone number.");
            phoneInput.classList.add('invalid');
        } else {
            phoneInput.classList.remove('invalid');
        }
    } else if (method === 'debitcard') {
        const cardNumber = document.getElementById('card-number');
        const expiryDate = document.getElementById('expiry-date');
        const cvv = document.getElementById('cvv');

        if (!cardNumber.value || !expiryDate.value || !cvv.value) {
            valid = false;
            if (!cardNumber.value) cardNumber.classList.add('invalid');
            if (!expiryDate.value) expiryDate.classList.add('invalid');
            if (!cvv.value) cvv.classList.add('invalid');
            alert("Please fill in all fields for Debit Card.");
        } else {
            cardNumber.classList.remove('invalid');
            expiryDate.classList.remove('invalid');
            cvv.classList.remove('invalid');
        }
    } else if (method === 'atm') {
        const atmNumber = document.getElementById('atm-number');
        const atmPin = document.getElementById('atm-pin');

        if (!atmNumber.value || !atmPin.value) {
            valid = false;
            if (!atmNumber.value) atmNumber.classList.add('invalid');
            if (!atmPin.value) atmPin.classList.add('invalid');
            alert("Please fill in all fields for ATM.");
        } else {
            atmNumber.classList.remove('invalid');
            atmPin.classList.remove('invalid');
        }
    }
    
    return valid;
}

// Handle the "OK" button click to clear the checkout form and hide payment options
document.querySelectorAll('.ok-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Clear the checkout fields (Item Name, Quantity, Price)
        orderDetails.innerHTML = '';

        // Clear the total price display
        document.getElementById("total-price").textContent = '0 rs';

        // Hide the payment options
        paymentOptions.style.display = 'none';

        // Show the payment button again
        paymentBtn.style.display = 'block';

        // Clear the cart from localStorage
        localStorage.removeItem("cart");
        localStorage.removeItem("totalPrice");

        // Clear all payment details forms
        document.querySelectorAll('.payment-details-form input').forEach(input => {
            input.value = '';  // Clear input fields
            input.classList.remove('invalid');  // Remove invalid class
        });
    });
});
