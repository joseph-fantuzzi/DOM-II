import "./less/index.less";

// Your code goes here!

//Event Listener 1: Click

const busImg = document.querySelector(".intro img");

busImg.addEventListener("click", (event) => {
  event.target.style.border = "3px solid black";
  event.target.style.boxShadow =
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
});

//Event Listener 2: Mouseenter + Mouseleave

const mainNav = document.querySelector(".main-navigation");

mainNav.addEventListener("mouseenter", () => {
  mainNav.style.backgroundColor = "red";
});

mainNav.addEventListener("mouseleave", () => {
  mainNav.style.backgroundColor = "white";
});

//Event Listener 3: Keydown + Keyup

function escKey(event) {
  if (event.key === "Escape") {
    document.body.style.backgroundColor = "aqua";
  }
}

document.body.addEventListener("keydown", escKey);

document.body.addEventListener("keyup", () => {
  document.body.style.backgroundColor = "white";
});

//Event Listener 4: Wheel

const header_h2 = document.querySelector(".intro h2");
const header_p = document.querySelector(".intro p");

document.body.addEventListener("wheel", () => {
  header_h2.style.color = "purple";
  header_h2.style.fontSize = "10rem";
  header_p.style.color = "purple";
  header_h2.style.fontSize = "8rem";
});

//Event Listener 5: Load

window.addEventListener("load", () => {
  alert("The page has fully loaded for you. Enjoy your experience!");
});

//Event Listener 6: Resize

const signMeUpBtns = document.querySelectorAll(".btn");

signMeUpBtns.forEach((btn) => {
  window.addEventListener("resize", () => {
    btn.style.width = "200px";
    btn.style.height = "80px";
    btn.style.backgroundColor = "blue";
  });
});

//Event Listener 7: DBLclick

const letsGo_h2 = document.querySelector(".content-section:nth-of-type(1) .text-content h2");

letsGo_h2.addEventListener("dblclick", () => {
  letsGo_h2.style.color = "green";
});

//Event Listener 8: Pointer Move

document.body.addEventListener("pointermove", (event) => {
  console.log(`x-coordinate: ${event.x}`);
  console.log(`y-coordinate: ${event.y}`);
});

const adventureAwaits_textContent = document.querySelector(".content-section:nth-of-type(2) .text-content");

adventureAwaits_textContent.addEventListener("pointermove", (event) => {
  event.target.style.color = "red";
});

//Event Listener 9:

//Event Listener 10:
