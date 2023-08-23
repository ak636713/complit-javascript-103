// use javascript to create game of rock paper and Scissor. The game shuld ask you to enter rock paper and Scissor. The computer shuld be able to mandonly genrate rock paper and Scissor and declare win or loss using alert usin confirm and prompt wherever required.

function computerChoice() {
    const choice = ["rock", "paper", "scissor"]
    const rendomIndex = Math.floor(Math.random(choice) * 3);
    return choice[rendomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie";
    } else if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        return "you win!";
    }

    else {
        return "computer wins!";
    }
}


function playGame() {
    const userChoice = prompt("Enter your choice:rock paper or scissor?").toLowerCase();
    if (userChoice !== "rock" && userChoice !== "scissor" && userChoice !== "paper") {
        alert("invalid choice please choose from rock paper or scissor")
        return;
    }

    const compChoice = computerChoice();
    const result = determineWinner(userChoice, compChoice)

    alert(`your choice ${userChoice}.\n the computer choice ${compChoice}.\n\n ${result}`)
}

playGame()
