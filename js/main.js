function inf(e) {
    var x = document.getElementById("us1").value;
    var y = document.getElementById("ps2").value;
    var a = document.getElementById("user").value;
    var b = document.getElementById("pas").value;
    localStorage.setItem("username", x);
    localStorage.setItem("password", y);
    let use = localStorage.getItem("username");
    let paz = localStorage.getItem("password");
    if ( use!== a) {
        e.preventDefault();
    }
    if (paz!== b) {
        e.preventDefault();
    }
}