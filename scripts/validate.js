const formsObjConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text-input-error_active'
};

const showInputError = (popupFormElement, formInputElement, errorMessage, object) => {
  const errorInputElement = popupFormElement.querySelector(`.${formInputElement.id}-error`);
  formInputElement.classList.add(object.inputErrorClass);
  errorInputElement.textContent = errorMessage;
  errorInputElement.classList.add(object.errorClass);
};

const hideInputError = (popupFormElement, formInputElement, object) => {
  const errorInputElement = popupFormElement.querySelector(`.${formInputElement.id}-error`);
  formInputElement.classList.remove(object.inputErrorClass);
  errorInputElement.textContent = '';
  errorInputElement.classList.remove(object.errorClass);
};

const checkInputValidity = (popupFormElement, formInputElement, object) => {
  if (!formInputElement.validity.valid) {
    showInputError(popupFormElement, formInputElement, formInputElement.validationMessage, object);
  } else {
    hideInputError(popupFormElement, formInputElement, object);
  };
};

const hasInvalidInput = (inputList) => {
  return inputList.some((formInputElement) => {
    return !formInputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, object) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(object.inactiveButtonClass, 'disabled');
    buttonElement.setAttribute('disabled', '');
  } else {
    buttonElement.classList.remove(object.inactiveButtonClass, 'disabled');
    buttonElement.removeAttribute('disabled');
  };
};

const setEventListeners = (popupFormElement, object) => {
  const inputList = Array.from(popupFormElement.querySelectorAll(object.inputSelector));
  const buttonElement = popupFormElement.querySelector(object.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, object);
  popupFormElement.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButtonState(inputList, buttonElement, object);
    }, 0);
  });

  inputList.forEach((formInputElement) => {
    formInputElement.addEventListener('input', function () {
       checkInputValidity(popupFormElement, formInputElement, object);
       toggleButtonState(inputList, buttonElement, object);
    });
  });
};

const enableValidation = (object) => {
  const formList = Array.from(document.querySelectorAll(object.formSelector));
  formList.forEach((popupFormElement) => {
    popupFormElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(popupFormElement, object);
  });
};

enableValidation(formsObjConfig);


