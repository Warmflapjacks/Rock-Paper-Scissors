// function computerPlay () {
//     let computerOption = [
//         "rock",
//         "paper",
//         "scissors"
//     ];

//     //randomly selects a computer pick from computerOption array
//     let computerSelection = computerOption[Math.floor(Math.random() * computerOption.length)]
//     return computerSelection
// }

function playRound (playerSelection, computerSelection) {
    /*Pseudo
    -Paper beats rock
    -Rock beats scissors
    -Scissor beats paper
    
    -send playerSelection into a variable that converts string into lowercase
    -compare between playerSelection and computerSelection
    -declare a winner using playerSelection and computerSelection variables (from playerSelection perspective)
    -RETURN ALL VALUES NOT CONSOLE.LOG()
    */

    let playerPick = playerSelection.toLowerCase();

    //if selections are a tie
    if (playerPick === computerSelection) {
        console.log("Its a tie!")
    }
    //used when not a tie
    else{
        if (playerPick === "paper") {
            if (computerSelection === "rock") {
                console.log("You win! " + playerSelection + " beats " + computerSelection);
            }
            else {
                console.log("You lose! Scissors beats " + playerSelection);
            }
        }
    }
}

// REMOVE
// tests output
// console.log(computerPlay());

// uncomment this line and line 40 when live
// const computerSelection = computerPlay();
const computerSelection = "scissors";
const playerSelection = "Paper";

// test output
console.log(playRound(playerSelection,computerSelection));