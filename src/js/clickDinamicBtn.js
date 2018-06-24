import render from '../templates/cards.hbs';
import {cards} from "./cards";
import {cardsContainer} from "../index";

//const cardsContainer = document.querySelector('.cards');

function resetCards(elem, value) {
  elem.innerHTML = render({items: value});
}

/*=== dinamic display of cards on pressing buttons Shift, Shift+Alt ===*/
function clickDinamicBtn() {

  let card = document.querySelector('.cards');
  card.addEventListener('click', function(event) {

    if(event.target.tagName === 'LI') {
      if(event.shiftKey) {
        let newTypeCard = event.altKey ? 'wide' : 'narrow';
        cards.push({
          type: newTypeCard
        });
        console.log(cards);
      } else {
        cards.pop();
      }
    }

    resetCards(cardsContainer, cards);

  });



}


export {
  clickDinamicBtn
}