function computerPlay () {
    let computerOption = [
        "rock",
        "paper",
        "scissors"
    ];

    //randomly selects a computer pick from computerOption array
    let computerSelection = computerOption[Math.floor(Math.random() * computerOption.length)]
    return computerSelection
}

function game() {
    for (let i = 1; i <= 5; i++) {
        function playRound (playerSelection, computerSelection) {
            //sends playerselection to lowercase
            let playerPick = playerSelection.toLowerCase();

            //if selections are a tie
            if (playerPick === computerSelection) {
                console.log ("Its a tie!");
                // return ("Its a tie!");
            }
            //used when not a tie
            else{
                if (playerPick === "paper") {
                    if (computerSelection === "rock") {
                        console.log ("You win! " + playerSelection + " beats " + computerSelection);
                        // return ("You win! " + playerSelection + " beats " + computerSelection);
                    }
                    else {
                        console.log("You lose! Scissors beats " + playerSelection);
                        // return ("You lose! Scissors beats " + playerSelection);
                    }
                }
                if (playerPick === "rock") {
                    if (computerSelection === "scissors") {
                        console.log("You win! " + playerSelection + " beats " + computerSelection);
                        // return ("You win! " + playerSelection + " beats " + computerSelection);
                    }
                    else {
                        console.log("You lose! Paper beats " + playerSelection);
                        // return ("You lose! Paper beats " + playerSelection);
                    }
                }
                if (playerPick === "scissors") {
                    if (computerSelection === "paper") {
                        console.log("You win! " + playerSelection + " beats " + computerSelection);
                        // return ("You win! " + playerSelection + " beats " + computerSelection);
                    }
                    else {
                        console.log("You lose! Rock beats " + playerSelection);
                        // return ("You lose! Rock beats " + playerSelection);
                    }
                }
            }
        }
        const playerSelection = window.prompt("Select Rock, Paper or Scissors:");
        const computerSelection = computerPlay();
        console.log ("Computer selection: " + computerSelection);  //Remove

        playRound(playerSelection,computerSelection);
    }
}

game();