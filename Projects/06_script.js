"use strict";

const modal = document.querySelector(".modal");
const shwoModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

// function to close the modal
const closeFunc = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// function to open the modal
const openFunc = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal
for (let i = 0; i < shwoModal.length; i++) {
  shwoModal[i].addEventListener("click", openFunc);
}
// close modal
closeModal.addEventListener("click", closeFunc);
overlay.addEventListener("click", closeFunc);

document.addEventListener("keyup", function (e) {
  if (e.key == "Escape" && !modal.classList.contains("hidden")) {
    closeFunc();
  }
});
