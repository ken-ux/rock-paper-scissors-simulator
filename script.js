// Generate a random choice from the computer
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  console.log("The computer chose " + choices[choice] + ".");
  return choices[choice];
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => playRound(button.id));
});

const result = document.querySelector("#result");

// Evaluates whether the player or the computer won with their choice
function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  roundResult = evaluateRound(playerSelection, computerSelection);
  result.textContent = roundResult;
}

function evaluateRound(playerSelection, computerSelection) {
  // Return a tie and end game
  if (playerSelection === computerSelection) {
    return "It's a tie.";
  }

  // Play game normally
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You lose! Paper beats rock.";
    } else {
      // computerSelection is Scissors
      return "You win! Rock beats scissors.";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You win! Paper beats rock.";
    } else {
      // computerSelection is Scissors
      return "You lose! Scissors beats paper.";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You lose! Rock beats scissors.";
    } else {
      // computerSelection is Paper
      return "You win! Scissors beats paper.";
    }
  } else {
    return 'Invalid choice. Please choose "rock", "paper", or "scissors".';
  }
}

// Plays a game of rock, paper, scissors
// function playGame() {
//   let playerSelection = getPlayerChoice();
//   let computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));
// }

// playGame();
