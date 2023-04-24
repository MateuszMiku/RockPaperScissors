const myArray = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * myArray.length);
    return myArray[randomIndex];
}

    let playerScore = 0;
    let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        document.getElementById("text").textContent = "The game ended as a draw";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        document.getElementById("text").textContent = "You lose, paper beats rock";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        document.getElementById("text").textContent = "You win, rock beats scissors";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        document.getElementById("text").textContent = "You win, paper beats rock";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        document.getElementById("text").textContent = "You lose, scissors beat paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        document.getElementById("text").textContent = "You lose, rock beats scissors";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        document.getElementById("text").textContent = "You win, scissors beat paper";
    } 
    
    document.getElementById("results").textContent = playerScore + ":" + computerScore;

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            document.getElementById("endgame").textContent = "You won the game!";
        } else {
            document.getElementById("endgame").textContent = "You lost the game!";
        }
    }

}
        document.getElementById("rock").addEventListener("click", function() {
            playRound('rock', getComputerChoice());
        });
        document.getElementById("paper").addEventListener("click", function() {
            playRound('paper', getComputerChoice());
        });
        document.getElementById("scissors").addEventListener("click", function() {
            playRound('scissors', getComputerChoice());
        });

    
    

