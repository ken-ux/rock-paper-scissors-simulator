// Generate a random choice from the computer
function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * 3);
  console.log("The computer chose " + choices[choice] + ".");
  return choices[choice];
}

// Prompt player for a choice. The input is case-insensitive
function getPlayerChoice() {
  let choice = prompt("Rock, paper, or scissors?");

  // If prompt is cancelled without user input, end the prompt session
  if (choice === null) {
    console.log("You cancelled the prompt. Please make a choice.");
    return null;
  }

  // Trim white space from any user input
  choice = choice.trim();

  if (choice === "") { // Check if string is empty
    console.log("Your choice is empty. Please make a choice.");
    return null;
  } else { // If string is not empty, capitalize it
    choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();
    console.log("You chose " + choice);
    return choice;
  }
}

// Evaluates whether the player or the computer won with their choice
function playRound(playerSelection, computerSelection) {
  // Return a tie and end game
  if (playerSelection === computerSelection) {
    return "It's a tie.";
  }

  // Play game normally
  if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      return "You lose! Paper beats rock.";
    } else {
      // computerSelection is Scissors
      return "You win! Rock beats scissors.";
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      return "You win! Paper beats rock.";
    } else {
      // computerSelection is Scissors
      return "You lose! Scissors beats paper.";
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
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
function playGame() {
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
}

playGame();
