const playButton = document.querySelector('.play');
const options = document.querySelectorAll('img');
const showUserSelection = document.querySelector('.leftPanel div:nth-of-type(1) span');
const showAiSelection = document.querySelector('.leftPanel div:nth-of-type(2) span');
const showWinner = document.querySelector('.leftPanel h1:nth-last-child(1) span');

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

const showResult = () => {
  showUserSelection.textContent = gamePicks.userPick;
  showAiSelection.textContent = gamePicks.aiPick;
  options.forEach(option => option.style.boxShadow = '');
}

const gameWinner = () => {
  if (gamePicks.userPick == 'rock') {
    if (gamePicks.aiPick == 'paper') {
      showWinner.textContent = 'AI Wins :(';
      showWinner.style.color = 'red';
      gameResults.loses++;
    } else if (gamePicks.aiPick == 'scissors') {
      showWinner.textContent = 'You Win :D';
      showWinner.style.color = 'green';
      gameResults.wins++;
    } else {
      showWinner.textContent = 'It\'s a draw!';
      showWinner.style.color = 'gray';
      gameResults.draws++;
    }
  } else if (gamePicks.userPick == 'paper') {
    if (gamePicks.aiPick == 'scissors') {
      showWinner.textContent = 'AI Wins :(';
      showWinner.style.color = 'red';
      gameResults.loses++;
    } else if (gamePicks.aiPick == 'rock') {
      showWinner.textContent = 'You Win :D';
      showWinner.style.color = 'green';
      gameResults.wins++;
    } else {
      showWinner.textContent = 'It\'s a draw!';
      showWinner.style.color = 'gray';
      gameResults.draws++;
    }
  } else if (gamePicks.userPick == 'scissors') {
    if (gamePicks.aiPick == 'rock') {
      showWinner.textContent = 'AI Wins :(';
      showWinner.style.color = 'red';
      gameResults.loses++;
    } else if (gamePicks.aiPick == 'paper') {
      showWinner.textContent = 'You Win :D';
      showWinner.style.color = 'green';
      gameResults.wins++;
    } else {
      showWinner.textContent = 'It\'s a draw!';
      showWinner.style.color = 'gray';
      gameResults.draws++;
    }
  }
};

const displayCounters = () => {
  document.querySelector('.rightPanel div:nth-of-type(1) span').textContent = gameResults.games
  document.querySelector('.rightPanel div:nth-of-type(2) span').textContent = gameResults.wins
  document.querySelector('.rightPanel div:nth-of-type(3) span').textContent = gameResults.loses
  document.querySelector('.rightPanel div:nth-of-type(4) span').textContent = gameResults.draws
}


const startGame = () => {
  if (!gamePicks.userPick) return alert('no option selected!!');

  gamePicks.aiPick = aiSelection();
  showResult();
  gameWinner();
  gameResults.games++;
  displayCounters()
}

playButton.addEventListener('click', startGame)