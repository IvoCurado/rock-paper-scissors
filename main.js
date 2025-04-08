let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.random();
  if (random < 1 / 3) {
    return "Rock";
  }
  if (random > 2 / 3) {
    return "Scissors";
  }
  return "Paper";
}

// console.log(getComputerChoice());

function getHumanChoice() {
  let inputted = parseInt(
    prompt("Choose: \n1 - Rock\n2 - Paper\n3 - Scissors")
  );
  switch (inputted) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

// console.log(getHumanChoice());
// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("It's a tie for this round! Try again...");
  } else if (
    (humanChoice == "Rock" && computerChoice == "Paper") ||
    (humanChoice == "Paper" && computerChoice == "Scissors") ||
    (humanChoice == "Scissors" && computerChoice == "Rock")
  ) {
    computerScore++;
    console.error(`You lost this round!! :( ${getScore()}`);
    return;
  } else {
    humanScore++;
    console.info(`You won this round!! :) ${getScore()}`);
  }
}

function getScore() {
  return `(${humanScore} - ${computerScore})`;
}

function playGame() {
  console.log("Game Started!");
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log(
    `Game Completed! You are the final ${
      humanScore > computerScore ? "WINNER :)" : ( humanScore < computerScore ? "Loser :(" : 'Shared Winner')
    } ${getScore()}`
  );
}

playGame();
