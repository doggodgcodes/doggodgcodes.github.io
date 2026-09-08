const emojis = ['🎮', '🎮', '🎲', '🎲', '🎯', '🎯', '🎪', '🎪', '🎨', '🎨', '🎭', '🎭', '🎸', '🎸', '🎺', '🎺'];

let cards = [];
let flipped = [];
let matched = [];
let moves = 0;
let matches = 0;
let canClick = true;

function initGame() {
  cards = [...emojis].sort(() => Math.random() - 0.5);
  flipped = [];
  matched = [];
  moves = 0;
  matches = 0;
  updateStats();
  renderBoard();
}

function renderBoard() {
  const gameBoard = document.getElementById('gameBoard');
  gameBoard.innerHTML = '';
  
  cards.forEach((emoji, index) => {
    const card = document.createElement('button');
    card.className = 'card';
    card.textContent = matched.includes(index) ? emoji : '?';
    
    if (matched.includes(index)) {
      card.classList.add('matched');
      card.disabled = true;
    }
    
    if (flipped.includes(index)) {
      card.textContent = emoji;
      card.classList.add('flipped');
    }
    
    card.addEventListener('click', () => flipCard(index));
    gameBoard.appendChild(card);
  });
}

function flipCard(index) {
  if (!canClick || flipped.includes(index) || matched.includes(index)) {
    return;
  }
  
  flipped.push(index);
  renderBoard();
  
  if (flipped.length === 2) {
    canClick = false;
    moves++;
    updateStats();
    
    const [first, second] = flipped;
    
    if (cards[first] === cards[second]) {
      matched.push(first, second);
      matches++;
      flipped = [];
      canClick = true;
      updateStats();
      renderBoard();
      
      if (matched.length === cards.length) {
        setTimeout(() => alert(`🎉 You won! Completed in ${moves} moves!`), 300);
      }
    } else {
      setTimeout(() => {
        flipped = [];
        canClick = true;
        renderBoard();
      }, 600);
    }
  }
}

function updateStats() {
  document.getElementById('moves').textContent = moves;
  document.getElementById('matches').textContent = matches;
}

function resetGame() {
  initGame();
}

initGame();
