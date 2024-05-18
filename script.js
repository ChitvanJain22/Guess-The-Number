"use strict";
// let a;
let guessNumber = Math.trunc(Math.random() * 20) + 1;
console.log(guessNumber);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guess > guessNumber) {
    if (Number(document.querySelector(".score").textContent) > 1) {
      document.querySelector(".message").textContent = "High";
      const x = Number(document.querySelector(".score").textContent);
      document.querySelector(".score").textContent = x - 1;
      document.querySelector("body").style.backgroundColor = "#222";
    } else {
      document.querySelector(".message").textContent = "You Lost The Game!";
      document.querySelector("body").style.backgroundColor = "#ec1616";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < guessNumber) {
    if (Number(document.querySelector(".score").textContent) > 1) {
      document.querySelector(".message").textContent = "Low";
      const x = Number(document.querySelector(".score").textContent);
      document.querySelector(".score").textContent = x - 1;
      document.querySelector("body").style.backgroundColor = "#222";
    } else {
      document.querySelector(".message").textContent = "You Lost The Game!";
      document.querySelector("body").style.backgroundColor = "#ec1616";
      document.querySelector(".score").textContent = 0;
    }
  } else {
    if (Number(document.querySelector(".score").textContent) === 0) {
      document.querySelector(".message").textContent = "You Lost The Game!";
      document.querySelector("body").style.backgroundColor = "#ec1616";
    } else {
      document.querySelector(".number").textContent = guessNumber;
      document.querySelector(".message").textContent = "Correct Guess";
      document.querySelector("body").style.backgroundColor = "#83e734";
      document.querySelector(".number").style.width = "30rem";

      if (
        Number(document.querySelector(".highscore").textContent) <
        Number(document.querySelector(".score").textContent)
      ) {
        document.querySelector(".highscore").textContent =
          document.querySelector(".score").textContent;
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // a =  Number(document.querySelector(".highscore").textContent);
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(guessNumber);
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
});
