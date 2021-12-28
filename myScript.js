//global variables
let playerScore = 0;
let computerScore = 0;

//gets computer selection
function getComputerSelection () {
    let computerOption = [
        "rock",
        "paper",
        "scissors"
    ];

    //randomly selects a computer pick from computerOption array
    let computerSelection = computerOption[Math.floor(Math.random() * computerOption.length)]
    return computerSelection
}

function playGame() {
    //defines group of buttons from 
    let buttons = document.querySelectorAll('button');
    //loops through <button> and returns button id as playerSelection
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let playerSelection = button.id;

            //gets computer selection
            let computerSelection = getComputerSelection();  

            //call playRound function
            if ((playerScore === 5) || (computerScore === 5)) {
                document.getElementById("final-result").textContent = "GAME OVER";
            }
            else {
                playRound(playerSelection,computerSelection);
            }
        })
    })
}

//define playRound. playerSelection and computerSelection are local variables in the function and are not global
function playRound (playerSelection, computerSelection) {
    //if selections are a tie
    if (playerSelection === computerSelection) {                 
        document.getElementById("game-log").textContent = "Its a tie!";
    }
    //used when not a tie
    else {
        if (playerSelection === "paper") {                       
            if (computerSelection === "rock") {
                document.getElementById("game-log").textContent = "You win! Paper beats Rock";
                playerScore++;
            }
            else {
                document.getElementById("game-log").textContent = "You lose! Scissors beats Paper";
                computerScore++;
            }
        }
        if (playerSelection === "rock") {                        
            if (computerSelection === "scissors") {
                document.getElementById("game-log").textContent = "You win! Rocks beats Scissors";
                playerScore++;
            }
            else {
                document.getElementById("game-log").textContent = "You lose! Paper beats Rock";
                computerScore++;
            }
        }
        if (playerSelection === "scissors") {                 
            if (computerSelection === "paper") {
                document.getElementById("game-log").textContent = "You win! Scissors beats Paper";
                playerScore++;
            }
            else {
                document.getElementById("game-log").textContent = "You lose! Rock beats Scissors";
                computerScore++;
            }
        }
    }
    //shows running score
    document.getElementById("player-running-count").innerHTML = `${playerScore}`;
    document.getElementById("computer-running-count").innerHTML = `${computerScore}`;
}

playGame();