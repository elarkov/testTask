import {addCard} from "./addCard";
import {cards} from "./cards";

/*=== dinamic display cards to press buttons Shift, Shift+Alt ===*/
function clickDinamicBtn() {

  let card = document.querySelector('.cards');

  card.addEventListener('click', function (event) {

    if(event.target.tagName === 'LI') {

      if(event.shiftKey && event.altKey) {
        addCard('wide');
        console.log(cards);
      } else if(event.shiftKey) {
        addCard();
        console.log(cards);
      } else {
        card.lastElementChild.remove();
      }

    }

  });

}


export {
  clickDinamicBtn
}