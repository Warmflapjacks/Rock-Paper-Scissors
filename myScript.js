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
            // console.log(playerSelection);

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
        console.log ("Its a tie!");
    }
    //used when not a tie
    else{
        if (playerSelection === "paper") {                       
            if (computerSelection === "rock") {
                console.log ("You win! " + playerSelection + " beats " + computerSelection);
            }
            else {
                console.log("You lose! Scissors beats " + playerSelection);
            }
        }
        if (playerSelection === "rock") {                        
            if (computerSelection === "scissors") {
                console.log("You win! " + playerSelection + " beats " + computerSelection);
            }
            else {
                console.log("You lose! Paper beats " + playerSelection);
            }
        }
        if (playerSelection === "scissors") {                 
            if (computerSelection === "paper") {
                console.log("You win! " + playerSelection + " beats " + computerSelection);
            }
            else {
                console.log("You lose! Rock beats " + playerSelection);
            }
        }
    }
}
playGame();