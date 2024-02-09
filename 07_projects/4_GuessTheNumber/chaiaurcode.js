let randomNumber = (parseInt(Math.random() * 100 + 1))

/** Variable declaration for Form*/
const userInput = document.querySelector("#guessField")/* Input Type Text */
const submitButton = document.querySelector("#submit")/* Submit */

/** Variable declaration for Result Div*/
const startOver = document.querySelector(".resultParas")/*Div*/
const guessSlot = document.querySelector(".guesses")/* Paragraph */
const remaining = document.querySelector(".lastResult")/* Paragraph */
const lowOrHi = document.querySelector(".lowOrHi")/* Paragraph */

const p = document.createElement('p');

let previousGuesses = []
let countGuesses = 1

let playGame = true

if(playGame){
    submitButton.addEventListener("click",function (event){
        event.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

/** Validate the Guess if the guess is in the Range */
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Enter A Valid Number.");
    }else if(guess < 1){
        alert("Enter A Valid Number Greater Than 1.");
    }else if(guess > 100){
        alert("Enter A Valid Number Less Than 100");
    }else{
        previousGuesses.push(guess);
        if(countGuesses === 10){
            displayGuess(guess);
            displayMessage(`Game Over. Random Number Was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

/** Check the Guess is equal,low or high.If Equal then Call displayMessage and show user Won. */
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Guessed it Right.`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Number is Low.`);
    }else if(guess > randomNumber){
        displayMessage(`Number is High.`);
    }
}

/** Clean the Input Area & Update PreviousGuesses,Guesses Remaining */
function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    countGuesses++;
    remaining.innerHTML = `${11-countGuesses}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute("disabled","");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function (event){
        randomNumber = parseInt((Math.random() * 100) + 1);

        previousGuesses = [];
        countGuesses = 1

        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-countGuesses}`;
        startOver.removeChild(p);

        userInput.removeAttribute("disabled");

        playGame = true;
    })
}








































/*let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number.');
    }else if(guess < 1){
        alert('Please enter a number more than 1.');
    }else if(guess > 100){
        alert('Please enter a number less than 100.');
    }else{
        prevGuess.push(guess) 
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over , Random Number was ${randomNumber}`);
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess == randomNumber ){
        displayMessage(`You guessed it right.`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is Too Low.`);
    }else if(guess > randomNumber){
        displayMessage(`Number is Too High.`);
        
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>` 
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game </h2>`
    startover.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton =  document.querySelector('#newGame')
    newGameButton.addEventListener('click' , function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startover.removeChild(p);
        playGame = true;
    })
}
*/


