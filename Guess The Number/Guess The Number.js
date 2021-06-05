let score = document.querySelector('.score');
let message = document.querySelector('.message')
let highScore = document.querySelector('.highscore');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let hidden = document.querySelector('.hidden');
let winLoss = document.querySelector('.win-loss');

const check = document.querySelector('.check');
const playAgain = document.querySelectorAll('.playagain');
const userGuess = document.querySelector('.userguess');
const closeModal = document.querySelector('.close-modal');

let guessedNum = Math.trunc(Math.random()*20)+1;
let userScore = 20;
let winAlready = false;

// Showing Modal 
function popUpModal(){
    if(Number(userGuess.value )=== guessedNum){
        winLoss.textContent='You Won 🎉️';
        modal.style.backgroundImage ='url(https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Happy-Birthday-PNG/Confetti_Transparent_Clip_Art.png?m=1512532501)';
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        highScore.textContent = userScore;
        winAlready = true;
    }
    else{
        winLoss.textContent ='You Lose 😕️';
        modal.style.backgroundImage ='url(https://www.muraldecal.com/en/img/asfs1075-jpg/folder/products-listado-merchanthover/stickers-game-over.jpg)';
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
}

// Function to make sure that the score is not less than 1
function checkWin(){
    if(userScore < 1) popUpModal();
}

// Function which handles whole logic, after the user enter something in input
function checkUserInput(){
    if(userGuess.value === '' || Number(userGuess.value) > 20 || Number(userGuess.value)<1) {
        checkWin;
        if (!userGuess.classList.contains('wrong')){
            userGuess.classList.add('wrong');
            setTimeout(function(){ userGuess.classList.remove('wrong')},1000);
            userGuess.value = '';
        }
    }
    else if(userScore <= 1){
        userScore = 0;
        popUpModal();
    }
    else if(Number(userGuess.value)===guessedNum){
        popUpModal();
    }
    else if(Number(userGuess.value) < guessedNum){
        checkWin;
        if (userGuess.classList.contains('wrong'))  userGuess.classList.remove('wrong');
        message.textContent = 'Too Low 📉️';
        userScore-=1;
        score.textContent = `${userScore}`;
        userGuess.value = '';
    }
    else if(Number(userGuess.value) > guessedNum){
        checkWin;
        if (userGuess.classList.contains('wrong'))  userGuess.classList.remove('wrong');
        message.textContent = 'Too High 📈️';
        userScore-=1;
        score.textContent =`${userScore}`;
        userGuess.value = '';
    }   
}

// Function to reset values to play again
function reset(){
    guessedNum = Math.trunc(Math.random()*20)+1;
    userGuess.value = '';
    winAlready ? highScore.textContent=userScore : highScore.textContent=0;
    highScore.textContent = userScore;
    message.textContent = 'Start guessing...';
    score.textContent = '20';
    userScore = 20;
    
    if(! modal.classList.contains('hidden') & ! overlay.classList.contains('hidden')){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
}

// Adding Event listener to the check button
check.addEventListener('click', function(){
    checkUserInput();
});

// Adding Event listener to the key press to work with user typed value
document.addEventListener('keydown',function(pressed){
    if (pressed.key==='Enter') checkUserInput();
})

// Adding Event Listener to the reset the values for user to play again
closeModal.addEventListener('click',function(){
    reset()
});

// Adding Event listener to the key press to reset values
document.addEventListener('keydown',function(pressed){
    if (pressed.key === 'Escape') reset();
})

// Looping through the playagain classlist and adding event listener to reset all values for user to play again
for (let i=0;i<playAgain.length;i+=1){
    playAgain[i].addEventListener('click',function(){
        reset()
    });
}





