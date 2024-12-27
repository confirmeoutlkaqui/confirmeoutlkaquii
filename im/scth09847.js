function lsdfrv3() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("bgh43bdc").innerHTML =
        this.responseText;
        }
    };
    xhttp.open("GET", "h435dv.php", true);
    xhttp.send();
}