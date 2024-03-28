const GAMEOPTIONS = ["rock", "paper", "scissor"];

const result = document.querySelector("#result");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const computer = document.querySelector("#computer-count");
const player = document.querySelector("#player-count");

let computerCount = 0;
let playerCount = 0;

computer.textContent = computerCount;
player.textContent = playerCount;


console.log(rock);

rock.addEventListener("click", () => {
    console.log("clicked rock");
    playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    console.log("clicked paper");
})

scissor.addEventListener("click", () => {
    playRound("scissor", getComputerChoice());
    console.log("clicked scissor");
})

const getComputerChoice = () => {

    return (GAMEOPTIONS[Math.floor(Math.random() * GAMEOPTIONS.length)])
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    let playerString = playerSelection.toLowerCase();
    let computerString = computerSelection.toLowerCase();

    if (playerString == "rock" && computerString == "scissor") {
        msg = "You Won! " + playerSelection + " beats " + computerSelection;
        playerCount++;
        // return (msg);
    }
    else {
        if (playerString == "scissor" && computerString == "paper") {
            msg = "You Won! " + playerSelection + " beats " + computerSelection;
            playerCount++;
            // return (msg);
        }
        else {
            if (playerString == "paper" && computerString == "rock") {
                msg = "You Won! " + playerSelection + " beats " + computerSelection;
                playerCount++;
                //return (msg);
            }
            else {
                if (playerString == computerString) {
                    msg = "Draw.....! both selected same choice " + playerSelection;
                    // return (msg);
                }
                else {
                    msg = "You Loose! " + computerSelection + " beats " + playerSelection;
                    computerCount++;
                    //return (msg);
                }
            }
        }
    }

    if (computerCount == 5) {
        result.textContent = "Final Result: Computer Won With 5 Points!!! Play Again...";
        computerCount = 0;
        playerCount = 0;
        computer.textContent = computerCount;
        player.textContent = playerCount;
    }
    else {
        if (playerCount == 5) {
            result.textContent = "Final Result: You Won With 5 Points!!! Play Again...";
            computerCount = 0;
            playerCount = 0;
            computer.textContent = computerCount;
            player.textContent = playerCount;
        }
        else {
            result.textContent = "Result: " + msg;
            computer.textContent = computerCount;
            player.textContent = playerCount;
        }
    }


}

// const playerSelection = prompt("Enter your choice: rock, paper, scissor");

// let res = playRound(playerSelection, computerSelection);
// console.log(res);
// document.getElementById("result").innerHTML("Result: " + res);
// document.getElementById("result").innerHTML(res);



