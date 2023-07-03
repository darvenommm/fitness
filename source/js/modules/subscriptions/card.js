export const addButtonsClassByCardHover = () => {
  const ACTIVE_BUTTON = 'active';

  const cards = document.querySelectorAll('.subscriptions__item');

  cards.forEach((card) => {
    const button = card.querySelector('.subscriptions__buy-button');

    card.addEventListener('mouseover', () => {
      button.classList.add(ACTIVE_BUTTON);
    });

    card.addEventListener('mouseout', () => {
      button.classList.remove(ACTIVE_BUTTON);
    });
  });
};
