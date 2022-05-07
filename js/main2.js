let username = document.getElementById("us1");
let pass = document.getElementById("ps1");
username.onkeyup = function () {
    localStorage.setItem('newUser', username.value);
};
pass.onkeyup = function () {
    localStorage.setItem('newPass', pass.value);
};
document.getElementById("reg").onsubmit = function () {
    let conpas = document.getElementById("ps2");
    let inputs = document.getElementsByClassName("inp");
    if (inputs.value==="") {
        document.getElementById("no").textContent = "please enter complete inputs";
        return false;
    }
    else if (pass.value !== conpas) {
        document.getElementById("no").textContent = "please confirm your password";
        return false;
    }
    
    }