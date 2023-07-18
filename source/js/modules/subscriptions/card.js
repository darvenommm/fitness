export const addButtonsClassByCardHover = () => {
  const ROOT_SELECTOR = '.subscriptions';
  const ACTIVE_BUTTON_CLASS = 'active';
  const ACTIVE_CARD_CLASS = 'active';
  const CARD_SELECTOR = '.subscriptions__item';
  const BUTTON_SELECTOR = '.subscriptions__buy-button';

  const root = document.querySelector(ROOT_SELECTOR);
  const cards = root.querySelectorAll(CARD_SELECTOR);

  // for mobile
  // else for desktop
  if ('ontouchstart' in window) {
    document.body.addEventListener('click', (event) => {
      const target = event.target;

      cards.forEach((card) => {
        const button = card.querySelector(BUTTON_SELECTOR);

        card.classList.remove(ACTIVE_CARD_CLASS);
        button.classList.remove(ACTIVE_BUTTON_CLASS);

        if (card.contains(target)) {
          card.classList.add(ACTIVE_CARD_CLASS);
          button.classList.add(ACTIVE_BUTTON_CLASS);
        }
      });
    });
  } else {
    cards.forEach((card) => {
      // !!! card's active class activates at css code by hover pseudoclass
      const button = card.querySelector(BUTTON_SELECTOR);

      card.addEventListener('mouseover', () => {
        button.classList.add(ACTIVE_BUTTON_CLASS);
      });

      card.addEventListener('mouseout', () => {
        button.classList.remove(ACTIVE_BUTTON_CLASS);
      });

      button.addEventListener('focus', () => {
        card.classList.add(ACTIVE_CARD_CLASS);
      });

      button.addEventListener('blur', () => {
        card.classList.remove(ACTIVE_CARD_CLASS);
      });
    });
  }
};
