

function validateText(inputField) {
    inputField.value = inputField.value.replace(/[^a-zA-Z\s]/g, ''); // Only allow letters and spaces
    inputField.value = inputField.value
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase()); // Capitalize first letter of each word
}

// Handle form submission with success message and redirect
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display success message
    alert("Form submitted successfully!");

    // Redirect to the success page after showing the success message
    window.location.href = "login.html";
});
