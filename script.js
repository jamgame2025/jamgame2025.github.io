let cards = [];
let mode = 'normal';

function setToday() {
  let params = new URLSearchParams(window.location.search);
  params.set('date', new Date().toISOString().slice(0,10));
  window.location.search = params;
}

function setMode(m) {
  let params = new URLSearchParams(window.location.search);
  params.set('mode', m);
  window.location.search = params;
}

document.addEventListener('DOMContentLoaded', () => {
  let params = new URLSearchParams(window.location.search);
  if (!params.has('date')) {
    setToday();
    return;
  }
  if (!params.has('mode')) {
    setMode('normal');
    return;
  }
  const d = params.get('date');
  document.getElementById('todays-date').textContent = d;
  mode = params.get('mode');
  document.getElementById('mode').textContent = 'Mode: ' + mode;
  if (mode == 'easy') {
    cards = boardseasy[d];
  } else if (mode == 'normal') {
    cards = boardsnormal[d];
  } else if (mode == 'hard') {
    cards = boardshard[d];
  }
  // Preload images
  cards.forEach(cardName => {
    new Image().src = 'svg/' + cardName + '.svg';
  });
});

function offsetDay(n) {
  let params = new URLSearchParams(window.location.search);
  let urlDate = new Date(params.get('date'));
  urlDate.setDate(urlDate.getDate() + n);
  params.set('date', urlDate.toISOString().slice(0,10));
  window.location.search = params;
}

// Listeners for day manipulation
document.getElementById('previous-day').addEventListener('click', () => {
  offsetDay(-1);
});

document.getElementById('next-day').addEventListener('click', () => {
  offsetDay(1);
});

document.getElementById('today-day').addEventListener('click', () => {
  setToday();
});

// Listeners for mode manipulation
document.getElementById('mode-easy').addEventListener('click', () => {
  setMode('easy');
});

document.getElementById('mode-normal').addEventListener('click', () => {
  setMode('normal');
});

document.getElementById('mode-hard').addEventListener('click', () => {
  setMode('hard');
});

document.getElementById('start-button').addEventListener('click', () => {
  const gameBoard = document.getElementById('game-board');
  gameBoard.removeChild(document.getElementById('start-button'));
  const matches = document.getElementById('matches');
  let selectedCards = [];
  let matchedCards = [];
  let startTime = 0;

  function createCardElement(cardName, matches) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.name = cardName;
    const img = document.createElement('img');
    img.src = 'svg/' + cardName + '.svg';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    card.appendChild(img);

    if (!matches) {
      card.addEventListener('click', () => {
        toggleCardSelection(card);
      });
    }
    return card;
  }

  function toggleCardSelection(card) {
    if (selectedCards.includes(card)) {
      card.classList.remove('selected', 'match', 'nonmatch', 'alreadyfound');
      selectedCards = selectedCards.filter(c => c !== card);
    } else {
      if (selectedCards.length < 3) {
        card.classList.add('selected');
        selectedCards.push(card);
        if (selectedCards.length === 3) {
          checkSet();
        }
      }
    }
  }

  function checkSet() {
    const [card1, card2, card3] = selectedCards;
    const isSet = pos => {
      const prop1 = card1.name[pos];
      const prop2 = card2.name[pos];
      const prop3 = card3.name[pos];
      return (prop1 == prop2 & prop1 == prop3) || (prop1 !== prop2 && prop1 !== prop3 && prop2 !== prop3);
    };

    if (isSet(0) && isSet(1) && isSet(2) && isSet(3)) {
      // Check if we've already evaluated this one
      cardNameArray = [card1.name, card2.name, card3.name];
      cardNameArray.sort();
      cardNameCat = cardNameArray[0] + cardNameArray[1] + cardNameArray[2];

      if (matchedCards.includes(cardNameCat)) {
        // Handle an already found set.
        selectedCards.forEach(card => card.classList.add('alreadyfound'));
      } else {
        // Handle a new set.
        selectedCards.forEach(card => card.classList.add('match'));
        matches.appendChild(createCardElement(card1.name, true));
        matches.appendChild(createCardElement(card2.name, true));
        matches.appendChild(createCardElement(card3.name, true));
        matchedCards.push(cardNameCat);
        numMatches = matchedCards.length;
        numMatchesElement.textContent = numMatches + ' matches found';
        if (numMatches === (mode == 'normal' ? 6 : (mode == 'easy' ? 3 : 9))) {
          // You win!
          let endTime = Date.now();
          let elapsedTime = endTime - startTime;
          let ms = elapsedTime % 1000;
          elapsedTime = Math.floor(elapsedTime / 1000);
          let hours = Math.floor(elapsedTime / 3600);
          elapsedTime = elapsedTime % 3600;
          let minutes = Math.floor(elapsedTime / 60);
          let seconds = elapsedTime % 60;
          const pad = (num, padding) => String(num).padStart(padding, '0');
          let elapsedString = `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}.${pad(ms, 3)}`;
          const finished = document.createElement('p');
          finished.textContent = 'Finished: ' + elapsedString;
          gameBoard.appendChild(finished);
          const goodjob = document.createElement('p');
          goodjob.textContent = 'YOU DID A GOOD JOB!';
          gameBoard.appendChild(goodjob);
        }
      }
    } else {
      // Handle a non-set.
      selectedCards.forEach(card => card.classList.add('nonmatch'));
    }

    setTimeout(() => {
      selectedCards.forEach(card => card.classList.remove('selected', 'match', 'nonmatch', 'alreadyfound'));
      selectedCards = [];
    }, 500);
  }

  cards.forEach(cardName => {
    const cardElement = createCardElement(cardName, false);
    gameBoard.appendChild(cardElement);
  });

  const numMatchesElement = document.createElement('p');
  numMatchesElement.textContent = '0 matches found';
  gameBoard.appendChild(numMatchesElement);

  // Start the timer
  startTime = Date.now();
});
