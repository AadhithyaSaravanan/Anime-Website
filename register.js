document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Basic validation for username and password (you can add more validations if needed)
    if (!newUsername || newUsername.trim().length === 0) {
        alert("Please enter a valid username.");
        return;
    }

    if (!newPassword || newPassword.length < 6) {
        alert("Password should be at least 6 characters long.");
        return;
    }

    // Your registration logic here, such as sending the new user data to a server or database
    // For this example, we'll store the new user's data in localStorage
    const user = { username: newUsername, password: newPassword };
    localStorage.setItem("user", JSON.stringify(user));

    // Set a flag in localStorage to indicate successful registration
    localStorage.setItem("isLoggedIn", "true");

    // Display a success message and redirect to the anime page
    alert("Registration successful!");
    window.location.href = "login.html";
});
