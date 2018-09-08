# Word-Guess-Game
Everything should be in a doucment.onkey function. That will be the game loop.

array will be used to store index of words
each word and letter can be accessed using multidimensional indexing
variable storing number of guess left
variable array storing letters already guessed
variable storing number of wins
variable storing number of losses
variable storing current word (pulls from data structure storing words)
variable that stores list of alphabet a-z maybe and one that pushes them to not be used again

function that picks a word randomly from the list and when it is selected as current word
the length of that word needs to be determined and that number of underscored need to be placed in line

if number of guess left is greater than 0 then continue
when a button is clicked check if it is in our already clicked array and then check if it is in our word.
If already clicked then do nothing.
If letter is in our word then put the letter in the current index of our hyphens.
If letter is not in our word and has not already been guessed add to guessed array
Also subtract one from guesses left
If guesses left reaches 0, add 1 to losses, then display new word
if all letters in word are guessed add 1 to wins, then display new


