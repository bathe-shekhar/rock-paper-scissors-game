const GAMEOPTIONS = ["rock", "paper", "scissor"];

const getComputerChoice = () => {

    return (GAMEOPTIONS[Math.floor(Math.random() * GAMEOPTIONS.length)])
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    let playerString = playerSelection.toLowerCase();
    let computerString = computerSelection.toLowerCase();

    if (playerString == "rock" && computerString == "scissor") {
        msg = "You Won! " + playerSelection + " beats " + computerSelection;
        // return (msg);
    }
    else {
        if (playerString == "scissor" && computerString == "paper") {
            msg = "You Won! " + playerSelection + " beats " + computerSelection;
            // return (msg);
        }
        else {
            if (playerString == "paper" && computerString == "rock") {
                msg = "You Won! " + playerSelection + " beats " + computerSelection;
                //return (msg);
            }
            else {
                if (playerString == computerString) {
                    msg = "Draw.....! both selected same choice " + playerSelection;
                    // return (msg);
                }
                else {
                    msg = "You Loose! " + computerSelection + " beats " + playerSelection;
                    //return (msg);
                }
            }
        }
    }
    return msg;
}

const playerSelection = prompt("Enter your choice: rock, paper, scissor");
const computerSelection = getComputerChoice();
let res = playRound(playerSelection, computerSelection);
console.log(res);
// document.getElementById("result").innerHTML("Result: " + res);
// document.getElementById("result").innerHTML(res);
const div = document.querySelector("div");
div.innerHTML = res;

