//Resize main container
function autoResizeDiv() {
  document.getElementById("body").style.height = window.innerHeight + "px";
}
// Attach the handler (not the result of calling it)
window.onresize = autoResizeDiv;
// Initialize once
autoResizeDiv();

//Page Show-hide and color change
// Colors for each page
const pageColors = ["#ff7a18", "#ed143d", "#4caf50", "#8faadc"];

// Hide all pages except the first
const pages = document.querySelectorAll(".page");
pages.forEach((page, index) => {
  page.style.display = index === 0 ? "flex" : "none";
});

// Activate the first button
const buttons = document.querySelectorAll(".page-btn");
buttons.forEach((btn, index) => {
  if (index === 0) {
    btn.style.backgroundColor = pageColors[0] + "33"; // Adding 20% opacity
  }
});

// Event delegation for page buttons (updated for .nav-bar)
const navBar = document.querySelector(".nav-bar");
if (navBar) {
  navBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".page-btn");
    if (!btn) return;

    const pageId = parseInt(btn.dataset.page);
    switchPage(pageId);
  });
}

function switchPage(id) {
  pages.forEach((page, i) => {
    page.style.display = i + 1 === id ? "flex" : "none";
  });

  buttons.forEach((btn, i) => {
    const icon = btn.querySelector("i");
    const isActive = i + 1 === id;
    btn.style.backgroundColor = isActive ? pageColors[i] + "33" : ""; // Adding 20% opacity
    icon.classList.toggle("btn-active", isActive);
  });

  // Change container color
  /*document.getElementById("page-container").style.backgroundColor =
    pageColors[id - 1];*/
}

//Image container change page-4
function imgChange(id) {
  const totalImages = 2;
  for (let i = 1; i <= totalImages; i++) {
    document
      .getElementById(`page4-btn${i}`)
      .classList.toggle("page4-btn-active", i === id);
    document
      .getElementById(`image-container${i}`)
      .classList.toggle("image-container-active", i === id);
    document.getElementById(`show-more${i}`).style.display =
      i === id ? "flex" : "none";
  }
}

/* profile image clock*/
function imageClock() {
  const now = new Date();
  const h = 30 * ((now.getHours() % 12) + now.getMinutes() / 60); // 30 degrees hour
  const m = 6 * now.getMinutes(); // 6 degrees every minute
  const s = 6 * now.getSeconds(); // 6 degrees every second
  // setting the rotate CSS attribute to those degree values -->
  document.getElementById("seconds").style.cssText =
    "-webkit-transform:rotate(" + s + "deg);";
  document.getElementById("minutes").style.cssText =
    "-webkit-transform:rotate(" + m + "deg);";
  document.getElementById("hours").style.cssText =
    "-webkit-transform:rotate(" + h + "deg);";

  setTimeout(imageClock, 1000); // calling the function every second
}
window.onload = imageClock;
imageClock();

/*button color change*/
let c = 0;

function colorChanges() {
  let color = ["green", "yellow"];
  const btn = document.getElementById("btn6");
  if (btn) {
    btn.style.color = color[c];
    c = (c + 1) % color.length;
  }
}
/*setInterval(colorChanges, 1000);*/

/*var k = 0;
var tiktok = ["red", "green"];
function colorChange() {
setTimeout(function(){
document.getElementById('btn6').style.color = tiktok[c];
c = (k + 1) % tiktok.length;
colorChange(); //add callback to its own function at the end
}, 1000);
};*/

/*button show hide with hamburger button*/
function clickBurger() {
  const sidebar = document.querySelector("sidebar");
  if (sidebar) sidebar.classList.add("hamburger-active");
  document.getElementById("hamburger-enter").style.display = "none";
  document.getElementById("hamburger-exit").style.display = "flex";
}

function clickCross() {
  const sidebar = document.querySelector("sidebar");
  if (sidebar) sidebar.classList.remove("hamburger-active");
  document.getElementById("hamburger-enter").style.display = "flex";
  document.getElementById("hamburger-exit").style.display = "none";
}

// Create and append iframe
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".thm-iframe-container");
  if (!container) return;

  const iframe = document.createElement("iframe");
  iframe.id = "thm-iframe";
  iframe.src =
    "https://tryhackme.com/api/v2/badges/public-profile?userPublicId=227999";
  iframe.style.cssText = `width: 100%;`;
  iframe.classList.add("thm-iframe");

  iframe.addEventListener("load", function () {
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const iframeBody = iframeDoc.body;
      console.log(iframeBody);

      // Example: add styles to iframe body
      iframeBody.style.backgroundColor = "black";
      iframeBody.style.color = "lime";
    } catch (err) {
      console.error(
        "Cannot access iframe body due to cross-origin restrictions",
        err
      );
    }
  });

  // container.appendChild(iframe);
});

// Github state forced update
window.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("github-stats");
  // Append a timestamp to bust cache
  img.src = img.src.split("&v=")[0] + "&v=" + Date.now();
});
