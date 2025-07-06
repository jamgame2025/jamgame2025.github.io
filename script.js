const boards = [
["ODOP", "TOOP", "HSSR", "HDTR", "HDOG", "ODOR", "TSOP", "OSSG", "HOOG", "TOTG", "HOOR", "OOOG"],
["HDOP", "OOOP", "TSTG", "HDTR", "ODSP", "OOSP", "TSSG", "HOSG", "OOTP", "OSTP", "TOTR", "HOOR"],
["HDSR", "TSOP", "ODSG", "TOTG", "TOSR", "HOSP", "HDOG", "OSOG", "TSSG", "OSTP", "HSSP", "OOTG"],
["TOSG", "TOOP", "HDTG", "OSSR", "HSSG", "OSOG", "HOOP", "HSTP", "TSOG", "HSOR", "TOTG", "HDSP"],
["HDSG", "OSOG", "TOSP", "HDTR", "HOTP", "ODTR", "HSSP", "TDTR", "TOOG", "TDOP", "TSSG", "OSTG"],
["HOSP", "HOSR", "OSOR", "ODSG", "OOSP", "TSOR", "TDSR", "ODSR", "ODOG", "TOSG", "HSSG", "ODTG"],
["HOSR", "OSSG", "TSTG", "TOTG", "TOTR", "TDOP", "TDTR", "OOOP", "OOOR", "HOSG", "OOOG", "ODOG"],
["HSOP", "HSTR", "OSTP", "HOTR", "OOTR", "HOOG", "OSTR", "ODTR", "TDTG", "ODTG", "TSTG", "TSTR"],
["TSTG", "HOTP", "OSOR", "HSTG", "TOOR", "HOOP", "TDOG", "ODSP", "HDSP", "TDOR", "HOOR", "OSOP"],
["TSOG", "HDSG", "ODSP", "OSTG", "TSTP", "TOOR", "OOOR", "OOTR", "OSTP", "HDSP", "HSOP", "HSSR"],
["HOTG", "HSTG", "TSTR", "HSOG", "TSTP", "TDSG", "OSSR", "ODTR", "TOSP", "TDSP", "HDSG", "ODSR"],
["OOOR", "TDOP", "HDSR", "TDTP", "OSOP", "HDTG", "HSOR", "TOTG", "TSTR", "ODSR", "HDOG", "HOTR"],
["HSTP", "ODOP", "HDOG", "TSOP", "OSOG", "HSSG", "TSOR", "TDTP", "TDSG", "OOOR", "OSTR", "TOSG"],
["TDSG", "HSTP", "OOOP", "HOSP", "ODOR", "HDOP", "ODTR", "TOOR", "OSOG", "TDOP", "TSSR", "TSTP"],
["TOOG", "HDSR", "ODTG", "TOTP", "TSSR", "OSSP", "OSOG", "TDOG", "OOSG", "HSSG", "HDSP", "HDTG"],
["TSSP", "ODOG", "TDSP", "HDOP", "TOOG", "OSOR", "HOOG", "TDOG", "HOOP", "HDSP", "OOOG", "TDTR"],
["TDTP", "HOOP", "OSOR", "TDOG", "OSTP", "HSTG", "HDTP", "TDSR", "OSSP", "OSTG", "ODOG", "HDSP"],
["TDSR", "OOOG", "TOOG", "OSOG", "TOOP", "HSTP", "HOTP", "HSTG", "OSTP", "OOOP", "ODSP", "TDSG"],
["HSSR", "ODOG", "OSSG", "OOTP", "HOSG", "HDOP", "ODOR", "HSSP", "OOTG", "OSSP", "TSTG", "TDOP"],
["HOSR", "HOOR", "HOTR", "OOOR", "HDOP", "TOSR", "OOTG", "OOSP", "HDSP", "HSTG", "OSSR", "TOSP"],
["HDTR", "OSTR", "TSSP", "HOTR", "OOOG", "ODSG", "TOTR", "ODTG", "HOSP", "OOTR", "ODTR", "OSOP"],
["HSOP", "TDOP", "ODOG", "HDOG", "OSSR", "OOTR", "HOTP", "HDOR", "HDSP", "TSSR", "OSTG", "HDTR"],
["TSTG", "TOOP", "TSTP", "HDOR", "HDOG", "OOOR", "TDSP", "HDSP", "HDTG", "HDSG", "HOSG", "ODSR"],
["HSSG", "HOOG", "TOSG", "TOOP", "HDTG", "OOSR", "HDSP", "OOTP", "HOTG", "OOOG", "ODTR", "HOSG"],
["OSTP", "TDOG", "ODSG", "HOSG", "ODTG", "HSSR", "HOSP", "TSOP", "HOSR", "ODTR", "OOOR", "TSSP"],
["HSOR", "ODOG", "OOSR", "TDTR", "TSSR", "HSSP", "HSTG", "HSSG", "HSTR", "HSOG", "OOTR", "HDSR"],
["HSTR", "TOSR", "TSOR", "OSSR", "TDTR", "HDTR", "TDSP", "HDOR", "OSTP", "HOOP", "ODOG", "HOOR"],
["HSTG", "HSOG", "TDSP", "OSOP", "TDSG", "TSOP", "TOSG", "TDSR", "HDTP", "TSSG", "OOOR", "HOTR"],
["HOSR", "TSSG", "HSOG", "HDTP", "HSSG", "HOOR", "HSOP", "HDTG", "OOTP", "OOOR", "TSTR", "TDSR"],
["OOTG", "TOTR", "HOTP", "TDOG", "ODOR", "HOOG", "HSSG", "HDOR", "OSSG", "OSOP", "TDOR", "OOOR"],
["TDSG", "TOSR", "TDOG", "TDTP", "HSSG", "HSSR", "TDSR", "OOOG", "TDTG", "HOTG", "TOTG", "OOSP"],
["ODOP", "ODOG", "OSSG", "TSSG", "HOTP", "HOTG", "HOTR", "OSSR", "HSSP", "HDOR", "HDOP", "HDTR"],
["TOSP", "ODSR", "TDSR", "OSTR", "OOSG", "HOTG", "TOSG", "OOOR", "ODOP", "HDSP", "OSOG", "TSSR"],
["HOTP", "HOOR", "TSSR", "TDOP", "HOSP", "HSSR", "TOOP", "HOTG", "OSTP", "OOOG", "OSSR", "ODOP"],
["HDOG", "TDOR", "HSTP", "TSOG", "HOSR", "TDSP", "HOTR", "OSOG", "TSSR", "TSTP", "TOSP", "OOOG"],
["HOSP", "OOOP", "TOSR", "OSSG", "HDSP", "TDSR", "ODTG", "HSTG", "HDTP", "TDOR", "TDSP", "HSOP"],
["ODOR", "TOOG", "ODOP", "HOSG", "OSTR", "HOTR", "HOOP", "TOSR", "OOTG", "HDOR", "TDOR", "OSOP"],
["HSSP", "OOOP", "HOSR", "TSTG", "HOSG", "OOOR", "TDSG", "OSOR", "OOSG", "HDSR", "HDSP", "HSSR"],
["ODSR", "ODTG", "HDSG", "TSTP", "OSOR", "OSSR", "TOSG", "HSOG", "HOSP", "HOOG", "ODOP", "TDTP"],
["TDOP", "TSTP", "OSSR", "TOOP", "ODSP", "HDTR", "OSOP", "TSOG", "TOSP", "HSTP", "HOOP", "ODOR"],
["HOOR", "HSSR", "TOOG", "TDSP", "TDOG", "HOSG", "HDSP", "HDTG", "HOTP", "TOSG", "OSSR", "ODTP"],
["TSSP", "TOSP", "HOSR", "ODSG", "TSTP", "HOSP", "TOOR", "ODTR", "TOTG", "OOOP", "TDTG", "TSOR"],
["HDSG", "OSSR", "TSTG", "HOSG", "TOTG", "OSOG", "HOOG", "ODOR", "TDOR", "TDTP", "HOSP", "TOSP"],
["TOTP", "OOTG", "OSTP", "OSTG", "OOOP", "HDTP", "ODOG", "TOSG", "HSOR", "TDTR", "OOSR", "HOOG"],
["OOTR", "OOOR", "TDOR", "OSTR", "HDOG", "TSSP", "ODSP", "ODTR", "ODOG", "ODSR", "TOOR", "HDTG"],
["HSTP", "HDOR", "HSTR", "HOTP", "TOOG", "TDOG", "HDTP", "TDSG", "HDOP", "ODOP", "OOSR", "OSSR"],
["HOTR", "HSOR", "HDSR", "TOOR", "TDTR", "HDOP", "HOSP", "OOTG", "TSOG", "ODOG", "HOOG", "ODSG"],
["HSSR", "ODSG", "HDSG", "HOSR", "TDSP", "TOSP", "TDSR", "OOSP", "TDSG", "HSSP", "HDOP", "OOOP"],
["OSOG", "OSOR", "ODTG", "TDSR", "HOTR", "HOSG", "HOTG", "TDTR", "TSTR", "HOOR", "HSSR", "HOTP"],
["OOTR", "TOTP", "ODSR", "HSOG", "HSTG", "TOSR", "TDOR", "ODOP", "ODTG", "OOSP", "HDTR", "TDTR"],
["TDOP", "TDSR", "ODSG", "HDSP", "TDTP", "TDOR", "OSOG", "TOOP", "TDOG", "OOOG", "ODTG", "HDOR"],
["ODTP", "TOSP", "OOSR", "TSOG", "HSOR", "TSOR", "HDTP", "TDTP", "HOSG", "TOOR", "HOSR", "HOOP"],
["HOSR", "TOSR", "HDOG", "OOTG", "TDOP", "HSOR", "TSSG", "HDTG", "OSOP", "ODTR", "ODTP", "OSTP"],
["OOSP", "ODTG", "HOSR", "OSTG", "OOTR", "HDTG", "TDTG", "OSTP", "OOSR", "TSOR", "ODOP", "TOOR"],
["HSTR", "TDTG", "TDOR", "TOTR", "OOOP", "HOOR", "HSOG", "HSSR", "OSSR", "OOSR", "TSTR", "HSOR"],
["HDTP", "TDTP", "TOTP", "ODTP", "HOOR", "HSTG", "TDSG", "HOTR", "TOSR", "OOTR", "TDOR", "ODOP"],
["OSSP", "OOSP", "HDSG", "OOSR", "HOTP", "ODOG", "HSOG", "TDOP", "HDSR", "HSOR", "OSTR", "TOOG"],
["HSTR", "OSSG", "TSSG", "ODSG", "TSTR", "HDTR", "ODOP", "ODTR", "HDOG", "HOOP", "OOSP", "TOOP"],
["OOSR", "HDOP", "OSSP", "HOTR", "ODTG", "OSTG", "TDTP", "HSTP", "TSOG", "HDSG", "TDOG", "TDSR"],
["TDSP", "ODSG", "HOOP", "OSSP", "OSOG", "ODOG", "OOOP", "HDTP", "OOSR", "TOOP", "OSOR", "ODTP"],
["TDSP", "ODOR", "HSTP", "TOSP", "TSTG", "HSOG", "OSOG", "TOTP", "TSSR", "HOTR", "HSSG", "HOSP"],
["TDTP", "TDSR", "OSTP", "OOSR", "TSTP", "HDSP", "HDOG", "HOTP", "HSOP", "TSSR", "TSSG", "TOSR"],
["TOOP", "TDTP", "ODTP", "HSSG", "OOTG", "OSSP", "TSTP", "HSSP", "TDTR", "HOOP", "TSSG", "HDTP"],
["HOTP", "OOTG", "TOSP", "TOSG", "OOOP", "HOOP", "OSSR", "HDSP", "TOOP", "TSSR", "ODOG", "TDTG"],
["ODTG", "ODOR", "OSOR", "TSTR", "ODTP", "HOOR", "OOOP", "TSSP", "OSSR", "OOOR", "HDTP", "TDTR"],
["HOOR", "OSTP", "HSOP", "OSSR", "OOSP", "OOTR", "HDTG", "TDSG", "TSSP", "TDTR", "HSTG", "TDTP"],
["OOTR", "HDSP", "ODOG", "TDOG", "TOOG", "ODSR", "ODOR", "HSOG", "HSOP", "HOTR", "HSSP", "TSOG"],
["TOTG", "OSOR", "TDSG", "TSTR", "HOTG", "TDSP", "ODOP", "HOOP", "HDSP", "ODSP", "HSTP", "TDTP"],
["TSOR", "HDTR", "OOSR", "HOTP", "OOTR", "HSOR", "TSTR", "ODSG", "OSSP", "HOSR", "OSTG", "TOOR"],
["HSOP", "HSOR", "TOSP", "TOTG", "TOSR", "HDOG", "TSOP", "TOTR", "TOOR", "HDOP", "OSOP", "OSTP"],
["HOOP", "TDOR", "TSSG", "TOTP", "HOOR", "HSOR", "OSSP", "OSOR", "TDTP", "ODTR", "OSSG", "HOOG"],
["TOSP", "OSOP", "OSTG", "HOOR", "TDSP", "TDOG", "TSOR", "OOTP", "OOTG", "HDOG", "OOTR", "TSSP"],
["HSOR", "TDOP", "TSOR", "HSOP", "OOTR", "HOOG", "HDSR", "ODSR", "ODTG", "TDSR", "TOTR", "HOSG"],
["TSTG", "HDTP", "OOTR", "HDSR", "ODTP", "OOOG", "TSOG", "ODTR", "TSSG", "TDSR", "OOSR", "HDOG"],
["HDSR", "TDTR", "TOOG", "HOSG", "TOTP", "ODOR", "TSOG", "TSTR", "TDSR", "TDOR", "TSTG", "TOSR"],
["ODTG", "OOSG", "OOOG", "HDSP", "HOSR", "HSOR", "TSSR", "HOOP", "HDTR", "TDTP", "HOTR", "OSSG"],
["ODOR", "OOOP", "ODSG", "TDOR", "TOOG", "TSTG", "HOSP", "TDTR", "OSSR", "OSTP", "HDSR", "TDSG"],
["TOSP", "OSSR", "TSTP", "TSSG", "TDOP", "ODOG", "HSTG", "HSTR", "ODTR", "HOTG", "TDSP", "HDOR"],
["TSOG", "HDTG", "HSOR", "TSOR", "TDTG", "TOOR", "HOOG", "OSOP", "OOSR", "TSOP", "HDOG", "OOSP"],
["ODTR", "OOOG", "HOTP", "TSSG", "TSOR", "HDSR", "TSTP", "TOSG", "TSOG", "OSSP", "OSTG", "TSTG"],
["TOSR", "ODOP", "TSTG", "OOOG", "HDTR", "OSTG", "TSSP", "TDOP", "TSOP", "HOOP", "HSOR", "HSSG"],
["OOTR", "TDTG", "HSSG", "TSSP", "TOTR", "HSTP", "HDSP", "OSOG", "TDTP", "HOSG", "TDTR", "ODOP"],
["ODTP", "OSSP", "TDTR", "OSSG", "HOTP", "TDOP", "TSSR", "HDOR", "HOOG", "OOTP", "HSTP", "TOTP"],
["HDTG", "ODSG", "HOSR", "ODTP", "HOSP", "HDTR", "TOSP", "HSOP", "HSOG", "OOOP", "TOTG", "OOOR"],
["HDOG", "TSTP", "HDSP", "HSTG", "HSSG", "OSOR", "TDOR", "TOTG", "OOTR", "OSSR", "TOSG", "ODTG"],
["HOOP", "HDTR", "OOOG", "OOTR", "TOOG", "TDOR", "TOSG", "HOOG", "OOOR", "TDSR", "HSOR", "HSTP"],
["OSOG", "TOTP", "TDTG", "HSTG", "OSSG", "OSTR", "ODSG", "HSOR", "HOSP", "HOOG", "TSTP", "HDOR"],
["TOTG", "TSSR", "HOOR", "HSTR", "TOTR", "ODTP", "HOSP", "HDTR", "ODSG", "TDOR", "HOTG", "ODTR"],
["OOTP", "OOOG", "TSOG", "ODOP", "OOTR", "OSSR", "OSTG", "ODTR", "OOTG", "HDSP", "TSOP", "OSSG"],
["TOSP", "TOSG", "ODTR", "TDSR", "OSOP", "TSSG", "HOTP", "HDOP", "OSTP", "HDOR", "TOOP", "TSSP"],
["HSOR", "TSTR", "HDOR", "OOOG", "ODSR", "HOOR", "HOTR", "HDTR", "OSOG", "TOTR", "TOOP", "ODTR"],
["OOTG", "TDSG", "HDOP", "TDSP", "HSSR", "TSSR", "OSSR", "HDTG", "TSOG", "HOOP", "OSOG", "OSTP"],
["OSOP", "TDSR", "TOSP", "OOTG", "TDOR", "OOOP", "HSTP", "TSTP", "HOTG", "TOTG", "HOSG", "TDTR"],
["HOOR", "ODOG", "HOTG", "HOTR", "HOSP", "HSOR", "TDTP", "HSSG", "OSTG", "ODSP", "HDOP", "OOOR"],
["OOTP", "HOTP", "OSTP", "TOTP", "HOSG", "OSOR", "OOOR", "ODSR", "HOTG", "TDSG", "ODOR", "ODSG"],
["HDTG", "HDOG", "OSOP", "HSSG", "TSOR", "HSOG", "HSOR", "HOOG", "OOSP", "TOOG", "HOTP", "HDSG"],
["ODTP", "HSSP", "OSOG", "OOTR", "OSTP", "HOSP", "OOSG", "TSTG", "HSOG", "TDOP", "TSOP", "OSOR"],
["HOTR", "TOSP", "TOTG", "ODSR", "OSTR", "OSTG", "HDOG", "TDTP", "HSTG", "TSOG", "HOTP", "OSTP"],
["OOTP", "HDOP", "TOSP", "HOOR", "OSTP", "TSOP", "HOSR", "HSTG", "TSSR", "OOSG", "HSOG", "HSSG"],
["TDTR", "HSOP", "ODSG", "TDSR", "TOOG", "HDTR", "OSTP", "HSTG", "ODOP", "ODOR", "OOTG", "TSSP"],
];
let cards = [];

document.addEventListener('DOMContentLoaded', () => {
  // Choose random board
  cards = boards[Math.floor(Math.random()*boards.length)]
  // Preload images
  cards.forEach(cardName => {
    new Image().src = 'images/' + cardName + '.png';
  });
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
    img.src = 'images/' + cardName + '.png';
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
      card.classList.remove('selected');
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
      if (!matchedCards.includes(cardNameCat)) {
        matches.appendChild(createCardElement(card1.name, true));
        matches.appendChild(createCardElement(card2.name, true));
        matches.appendChild(createCardElement(card3.name, true));
        matchedCards.push(cardNameCat);
        if (matchedCards.length === 6) {
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
          let elapsedString = `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}.${pad(ms, 4)}`;
          const finished = document.createElement('p');
          finished.textContent = 'Finished: ' + elapsedString;
          gameBoard.appendChild(finished);
        }
      }
    }

    setTimeout(() => {
      selectedCards.forEach(card => card.classList.remove('selected'));
      selectedCards = [];
    }, 250);
  }

  cards.forEach(cardName => {
    const cardElement = createCardElement(cardName, false);
    gameBoard.appendChild(cardElement);
  });
  // Start the timer
  startTime = Date.now();
});
