/*=== styles ===*/
import 'normalize.css';
import './scss/layout/base.scss';

/*=== include handlebars template ===*/
import render from './templates/cards.hbs';

/*=== modules ===*/
import {cards} from './js/cards';
import {delLastCards} from "./js/delLastCard";


/*=== render cards ===*/
const cardsContainer = document.querySelector('.cards');
cardsContainer.innerHTML = render({items: cards});

delLastCards();

