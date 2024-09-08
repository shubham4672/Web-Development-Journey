"use strict";
// math.random-> decimals between 0 to 1
// math.trunc-> decimals to int
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess == secretNum) {
    document.querySelector(".message").textContent = "Correct Number🎉";
    document.querySelector(".number").textContent = secretNum;
    document.querySelector("body").style.backgroundColor = "#2e0327";
    document.querySelector(".number").style.width = "30rem";
    if (hightscore < score) {
      hightscore = score;
      document.querySelector(".highscore").textContent = hightscore;
    }
  } else if (guess != secretNum) {
    if (score > 1) {
      // play the game
      document.querySelector(".message").textContent =
        guess < secretNum ? "Think big number📈" : "Think small number 📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // game over
      document.querySelector(".message").textContent = "You lost the game 🤕";
      document.querySelector(".score").textContent = 0;
    }
  }
});
// play again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 0;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
