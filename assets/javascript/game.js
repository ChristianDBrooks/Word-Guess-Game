var gamepara = document.getElementById("placeHolder");
var gameWins = document.getElementById("wins");
var gameLosses = document.getElementById("losses");
var guessedCharText = document.getElementById("already-guessed");
var guessAmountText = document.getElementById("guesses-left");

var wordLibrary = [
    "apple"
];

var wins = 0;
var losses = 0;
var letterCount = 0;
var guessAmount = 13;
var currentWord = "";
var placeHolder = []
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var guessedChar = [];
var letterIndex = 0;

function makeSpacer(input) {
    gamepara.textContent = "";
    var arr = []
    for (i = 0; i < input.length; i++) {
        var span = document.createElement('SPAN');
        span.textContent = "_ ";
        span.setAttribute("id", "span" + i)
        gamepara.appendChild(span);
    }
}

function blankChanger(letter, word) {
    for (i = 0; i < word.length; i++) {
        if ((word[i] === letter) && (guessedChar.indexOf(word[i]) < 0)) {
            document.getElementById("span" + i).textContent = letter;
            letterCount++;
        }
    }
}

function setupGame() {
    gameLosses.textContent = losses;
    gameWins.textContent = wins;
    guessAmountText.textContent = "";
    guessedCharText.textContent = [];
    currentWord = wordLibrary[Math.floor(Math.random()*wordLibrary.length)];
    makeSpacer(currentWord);
    letterCount = 0;
    guessedChar = [];
}

setupGame();
document.onkeyup = function(event) {
    if (alphabet.indexOf(event.key) >= 0) {
        
    }

}