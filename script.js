"use strict";

//generisemo random broj samo jednom pri pokretanju stranice
let secretNumber = Math.trunc(Math.random() * 20) + 1; //da bi bili [1-20]
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); //we need it to compare it with random number

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = " Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    //update highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = " Too high! Try again!";
    if (score !== 0) {
      score--;
    } else {
      document.querySelector(".message").textContent =
        "Your score is 0! You lost the game!";
    }
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = " Too low! Try again!";
    if (score !== 0) {
      score--;
    } else {
      document.querySelector(".message").textContent =
        "Your score is 0! You lost the game!";
    }
    document.querySelector(".score").textContent = score;
  }
});

//Play again
document.querySelector(".again").addEventListener("click", function () {
  //postavljamo inicijalna stanje svih prom, i novi random broj
  secretNumber = Math.trunc(Math.random() * 20) + 1; //da bi bili [1-20]
  const guess = Number(document.querySelector(".guess").value);
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing..";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
});
