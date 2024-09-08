"use strict";

let clicker;
let clickCount = 0;
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  clickCount++;
  if (clickCount === 1) {
    clicker = setTimeout(() => {
      button.innerHTML = "1 Click";
      clickCount = 0; // Reset click count after 1 click is processed
    }, 200);
  } else if (clickCount === 2) {
    clearTimeout(clicker);
    button.innerHTML = "2 Clicks";
    clickCount = 0; // Reset click count after 2 clicks are processed
  }
});
