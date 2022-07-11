const playButton = document.querySelector('.play');
const options = document.querySelectorAll('img');

const gameResults = {
  games: 0,
  wins: 0,
  loses: 0,
  draws: 0,
};

const gamePicks = {
  userPick: '',
  AiPick: '',
};

const pickHand = function () {
  gamePicks.userPick = this.dataset.option;

  options.forEach(option => option.style.boxShadow = '');
  this.style.boxShadow = '0 0 0 4px red'
}

options.forEach(option => option.addEventListener('click', pickHand));