/*=== styles ===*/
import 'normalize.css';
import './scss/layout/base.scss';

/*=== include handlebars template ===*/
import render from './templates/cards.hbs';

/*=== modules ===*/
export let cardsContainer;
import {cards} from './js/cards';
import {clickDinamicBtn} from "./js/clickDinamicBtn";

/*=== display of cards ===*/
cardsContainer = document.querySelector('.cards');
cardsContainer.innerHTML = render({items: cards});

clickDinamicBtn();




