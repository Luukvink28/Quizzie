function inleveren() {
    var goed = 0;
    var fout = 0;
    var q1c = document.getElementById("q1c");
    var q2b = document.getElementById("q2b");
    var q3c = document.getElementById("q3c");
    var q4a = document.getElementById("q4a");
    var q5a = document.getElementById("q5a");
    var q6b = document.getElementById("q6b");
    var q7c = document.getElementById("q7c");
    var q8b = document.getElementById("q8b");
    var q9a = document.getElementById("q9a");
    var q10c = document.getElementById("q10c");
    var q11 = document.getElementById("q11");
    var q12 = document.getElementById("q12");
    var q13 = document.getElementById("q13");
    var q14 = document.getElementById("q14");
    var q15 = document.getElementById("q15");
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
    if (q6b.checked) {
        goed++;
        document.getElementById("a6G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a6F").innerHTML = "Fout! Het juiste antwoord was B";
    }
    if (q7c.checked) {
        goed++;
        document.getElementById("a7G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a7F").innerHTML = "Fout! Het juiste antwoord was C";
    }
    if (q8b.checked) {
        goed++;
        document.getElementById("a8G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a8F").innerHTML = "Fout! Het juiste antwoord was B";
    }
    if (q9a.checked) {
        goed++;
        document.getElementById("a9G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a9F").innerHTML = "Fout! Het juiste antwoord was A";
    }
    if (q10c.checked) {
        goed++;
        document.getElementById("a10G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a10F").innerHTML = "Fout! Het juiste antwoord was C";
    }
    if (q11.value == "Public Enemy") {
        goed++;
        document.getElementById("a11G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a11F").innerHTML = "Fout! Het juiste antwoord was Public Enemy";
    }
    if (q12.value == "N.W.A") {
        goed++;
        document.getElementById("a12G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a12F").innerHTML = "Fout! Het juiste antwoord was N.W.A";
    }
    if (q13.value == "Tupac") {
        goed++;
        document.getElementById("a13G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a13F").innerHTML = "Fout! Het juiste antwoord was Tupac";
    }
    if (q14.value == "Wu-Tang Clan") {
        goed++;
        document.getElementById("a14G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a14F").innerHTML = "Fout! Het juiste antwoord was Wu-Tang Clan";
    }
    if (q15.value == "Notorious B.I.G") {
        goed++;
        document.getElementById("a15G").innerHTML = "Goed!";
    } else {
        fout++;
        document.getElementById("a15F").innerHTML = "Fout! Het juiste antwoord was Notorious B.I.G";
    }
    if(goed == 15) {document.getElementById("alles-goed").innerHTML ='<img src="emmet.gif" alt="emmet-blij">'}

    document.getElementById("resultaten").innerHTML = "Goed: " + goed + "<br>Fout: " + fout;
    document.getElementById("inleverButton").style.display = "none";
    document.getElementById("resetButton").style.display = "block";
}

