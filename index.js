const possibilities = ["rock", "paper", "scissors"];

function getComputerChoice(possibilities) {
  return possibilities[Math.floor(Math.random() * possibilities.length)];
}

function playRound(playerSelection, computerChoice) {
  if (playerSelection == computerChoice) {
    return "tie";
  } else if (playerSelection == "rock" && computerChoice == "scissors") {
    return "win";
  } else if (playerSelection == "scissors" && computerChoice == "paper") {
    return "win";
  } else if (playerSelection == "paper" && computerChoice == "rock") {
    return "win";
  } else if (playerSelection == "rock" && computerChoice == "paper") {
    return "lose";
  } else if (playerSelection == "scissors" && computerChoice == "rock") {
    return "lose";
  } else if (playerSelection == "paper" && computerChoice == "scissors") {
    return "lose";
  } else {
    return "incorrect";
  }
}

let winCounter = 0;
let tieCounter = 0;
let loseCounter = 0;
let incorrectCounter = 0;

for (let i = 0; i < 5; i++) {
  let computerChoice = getComputerChoice(possibilities);
  console.log(computerChoice);
  let playerSelection = prompt(
    `Round ${i + 1}\nWhat's your guess?\nRock, Paper, Scissors`
  ).toLowerCase();
  let result = playRound(playerSelection, computerChoice);
  if (result == "win") {
    console.log("Round won");
    winCounter++;
  } else if (result == "tie") {
    console.log("Round tie");
    tieCounter++;
  } else if (result == "lose") {
    console.log("Round lose");
    loseCounter++;
  } else {
    console.log("Incorrect value");
    incorrectCounter++;
  }
}

alert(
  `You won ${winCounter} rounds, lost ${loseCounter}, tied ${tieCounter} and inputted ${incorrectCounter} values`
);
