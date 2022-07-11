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
  aiPick: '',
};

const pickHand = function () {
  gamePicks.userPick = this.dataset.option;

  options.forEach(option => option.style.boxShadow = '');
  this.style.boxShadow = '0 0 0 4px red'
}

options.forEach(option => option.addEventListener('click', pickHand));

const aiSelection = () => {
  const selection = options[Math.floor(Math.random() * 3)].dataset.option
  return selection
}

const startGame = () => {
  if (!gamePicks.userPick) return alert('no option selected!!');

  gamePicks.aiPick = aiSelection();
  options.forEach(option => option.style.boxShadow = '');
}

playButton.addEventListener('click', startGame)