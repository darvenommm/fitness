export const addCustomInputDisabledHandlers = () => {
  const CUSTOM_INPUT_SELECTOR = '.custom-input';

  const customInputs = document.querySelectorAll(CUSTOM_INPUT_SELECTOR);

  customInputs.forEach((customInput) => {
    if (typeof customInput.dataset.disabled === 'string') {
      const innerInput = customInput.querySelector('input');

      if (innerInput) {
        innerInput.disabled = true;
      }
    }
  });
};
