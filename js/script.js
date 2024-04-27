
const guessedLetter = documen.querySelector(".guessed-letters");
/*The unordered list where the player’s guessed letters will appear*/
const guessButton = document.querySelector(".guess");
/*The button with the text “Guess!” in it.*/
const guessForm = document.querySelector(".letter");
/*The text input where the player will guess a letter.*/
const inProgress = document.querySelector(".word-in-progress");
/*The empty paragraph where the word in progress will appear.*/
const remaining = document.querySelector(".remaining");
/*The paragraph where the remaining guesses will display.*/
const remainingDisplay = document.querySelector(".remaining span");
/*The span inside the paragraph where the remaining guesses will display.*/
const messageWall = document.querySelector(".message");
/*The empty paragraph where messages will appear when the player guesses a letter.*/
const playAgain = document.querySelector(".play-again");
/*The hidden button that will appear prompting the player to play again.*/
const word = "magnolia";

const circles = function (word) {
    const circleLetters = [];
    for (const letter of word) {
        console.log(letter);
        circleLetters.push("●");
    }
    inProgress.innerText = circleLetters.join("");
};

circles(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const inputValue = guessForm.value;
    console.log(inputValue);
    guessForm.value = "";
});