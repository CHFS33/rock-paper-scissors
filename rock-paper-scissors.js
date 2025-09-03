const hand = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * hand.length);
  return hand[randomIndex];
}
console.log(getComputerChoice());
function getHumanChoice(input) {
let userInput = prompt("Please choose rock, paper, or scissors");
return userInput.toLowerCase();
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice.toLowerCase() === computerChoice) {
    return "It's a tie!";
  }

 if (
(humanChoice === "rock" && computerChoice === "scissors") ||
(humanChoice === "scissors" && computerChoice === "paper") || 
(humanChoice === "paper" && computerChoice === "rock")
 ) {
   humanScore++;
return `You win! ${humanChoice} beats ${computerChoice}`;

 }
 else {
   computerScore++;
   return `You lose! ${computerChoice} beats ${humanChoice}`;
  
 }
 }
 function playGame() {
  humanScore = 0;     // reset each new game
  computerScore = 0;

  for (let i = 0; i < 3; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Round ${i + 1}:`);
    console.log(playRound(humanSelection, computerSelection));
    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    console.log("------------------");
  }

  // Final result
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
   console.log("You lose the game!");
  } else {
    console.log("It's a tie game!");
  }
}
playGame();
