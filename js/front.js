
// version 1 - kun den første fungerer
// ------------------------------------------------------------------
// const openBtn = document.querySelector(".news_card .read-more");
// const closeBtn = document.querySelector(".news_card dialog button");
// const dialog = document.querySelector(".news_card dialog");
// openBtn.addEventListener("click", openDialog);
// closeBtn.addEventListener("click", closeDialog);

// function openDialog() {
//     dialog.showModal();
// }
// function closeDialog() {
//     dialog.close();
// }

// version 2 
// ------------------------------------------------------------------
// const openBtn1 = document.querySelector(".news_card:first-of-type .read-more");
// const closeBtn1 = document.querySelector(".news_card:first-of-type dialog button");
// const dialog1 = document.querySelector(".news_card:first-of-type dialog");
// openBtn1.addEventListener("click", openDialog1);
// closeBtn1.addEventListener("click", closeDialog1);

// function openDialog1() {
//     dialog1.showModal();
// }
// function closeDialog1() {
//     dialog1.close();
// }

// const openBtn2 = document.querySelector(".news_card:nth-child(2) .read-more");
// const closeBtn2 = document.querySelector(".news_card:nth-child(2) dialog button");
// const dialog2 = document.querySelector(".news_card:nth-child(2) dialog");
// openBtn2.addEventListener("click", openDialog2);
// closeBtn2.addEventListener("click", closeDialog2);

// function openDialog2() {
//     dialog2.showModal();
// }
// function closeDialog2() {
//     dialog2.close();
// }

// const openBtn3 = document.querySelector(".news_card:nth-child(3) .read-more");
// const closeBtn3 = document.querySelector(".news_card:nth-child(3) dialog button");
// const dialog3 = document.querySelector(".news_card:nth-child(3) dialog");
// openBtn3.addEventListener("click", openDialog3);
// closeBtn3.addEventListener("click", closeDialog3);

// function openDialog3() {
//     dialog3.showModal();
// }
// function closeDialog3() {
//     dialog3.close();
// }

// version 3
// ------------------------------------------------------------------
function setupArticle(article) {
  const openBtn = article.querySelector(".read-more");
  const dialog = article.querySelector("dialog");
  const closeBtn = dialog.querySelector(".close-dialog");

  openBtn.addEventListener("click", function () {
    dialog.showModal();
  });

  closeBtn.addEventListener("click", function () {
    dialog.close();
  });
}

const articles = document.querySelectorAll(".news_card");

articles.forEach(function (article) {
  setupArticle(article);
});

// PANORAMA

document.querySelector("#pan1").classList.add("pan_animation");
document.querySelector("#pan1").classList.add("stop");

document.querySelector("#pan1").addEventListener("mouseover", startPanorama);
document.querySelector("#pan1").addEventListener("mouseout", stopPanorama);

document.querySelector("#pan2").classList.add("pan_animation");
document.querySelector("#pan2").classList.add("stop");

document.querySelector("#pan2").addEventListener("mouseover", startPanorama);
document.querySelector("#pan2").addEventListener("mouseout", stopPanorama);

function startPanorama() {
    this.classList.remove("stop");
}
function stopPanorama() {
    this.classList.add("stop");
}

// DARK MODE
const css = document.querySelector(".lightmode");
console.log(css.href);

const darkbtn = document.querySelector(".switchBtn");
darkbtn.addEventListener("click", changeMode);
// const switchtext = document.querySelector("#switchtext");

function changeMode() {
    if (css.href.includes("css/dark.css")){
        css.href = "css/custom.css";
        // switchtext.textContent = "Dark Mode";
    } else {
        css.href = "css/dark.css";
        // switchtext.textContent = "Light Mode";
    }
}