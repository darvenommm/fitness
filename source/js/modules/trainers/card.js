export const addHandlersForTrainersCard = () => {
  const ROOT_SELECTOR = '.trainers__items';
  const CARD_SELECTOR = '.trainers__item';
  const ACTIVE_CLASS = 'active';

  const root = document.querySelector(ROOT_SELECTOR);
  const cards = root.querySelectorAll(CARD_SELECTOR);

  if (!('ontouchstart' in window)) {
    return;
  }

  document.body.addEventListener('click', (event) => {
    const target = event.target;

    cards.forEach((card) => {
      if (card.contains(target)) {
        card.classList.add(ACTIVE_CLASS);
      } else {
        card.classList.remove(ACTIVE_CLASS);
      }
    });
  });
};
