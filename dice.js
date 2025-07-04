
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const currentScore1 = document.querySelector('.score11 .score1');
const currentScore2 = document.querySelector('.score12 .score2');
const rollButton = document.querySelector('.roll');
const holdButton = document.querySelector('.hold');
const resetButton = document.querySelector('.reset');
const diceImage = document.querySelector('img');
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let gameActive = true;

function displayScores() {
    score1.textContent = scores[0];
    score2.textContent = scores[1];
    if(activePlayer === 0) {
        currentScore1.textContent = currentScore;
        currentScore2.textContent = 0;

    }
    else{
        currentScore2.textContent = currentScore;
        currentScore1.textContent = 0;
    }

}

function switchPlayer() {
    currentScore = 0;
    displayScores();
    document.querySelectorAll('.p1, .p2').forEach(el => el.style.fontWeight = 'normal');
    if(activePlayer===0){
        activePlayer=1;
        document.querySelector('.right').style.background= '#f982c3' ;
        document.querySelector('.left').style.background= 'rgba(255, 255, 255, 0.08)' ;
    }
    else{
        activePlayer=0;
        document.querySelector('.left').style.background= '#f982c3' ;
        document.querySelector('.right').style.background= 'rgba(255, 255, 255, 0.08)' ;
    }
    
}

rollButton.addEventListener('click', function () {
    if (!gameActive) return;
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    if (diceRoll === 1) {
        diceImage.src = 'dice1.jpg';
    }
    else if (diceRoll === 2) {
        diceImage.src = 'dice2.jpg';
    }
    else if (diceRoll === 3) {
        diceImage.src = 'dice3.jpg';
    }
    else if (diceRoll === 4) {
        diceImage.src = 'dice4.jpg';
    }
    else if (diceRoll === 5) {
        diceImage.src = 'dice5.jpg';
    }
    else if (diceRoll === 6) {
        diceImage.src = "dice6.jpg";
    }
    if (diceRoll !== 1) {
        currentScore += diceRoll;
        displayScores();
    } else {
        switchPlayer();
    }
});

holdButton.addEventListener('click', function () {
    if (!gameActive) return;
    scores[activePlayer] += currentScore;
    if (scores[activePlayer] >= 100) {
        displayScores();
        gameActive = false;
        document.querySelector(activePlayer === 0 ? '.p1' : '.p2').textContent += ' Wins';
    } else {
        switchPlayer();
    }
});

resetButton.addEventListener('click', function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    gameActive = true;
    score1.textContent = '0';
    score2.textContent = '0';
    currentScore1.textContent = '0';
    currentScore2.textContent = '0';
    diceImage.src = 'dice2.jpg';
    document.querySelectorAll('.p1, .p2').forEach(el => {
        el.style.fontWeight = 'normal';
        el.textContent = el.classList.contains('p1') ? 'PLAYER 1 \n0' : 'PLAYER 2 \n0';
    });
    document.querySelector('.p1').style.fontWeight = 'bold';
});
scores = [0, 0];
currentScore = 0;
activePlayer = 0;
gameActive = true;
score1.textContent = '0';
score2.textContent = '0';
currentScore1.textContent = '0';
currentScore2.textContent = '0';
diceImage.src = "dice2.jpg";
document.querySelector('.left').style.background = '#f982c3';
