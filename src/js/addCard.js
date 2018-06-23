/*=== include handlebars template ===*/
import render from '../templates/cards.hbs';
import {cards} from "./cards";

/*=== add to array cards.js new type ===*/
function addCard(typeCard){

 let newTypeCard = typeCard || 'narrow';

  cards.push({
    type: newTypeCard,
  });

  const cardsContainer = document.querySelector('.cards');
  cardsContainer.innerHTML = render({items: cards});

}


export {
  addCard
}