const responseType = [
  'rock',
  'paper',
  'scissors',
];

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
  textResults.innerHTML = '';
  const playerSelection = getPlayerSelection(e);
  const computerSelection = getComputerSelection();
  if (playerWinConditions(playerSelection, computerSelection)) {
    displayMessageInTextResults('The player wins');
  } else if (playerSelection === computerSelection) {
    displayMessageInTextResults('Tie');
  } else {
    displayMessageInTextResults('The computer wins');
  }
}

playerOptions.forEach((playerOption) => {
  playerOption.addEventListener('click', playRound);
});
