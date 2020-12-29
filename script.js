const responseType = [
  'rock',
  'paper',
  'scissors',
];
let errorFlag = false;

function computerPlay() {
  const randomResponse = responseType[Math.floor((responseType.length * Math.random()))];
  console.log(`The computer picks ${randomResponse}`);
  return randomResponse;
}

function userPlay() {
  const userResponse = prompt('Rock, paper, scissors! (you picked:)');
  console.log(`The player picks ${userResponse}`);
  if (responseType.includes(userResponse)) {
    errorFlag = false;
    return userResponse;
  }
  errorFlag = true;
  return '';
}

function singleRound(playerSelection, computerSelection) {
  if (errorFlag === true) return 'Not a valid answer';
  if ((playerSelection === 'scissors' && computerSelection === 'paper')
    || (playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    return 'The player wins';
  }
  if (playerSelection === computerSelection) {
    return 'Tie';
  }

  return 'The computer wins';
}
function game() {
  const userScore = 0;
  const computerScore = 0;
  let winRoundMessage;
  const definitiveWinnerMessage = (userScore > computerScore) ? 'The playe wins the game!' : 'The computer wins the game!';
  console.log(definitiveWinnerMessage);
}
