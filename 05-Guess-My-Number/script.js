'use strict';

// TODO
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 12;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = Number(document.querySelector('.highscore').textContent);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //document.querySelector('.message').textContent = 'Correct Number!';

  // when there is no input
  if (!guess) {
    displayMessage('No number!');

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }

    //when guess is too high
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
