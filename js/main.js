document.getElementById("loginform").onsubmit = function () {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    if ( ((user == localStorage.newUser) && (pass == localStorage.newPass)) || (((user == "salah@123") && (pass == "987654321"))) ) {
        return true;
    } else {
        return false;
    }
}
