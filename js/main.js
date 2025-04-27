document.querySelector("#_moon_").addEventListener("mouseover", headHighlight);
document.querySelector("#_moon_").addEventListener("mouseout", headUnHighlight);
document.querySelector("#_moon_").addEventListener("click", headInfo);

document.querySelector("#_hastighed_").addEventListener("mouseover", headHighlight2);
document.querySelector("#_hastighed_").addEventListener("mouseout", headUnHighlight2);
document.querySelector("#_hastighed_").addEventListener("click", headInfo2);

document.querySelector("#_radar_").addEventListener("mouseover", headHighlight3);
document.querySelector("#_radar_").addEventListener("mouseout", headUnHighlight3);
document.querySelector("#_radar_").addEventListener("click", headInfo3);

function headHighlight() {
    console.log("headHighlight");
    document.querySelector("#moon_bg #moon_crater").style.fill = " #FFFFFF";
}

function headUnHighlight() {
    console.log("headUnHighlight");
    document.querySelector("#moon_bg").style.fill = " #d02f2d";
    document.querySelector("#moon_crater").style.fill = " #d02f2d";
}
function headInfo() {
    console.log("headInfo");
    document.querySelector(".info-text > h2").textContent = "Månen";
    document.querySelector(".info-text > article > p").innerHTML = "Du vil ofte kunne se månen ud af din kapsels vindue - her er hvad du skal vide om den.";
    document.querySelector("#efficiency").innerHTML = "<h3>RUMVÆSENER</h3><P>Der er <strong>små, farlige rumvæsener</strong> som ofte kan se dig hvis du er <strong>max 20 km væk</strong>. De kan finde på at sende stråler ud, som kan være fatale. Derfor er det virkelig vigtigt at holde øje med din lokation, så du kan styre væk fra månen og ikke kommer for tæt på.</p>";
    document.querySelector("#requirement").innerHTML = "<h3>STRÅLERNE</h3><p>Strålerne er svære at få øje på men kan somme tider have et rødt skær.</p>";
    document.getElementById("img1").src = "img/alien.webp";
}
function headHighlight2() {
    console.log("headHighlight2");
    document.querySelector("#_hastighed_").style.fill = " #FFFFFF";
}

function headUnHighlight2() {
    console.log("headUnHighlight2");
    document.querySelector("#_hastighed_").style.fill = " #d02f2d";
}

function headInfo2() {
    console.log("headInfo2");
    document.querySelector(".info-text > h2").textContent = "Hastighed";
    document.querySelector(".info-text > article > p").textContent = "Hvor hurtigt flyver du?";
    document.querySelector("#efficiency").innerHTML = "<h3>HASTIGHEDSMÅLEREN</h3><P>Måleren viser din hastighed i km/s. Den generelle måling burde ligge på 7,8, men skal under alle omstændigheder være mellem 6-9.</p>";
    document.querySelector("#requirement").innerHTML = "<h3>DIN HASTIGHED</h3><p>7,8 m/s svarer til 28.000 km/t. Det er 23 gange hurtigere end lydens hastighed.</p>";
    document.getElementById("img1").src = "img/hastighed.webp";
}

function headHighlight3() {
    console.log("headHighlight3");
    document.querySelector("#_radar_").style.fill = " #FFFFFF";
}

function headUnHighlight3() {
    console.log("headUnHighlight3");
    document.querySelector("#_radar_").style.fill = " #d02f2d";
}

function headInfo3() {
    console.log("headInfo3");
    document.querySelector(".info-text > h2").textContent = "Radar";
    document.querySelector(".info-text > article > p").innerHTML = "<p>Læs nedenfor hvordan dit radar fungerer!</p>";
    document.querySelector("#efficiency").innerHTML = "<h3>RADAR</h3><P>Dit radar viser 2 ting: <br> 1. Hvilken retning du er på vej hen <br> 2. Hvor tæt på de nærmeste asteroider og planeter er.</p>";
    document.querySelector("#requirement").innerHTML = "<p>Derudover alarmerer dit radar dig automatisk med lysere frekvenser, jo tættere du kommer på at støde på dine omgivelser.</p>";
    document.getElementById("img1").src = "img/radar.webp";
}