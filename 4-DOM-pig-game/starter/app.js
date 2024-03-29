/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, lastDice, winningScore;
init();

/* --- Generate the dice roll. --- */

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if (gamePlaying) {
        // 1. Generate random number between 1 - 6;
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. Display the results
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block'; //Show the dice
        diceDOM.src = 'dice-' + dice + '.png'; //Get the dice img that matches the generated random number.

        var dice2DOM = document.querySelector('.dice-2');
        dice2DOM.style.display = 'block'; //Show the dice
        dice2DOM.src = 'dice-' + dice2 + '.png'; //Get the dice img that matches the generated random number.

        // 3. Update the round score if the rolled button was NOT a 1
        if ((dice === 6 || dice2 === 6) && lastDice === 6){
            roundScore = 0;
            scores[activePlayer] = 0;
            nextPlayer();
        }
        else if (dice !== 1 && dice2 !== 1) {
            // Add score
            totalScore = dice + dice2;
            roundScore += totalScore;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }

        lastDice = dice;

    }
});

/* --- Button Hold --- */

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Chceck if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' +activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

/* --- Set Winning Score --- */
document.querySelector('.score-button').addEventListener('click', function(){
    var score = document.querySelector(".score-input").value;
    
    if(score != ""){
        winningScore = score;
        document.querySelector('.current-winning-score').textContent = winningScore;

    }
});

/* --- Reset the Game --- */

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';

}

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    lastDice = 0;
    winningScore = 100;

    document.querySelector('.current-winning-score').textContent = winningScore;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';

    //Initialize all scores to 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}