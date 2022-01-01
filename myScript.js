//global variables
let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('button');

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
    //loops through <button> and returns button id as playerSelection
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let playerSelection = button.id;

            //gets computer selection
            let computerSelection = getComputerSelection();  

            //call playRound function
            if ((playerScore === 5) || (computerScore === 5)) {
                //endgame messages
                if (playerScore > computerScore) {
                    document.getElementById("final-result").textContent = "Bloody hell, you've decimated the enemy! They are in shambles and running away!";
                }
                else {
                document.getElementById("final-result").textContent = "You have been destroyed.";
                }
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
                document.getElementById("game-log").textContent = "You win! Walker Arrows beats Dragons";
                playerScore++;
            }
            else {
                document.getElementById("game-log").textContent = "You lose! Dragonglass beats Walker Arrows";
                computerScore++;
            }
        }
        if (playerSelection === "rock") {                        
            if (computerSelection === "scissors") {
                document.getElementById("game-log").textContent = "You win! Dragons beats Dragonglass";
                playerScore++;
            }
            else {
                document.getElementById("game-log").textContent = "You lose! Walker Arrows beats Dragons";
                computerScore++;
            }
        }
        if (playerSelection === "scissors") {                 
            if (computerSelection === "paper") {
                document.getElementById("game-log").textContent = "You win! Dragonglass beats Walker Arrows";
                playerScore++;
            }
            else {
                document.getElementById("game-log").textContent = "You lose! Dragons beats Dragonglass";
                computerScore++;
            }
        }
    }
    //shows running score
    document.getElementById("running-count").innerHTML = `Your Score: ${playerScore} || Computer Score: ${computerScore}`;
}

playGame();