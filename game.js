var gamepara = document.getElementById("placeHolder");
var gameWins = document.getElementById("wins");
var gameLosses = document.getElementById("losses");
var guessedCharText = document.getElementById("already-guessed");
var guessAmountText = document.getElementById("guesses-left");
var wordLibrary = ["uranus","pluto","mars","galactic", "universe"];
var wins = 0;
var losses = 0;
var guessAmount = 13;
var currentWord = "";
var winChecker = [];
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var guessedChar = [];
function makeSpacer(input) {
    gamepara.textContent = "";
    for (i = 0; i < input.length; i++) {
        var span = document.createElement('SPAN');
        span.textContent = "_ ";
        span.setAttribute("id", "span" + i)
        gamepara.appendChild(span);
    }
}
function blankChanger(letter, word) {
    for (i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            document.getElementById("span" + i).textContent = letter;
        }
    }
}
function winCheckerLoad(word) {
    winChecker = [];
    for (i = 0; i < word.length; i++) {
        if (winChecker.indexOf(word[i]) === -1) {
            winChecker.push(word[i]);
        }
    }
}
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
setupGame();
document.onkeyup = function(event) {
    var currentLetter = event.key.toLowerCase();
    if (alphabet.indexOf(currentLetter) >= 0) {
        if (guessedChar.indexOf(currentLetter) === -1) {        // This fills in blanks of the current word for the letter guessed.
            blankChanger(currentLetter, currentWord);
            if (currentWord.indexOf(currentLetter) === -1) {    // If the letter guessed is not in the word,
                --guessAmount;                                  // subtract one from guesses.
            } else {
                winChecker.pop();                               // Remove one item from winChecker array when
            }                                                   // correct letter detected in current word.
            guessedChar.push(currentLetter);                    // Add the key pressed to 'guessedChar' array.
        }
    }
    guessedCharText.textContent = guessedChar;      // Update html to show guessedChar and guessAmount
    guessAmountText.textContent = guessAmount;                 // left after keypress and add spaces to guessedChar array.
    if (guessAmount <= 0) {                         // This if else statement determines you player loses after guessAmount reaches 0 or
        losses++;                                   // if the length of winChecker reaches 0. This works by subtracting 1 element from
        setupGame();                                // winChecker array each time a correct letter is guessed. Creating a counter, that 
    } else if (winChecker.length <= 0) {            // when reaching 0 player has won. After determining win or loss, adds 1 to appropriate
        wins++                                      // counter, and then resets game using 'setupGame()' function.
        setupGame();
    }
}