let computerPlay = () => {
    let computerOptions = ["Rock","Paper","Scissors"];
    let computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerSelection;
}

let capitalize = string1 => {
    let first = string1.slice(0,1);
    let rest = string1.slice(1);
    return first.toUpperCase() + rest.toLowerCase();
}

let playGame = (playerSelection,computerSelection) => {
    if (playerSelection == computerSelection) {
        return "It's a tie!"
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You lose! Paper beats Rock."
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win! Rock beats Scissors."
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You win! Paper beats Rock."
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You lose! Scissors beats Paper."
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You lose! Rock beats Scissors."
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper."
    }
}


let playerWins = 0;
let computerWins = 0;
let rounds = 5;

for (let i = 0; i < rounds; i++) {
    let computerSelection = computerPlay();
    //console.log(computerSelection);
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    //console.log(playerSelection);
    playerSelection = capitalize(playerSelection);
    //console.log(playerSelection);
    if (playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors") {
        let result = playGame(playerSelection,computerSelection);
        console.log(result);
        if (result.includes("win") == true) {
            playerWins += 1;
        } else {
            computerWins += 1;
        }
    } else {
        alert("Please choose either Rock, Paper, or Scissors");
    }
}

if (playerWins > computerWins) {
    console.log("You won!");
} else {
    console.log("You lose...");
}