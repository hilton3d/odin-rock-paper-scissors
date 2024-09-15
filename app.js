// playing game in console

// get computer choice

// function getComputerChoice() {
//   let computerSelection = ["rock", "paper", "scissors"];
//   let random = Math.floor(Math.random() * computerSelection.length);
//   return computerSelection[random];
//   // console.log(computerSelection[random]);
// }

// // get human choice

// function getHumanChoice() {
//   let humanSelection = prompt("Type rock, paper, or scissors");
//   if (humanSelection === null || humanSelection === "") {
//     return false;
//   } else {
//     return humanSelection.toLowerCase();
//     //console.log(humanSelection.toLowerCase());
//   }
// }

// // play the game for 5 rounds

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;
//   for (let i = 0; i < 5; i++) {
//     function playRound(humanChoice, computerChoice) {
//       if (humanChoice === computerChoice) {
//         console.log("It's a draw!");
//         console.log("Player: " + humanScore);
//         console.log("Computer: " + computerScore);
//         console.log(" ");
//       } else if (humanChoice === "rock" && computerChoice === "scissors") {
//         humanScore++;
//         console.log("You win! Rock smashes scissors!");
//         console.log("Player: " + humanScore);
//         console.log("Computer: " + computerScore);
//         console.log(" ");
//       } else if (humanChoice === "rock" && computerChoice === "paper") {
//         computerScore++;
//         console.log("You lose! Paper covers rock!");
//         console.log("Player: " + humanScore);
//         console.log("Computer: " + computerScore);
//         console.log(" ");
//       } else if (humanChoice === "scissors" && computerChoice === "paper") {
//         humanScore++;
//         console.log("You win! Scissors cut paper!");
//         console.log("Player: " + humanScore);
//         console.log("Computer: " + computerScore);
//         console.log(" ");
//       } else if (humanChoice === "scissors" && computerChoice === "rock") {
//         computerScore++;
//         console.log("You lose! Rock smashes scissors!");
//         console.log("Player: " + humanScore);
//         console.log("Computer: " + computerScore);
//         console.log(" ");
//       } else if (humanChoice === "paper" && computerChoice === "scissors") {
//         computerScore++;
//         console.log("You lose! Scissors cut paper!");
//         console.log("Player: " + humanScore);
//         console.log("Computer: " + computerScore);
//         console.log(" ");
//       } else if (humanChoice === "paper" && computerChoice === "rock") {
//         humanScore++;
//         console.log("You win! Paper covers rock!");
//         console.log("Player: " + humanScore);
//         console.log("Computer: " + computerScore);
//         console.log(" ");
//       }
//     }

//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection);
//   }
//   if (computerScore > humanScore) {
//     console.log("Game over! You lose!");
//   } else if (humanScore > computerScore) {
//     console.log("Game over! You win!");
//   } else if (humanScore === computerScore) {
//     console.log("Game over! It's still a draw!");
//   }
// }

// playGame();

// new code with UI

const computerChoiceDisplay = document.querySelector(".computer-choice");
const playerChoiceDisplay = document.querySelector(".player-choice");
const resultDisplay = document.querySelector(".result-display");
const possibleChoices = document.querySelectorAll("button");
let result;
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    playerChoice = e.target.className;
    let capitalized =
      playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    playerChoiceDisplay.textContent = capitalized;
    generateComputerChoice();
    getResult();
    gameOver();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  let capitalized =
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
  computerChoiceDisplay.textContent = capitalized;
}

function getResult() {
  if (playerChoice === "rock" && computerChoice === "paper") {
    console.log("you lose");
    computerScore++;
  }
  if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log("you win");
    playerScore++;
  }
  if (playerChoice === "paper" && computerChoice === "rock") {
    console.log("you win");
    playerScore++;
  }
  if (playerChoice === "paper" && computerChoice === "scissors") {
    console.log("you lose");
    computerScore++;
  }
  if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log("you win");
    playerScore++;
  }
  if (playerChoice === "scissors" && computerChoice === "rock") {
    console.log("you lose");
    computerScore++;
  }

  const playerCount = document.querySelector(".player-count");
  const computerCount = document.querySelector(".computer-count");
  playerCount.textContent = playerScore;
  computerCount.textContent = computerScore;
}

function gameOver() {
  const removeBtns = document.querySelector(".btns");
  if (playerScore === 5) {
    result = "You won the game!";
    removeBtns.remove();
  }
  if (computerScore === 5) {
    result = "You lost the game!";
    removeBtns.remove();
  }
  resultDisplay.textContent = result;
}

// https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/
