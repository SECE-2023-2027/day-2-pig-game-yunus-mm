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
        currentScore1.textContent = activePlayer === 0 ? currentScore : 0;
        currentScore2.textContent = activePlayer === 1 ? currentScore : 0;
    }

    function switchPlayer() {
        currentScore = 0;
        displayScores();
        document.querySelectorAll('.p1, .p2').forEach(el => el.style.fontWeight = 'normal');
        activePlayer = activePlayer === 0 ? 1 : 0;
        document.querySelector(activePlayer === 0 ? '.left' : '.right').style.background = 'rgba(255, 255, 255, 0.08)';
        document.querySelector(activePlayer === 0 ? '.right' : '.left').style.background = '#f982c3';
    }

    rollButton.addEventListener('click', function() {
        if (!gameActive) return;
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        if (diceRoll===1){
            diceImage.src = '1.jpg';
        }
        else if(diceRoll===2){
            diceImage.src = '2.jpg';
        }
        else if(diceRoll===3){
            diceImage.src = '3.jpg';
        }
        else if(diceRoll===4){
            diceImage.src = '4.jpg';
        }
        else if(diceRoll===5){
            diceImage.src = '5.jpg';
        }
        else if(diceRoll===6){
            diceImage.src = "6.jpg";
        }
        if (diceRoll !== 1) {
            currentScore += diceRoll;
            displayScores();
        } else {
            switchPlayer();
        }
    });

    holdButton.addEventListener('click', function() {
        if (!gameActive) return;
        scores[activePlayer] += currentScore;
        if (scores[activePlayer] >= 100) {
            displayScores();
            gameActive = false;
            document.querySelector(activePlayer === 0 ? '.p1' : '.p2').textContent += ' 🏆';
            alert(`Player ${activePlayer + 1} wins!`);
        } else {
            switchPlayer();
        }
    });

    resetButton.addEventListener('click', function() {
        scores = [0, 0];
        currentScore = 0;
        activePlayer = 0;
        gameActive = true;
        score1.textContent = '0';
        score2.textContent = '0';
        currentScore1.textContent = '0';
        currentScore2.textContent = '0';
        diceImage.src = '1.jpg';
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
    diceImage.src = "1.jpg";
    document.querySelector('.left').style.background='rgba(255, 255, 255, 0.08)'
