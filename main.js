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

let rockButton = document.createElement("button");
rockButton.textContent = "Rock";
let paperButton = document.createElement("button");
paperButton.textContent = "Paper";
let scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";

let body = document.querySelector("body");
let placard = document.querySelector("#placard");
placard.textContent = "Let's start a game";
body.append(rockButton, paperButton, scissorsButton);
body.addEventListener("click", (e) => {
  playRound(getHumanChoice(e), getComputerChoice());
});

function getHumanChoice(e) {
  return e.target.textContent;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice >= 5 || computerChoice >= 5) return;
  let topBanner = document.createElement("p");
  if (humanChoice == computerChoice) {
    topBanner.textContent = `It's a tie for this round! ${getScore()}`;
  } else if (
    (humanChoice == "Rock" && computerChoice == "Paper") ||
    (humanChoice == "Paper" && computerChoice == "Scissors") ||
    (humanChoice == "Scissors" && computerChoice == "Rock")
  ) {
    computerScore++;
    topBanner.textContent = `You lost this round!! :( ${getScore()}`;
  } else {
    humanScore++;
    topBanner.textContent = `You won this round!! :) ${getScore()}`;
  }
  if (computerScore === 5 || humanScore === 5) {
    topBanner.textContent = "";
    showFinalResult();
  }
  placard.replaceChildren(topBanner);
}

function getScore() {
  return `(${humanScore} - ${computerScore})`;
}

function showFinalResult() {
  let resultBanner = document.createElement("p");
  resultBanner.style.fontWeight = "bold";
  resultBanner.style.fontSize = "32px";
  resultBanner.textContent = `Game Completed! You are the final ${
    humanScore > computerScore
      ? "WINNER :)"
      : humanScore < computerScore
      ? "Loser :("
      : "Shared Winner"
  } ${getScore()}`;
  body.appendChild(resultBanner);
}
