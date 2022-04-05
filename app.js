// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

loginButton.addEventListener("click", function(event) {
    const username = loginInput.value;
    if (username === "") {
        alert("Please wrtie your name.");
    } else if (username.length > 15) {
        alert("Your name is too long.")
    }
});