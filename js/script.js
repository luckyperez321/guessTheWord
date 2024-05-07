const guessedLetter = document.querySelector(".guessed-letters");
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
const guessedLetters = [];
const remainingGuesses = 8;



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
    messageWall.innerText = "";
    const inputValue = guessForm.value;
    console.log(inputValue);
    makeGuess(inputValue);
    guessForm.value = "";
    const result = playerInput(inputValue);
    console.log(result);
});


/* Accept and Validate Player Guesses*/
const playerInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {                          
        messageWall.innerText = "Lets Play! Enter a letter";
    }
    else if (input.length > 1) {
        messageWall.innerText = "Only one letter at a time, cowboy";
    }
    else if (!input.match(acceptedLetter)) {
        messageWall.innerText = "Please Enter A Letter From A-Z";
    }
    else {
        return input;
    }
};


const makeGuess = function (inputValue) {
    inputValue = inputValue.toUpperCase();
    if (guessedLetters.includes(inputValue)) {
        messageWall.innerText = "That Letter Has Already Been Guessed";
    }
    else {
        guessedLetters.push(inputValue);
        seenGuessedLetters();
        console.log(guessedLetters);
    }
    updateWordInProgress(guessedLetters);
};


const seenGuessedLetters = function () {
    guessedLetter.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLetter.append(li);
    }
};

const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        }
        else {
            revealWord.push("●");
        }
    }

wordInProgress
inProgress.innerText = revealWord.join("");
yesWon();
};


const guessesAllowed = function (guess){
word.innerText = toUpperCase /*In the function, grab the word and make it uppercase. 
Because the player’s guess is uppercase, making the word they’re guessing uppercase will 
compare letters with the same casing. I ALREADY HAVE IT LIKE THIS I NEED TO LOOK TO SEE WHERE I SWITCHED IT
BECAUSE THE GUESSING BOX SHOULD BE CAPITALIZED AT THIS POINT*/
if ( word (guess)) {
        messageWall.innerText = "You're on a Roll";
    }
    else if () {
        messageWall.innerText = "Nada, You Have ${reaminingGuesses - 1} Guesses Left.";
    }
    else {
        return input;
};


const yesWon = function (){
 if (word.toUpperCase ()=== inProgress.innerText){
    messageWall.classList.add("win");
    messageWall.innerHTML= `<p class= "highlight"> You got it right! Great job!</p>`;
 }
};

/* Letter box not clearing after each guess and it's allowing me to guess two letters. It should say something if i do that*/


