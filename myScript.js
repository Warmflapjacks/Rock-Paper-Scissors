function computerPlay () {
    let computerOption = [
        "Rock",
        "Paper",
        "Scissors"
    ];

    //randomly selects a computer pick from computerOption array
    let randomSelection = computerOption[Math.floor(Math.random() * computerOption.length)]
    return randomSelection
}

//tests output
//console.log(computerPlay());

computerPlay();