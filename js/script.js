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
let word = "magnolia";
const guessedLetters = [];
let remainingGuesses = 8;


const getWord = async function () {
    const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await response.text();
    const wordArray = words.split("\n");
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    circles(word);
};


getWord();

const circles = function (word) {
    const circlesLetters = [];
    for (const letter of word) {
        console.log(letter);
        circlesLetters.push("●");
    }
    inProgress.innerText = circlesLetters.join("");
};



guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    messageWall.innerText = "";
    const inputValue = guessForm.value;
    const result = playerInput(inputValue);
    if (result) {
        makeGuess(inputValue);
    }
    guessForm.value = "";
});


/* Accept and Validate Player Guesses*/
const playerInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        messageWall.innerText = "Lets Play! Enter a letter";  //this isnt working
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
        console.log(guessedLetters);
        updateGuessesRemaining(inputValue);
        seenGuessedLetters();
        updateInProgress(guessedLetters);
    }
};


const seenGuessedLetters = function () {
    guessedLetter.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLetter.append(li);
    }
};


const updateInProgress = function (guessedLetters) {
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
    inProgress.innerText = revealWord.join("");
    yesWon();
};

const updateGuessesRemaining = function (inputValue) {
    const upperWord = word.toUpperCase();
    if (!upperWord.includes(inputValue)) {
        messageWall.innerText = `Unfortunately no ${inputValue}, now you lost a turn`;
        remainingGuesses -= 1; 
    }
    else {
        messageWall.innerText = `Yea! Nice job ${inputValue} is in there!`;
    }
    if (remainingGuesses === 0) {
        messageWall.innerHTML = `Game over! The word was <span class = "highlight">${word}</span>`;
    }
    else if (remainingGuesses === 1) {
        remainingDisplay.innerText = `${remainingGuesses} guess`; //was guessesRemainingSpan
    }
    else {
        remainingDisplay.innerText = `${remainingGuesses} guesses`; //was guessesRemainingSpan
    }
};


const yesWon = function () {
    if (word.toUpperCase() === inProgress.innerText) {
        messageWall.classList.add("win");
        messageWall.innerHTML = `<p class= "highlight"> You got it right! Great job!</p>`;
        startOver();
    }
};


const startOver = function (){
    guessButton.classList.add("hide");
    remaining.classList.add("hide");
    guessedLetter.classList.add("hide");
    playAgain.classList.remove("hide");
};



playAgainButton.addEventListener("click", function(e){
messageWall.classList.remove("win");
guessedLetters = [];
remainingGuesses = 8;
remainignGuessesSpan.innerText = `${remainingGuesses} guesses`;
guessedLetter.innerHTML = "";
getWord();

guessButton.classList.remove ("hide");
playAgain.classList.add ("hide");
remaining.classList.remove("hide");
guessedLetter.classList.remove("hide");

});

