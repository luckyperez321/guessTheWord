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
   
   /*was told this could be taken out for clean code and removes reduncancy
    guessForm.value = "";
    playerInput(inputValue);
     (and that this could be added in after console log to clear form after each guess = guessForm.value = "";)
    */

     /* DEFINITELY NEED TO RE-REVIEW THIS WHOLE EVENTLISTENER FUNCTION*/
    const result = playerInput(inputValue);
    console.log(result);


    
});






/* Accept and Validate Player Guesses*/
const playerInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === '' ) {                          /* this might have to be 0 instead of quotes*/
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
};

/*
What I had orginally for lines 82-83. The last else statement in the playerInput function
else (input.match(/[a-zA-Z]/))
{
console.log ("Great One!")  
*/

const seenGuessedLetters = function (){
    guessedLetter.innerHTML = "";
    for (const letter of guessedLetters){
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLetter.append(li);    
    }
};

