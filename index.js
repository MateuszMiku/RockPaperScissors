const myArray = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * myArray.length);
    return myArray[randomIndex];
}

    playerScore = 0;
    computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "The game ended as a draw";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return "You lose, paper beats rock";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return "You win, rock beats scissors";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return "You win, paper beats rock";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return "You lose, scissors beat paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return "You lose, rock beats scissors";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return "You win, scissors beat paper";
    } 
}


function game() {
    for (let i =0; i < 5; i++) {
        let playerSelection = prompt('Enter your choice', '');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        score = (playerScore + ':' + computerScore);
    }

    if (playerScore > computerScore) {
            console.log("You won, the score is " + score );
        } else if (playerScore = computerScore) {
            console.log("The game ended as a draw, the score is " + score );
        } else if (playerScore < computerScore) {
            console.log("You lost, the score is " + score );
    }
}
