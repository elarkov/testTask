export let cards;

function delLastCards() {

  cards = document.querySelector('.cards');

  cards.addEventListener('click', function (event) {
    if(event.target.tagName === 'LI'){
      console.log(cards.lastElementChild.remove());
    }
  });

}


export {
  delLastCards
}