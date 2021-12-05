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

        //selects computers choice of rock, paper or scissors. option to print selection to console
        const computerSelection = getComputerSelection();
        //console.log ("Computer selection: " + computerSelection); 
        
        //call playRound function
        playRound(playerSelection,computerSelection);

        //define playRound
        function playRound (playerSelection, computerSelection) {
            //sends playerselection to lowercase
            let playerPick = playerSelection.toLowerCase();

            //if selections are a tie
            if (playerPick === computerSelection) {
                console.log ("Its a tie!");
            }
            //used when not a tie
            else{
                if (playerPick === "paper") {
                    if (computerSelection === "rock") {
                        console.log ("You win! " + playerSelection + " beats " + computerSelection);
                    }
                    else {
                        console.log("You lose! Scissors beats " + playerSelection);
                    }
                }
                if (playerPick === "rock") {
                    if (computerSelection === "scissors") {
                        console.log("You win! " + playerSelection + " beats " + computerSelection);
                    }
                    else {
                        console.log("You lose! Paper beats " + playerSelection);
                    }
                }
                if (playerPick === "scissors") {
                    if (computerSelection === "paper") {
                        console.log("You win! " + playerSelection + " beats " + computerSelection);
                    }
                    else {
                        console.log("You lose! Rock beats " + playerSelection);
                    }
                }
            }
        }
    }
}

playGame();