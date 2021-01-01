const responseType = [
  'rock',
  'paper',
  'scissors',
];

let round = 0;

const victoryCount = {
  playerRoundVictories: 0,
  computerRoundVictories: 0,
  playerGameVictories: 0,
  computerGameVictories: 0,
};

const playerOptions = document.querySelectorAll('button');
const textResults = document.querySelector('#results');
textResults.innerHTML = '<p>Press a button to play!</p>';

function displayMessageInTextResults(message) {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  textResults.appendChild(messageElement);
}

function updateScore(winner, type) {
  const idName = `#${winner.toLowerCase()}-${type.toLowerCase()}-score`;
  const propertyName = `${winner.toLowerCase()}${type}Victory`;
  const score = document.querySelector(idName);
  score.textContent = victoryCount[propertyName];
}

function addVictoryTo(winner) {
  displayMessageInTextResults(`The ${winner} wins`);
  if (winner === 'Player') {
    victoryCount.playerRoundVictories += 1;
  } else if (winner === 'Computer') {
    victoryCount.computerRoundVictories += 1;
  }
  updateScore(winner, 'Round');
}

function getPlayerSelection(e) {
  const playerSelection = e.srcElement.dataset.playerOption;
  displayMessageInTextResults(`The player picks ${playerSelection}`);
  return playerSelection;
}

function getComputerSelection() {
  const computerSelection = responseType[Math.floor((responseType.length * Math.random()))];
  displayMessageInTextResults(`The computer picks ${computerSelection}`);
  return computerSelection;
}

function playerWinConditions(playerSelection, computerSelection) {
  return (playerSelection === 'scissors' && computerSelection === 'paper')
    || (playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'paper' && computerSelection === 'rock');
}

function playRound(e) {
  const playerSelection = getPlayerSelection(e);
  const computerSelection = getComputerSelection();
  if (playerWinConditions(playerSelection, computerSelection)) {
    addVictoryTo('Player');
  } else if (playerSelection === computerSelection) {
    displayMessageInTextResults('Tie');
  } else {
    addVictoryTo('Computer');
  }
}

function playGame(e) {
  round += 1;
  textResults.innerHTML = '';
  if (round > 5) {
    round = 1;
    victoryCount.playerRoundVictories = 0;
    victoryCount.computerRoundVictories = 0;
  }
  if (round <= 5) {
    displayMessageInTextResults(`Round: ${round}`);
    playRound(e);
  }
  if (round === 5) {
    if (victoryCount.playerRoundVictories > victoryCount.computerRoundVictories) {
      displayMessageInTextResults('The player wins the game!!!');
    } else {
      displayMessageInTextResults('The computer wins the game!!!');
    }
  }
}

playerOptions.forEach((playerOption) => {
  playerOption.addEventListener('click', playGame);
});
