
// Setting up html doc variables for js to interact with them.
var gamepara = document.getElementById("placeHolder");
var gameWins = document.getElementById("wins");
var gameLosses = document.getElementById("losses");
var guessedCharText = document.getElementById("already-guessed");
var guessAmountText = document.getElementById("guesses-left");

// Data structure used to store different words that are randomly selected for the player to guess.
var wordLibrary = [
    "uranus",
    "pluto",
    "mars",
    "galactic", "universe"
];

// Store number of Wins.
var wins = 0;
// Stores number of losses.
var losses = 0;
// Stores how many guesses player has left.
var guessAmount = 13;
// Stores what the currentWord selected from "wordLibrary" is.
var currentWord = "";
// winChecker stores only one of each character in the current word. Length is checked to determine win.
var winChecker = [];
// An array with strings of a through z listed to check against key presses.
var alphabet = ['a','b','c','d','e',
                'f','g','h','i','j',
                'k','l','m','n','o',
                'p','q','r','s','t',
                'u','v','w','x','y',
                'z'
            ];

// An array that will be used to store all characters that are guessed with key presses.
var guessedChar = [];

// This function sets up the correct amount of blank spaces for the length
// of the current word and puts them html span elements with ids that are kept
// track of to be reference letter when filling in the blanks.
function makeSpacer(input) {
    gamepara.textContent = "";
    for (i = 0; i < input.length; i++) {
        var span = document.createElement('SPAN');
        span.textContent = "_ ";
        span.setAttribute("id", "span" + i)
        gamepara.appendChild(span);
    }
}

// This function checks whether the key press is equal to any letters in current word.
function blankChanger(letter, word) {
    for (i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            document.getElementById("span" + i).textContent = letter;
        }
    }
}

// This functions load an array called 'winChecker' each time the game is
// setup with only one of any characters found in the current word.
function winCheckerLoad(word) {
    winChecker = [];
    for (i = 0; i < word.length; i++) {
        if (winChecker.indexOf(word[i]) === -1) {
            winChecker.push(word[i]);
        }
    }
}

// This functions sets up the game each time the player either wins or loses.
function setupGame() {
    gameLosses.textContent = losses;
    gameWins.textContent = wins;
    guessAmount = 13;
    guessAmountText.textContent = guessAmount;
    guessedCharText.textContent = "None";
    currentWord = wordLibrary[Math.floor(Math.random()*wordLibrary.length)];
    makeSpacer(currentWord);
    winCheckerLoad(currentWord);
    guessedChar = [];
}

// Initialize game and start keypress style loop event listener type thingy lol.
setupGame();
document.onkeyup = function(event) {

    // Sets current key press to var called "currentLetter".
    var currentLetter = event.key.toLowerCase();

    // Checks that the letter pressed is in the alphabet
    if (alphabet.indexOf(currentLetter) >= 0) {
        // Checks if letter has already been guessed.
        if (guessedChar.indexOf(currentLetter) === -1) {
            // This fills in blanks of the current word for the letter guessed.
            blankChanger(currentLetter, currentWord);
            // If the letter guessed is not in the word, subtract one from guesses.
            if (currentWord.indexOf(currentLetter) === -1) {
                --guessAmount;
            } else {
                winChecker.pop();
            }
            guessedChar.push(currentLetter);
        }

    }
    guessedCharText.textContent = guessedChar;
    guessAmountText.textContent = guessAmount;

    if (guessAmount <= 0) {
        losses++;
        setupGame();
    } else if (winChecker.length <= 0) {
        wins++
        setupGame();
    }
}