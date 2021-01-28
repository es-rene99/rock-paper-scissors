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

function increaseScore(winner, victoryType) {
  const idName = `#${winner.toLowerCase()}-${victoryType.toLowerCase()}-score`;
  const propertyName = `${winner.toLowerCase()}${victoryType}Victories`;
  victoryCount[propertyName] += 1;
  const score = document.querySelector(idName);
  score.textContent = victoryCount[propertyName];
}

function addVictoryTo(winner, victoryType) {
  displayMessageInTextResults(`The ${winner} wins the ${victoryType}!`);
  increaseScore(winner, victoryType);
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
    addVictoryTo('Player', 'Round');
  } else if (playerSelection === computerSelection) {
    displayMessageInTextResults('Tie');
  } else {
    addVictoryTo('Computer', 'Round');
  }
}

function resetGameRounds() {
  round = 1;
  const resetValue = 0;
  victoryCount.playerRoundVictories = resetValue;
  victoryCount.computerRoundVictories = resetValue;
  const roundScores = document.querySelectorAll('.round-score');
  roundScores.forEach((roundScore) => {
    // * justification: resetting UI value
    // eslint-disable-next-line no-param-reassign
    roundScore.textContent = resetValue;
  });
}

function playGame(e) {
  round += 1;
  textResults.innerHTML = '';
  if (round > 5) {
    resetGameRounds();
  }
  if (round <= 5) {
    displayMessageInTextResults(`Round: ${round}`);
    playRound(e);
  }
  if (round === 5) {
    if (victoryCount.playerRoundVictories > victoryCount.computerRoundVictories) {
      addVictoryTo('Player', 'Game');
    } else if (victoryCount.playerRoundVictories === victoryCount.computerRoundVictories) {
      displayMessageInTextResults('The game was a tie!');
    } else {
      addVictoryTo('Computer', 'Game');
    }
  }
}

playerOptions.forEach((playerOption) => {
  playerOption.addEventListener('click', playGame);
});
