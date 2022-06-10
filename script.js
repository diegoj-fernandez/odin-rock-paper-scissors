// Capitalize input (first letter only) for prompt based user input

let capitalize = string1 => {
    let first = string1.slice(0,1);
    let rest = string1.slice(1);
    return first.toUpperCase() + rest.toLowerCase();
}

let compVar;
let player = Number();
let comp = Number();;

const rock = document.querySelector("#rock");
const rockIcon = rock.innerHTML;
const paper = document.querySelector("#paper");
const paperIcon = paper.innerHTML;
const scissors = document.querySelector("#scissors");
const scissorsIcon = scissors.innerHTML;

const userChoice = document.querySelector(".user-icon");
const compChoice = document.querySelector(".comp-icon");
const statement = document.querySelector(".statement");
const playerWins = document.querySelector("#player-score");
const compWins = document.querySelector("#computer-score");

const btn = document.querySelectorAll("button");
const btnContainer  = document.querySelector(".btn-container");

let computerPlay = () => {
    let compOptions = ["rock","paper","scissors"];
    let compSelect = compOptions[Math.floor(Math.random() * compOptions.length)];
    if (compSelect == "rock") {
        compChoice.innerHTML = rockIcon;
    } else if (compSelect == "paper") {
        compChoice.innerHTML = paperIcon;
    } else if (compSelect == "scissors") {
        compChoice.innerHTML = scissorsIcon;
    }
    compVar = compSelect;
}

let playRound = (playerSelection,computerSelection) => {
    if (playerSelection == computerSelection) {
        statement.innerText = `Tie!`
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        statement.innerText = `You lose! ${computerSelection} beats ${playerSelection}.`
        comp += 1;
        compWins.innerText = comp;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        statement.innerText = `You win! ${playerSelection} beats ${computerSelection}.`
        player += 1;
        playerWins.innerText = player;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        statement.innerText = `You win! ${playerSelection} beats ${computerSelection}.`
        player += 1;
        playerWins.innerText = player;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        statement.innerText = `You lose! ${computerSelection} beats ${playerSelection}.`
        comp += 1;
        compWins.innerText = comp;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        statement.innerText = `You lose! ${computerSelection} beats ${playerSelection}.`
        comp += 1;
        compWins.innerText = comp;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        statement.innerText = `You win! ${playerSelection} beats ${computerSelection}.`
        player += 1;
        playerWins.innerText = player;
    }
}

let winsCheck = () => {
    if (player == 5 || comp == 5) {
        if (player == 5 && comp !== 5) {
            statement.innerText = `Humans win`
        } else if (comp == 5 && player !== 5) {
            statement.innerText = `Machines win`
        }
    }
}

btn.forEach(function (i) {
    i.addEventListener('click', function() {
        if (i.id == "rock") {
            userChoice.innerHTML = rockIcon;
            computerPlay();
            playRound(i.id, compVar);
        } else if (i.id == "paper") {
            userChoice.innerHTML = paperIcon;
            computerPlay();
            playRound(i.id, compVar);
        } else if (i.id == "scissors") {
            userChoice.innerHTML = scissorsIcon;
            computerPlay();
            playRound(i.id, compVar);
        }

        winsCheck();

        console.log(player)
        console.log(comp)
    });
});