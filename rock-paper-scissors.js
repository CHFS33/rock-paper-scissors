const hand = ['rock', 'paper', 'scissors'];

  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * hand.length);
    return hand[randomIndex];
  }

  function getHumanChoice() {
    let userInput;
    do {
      userInput = prompt("Round " + (currentRound + 1) + ": Choose rock, paper, or scissors").toLowerCase();
    } while (!hand.includes(userInput));

    return userInput;
  }

  let humanScore = 0;
  let computerScore = 0;
  let currentRound = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "It's a tie!";
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
  }

  function playGame() {
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;

    for (let i = 0; i < 3; i++) {
      currentRound = i;
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
      const result = playRound(humanChoice, computerChoice);

      alert(
        `Round ${i + 1} Result:\n${result}\n\nScore:\nYou: ${humanScore}\nComputer: ${computerScore}`
      );
    }

    // Final Result
    let finalMessage = "\n===== FINAL RESULT =====\n";
    if (humanScore > computerScore) {
      finalMessage += "🎉 You win the game!";
    } else if (computerScore > humanScore) {
      finalMessage += "😢 You lose the game!";
    } else {
      finalMessage += "🤝 It's a tie game!";
    }

    alert(finalMessage);
  }

  // Start the game when the page loads, or you can trigger it from a button
  playGame();