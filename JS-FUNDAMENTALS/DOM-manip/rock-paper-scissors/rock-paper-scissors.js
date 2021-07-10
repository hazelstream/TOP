let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection = '';

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click', clickRock);
paper.addEventListener('click', clickPaper);
scissors.addEventListener('click', clickScissors);

function clickRock(){
    playerSelection = "Rock";
    console.log("rock");
    next = true;
}

function clickPaper(){
    playerSelection = "Paper";
    console.log("paper");
    next = true;
}

function clickScissors(){
    playerSelection = "Scissors";
    computerPlays();

    console.log("scissors");
    next = true;
}

function computerPlays() {
    let results = ["Rock", "Paper", "Scissors"];
    return results[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        
    } else if(playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS"){
        playerScore++;
        
    } else if(playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER"){
        computerScore++;
        
    } else if(playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS"){
        computerScore++;
        
    } else if(playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK"){
        playerScore++;
        
    } else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER"){
        playerScore++;
        
    } else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK"){
        computerScore++;
        
    } 
}

// this is an async timeout util (very useful indeed)
const timeout = async ms => new Promise(res => setTimeout(res, ms));

let next = false; // this is to be changed on user input
let clicks = 0;

async function waitUserInput() {
  while (next === false) await timeout(50); // pause script but avoid browser to freeze ;)
  next = false; // reset var
  console.log('user input detected');
}

const p = document.querySelector("#playerScore");

async function game() {
    while(true){
        await waitUserInput();
        await playRound(playerSelection, computerPlays);

    }
}
game();