//computer selector
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
            // document.getElementById("result-container").innerHTML = (playerSelection);

            //gets computer selection
            let computerSelection = getComputerSelection();

            //call playRound function
            playRound(playerSelection,computerSelection);
        })
    })
}

//define playRound. playerSelection and computerSelection are local variables in the function and are not global
function playRound (playerSelection, computerSelection) {
    
    //if selections are a tie
    if (playerSelection === computerSelection) {                 
        document.getElementById("result-container").textContent = "Its a tie!";
    }
    //used when not a tie
    else{
        if (playerSelection === "paper") {                       
            if (computerSelection === "rock") {
                document.getElementById("result-container").textContent = "You win! Paper beats Rock";  
            }
            else {
                document.getElementById("result-container").textContent = "You lose! Scissors beats Paper";   
            }
        }
        if (playerSelection === "rock") {                        
            if (computerSelection === "scissors") {
                document.getElementById("result-container").textContent = "You win! Rocks beats Scissors";   
            }
            else {
                document.getElementById("result-container").textContent = "You lose! Paper beats Rock";   
            }
        }
        if (playerSelection === "scissors") {                 
            if (computerSelection === "paper") {
                document.getElementById("result-container").textContent = "You win! Scissors beats Paper";
            }
            else {
                document.getElementById("result-container").textContent = "You lose! Rock beats Scissors";
            }
        }
    }
}
playGame();