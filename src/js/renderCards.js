(function () {
  window.renderCards = (cardsData) => {
    const cardsContainer = document.querySelector(`.cards`);
    const cardTemplateContent = document.querySelector(`#cards-template`).innerHTML;
    const cardTemplate = window.Handlebars.compile(cardTemplateContent);
    const renderData = {
      cards: cardsData,
    };
    const cardListRenderResult = cardTemplate(renderData);
    const cardList = document.createRange().createContextualFragment(cardListRenderResult);
    cardsContainer.appendChild(cardList);
  };
})();