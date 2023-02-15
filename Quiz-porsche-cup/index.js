function inleveren() {
    var goed = 0;
    var fout = 0;
    var q1a = document.getElementById("q1a");
    var q2b = document.getElementById("q2a");
    var q3a = document.getElementById("q3b");
    var q4c = document.getElementById("q4a");
    var q5a = document.getElementById("q5a");
    var q6b = document.getElementById("q6b");
    var q7a = document.getElementById("q7a");
    var q8c = document.getElementById("q8c");
    var q9c = document.getElementById("q9c");
    var q10a = document.getElementById("q10a");
    var q11 = document.getElementById("q11");
    var q12 = document.getElementById("q12");
    var q13 = document.getElementById("q13");
    var q14 = document.getElementById("q14");
    var q15 = document.getElementById("q15");
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
        document.getElementById("a2F").innerHTML = "Fout! Het juiste antwoord was A";
    }
    if (q3a.checked) {
        goed++;
        document.getElementById("a3G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a3F").innerHTML = "Fout! Het juiste antwoord was B";
    }
    if (q4c.checked) {
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
    if (q6b.checked) {
        goed++;
        document.getElementById("a6G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a6F").innerHTML = "Fout! Het juiste antwoord was B";
    }
    if (q7a.checked) {
        goed++;
        document.getElementById("a7G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a7F").innerHTML = "Fout! Het juiste antwoord was A";
    }
    if (q8c.checked) {
        goed++;
        document.getElementById("a8G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a8F").innerHTML = "Fout! Het juiste antwoord was C";
    }
    if (q9c.checked) {
        goed++;
        document.getElementById("a9G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a9F").innerHTML = "Fout! Het juiste antwoord was C";
    }
    if (q10a.checked) {
        goed++;
        document.getElementById("a10G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a10F").innerHTML = "Fout! Het juiste antwoord was A";
    }
    if (q11.value == "Duitsland" || q11.value == "duitsland") {
        goed++;
        document.getElementById("a11G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a11F").innerHTML = "Fout! Het juiste antwoord was Duitsland";
    }
    if (q12.value == "15" || q12.value == "15") {
        goed++;
        document.getElementById("a12G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a12F").innerHTML = "Fout! Het juiste antwoord was 15";
    }
    if (q13.value == "kévin estre, jeroen bleekemolen, michael christensen, kévin estre" || q13.value == "Kévin Estre, Jeroen Bleekemolen, Michael Christensen, Kévin Estre") {
        goed++;
        document.getElementById("a13G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a13F").innerHTML = "Fout! Het juiste antwoord was Kévin Estre, Jeroen Bleekemolen, Michael Christensen, Kévin Estre";
    }
    if (q14.value == "1:37:00" || q14.value == "1:37:00") {
        goed++;
        document.getElementById("a14G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a14F").innerHTML = "Fout! Het juiste antwoord was 1:37:00";
    }
    if (q15.value == "28" || q15.value == "28") {
        goed++;
        document.getElementById("a15G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a15F").innerHTML = "Fout! Het juiste antwoord was 28";
    }
    document.getElementById("resultaten").innerHTML = "Goed: " + goed + "<br>Fout: " + fout;
    document.getElementById("inleverButton").style.display = "none";
    document.getElementById("resetButton").style.display = "block";
  }