// pick rock, paper, or scissors

function play(pChoice) {
  let computer = Math.random();
  if (computer < .34) {
    computer = "rock";
  } else if (computer <= .67) {
    computer = "paper";
  } else {
    computer = "scissors";
  }
  winner(pChoice, computer)
}



let gameElement = document.querySelector("#game-status")


// figure out who won
function winner(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return gameElement.textContent = "It's a tie! Play Again!"
  }
  if (playerChoice == "rock") {
    if (computerChoice == "paper") {
      return gameElement.textContent = "You Lose! Play again!"
    } else {
      return gameElement.textContent = "You Win! Play Again!"
    }
  }
  if (playerChoice == "paper") {
    if (computerChoice == "scissors") {
      return gameElement.textContent = "You Lose! Play again!"
    } else {
      return gameElement.textContent = "You Win! Play Again!"
    }
  }
  if (playerChoice == "scissors") {
    if (computerChoice == "rock") {
      return gameElement.textContent = "You Lose! Play again!"
    } else {
      return gameElement.textContent = "You Win! Play Again!"
    }
  }
}
