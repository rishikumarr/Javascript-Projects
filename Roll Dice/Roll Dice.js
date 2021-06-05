let playerOneScore = document.querySelector('.overallscore1');
let playerOneCurrent = document.querySelector('.addedup1');

let playerTwoScore = document.querySelector('.overallscore2');
let playerTwoCurrent = document.querySelector('.addedup2');

let dice = document.querySelector('.dice')
const newGame = document.querySelector('.newgame');
const rollDice = document.querySelector('.rolldice');
const hold = document.querySelector('.hold');

let playersScores = [0,0];
let playersHold = [0,0];
let randomNum;
let playerOne = true;

let ifwon = false;

function won(){
    document.querySelector('.active').style.backgroundImage = 'url(https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Happy-Birthday-PNG/Confetti_Transparent_Clip_Art.png?m=1512532501)';
    ifwon = true;
}

function ifPlayerOne(){
    randomNum=Math.trunc(Math.random()*6)+1;
    playerOneScore.textContent = randomNum;
    if(randomNum !==1){
        playersScores[0]+=randomNum;
        if (playersScores[0]>=30) won();
        dice.src = `https://raw.githubusercontent.com/rishikumarr/images/main/dice/dice-${randomNum}.png`;
        dice.classList.add('roll');
        setTimeout(function(){dice.classList.remove('roll')},500);
        playerOneCurrent.textContent = playersScores[0];
    }
    else{
        dice.src = `dice-${randomNum}.png`;
        playersScores[0]=0;
        playerOneCurrent.textContent = playersScores[0];
        playerOneScore.textContent = playersScores[0];
        playerOne = false;

        document.querySelector('.player--1').classList.remove('active');
        document.querySelector('.player--2').classList.add('active');
    }
}
function ifPlayerTwo(){
    randomNum=Math.trunc(Math.random()*6)+1;
    playerTwoScore.textContent = randomNum;
    if(randomNum !==1){
        playersScores[1]+=randomNum;
        if (playersScores[1]>=30) won();
        dice.src = `https://raw.githubusercontent.com/rishikumarr/images/main/dice/dice-${randomNum}.png`;
        console.log(dice.src)
        dice.classList.add('roll');
        setTimeout(function(){dice.classList.remove('roll')},500);
        playerTwoCurrent.textContent = playersScores[1];
    }
    else{
        dice.src = `dice-${randomNum}.png`;
        playersScores[1]=0;
        playerTwoCurrent.textContent = playersScores[1];
        playerTwoScore.textContent = playersScores[1];
        playerOne = true;

        console.log( document.querySelector('.player--1').classList);
        document.querySelector('.player--1').classList.add('active');
        document.querySelector('.player--2').classList.remove('active');
    }
}


rollDice.addEventListener('click',function(){
    if(playerOne && !ifwon){
        ifPlayerOne();
    }else if(!playerOne && !ifwon){
        ifPlayerTwo();
    }
});

newGame.addEventListener('click',function(){
    playersScores = [0,0];
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    playerOneCurrent.textContent = 0;
    playerTwoCurrent.textContent = 0;
    ifwon = false;
    playerOne = true;
    document.querySelector('.active').style.removeProperty('background-image');
    document.querySelector('.player--2').classList.remove('active');
    document.querySelector('.player--1').classList.add('active');
});

hold.addEventListener('click',function(){
    if(playerOne){
        playerOneScore.textContent = playersScores[0];
        document.querySelector('.player--1').classList.remove('active');
        document.querySelector('.player--2').classList.add('active');
        playerOne = false;
    }
    else{
        playerOneScore.textContent = playersScores[0];
        document.querySelector('.player--1').classList.add('active');
        document.querySelector('.player--2').classList.remove('active');
        playerOne = true;
    }
});

