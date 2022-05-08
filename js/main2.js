let username = document.getElementById("us1");
let pass = document.getElementById("ps1");
    username.onkeyup = function() {
        localStorage.setItem('newUser',username.value);
    }
    pass.onkeyup = function(){
        localStorage.setItem('newPass',pass.value);
    }