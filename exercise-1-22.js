// exercise 1 - guss the number 

// write a javascript program to generate a random number and store it in a variable. the program then takes an input from the user to tell them whether the guess was correct, grants or lesser then the original number. 
//100 - (no of guesses) is the score of the user the program is expected to terminate once the number is gussed. the number should be between 1 - 100



// Genrating random number between 0 to 100
let randomNumber = Math.random() * 100;

//round to the random number to whole number
let roundNumber = Math.floor(randomNumber);

// Store the rounded number in a new variable
var randomBetween0And100 = roundNumber;

console.log("this is and random number:",randomNumber);
console.log("this wan an random number but update as an whole number:",randomBetween0And100);

