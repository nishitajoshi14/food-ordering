document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const roleSelect = document.getElementById('role');
    const studentSection = document.getElementById('studentSection');
    const professionalSection = document.getElementById('professionalSection');
    const customerSection = document.getElementById('customerSection');

    // Show/hide sections based on role selection
    roleSelect.addEventListener('change', function() {
        studentSection.style.display = 'none';
        professionalSection.style.display = 'none';
        customerSection.style.display = 'none';

        if (roleSelect.value === 'student') {
            studentSection.style.display = 'block';
        } else if (roleSelect.value === 'professional') {
            professionalSection.style.display = 'block';
        } else if (roleSelect.value === 'customer') {
            customerSection.style.display = 'block';
        }
    });

    // Form submission and reset
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Implement your registration logic here (e.g., send data to server)
        alert('Registration successful!');

        // Reset the form after submission
        registerForm.reset();
        window.location.href = "menu.html";


        // Hide dynamic sections after reset
        studentSection.style.display = 'none';
        professionalSection.style.display = 'none';
        customerSection.style.display = 'none';
    });

    

});
