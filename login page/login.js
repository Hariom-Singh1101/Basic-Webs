
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
checkbox.addEventListener("click", function () {
    if (checkbox.checked) { password.type = "text"; }
    else { password.type = "password"; }
})