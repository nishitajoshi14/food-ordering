window.onload = function() {
    
    setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 1000); 
};



function handleSubmit(event) {
    event.preventDefault(); 

    // Get form data//data collected 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

   
    let contactData = JSON.parse(localStorage.getItem("contactData")) || [];

   
    contactData.push({ name, email, phone, message });

    
    localStorage.setItem("contactData", JSON.stringify(contactData));

    
    document.getElementById("contactForm").reset();

    
    window.location.href = "display.html";
}


function displayFormData() {
   
    const contactData = JSON.parse(localStorage.getItem("contactData")) || [];

    
    if (contactData.length > 0) {
        let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Message</th>
                        <th>Actions</th> <!-- New column for actions -->
                    </tr>
                </thead>
                <tbody>
        `;
        
        contactData.forEach((data, index) => {
            tableHTML += `
                <tr id="row-${index}">
                    <td id="name-${index}">${data.name}</td>
                    <td id="email-${index}">${data.email}</td>
                    <td id="phone-${index}">${data.phone}</td>
                    <td id="message-${index}">${data.message}</td>
                    <td>
                        <button class="edit-btn" onclick="editEntry(${index})">Edit</button>
                        <button class="delete-btn" onclick="deleteEntry(${index})">Delete</button>
                    </td>
                </tr>
            `;
        });

        tableHTML += `
                </tbody>
            </table>
        `;
        
        document.getElementById("data-container").innerHTML = tableHTML;
    } else {
        document.getElementById("data-container").innerHTML = `
            <p>No contact data found.</p>
        `;
    }
}

// Function to delete an entry from the form data
function deleteEntry(index) {
    // Retrieve data from localStorage
    let contactData = JSON.parse(localStorage.getItem("contactData")) || [];

    // Remove the selected entry
    contactData.splice(index, 1);

    // Save the updated data back to localStorage
    localStorage.setItem("contactData", JSON.stringify(contactData));

    // Re-display the updated data
    displayFormData();
}

// Function to edit an entry in the form data
function editEntry(index) {
    // Retrieve the current data in the row
    let name = document.getElementById(`name-${index}`).textContent;
    let email = document.getElementById(`email-${index}`).textContent;
    let phone = document.getElementById(`phone-${index}`).textContent;
    let message = document.getElementById(`message-${index}`).textContent;

    // Replace the table cells with input fields
    document.getElementById(`row-${index}`).innerHTML = `
        <td><input type="text" id="edit-name-${index}" value="${name}"></td>
        <td><input type="email" id="edit-email-${index}" value="${email}"></td>
        <td><input type="text" id="edit-phone-${index}" value="${phone}"></td>
        <td><input type="text" id="edit-message-${index}" value="${message}"></td>
        <td>
            <button class="save-btn" onclick="saveEntry(${index})">Save</button>
            <button class="delete-btn" onclick="deleteEntry(${index})">Delete</button>
        </td>
    `;
}


function saveEntry(index) {

    let updatedName = document.getElementById(`edit-name-${index}`).value;
    let updatedEmail = document.getElementById(`edit-email-${index}`).value;
    let updatedPhone = document.getElementById(`edit-phone-${index}`).value;
    let updatedMessage = document.getElementById(`edit-message-${index}`).value;

    
    let contactData = JSON.parse(localStorage.getItem("contactData")) || [];

    
    contactData[index] = {
        name: updatedName,
        email: updatedEmail,
        phone: updatedPhone,
        message: updatedMessage
    };

    
    localStorage.setItem("contactData", JSON.stringify(contactData));

    
    displayFormData();
}


if (window.location.pathname.includes("display.html")) {
    displayFormData();
}


const navLinks = document.querySelectorAll('#nav-links li a');
const checkbox = document.querySelector('.menu-checkbox');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        checkbox.checked = false; 
    });
});




