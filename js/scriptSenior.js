"use strict";
const d = document;
const _game = d.getElementById("game");

const userChoiceDisplay = d.createElement("h1");
const computerChoiceDisplay = d.createElement("h1");
const resultDisplay = d.createElement("h1");

_game.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const _Achoices = ["rock", "paper", "scissors"];
let userChoice;
let computerChoice;

const handleClick = (e) => {
  userChoice = e.target.id;
  console.log(userChoice);
  userChoiceDisplay.innerHTML = `User Choice: ${userChoice}`;
  generateComputerChoice();
  getResult();
};
const generateComputerChoice = () => {
  const randomChoice = _Achoices[Math.floor(Math.random() * _Achoices.length)];
  computerChoice = randomChoice;
  computerChoiceDisplay.innerHTML = `Computer Choice: ${randomChoice}`;
  console.log(randomChoice);
};

for (let i = 0; i < _Achoices.length; i++) {
  const button = d.createElement("button");
  button.id = _Achoices[i];
  button.innerHTML = _Achoices[i];
  button.addEventListener("click", handleClick);
  _game.appendChild(button);
}

const getResult = () => {
  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      resultDisplay.innerHTML = "YOU WIN!";
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      resultDisplay.innerHTML = "YOU LOSE!";
      break;
    case "paperpaper":
    case "rockrock":
    case "scissorsscissors":
      resultDisplay.innerHTML = "ITS A DRAW!";
      break;
  }
};
