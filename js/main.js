document.querySelector("#circle").addEventListener("mouseover", headHighlight);
document.querySelector("#circle").addEventListener("mouseout", headUnHighlight);
document.querySelector("#circle").addEventListener("click", headInfo);

document.querySelector("#circle2").addEventListener("mouseover", headHighlight2);
document.querySelector("#circle2").addEventListener("mouseout", headUnHighlight2);
document.querySelector("#circle2").addEventListener("click", headInfo2);

document.querySelector("#circle3").addEventListener("mouseover", headHighlight3);
document.querySelector("#circle3").addEventListener("mouseout", headUnHighlight3);
document.querySelector("#circle3").addEventListener("click", headInfo3);

function headHighlight() {
    console.log("headHighlight");
    document.querySelector("#circle").style.fill = " #FFFFFF";
}

function headUnHighlight() {
    console.log("headUnHighlight");
    document.querySelector("#circle").style.fill = " #A44935";
}

function headInfo() {
    console.log("headInfo");
    document.querySelector(".info-text > h2").textContent = "Månen";
    document.querySelector(".info-text > article > p").textContent = "Du vil ofte kunne se månen ud af din kapsels vindue - her er hvad du skal vide om den.";
}

function headHighlight2() {
    console.log("headHighlight2");
    document.querySelector("#circle2").style.fill = " #FFFFFF";
}

function headUnHighlight2() {
    console.log("headUnHighlight2");
    document.querySelector("#circle2").style.fill = " #A44935";
}

function headInfo2() {
    console.log("headInfo2");
    document.querySelector(".info-text > h2").textContent = "hastighed";
    document.querySelector(".info-text > article > p").textContent = "hvor hurtigt flyver du?";
}

function headHighlight3() {
    console.log("headHighlight3");
    document.querySelector("#circle3").style.fill = " #FFFFFF";
}

function headUnHighlight3() {
    console.log("headUnHighlight3");
    document.querySelector("#circle3").style.fill = " #A44935";
}

function headInfo3() {
    console.log("headInfo3");
    document.querySelector(".info-text > h2").textContent = "radar";
    document.querySelector(".info-text > article > p").textContent = "hvor er du?";
}


// document.querySelector("#circle").addEventListener("mouseover", headHighlight);
// document.querySelector("#circle").addEventListener("mouseout", headUnHighlight);
// document.querySelector("#circle").addEventListener("click", headInfo);

// document.querySelector("#circle2").addEventListener("mouseover", headHighlight);
// document.querySelector("#circle2").addEventListener("mouseout", headUnHighlight);
// document.querySelector("#circle2").addEventListener("click", headInfo);

// document.querySelector("#circle3").addEventListener("mouseover", headHighlight);
// document.querySelector("#circle3").addEventListener("mouseout", headUnHighlight);
// document.querySelector("#circle3").addEventListener("click", headInfo);

// function headHighlight() {
//     console.log(this.id);
//     this.style.fill = " #FFFFFF";
// }
// function headUnHighlight() {
//     console.log(this);
//     this.style.fill = " #A44935";
// }