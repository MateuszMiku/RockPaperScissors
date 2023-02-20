const myArray = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * myArray.length);
    return myArray[randomIndex];
}

