document.getElementById("loginform").onsubmit = function () {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    if (((user == localStorage.newUser) && (pass == localStorage.newPass)) || (((user == "salah@123") && (pass == "987654321")))) {
        return true;
    } else {
        document.getElementById("wrong").textContent = "invalid inputs";
        return false;
    }
}
document.getElementById("loginform").onsubmit = function () {
    var a = document.getElementById("user");
    var b = document.getElementById("pass");
    if (a.value === "") {
        document.getElementById("wrong").textContent = "please enter username";
        return false;
    }
    else if (b.value === "" && b.value.length <= 10) {
        document.getElementById("wrong").textContent = "please enter your password"
        return false;

    }


};
document.getElementById("eye").onclick = function () {
    var x = document.getElementById("pass");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");
    if (x.value === "") {

        z.style.display = "none";
    }
    if (x.type === 'password') {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
};
let click = document.querySelector('.click');
let list = document.querySelector('.list');
click.addEventListener("click", () => {
    list.classList.toggle('newlist');
})