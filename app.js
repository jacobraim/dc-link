const PUZZLE_ROLLOVER_HOUR = 6;
const PUZZLE_TIME_ZONE = 'America/New_York';

function getDatePartsInTimeZone(date = new Date()) {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: PUZZLE_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    hourCycle: 'h23'
  });

  return Object.fromEntries(
    formatter.formatToParts(date)
      .filter(part => part.type !== 'literal')
      .map(part => [part.type, part.value])
  );
}

function getPublicationDateKey(date = new Date()) {
  const parts = getDatePartsInTimeZone(date);
  const localDate = new Date(`${parts.year}-${parts.month}-${parts.day}T12:00:00`);

  if (Number(parts.hour) < PUZZLE_ROLLOVER_HOUR) {
    localDate.setDate(localDate.getDate() - 1);
  }

  return [
    localDate.getFullYear(),
    String(localDate.getMonth() + 1).padStart(2, '0'),
    String(localDate.getDate()).padStart(2, '0')
  ].join('-');
}

function getActivePuzzle() {
  const targetDate = getPublicationDateKey();
  const availableDates = Object.keys(DC_LINK_PUZZLES).sort();
  const selectedDate = [...availableDates].reverse().find(date => date <= targetDate) || availableDates[0];

  if (!selectedDate) {
    throw new Error('No DC Link puzzles are configured in puzzles.js.');
  }

  return { ...DC_LINK_PUZZLES[selectedDate], date: selectedDate };
}

const puzzle = getActivePuzzle();

const state = {
  selected: new Set(),
  remainingItems: [],
  solved: [],
  mistakesRemaining: 4,
  guessHistory: []
};

const $ = (id) => document.getElementById(id);
const startScreen = $('start-screen');
const gameScreen = $('game-screen');
const endScreen = $('end-screen');
const tileGrid = $('tile-grid');
const solvedGroups = $('solved-groups');
const submitButton = $('submit-button');
const message = $('message');

function renderPuzzleMetadata() {
  document.title = `DC Link #${puzzle.number} | Washingtonian Games`;
  document.querySelectorAll('[data-puzzle-number]').forEach(el => {
    el.textContent = `#${puzzle.number}`;
  });
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function resetState() {
  $('reveal-heading').classList.add('hidden');
  tileGrid.classList.remove('hidden');
  $('selection-prompt').classList.remove('hidden');
  document.querySelector('.status-bar').classList.remove('hidden');
  $('game-controls').classList.remove('hidden');
  $('reveal-controls').classList.add('hidden');
  state.selected.clear();
  state.remainingItems = shuffle(puzzle.groups.flatMap(group => group.items));
  state.solved = [];
  state.mistakesRemaining = 4;
  state.guessHistory = [];
  message.textContent = '';
  render();
}

function render() {
  renderSolved();
  renderTiles();
  renderMistakes();
  submitButton.disabled = state.selected.size !== 4;
}

function renderSolved() {
  solvedGroups.innerHTML = '';
  state.solved.forEach(group => {
    const el = document.createElement('div');
    el.className = `solved-group ${group.color}`;
    el.innerHTML = `<h3>${group.label}</h3><p>${group.items.join(', ')}</p>`;
    solvedGroups.appendChild(el);
  });
}

function renderTiles() {
  tileGrid.innerHTML = '';
  state.remainingItems.forEach(item => {
    const button = document.createElement('button');
    button.className = 'tile';
    if (state.selected.has(item)) button.classList.add('selected');
    button.textContent = item;
    button.addEventListener('click', () => toggleTile(item));
    tileGrid.appendChild(button);
  });
}

function renderMistakes() {
  const container = $('mistakes');
  container.innerHTML = '';
  for (let i = 0; i < 4; i++) {
    const dot = document.createElement('span');
    dot.className = 'mistake-dot';
    if (i >= state.mistakesRemaining) dot.classList.add('used');
    container.appendChild(dot);
  }
  container.setAttribute('aria-label', `${state.mistakesRemaining} mistakes remaining`);
}

function toggleTile(item) {
  message.textContent = '';
  if (state.selected.has(item)) {
    state.selected.delete(item);
  } else if (state.selected.size < 4) {
    state.selected.add(item);
  }
  renderTiles();
  submitButton.disabled = state.selected.size !== 4;
}

function submitGuess() {
  if (state.selected.size !== 4) return;
  const guess = [...state.selected];
  const signature = [...guess].sort().join('|');
  if (state.guessHistory.some(entry => entry.signature === signature)) {
    message.textContent = 'Already guessed.';
    return;
  }

  const solvedGroup = puzzle.groups.find(group =>
    !state.solved.some(s => s.id === group.id) &&
    group.items.every(item => state.selected.has(item))
  );

  if (solvedGroup) {
    state.guessHistory.push({ signature, items: guess, correct: true });
    message.textContent = 'Connected!';
    submitButton.disabled = true;

    [...tileGrid.children].forEach(tile => {
      if (state.selected.has(tile.textContent)) tile.classList.add('solving');
    });

    setTimeout(() => {
      state.solved.push(solvedGroup);
      state.remainingItems = state.remainingItems.filter(item => !state.selected.has(item));
      state.selected.clear();
      render();
      if (state.solved.length === 4) setTimeout(() => finishGame(true), 650);
    }, 430);
    return;
  }

  state.guessHistory.push({ signature, items: guess, correct: false });

  const maxOverlap = Math.max(...puzzle.groups
    .filter(group => !state.solved.some(s => s.id === group.id))
    .map(group => group.items.filter(item => state.selected.has(item)).length));

  state.mistakesRemaining -= 1;
  message.textContent = maxOverlap === 3 ? 'One away!' : 'Not quite.';
  [...tileGrid.children].forEach(tile => {
    if (state.selected.has(tile.textContent)) tile.classList.add('shake');
  });
  setTimeout(render, 380);
  if (state.mistakesRemaining === 0) setTimeout(revealAnswers, 650);
}

function revealAnswers() {
  state.selected.clear();
  message.textContent = '';

  $('reveal-heading').classList.remove('hidden');
  tileGrid.classList.add('hidden');
  $('selection-prompt').classList.add('hidden');
  document.querySelector('.status-bar').classList.add('hidden');
  $('game-controls').classList.add('hidden');
  $('reveal-controls').classList.remove('hidden');

  solvedGroups.innerHTML = '';
  puzzle.groups.forEach(group => {
    const el = document.createElement('div');
    el.className = `solved-group ${group.color}`;
    el.innerHTML = `<h3>${group.label}</h3><p>${group.items.join(', ')}</p>`;
    solvedGroups.appendChild(el);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function finishGame(won) {
  gameScreen.classList.add('hidden');
  endScreen.classList.remove('hidden');
  $('end-title').textContent = won ? 'You solved DC Link!' : 'Better luck tomorrow';
  renderResultGrid();
}

function groupForItem(item) {
  return puzzle.groups.find(group => group.items.includes(item));
}

function renderResultGrid() {
  const grid = $('end-grid');
  grid.innerHTML = '';

  state.guessHistory.forEach(guess => {
    guess.items.forEach(item => {
      const group = groupForItem(item);
      const square = document.createElement('div');
      square.className = `share-square ${group.color}`;
      grid.appendChild(square);
    });
  });
}

function shareResult() {
  const emojiByColor = { yellow: '🟨', green: '🟩', blue: '🟦', purple: '🟪' };
  const rows = state.guessHistory.map(guess =>
    guess.items.map(item => emojiByColor[groupForItem(item).color]).join('')
  );
  const text = `DC Link #${puzzle.number}\n${rows.join('\n')}\nwashingtonian.com/dclink`;
  navigator.clipboard.writeText(text).then(() => showToast('Results copied')).catch(() => showToast('Copy failed'));
}

function showToast(text) {
  const toast = $('toast');
  toast.textContent = text;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 1800);
}

renderPuzzleMetadata();

$('play-button').addEventListener('click', () => {
  startScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  resetState();
});
$('submit-button').addEventListener('click', submitGuess);
$('shuffle-button').addEventListener('click', () => {
  state.remainingItems = shuffle(state.remainingItems);
  renderTiles();
});
$('deselect-button').addEventListener('click', () => {
  state.selected.clear();
  renderTiles();
  submitButton.disabled = true;
});
$('replay-button').addEventListener('click', () => {
  endScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  resetState();
});
$('share-button').addEventListener('click', shareResult);
$('how-button').addEventListener('click', () => $('how-dialog').showModal());
$('close-how').addEventListener('click', () => $('how-dialog').close());

$('continue-button').addEventListener('click', () => finishGame(false));
