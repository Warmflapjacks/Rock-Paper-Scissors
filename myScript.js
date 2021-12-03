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


//tests output
//console.log(computerPlay());

computerPlay();