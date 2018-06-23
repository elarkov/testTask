/*=== include handlebars template ===*/
import render from '../templates/cards.hbs';
import {cards} from "./cards";




/*=== add to array cards.js new type ===*/
function addCard(typeCard){

 let newTypeCard = typeCard || 'narrow';
 let numberCard = document.querySelectorAll('.cards__item').length + 1;



  cards.push({
    type: newTypeCard,
    number: numberCard
  });

  const cardsContainer = document.querySelector('.cards');
  cardsContainer.innerHTML = render({items: cards});

}



export {
  addCard
}