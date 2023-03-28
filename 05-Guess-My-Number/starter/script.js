'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayContent = (className, message) => {
  document.querySelector(className).textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayContent('.message', '⛔️ No Number!');
    // When the player wins
  } else if (guess === secretNumber) {
    displayContent('.message', '🎉 Correct Number!');
    displayContent('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      displayContent('.highscore', highscore);
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayContent(
        '.message',
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      displayContent('.score', score);
    } else {
      displayContent('.message', '💥 You lost the game!');
      displayContent('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayContent('.message', 'Start guessing...');
  displayContent('.number', '?');
  displayContent('.score', score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
