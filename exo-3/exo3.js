// you can write js here
console.log('exo-3');

var playerInput = prompt("Your choice ( rock, paper, scissors) ?");

function getPlayerChoice(playerInput) {
    const choices = ["rock", "paper", "scissors"];
    if (choices.includes(playerInput)) {
        return playerInput;
    } else {
        throw new Error("Invalid choice");
    }
}

let playerChoice;
try {
    playerChoice = getPlayerChoice(playerInput.toLowerCase());
    console.log(playerChoice);
} catch (error) {
    console.error(error.message);
}

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        return "rock";
    }
    if (computerChoice == 1) {
        return "paper";
    }
    if (computerChoice == 2) {
        return "scissors";
    }
}

const computerChoice = getComputerChoice();
console.log(computerChoice);

function findWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer wins!";
        } else {
            return "Player wins!";
        }
    }

    if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer wins!";
        } else {
            return "Player wins!";
        }
    }

    if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Computer wins!";
        } else {
            return "Player wins!";
        }
    }
}

// Appel de la fonction
const result = findWinner(playerChoice, computerChoice);
console.log(result);