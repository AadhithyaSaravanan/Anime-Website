document.getElementById("signOutBtn").addEventListener("click", function () {
    
    // Remove the isLoggedIn flag from localStorage to simulate signing out
    localStorage.removeItem("isLoggedIn");

    // Redirect the user to the login page after signing out
    window.location.href = "register.html";

    
});

document.getElementById("cancelBtn").addEventListener("click", function() {
    console.log("Cancel button clicked");
    window.location.hash = "anime.html";
});

document.getElementById("cancelBtn").addEventListener("click", function() {
    window.location.href = "anime.html"});
