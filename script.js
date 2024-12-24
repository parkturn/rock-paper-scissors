// psuedo code
// create a list of playable choices
// create function to show heirarchy of choices and which beats which
// create score keeper variables for player and computer with initial values of 0
// create a function to increment the score of the winner
// create a function to display the score
// create a function to display the round number
// create a function to play a round
// create a function to play the game
// get a random computer choice
// get player choice
// compare choices by checking if player choice beats computer choice
// determine winner
// display winner


const choices = ['rock', 'paper', 'scissors'];

// Create an object to store the scores so we can pass by reference
const gameState = {
    playerScore: 0,
    computerScore: 0
};

function playGame() {
    // Reset scores at the start of each game
    gameState.playerScore = 0;
    gameState.computerScore = 0;
    
    while (gameState.playerScore < 3 && gameState.computerScore < 3) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice, gameState);
    }
    
    if (gameState.playerScore > gameState.computerScore) {
        console.log('You win! Final score: ' + gameState.playerScore + ' - ' + gameState.computerScore);
    } else {
        console.log('You lose! Final score: ' + gameState.playerScore + ' - ' + gameState.computerScore);
    }
}

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function getHumanChoice() {
    const humanChoice = prompt('Which choice do you want to make? (rock, paper, scissors)');
    return humanChoice;
}

function playRound(humanChoice, computerChoice, gameState) {
    if (computerChoice === humanChoice) {
        console.log('tie... Current score: ' + gameState.playerScore + ' - ' + gameState.computerScore);
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        gameState.computerScore++;
        console.log('You lose! Rock beats Scissors... Current score: ' + gameState.playerScore + ' - ' + gameState.computerScore);
    } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
        gameState.playerScore++;
        console.log('You win! Rock beats Scissors... Current score: ' + gameState.playerScore + ' - ' + gameState.computerScore);
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        gameState.computerScore++;
        console.log('You lose! Scissors beats Paper... Current score: ' + gameState.playerScore + ' - ' + gameState.computerScore);
    } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
        gameState.playerScore++;
        console.log('You win! Scissors beats Paper... Current score: ' + gameState.playerScore + ' - ' + gameState.computerScore);
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        gameState.computerScore++;
        console.log('You lose! Paper beats Rock... Current score: ' + gameState.playerScore + ' - ' + gameState.computerScore);
    } else if (computerChoice === 'rock' && humanChoice === 'paper') {
        gameState.playerScore++;
        console.log('You win! Paper beats Rock... Current score: ' + gameState.playerScore + ' - ' + gameState.computerScore);
    } else {
        console.log('Invalid choice');
    }
}

playGame();