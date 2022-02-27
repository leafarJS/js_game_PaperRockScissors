"use strict";
const d = document;
const _choicesDisplay = d.querySelector("#choices");
const _resultDisplay = d.querySelector("#result");

const _Achoices = ["rock", "paper", "scissors"];

const handleClick = (e) => {
  const userChoice = e.target.innerHTML;
  const computerChoice =
    _Achoices[Math.floor(Math.random() * _Achoices.length)];
  getResults(userChoice, computerChoice);
};

_Achoices.forEach((choice) => {
  const button = d.createElement("button");
  button.innerHTML = choice;
  button.addEventListener("click", handleClick);
  _choicesDisplay.appendChild(button);
});
const getResults = (user, computer) => {
  switch (user + computer) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      _resultDisplay.innerHTML = `You chose ${user.toUpperCase()} and the computer chose ${computer.toUpperCase()}, YOU WIN!!`;
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      _resultDisplay.innerHTML = `You chose ${user.toUpperCase()} and the computer chose ${computer.toUpperCase()}, YOU LOSE!!`;
      break;
    case "paperpaper":
    case "rockrock":
    case "scissorsscissors":
      _resultDisplay.innerHTML = `You chose ${user.toUpperCase()} and the computer chose ${computer.toUpperCase()}, ITS A DRAW!!`;
      break;
  }
};
