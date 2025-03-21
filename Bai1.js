function togglePassword() {
    let passwordInput = document.getElementById("passwordInput");
    let toggleIcon = document.getElementById("toggleIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}