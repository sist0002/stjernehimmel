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
    document.querySelector(".info-text > article > p").innerHTML = "Du vil ofte kunne se månen ud af din kapsels vindue - her er hvad du skal vide om den. Der er <strong>små, farlige rumvæsener</strong> som har ofte kan se dig hvis du er <strong>max 20 km væk</strong>. De kan finde på at sende stråler ud, som kan være fatale. Derfor er det virkelig vigtigt at holde øje med din lokation, så du kan stye væk fra månen og ikke kommer for tæt på.";
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
    document.querySelector(".info-text > h2").textContent = "hastighed";
    document.querySelector(".info-text > article > p").textContent = "hvor hurtigt flyver du?";
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
    document.querySelector(".info-text > h2").textContent = "radar";
    document.querySelector(".info-text > article > p").textContent = "hvor er du?";
}