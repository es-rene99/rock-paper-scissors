let responseType = [
    "rock",
    "paper",
    "scissor"
]
let errorFlag = false;

function computerPlay(){
    let randomResponse = responseType[Math.floor((responseType.length * Math.random()))];
    console.log(`The computer picks ${randomResponse}`);
    return randomResponse;
}

function userPlay(){
    let userResponse = prompt('Rock, paper, scissor! (you picked:)');
    console.log(`The player picks ${userResponse}`);
    if(responseType.includes(userResponse)){
        errorFlag = false;
        return userResponse;
    } else {
        errorFlag = true;
        return "";
    }
}

function singleRound(playerSelection, computerSelection){
    if(errorFlag == true) return "Not a valid answer";
    if (playerSelection == "scissor" && computerSelection == "paper" ||
        playerSelection == "rock" && computerSelection == "scissor" ||
        playerSelection == "paper" && computerSelection == "rock"
    ){
        return "The player wins"
    }
    else if(playerSelection == computerSelection){
        return "Tie";
    }
    else{
        return "The computer wins"
    }
}
function game(){
    let userScore = 0;
    let computerScore = 0;
    let winRoundMessage;
    for(round = 1; round <= 3; round++){
        winRoundMessage = singleRound(userPlay(),computerPlay());
        switch(winRoundMessage){
            case "The player wins": 
                userScore++;
                break;
            case "The computer wins": 
                computerScore++;
                break;
            case "Not a valid answer":
            case "Tie": 
                console.log("Try again");
                round--;
                break;
            default: 
            console.log("An error has ocurred...");        
        }
        console.log(winRoundMessage);
        console.log(`User Score: ${userScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
    let definitiveWinnerMessage = (userScore>computerScore)?"The playe wins the game!":"The computer wins the game!";
    console.log(definitiveWinnerMessage);
}
