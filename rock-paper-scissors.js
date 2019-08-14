// pick rock, paper, or scissors

function play(pChoice) {
  let computer = "rock";
  winner(pChoice, computer)
}

// let gameElement = document.querySelector("#game-status")
// gameElement.textContent = 

// figure out who won
function winner(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return "It's a tie! Play again!"
  }
  if (playerChoice == "rock") {
    if (computerChoice == "paper") {
      return "You Lose! Play again!"
    } else {
      return "You Win! Play Again!"
    }
  }
  if (playerChoice == "paper") {
    if (computerChoice == "scissors") {
      return "You Lose! Play again!"
    } else {
      return "You Win! Play Again!"
    }
  }
  if (playerChoice == "scissors") {
    if (computerChoice == "rock") {
      return "You Lose! Play again!"
    } else {
      return "You Win! Play Again!"
    }
  }
}
