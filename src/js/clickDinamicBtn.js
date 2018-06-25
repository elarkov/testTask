import render from '../templates/cards.hbs';
import {cardsContainer} from "../index";
import {cards} from "./cards";

let resetCards = (elem, value) => {
  elem.innerHTML = render({items: value});
};


/*=== dinamic display of cards on pressing buttons Shift, Shift+Alt ===*/
function clickDinamicBtn(){

  let card = document.querySelector('.cards');
  card.addEventListener('click', (event) => {
    event.preventDefault();

    if(event.target.tagName === 'LI') {

      var prevPage;

      if(event.shiftKey) {

        let newTypeCard = event.altKey ? 'wide' : 'narrow';

        cards.push({
          type: newTypeCard
        });

        prevPage = 'AddCardType-' + newTypeCard;

      } else {

        cards.pop();
        prevPage = 'Delete';

      }

    }

    history.pushState(cards, prevPage, '');
    resetCards(cardsContainer, cards);

  });


  window.addEventListener('popstate', (event) => {
    resetCards(cardsContainer, event.state);
  });

}


export {
  clickDinamicBtn
}