// Word.js**: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is attempting to guess. 
// That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word
//   * A function that returns a string representing the word. This should call the function 
//     on each letter object (the first function defined in `Letter.js`) that displays the 
//     character or an underscore and concatenate those together.
//   * A function that takes a character as an argument and calls the guess function 
//     on each letter object (the second function defined in `Letter.js`)


var Letter = require("./Letter");

// Contains the constructor, "Word" and will depend on the Letter constructor. 
var Word = function (myWord) {

    // Takes "this.myWord", which is the word that is chosen, from the word list.
    this.myWord = myWord;

    // This is an array of letters representing the random letters the user enters.
    this.letters = [];

    // An array of `new` Letter objects representing the letters of the underlying word. 
    // This array represents the number of underscores needed when a random word in entered 
    // by the user and based on the number of letters in the word.
    this.underscores = [];


    // A function that returns a string representing the word. This should call the function 
    // on each letter object (the first function defined in `Letter.js`) that displays the
    // character or an underscore and concatenate (the joining of two or more strings) 
    // those together.
    // After the user enters a random word from the word list, a split method is used 
    // to add the letters to the "this.letters array".
    this.splitWord = function () {
        this.letters = this.myWord.split("");
        console.log(this.letters);

        //Determine number of underscores needed based on the length of "this.letters array", 
        //in the Word constructor.
        numberUnderscoresNeeded = this.letters.length;
        console.log("Underscores: " + numberUnderscoresNeeded);

        //Create a "for loop" that pushes the underscores to the "this.underscores array" in the
        //Word constructor.
        for (var i = 0; i < numberUnderscoresNeeded; i++) {
            this.underscores.push("_ ");
        }
        console.log(this.underscores);
        //Use the .join method to join each underscore that is pushed to the 
        //this.underscores array by a space.
        console.log(this.underscores.join(" "));
    }
    this.generateLetters = function () {
        for (i = 0; i < this.letters.length; i++) {
            this.letters[i] = new Letter(this.letters[i]);
            this.letters[i].letterGuessedCorrectly = true;

            // This shows the array of letter objects.
            this.letters[i].showCharacter();
            console.log(this.letters[i]);
        }
    }
}

//test word constructor
// var someWord = new Word("Utah");
// someWord.splitWord();
// someWord.generateLetters();

//Exports the Word constructor to be used and referenced in the game.js file.
module.exports = Word;