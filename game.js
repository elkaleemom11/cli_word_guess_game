// Pseudocode: deleted all the color and drawing code to simply things; however, code is not working!


var Word = require("./word.js");
var inquirer = require("inquirer");


//This will be the Welcome screen
console.log("Welcome to the Camp Out Word Guessing Game!");
console.log("Theme is... Camp Out Game.");
var howToPlay =
    "==========================================================================================================" + "\r\n" +
    "How to play" + "\r\n" +
    "==========================================================================================================" + "\r\n" +
    "When prompted to enter a letter, press any letter from a-z." + "\r\n" +
    "Keep guessing a letter and when you guess a letter, your will either be correct or incorrect." + "\r\n" +
    "If the letter is incorrect, the letter you guessed will not appear in the word." + "\r\n" +
    "For every incorrect guess, the number of guesses remaining decrease by 1." + "\r\n" +
    "If correct, the letter you guessed will appear in the word." + "\r\n" +
    "If you guessed correctly, then all the letters in the word will appear until the remaining reaches 0, and you win." + "\r\n" +
    "If you run out of guesses before the entire word is revealed, you lose. Game over." + "\r\n" +
    "===========================================================================================================" + "\r\n"
"You can exit the game at any time by pressing Ctrl + C on your keyboard." + "\r\n" +
    "==========================================================================================================="
console.log(howToPlay);


var campOut = {
    word_list: ["tent", "stakes", "stove", "headlamp", "rope", "tarp", "sleeping bags", "firewood", "firer starter", "matches", "sunscreen", "bug spray"],
    guesses_remaining: 10,
    guessedLetters: [],
    current_word: null,

    /* start_game: function () {
        // clears guessedLetters before the newgame starts
        if (this.guessedLetters.length > 0) {
            this.guessedLetters = [];
        };

        inquirer.prompt([{
            name: "play",
            type: "confirm",
            message: "ready to play?"
        }]).then(function (answer) {
            if (answer.play) {
                campOut.new_game();
            } else {
                console.log("What's the point then?");
            }
        })
    },*/

    new_game: function () {
        remainingGuesses = 10;
        var selectedWord = words[Math.floor(Math.random() * words.length)];
        var word = new Word(selectedWord);
        console.log("Remaining guesses: " + remainingGuesses);
        console.log("Initial word: " + word.selectedWord());
        promptGuessLetter();
    }
}
function promptGuessLetter() {
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter",
            validate: function (input) {
                return input.length == 1 && /^[a-z]+$/i.test(input);
            }
        }
    ]).then(function (response) {
        var guessedCorrectly = word.guessLetter(response.guess);
        if (!guessedCorrectly) {
            remainingGuesses--;
            if (remainingGuesses <= 0) {
                console.log("You lost!");
                console.log("The correct word is: " + word.shownWord());
                promptNewGame();
                return
            } else {
                console.log("Remaining guesses: " + remainingGuesses);
            }
        }

        console.log(word.shownWord());
        if (word.guessed) {
            console.log("You guessed the word!");
            promptNewGame();
        } else {
            promptGuessLetter();
        }
    });
}


function promptNewGame() {
    inquirer.prompt([
        {
            name: "answer",
            type: "list",
            message: "Would you like to play again?",
            choices: ["Yes", "No"]
        }
    ]).then(function (response) {
        if (response.answer == "No") {
            // No
            return
        }
        // Yes, play the game again
        campOut_game();
    });
}



