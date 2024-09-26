

function validateText(inputField) {
    inputField.value = inputField.value.replace(/[^a-zA-Z\s]/g, '');
    inputField.value = inputField.value
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Form submitted successfully!");

    window.location.href = "https://cyberflowcode.github.io/login/";
});
