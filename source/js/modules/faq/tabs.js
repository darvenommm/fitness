export const addFAQTabsHandlers = () => {
  const ROOT_SELECTOR = '.faq__tabs';
  const BUTTON_SELECTOR = '.faq__tab-button';

  const root = document.querySelector(ROOT_SELECTOR);
  const buttons = root.querySelectorAll(BUTTON_SELECTOR);

  const cleanButtons = () => {
    buttons.forEach((button) => {
      button.tabIndex = '0';
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      cleanButtons();

      button.tabIndex = '-1';
    });
  });
};
