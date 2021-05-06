"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number 🥳";
// document.querySelector(".win").textContent = "Good Job Buddy 🤩";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

const rand = Math.trunc(20 * Math.random());
console.log(rand);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number 😒";
  } else if (guess === rand) {
    document.querySelector(".win").textContent = "Good Job Buddy 🤩";
    document.querySelector(".message").textContent = "Correct Number 🥳";
    document.querySelector(".highscore").textContent =
      Number(document.querySelector(".highscore").textContent) >
      Number(document.querySelector(".score").textContent)
        ? document.querySelector(".highscore").textContent
        : document.querySelector(".score").textContent;
  } else if (guess < rand) {
    document.querySelector(".score").textContent =
      Number(document.querySelector(".score").textContent) - 1;
    document.querySelector(".message").textContent = "Too Low";
  } else if (guess > rand) {
    document.querySelector(".score").textContent =
      Number(document.querySelector(".score").textContent) - 1;
    document.querySelector(".message").textContent = "Too High";
  }
});
