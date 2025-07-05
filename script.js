document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const matches = document.getElementById('matches');
    let selectedCards = [];

    const cards = ["ODOG", "ODTG", "HSSP", "OSTP", "HOTR", "OOOR", "TOSP", "OSTG", "HOOR", "HDOR", "TSOP", "ODSG"];
    function createCardElement(cardName) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.name = cardName;
      const img = document.createElement('img');
      img.src = 'images/' + cardName + '.png';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';
      card.appendChild(img);

      card.addEventListener('click', () => {
        toggleCardSelection(card);
      });
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
        matches.appendChild(createCardElement(card1.name));
        matches.appendChild(createCardElement(card2.name));
        matches.appendChild(createCardElement(card3.name));
      }

      setTimeout(() => {
        selectedCards.forEach(card => card.classList.remove('selected'));
        selectedCards = [];
      }, 250);
    }

    cards.forEach(cardName => {
      const cardElement = createCardElement(cardName);
      gameBoard.appendChild(cardElement);
    });
});
