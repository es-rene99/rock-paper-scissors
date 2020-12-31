const responseType = [
  'rock',
  'paper',
  'scissors',
];

let round = 0;

let playerVictory = 0;

let computerVictory = 0;

const playerOptions = document.querySelectorAll('button');
const textResults = document.querySelector('#results');
textResults.innerHTML = '<p>Press a button to play!</p>';

function displayMessageInTextResults(message) {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  textResults.appendChild(messageElement);
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
    displayMessageInTextResults('The player wins');
    playerVictory += 1;
  } else if (playerSelection === computerSelection) {
    displayMessageInTextResults('Tie');
    computerVictory += 1;
  } else {
    displayMessageInTextResults('The computer wins');
  }
}

function playGame(e) {
  textResults.innerHTML = '';
  if (round !== 5) {
    round += 1;
    displayMessageInTextResults(`Round: ${round}`);
    playRound(e);
  }

  if (round === 5) {
    if (playerVictory > computerVictory) {
      displayMessageInTextResults('The player wins the game!!!');
    } else {
      displayMessageInTextResults('The computer wins the game!!!');
    }
  }
}

playerOptions.forEach((playerOption) => {
  playerOption.addEventListener('click', playGame);
});
