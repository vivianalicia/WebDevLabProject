document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");

    loginButton.addEventListener("click", function () {
        const emailInput = document.getElementById("email").value;
        const passwordInput = document.getElementById("password").value;

        const storedData = JSON.parse(localStorage.getItem("registeredUser"));

        if (!storedData) {
            alert("No registered user found. Please register first.");
            return;
        }

        if (emailInput === storedData.email && passwordInput === storedData.password) {
            alert("Login successful!");
            window.location.href = "../index.html";
        } else {
            alert("Incorrect email or password.");
        }

    });
});
