let computerPlay = () => {
    let compOptions = ["Rock","Paper","Scissors"];
    let compSelect = compOptions[Math.floor(Math.random() * compOptions.length)];
    return compSelect;
}

/*

// Capitalize input (first letter only) for prompt based user input

let capitalize = string1 => {
    let first = string1.slice(0,1);
    let rest = string1.slice(1);
    return first.toUpperCase() + rest.toLowerCase();
}

// Initial playRound function

let playRound = (playerSelection,computerSelection) => {
    if (playerSelection == computerSelection) {
        return "It's a tie! You both chose " + playerSelection 
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You lose! " + computerSelection + " beats " + playerSelection
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

*/

let playRound = (playerSelection,computerSelection) => {
    if (playerSelection == computerSelection) {
        return "It's a tie! You both chose " + playerSelection 
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "Too bad..." + computerSelection + " beats " + playerSelection
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "Nice! " + playerSelection + " beats " + computerSelection
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "Nice! " + playerSelection + " beats " + computerSelection
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "Too bad..." + computerSelection + " beats " + playerSelection
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "Too bad..." + computerSelection + " beats " + playerSelection
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "Nice! " + playerSelection + " beats " + computerSelection
    }
}

let playerWins = Number();
let computerWins = Number();
let overallResult;

let game = choice => {

    let computerSelection = computerPlay();
    let playerSelection = choice;
    //capitalize(prompt("Rock, Paper, or Scissors?"));
    let roundResult = playRound(playerSelection,computerSelection);
    htmlRound.innerText = roundResult;

    if (roundResult.includes("Nice") == true) {
        playerWins += 1;
    } else if (roundResult.includes("bad") == true) {
        computerWins += 1;
    }

    playerScore.innerText = playerWins;
    computerScore.innerText = computerWins;

    if (playerWins == 5 || computerWins == 5) {
        if (playerWins > computerWins) {
            overallResult = "You win!";
            htmlRound.innerText = overallResult;
            //htmlOverall.innerText = overallResult;
            playerWins = 0;
            computerWins = 0;
        } else {
            overallResult = "You Lose";
            htmlRound.innerText = overallResult;
            //htmlOverall.innerText = overallResult;
            playerWins = 0;
            computerWins = 0;
        }
    } else {
        return;
    }
}

const endResult = document.querySelector(".results");
const htmlRound = document.querySelector("#round-results");
const htmlOverall = document.querySelector("#overall-results");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const btn = document.querySelectorAll("button");
//const rock = document.getElementById("rock");
//const paper = document.querySelector("#paper");
//const scissors = document.querySelector("#scissors");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        game(btn[i].innerText)
    });
}