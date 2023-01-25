function inleveren() {
    var goed = 0;
    var fout = 0;
    var q1c = document.getElementById("q1c");
    var q2b = document.getElementById("q2b");
    var q3c = document.getElementById("q3c");
    var q4a = document.getElementById("q4a");
    var q5a = document.getElementById("q5a");
    if (q1c.checked) {
        goed++;
        document.getElementById("a1G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a1F").innerHTML = "Fout! Het juiste antwoord was C";
    }
    if (q2b.checked) {
        goed++;
        document.getElementById("a2G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a2F").innerHTML = "Fout! Het juiste antwoord was B";
    }
    if (q3c.checked) {
        goed++;
        document.getElementById("a3G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a3F").innerHTML = "Fout! Het juiste antwoord was C";
    }
    if (q4a.checked) {
        goed++;
        document.getElementById("a4G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a4F").innerHTML = "Fout! Het juiste antwoord was A";
    }
    if (q5a.checked) {
        goed++;
        document.getElementById("a5G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a5F").innerHTML = "Fout! Het juiste antwoord was A";
    }
    document.getElementById("resultaten").innerHTML = "Goed: " + goed + "<br>Fout: " + fout;
    document.getElementById("inleverButton").style.display = "none";
    document.getElementById("resetButton").style.display = "block";
}

function reset() {
    window.location.reload();
}