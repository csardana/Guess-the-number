"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number 🥳";
// document.querySelector(".win").textContent = "Good Job Buddy 🤩";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

var rand = Math.trunc(20 * Math.random()) + 1;
console.log(rand);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number 😒";
  } else if (guess === rand) {
    document.querySelector(".win").textContent = "Good Job Buddy 🤩";
    document.querySelector(".message").textContent = "Correct Number 🥳";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".highscore").textContent =
      Number(document.querySelector(".highscore").textContent) >
      Number(document.querySelector(".score").textContent)
        ? document.querySelector(".highscore").textContent
        : document.querySelector(".score").textContent;
  } else if (guess < rand) {
    if (Number(document.querySelector(".score").textContent > 1)) {
      document.querySelector(".score").textContent =
        Number(document.querySelector(".score").textContent) - 1;
      document.querySelector(".message").textContent = "Too Low";
    } else {
      document.querySelector(".message").textContent =
        "Game Over , Press the again button to restart";
    }
  } else if (guess > rand) {
    if (Number(document.querySelector(".score").textContent > 1)) {
      document.querySelector(".score").textContent =
        Number(document.querySelector(".score").textContent) - 1;
      document.querySelector(".message").textContent = "Too High";
    } else {
      document.querySelector(".message").textContent =
        "Game Over , Press the again button to restart";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".highscore").textContent = "0";
  document.querySelector(".win").textContent = "";
  document.querySelector(".guess").textContent = "";
  rand = Math.trunc(20 * Math.random()) + 1;
});
