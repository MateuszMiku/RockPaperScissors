const myArray = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * myArray.length);
    return myArray[randomIndex];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "The game ended as a draw"
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose, paper beats rock"
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You win, rock beats scissors"
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You win, paper beats rock"
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose, scissors beat paper"
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose, rock beats scissors"
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win, scissors beat paper"
    } 
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
