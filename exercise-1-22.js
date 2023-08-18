// exercise 1 - guss the number 

// write a javascript program to generate a random number and store it in a variable. the program then takes an input from the user to tell them whether the guess was correct, grants or lesser then the original number. 
//100 - (no of guesses) is the score of the user the program is expected to terminate once the number is gussed. the number should be between 1 - 100


var winningNumber;  // The random number to guess
var numberOfWins = 0;  // Counter for the number of wins

function generateRandomNumber() {
    return Math.floor(Math.random() * 101);  // Generate a random number between 0 and 100
}

function playGame(guess) {
    if (guess === winningNumber) {
        numberOfWins++;
        console.log("Congratulations! Your guess is correct.");
        console.log("Total wins: " + numberOfWins);
        return true;  // Indicate a win
    } else {
        console.log("Sorry, your guess is incorrect. Try again.");
        return false;  // Indicate a loss
    }
}

// Main loop
while (true) {
    winningNumber = generateRandomNumber();
    console.log("New game! Try to guess the number between 0 and 100.");

    while (true) {
        var userGuess = parseInt(prompt("Enter your guess:"));

        if (isNaN(userGuess)) {
            console.log("Please enter a valid number.");
        } else if (userGuess < 0 || userGuess > 100) {
            console.log("Please enter a number between 0 and 100.");
        } else {
            if (playGame(userGuess)) {
                break;  // Exit the guessing loop if the user wins
            }
        }
    }

    var playAgain = prompt("Do you want to play again? (yes or no)").toLowerCase();
    if (playAgain !== "yes") {
        console.log("Thanks for playing!");
        break;  // Exit the main loop if the user doesn't want to play again
    }
}


console.log(winningNumber)