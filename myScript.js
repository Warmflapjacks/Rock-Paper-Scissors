function computerPlay () {
    let computerOption = [
        "Rock",
        "Paper",
        "Scissors"
    ];

    //randomly selects a computer pick from computerOption array
    let computerSelection = computerOption[Math.floor(Math.random() * computerOption.length)]
    return computerSelection
}

function playRound (playerSelection, computerSelection) {
    /*Pseudo
    -Paper beats rock
    -Rock beats scissors
    -Scissor beats paper
    
    -send playerSelection into a variable that converts string into lowercase
    -compare between playerSelection and computerSelection
    -declare a winner using playerSelection and computerSelection variables
    */
}


//tests output
//console.log(computerPlay());

const computerSelection = computerPlay();
const playerSelection = "rock"