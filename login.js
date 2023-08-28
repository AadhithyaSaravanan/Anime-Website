document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value;

    // Retrieve the registered user from localStorage
    const registeredUser = JSON.parse(localStorage.getItem("user"));

    // Check if the entered username and password match the registered user's credentials
    if (
        registeredUser && username === registeredUser.username && password === registeredUser.password && email === registeredUser.email
    ) {
        // Set a flag in localStorage to indicate successful login
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "anime.html"; // Redirect to the anime page on successful login
    } else {
        document.getElementById("loginError").textContent = "Invalid username or password.";
    }
});


