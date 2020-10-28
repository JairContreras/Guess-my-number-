'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//document.querySelector('.number').textContent = secretNumber;
const x = function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    //sin entrada
    if (!guess) {
      displayMessage('No number!');
        //gana
    } else if (guess === secretNumber) {
        displayMessage('Correct number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        //no es igual al secret number
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage ( guess > secretNumber ? 'Too High' : 'Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = '0';
        }

    }

}

const reset = function () {
    secretNumber = Math.trunc(Math.random() * 20);
    score = 20;
    displayMessage ("Start guessing...");

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';


}

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', x);

document.querySelector('.again').addEventListener('click', reset);



