document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    // Handle form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form fields
        const name = document.getElementById('nameField').value.trim();
        const email = document.getElementById('emailField').value.trim();
        const password = document.getElementById('passwordField').value;

        if (!name || !email || !password) {
            errorMessage.textContent = 'Please fill all the fields';
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            // Implement your login logic here (e.g., send data to server)
            alert('Login successful!');
            // Optionally redirect or clear form
            loginForm.reset();
        }
    });
});
