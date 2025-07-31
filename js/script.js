// script.js for Naija Chic Website

// Form validation for Appointments Page
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !date || !message) {
        alert("Please fill in all the fields.");
        return false;
    }

    // Basic email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Appointment submitted successfully!");
    return true;
}

// Example JavaScript feature: Change header color on hover
window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header h1");
    if (header) {
        header.addEventListener("mouseover", () => {
            header.style.color = "#fdd835";
        });
        header.addEventListener("mouseout", () => {
            header.style.color = "";
        });
    }
});
