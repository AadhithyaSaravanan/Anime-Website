document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const newUsername = document.getElementById("newUsername").value;
    const newEmail = document.getElementById("newEmail").value;
    const newMobile = document.getElementById("newMobile").value;
    const newPassword = document.getElementById("newPassword").value;
    const retypePassword = document.getElementById("retypePassword").value;

    // Basic validation for username, email, mobile number, password, and retype password
    if (!newUsername || newUsername.trim().length === 0) {
        alert("Please enter a valid username.");
        return;
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    if (!validateEmail(newEmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!newMobile || !/^\d{10}$/.test(newMobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    if (!newPassword || newPassword.length < 6) {
        alert("Password should be at least 6 characters long.");
        return;
    }

    // Password validation rules
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(newPassword)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 6 characters long.");
        return;
    }

    if (newPassword !== retypePassword) {
        alert("Passwords do not match.");
        return;
    }

    // Your registration logic here, such as sending the new user data to a server or database
    // For this example, we'll store the new user's data in localStorage
    const user = { username: newUsername, email: newEmail, mobile: newMobile, password: newPassword };
    localStorage.setItem("user", JSON.stringify(user));

    // Set a flag in localStorage to indicate successful registration
    localStorage.setItem("isLoggedIn", "true");

    // Display a success message and redirect to the login page
    alert("Registration successful!");
    window.location.href = "login.html";
});
