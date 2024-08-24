// get computer choice

function getComputerChoice() {
  let computerSelection = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * computerSelection.length);
  return computerSelection[random];
  // console.log(computerSelection[random]);
}

// get human choice

function getHumanChoice() {
  let humanSelection = prompt("Type rock, paper, or scissors");
  if (humanSelection === null || humanSelection === "") {
    return false;
  } else {
    return humanSelection.toLowerCase();
    //console.log(humanSelection.toLowerCase());
  }
}

// play the game for 5 rounds

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        console.log("It's a draw!");
        console.log("Player: " + humanScore);
        console.log("Computer: " + computerScore);
      } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You win! Rock smashes scissors!");
        console.log("Player: " + humanScore);
        console.log("Computer: " + computerScore);
      } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("You lose! Paper covers rock!");
        console.log("Player: " + humanScore);
        console.log("Computer: " + computerScore);
      } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win! Scissors cut paper!");
        console.log("Player: " + humanScore);
        console.log("Computer: " + computerScore);
      } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You lose! Rock smashes scissors!");
        console.log("Player: " + humanScore);
        console.log("Computer: " + computerScore);
      } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("You lose! Scissors cut paper!");
        console.log("Player: " + humanScore);
        console.log("Computer: " + computerScore);
      } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win! Paper covers rock!");
        console.log("Player: " + humanScore);
        console.log("Computer: " + computerScore);
      }
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
  if (computerScore > humanScore) {
    console.log("Game over! You lose!");
  } else if (humanScore > computerScore) {
    console.log("Game over! You win!");
  } else if (humanScore === computerScore) {
    console.log("Game over! It's still a draw!");
  }
}

playGame();
