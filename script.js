let playerWins = 0;
let computerWins = 0;
winAchieved = false;

const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => playRound(button.id));
});

const result = document.querySelector("#result");
const winner = document.querySelector("#winner");

// Generate a random choice from the computer
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  console.log("The computer chose " + choices[choice] + ".");
  return choices[choice];
}

// Plays one round
function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  roundResult = evaluateRound(playerSelection, computerSelection);
  result.textContent = roundResult;
  evaluateWin();
}

// Evaluates who won the round
function evaluateRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie.";
  }

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerWins++;
      computerScore.textContent = `Computer Score: ${computerWins}`;
      return "You lose! Paper beats rock.";
    } else {
      // computerSelection is Scissors
      playerWins++;
      playerScore.textContent = `Player Score: ${playerWins}`;
      return "You win! Rock beats scissors.";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerWins++;
      playerScore.textContent = `Player Score: ${playerWins}`;
      return "You win! Paper beats rock.";
    } else {
      // computerSelection is Scissors
      computerWins++;
      computerScore.textContent = `Computer Score: ${computerWins}`;
      return "You lose! Scissors beats paper.";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerWins++;
      computerScore.textContent = `Computer Score: ${computerWins}`;
      return "You lose! Rock beats scissors.";
    } else {
      // computerSelection is Paper
      playerWins++;
      playerScore.textContent = `Player Score: ${playerWins}`;
      return "You win! Scissors beats paper.";
    }
  }
}

// Evaluates if someone won 5 games yet
function evaluateWin() {
  if (!winAchieved) {
    if (playerWins === 5) {
      winAchieved = true;
      winner.textContent = "The player reached 5 wins first! You can keep playing still.";
    } else if (computerWins === 5) {
      winAchieved = true;
      winner.textContent = "The computer reached 5 wins first! You can keep playing still.";
    }
  }
}
