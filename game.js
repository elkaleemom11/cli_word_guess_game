//This file requires the Word.js file
var Word = require("./Word.js");

//Game requires inquirer npm package to prompt user.
var inquirer = require("inquirer");

// Pseudocode to complete word game:
// 1. install the npm inquirer package
// 2. research to find out if there are any color/style cli packages available to add interest.
// 3. determine whether there is something to draw on the command line?
// 4. how to determine a letter vs a number a user may enter?
// 5. is there something to use, say color, to note if a guess is incorrect?
// 6. develop a theme and list of words, perhaps total of 10+ words? ie. "Camp Out" (tent, stakes, 
// stove, headlamp, rope, tarp, sleeping bags, firewood, firer starter, matches, sunscreen, bug spray)
// 7. create a var of correct guesses; set variable for true, but set default to false.
// 8. create a counter for wins, losses, and guesses remaining. total of 10 guessess allowed?
// 9. create a variable which holds the letter in once the user selects a letter
// 10.create a variable to hold the letters the user already selected
// 11.create a variable to underscore which will be filled in by a letter
// 12.create a paragraph of written instructions on how to play the "Camp Out game"
// 13.