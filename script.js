"use strict";

//generisemo random broj samo jednom pri pokretanju stranice
let secretNumber = Math.trunc(Math.random() * 20) + 1; //da bi bili [1-20]
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); //we need it to compare it with random number

  if (!guess) {
    displayMessage("No number");
  }
  //when the guess is correct
  else if (guess === secretNumber) {
    displayMessage(" Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    //update highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } //when the guess is wrong
  else if (guess !== secretNumber) {
    displayMessage(
      guess > secretNumber ? " Too high! Try again!" : " Too low! Try again!"
    );
    if (score !== 0) {
      score--;
    } else {
      displayMessage("Your score is 0! You lost the game!");
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
  displayMessage("Start guessing..");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
});
