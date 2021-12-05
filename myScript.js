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
    for (let i = 1; i <= 5; i++) {
        //prompt for player selection of rock, paper or scissors
        const playerSelection = window.prompt("Select Rock, Paper or Scissors:");
        
        //lowercase to check input validation parameters
        const lowercasePlayerSelection = playerSelection.toLowerCase();
        
        // //call for input validation (UNDER CONSTRUCTION)
        // validateUserInput(lowercasePlayerSelection);
        // //(END UNDER CONSTRUCTION)

        //selects computers choice of rock, paper or scissors. option to print selection to console
        const computerSelection = getComputerSelection();
        //console.log ("Computer selection: " + computerSelection);
        
        //call playRound function
        playRound(lowercasePlayerSelection,computerSelection);
    }
}

//define playRound
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

// function validateUserInput(userInput); {
//     //valid options to compare playerSelection to
//     const validOption = [
//         "rock",
//         "paper",
//         "scissors"
//     ];

//     //validates player input
//     for(let i = 0; i <= validOption.length; i++) {
//         if (lowercasePlayerSelection == validOption[i]) {
//             console.log("INSIDE VALIDATION LOOP")
//         }
//         else {
//             console.log("INSIDE INVALID LOOP");
//             console.log("NEED VALID USER INPUT");
//             break;
//         }
//     }
// }
playGame();