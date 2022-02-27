"use strict";
const d = document;
const _computerChoiceDisplay = d.getElementById("computerChoice");
const _userChoiceDisplay = d.getElementById("userChoice");
const _resultDisplay = d.getElementById("result");

const possibleChoices = d.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    _userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResults();
  })
);
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);
  console.log(randomNumber);
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  _computerChoiceDisplay.innerHTML = computerChoice;
}
function getResults() {
  if (computerChoice === userChoice) {
    result = "its a draw";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lose!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "you lose!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you win!";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "you win!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "you win!";
  }
  _resultDisplay.innerHTML = result;
}
