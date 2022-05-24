/*

// INITIAL DRAFT

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
        return "You win! Scissors beats Paper."
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

*/

let computerPlay = () => {
    let compOptions = ["Rock","Paper","Scissors"];
    let compSelect = compOptions[Math.floor(Math.random() * compOptions.length)];
    return compSelect;
}

let capitalize = string1 => {
    let first = string1.slice(0,1);
    let rest = string1.slice(1);
    return first.toUpperCase() + rest.toLowerCase();
}

let playRound = (playerSelection,computerSelection) => {
    if (playerSelection == computerSelection) {
        return "It's a tie! You both chose " + playerSelection 
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
        return "You win! Scissors beats Paper."
    }
}

let game = (choice) => { //added a parameter
    let rounds = 1;
    let playerWins = 0;
    let computerWins = 0;
    let overallResult;

    for (let i = 0; i < rounds; i++) {
        let computerSelection = computerPlay();
        let playerSelection = choice; // made this variable equal parameter
        //capitalize(prompt("Rock, Paper, or Scissors?"));
        let roundResult = playRound(playerSelection,computerSelection);
        //console.log(roundResult);
        htmlRound.innerText = roundResult;

        if (roundResult.includes("win") == true) {
            playerWins += 1;
        } else if (roundResult.includes("lose") == true) {
            computerWins += 1;
        }
    }

    if (playerWins > computerWins) {
        overallResult = "You win!";
    } else if (playerWins == computerWins) {
        overallResult = "Tie Game";
    } else {
        overallResult = "You Lose";
    }

    //console.log(overallResult);
    htmlOverall.innerText = overallResult;
}

const rock = document.getElementById("rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const results = document.querySelector(".results");
const htmlRound = document.querySelector("#round-results");
const htmlOverall = document.querySelector("#overall-results");

const rockText = rock.innerText;
const paperText = paper.innerText;
const scissorsText = scissors.innerText;

rock.addEventListener("click", () => {
    game(rockText)
});

paper.addEventListener("click", () => {
    game(paperText)
});

scissors.addEventListener("click", () => {
    game(scissorsText)
});

//console.log(rock);

//game();