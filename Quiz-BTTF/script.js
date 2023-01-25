function inleveren() {
    var goed = 0;
    var fout = 0;
    var q1a = document.getElementById("q1a");
    var q2b = document.getElementById("q2b");
    var q3a = document.getElementById("q3a");
    var q4c = document.getElementById("q4c");
    if (q1a.checked) {
        goed++;
        document.getElementById("a1G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a1F").innerHTML = "Fout! Het juiste antwoord was A";
    }
    if (q2b.checked) {
        goed++;
        document.getElementById("a2G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a2F").innerHTML = "Fout! Het juiste antwoord was B";
    }
    if (q3a.checked) {
        goed++;
        document.getElementById("a3G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a3F").innerHTML = "Fout! Het juiste antwoord was A";
    }
    if (q4c.checked) {
        goed++;
        document.getElementById("a4G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a4F").innerHTML = "Fout! Het juiste antwoord was C";
    }
    document.getElementById("resultaten").innerHTML = "Goed: " + goed + "<br>Fout: " + fout;
    document.getElementById("inleverButton").style.display = "none";
    document.getElementById("resetButton").style.display = "block";
}

function reset() {
    document.location.reset();
}