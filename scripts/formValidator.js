export default class FormValidator {
  constructor(object, popupFormElement) {
    this._object = object;
    this._popupFormElement = popupFormElement;
    this._inputList = Array.from(this._popupFormElement.querySelectorAll(this._object.inputSelector));
    this._buttonElement = this._popupFormElement.querySelector(this._object.submitButtonSelector);
  };

  _showInputError = (formInputElement, errorMessage) => {
    const errorInputElement = this._popupFormElement.querySelector(`.${formInputElement.id}-error`);
    formInputElement.classList.add(this._object.inputErrorClass);
    errorInputElement.textContent = errorMessage;
    errorInputElement.classList.add(this._object.errorClass);
  };

  _hideInputError = (formInputElement) => {
    const errorInputElement = this._popupFormElement.querySelector(`.${formInputElement.id}-error`);
    formInputElement.classList.remove(this._object.inputErrorClass);
    errorInputElement.textContent = '';
    errorInputElement.classList.remove(this._object.errorClass);
  };

  _checkInputValidity = (formInputElement) => {
    if (!formInputElement.validity.valid) {
      this._showInputError(formInputElement, formInputElement.validationMessage);
    } else {
      this._hideInputError(formInputElement);
    };
  };

  _hasInvalidInput = () => {
    return this._inputList.some((formInputElement) => {
      return !formInputElement.validity.valid;
    });
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._object.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', '');
    } else {
      this._buttonElement.classList.remove(this._object.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    };
  };

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };

  _setEventListeners = () => {
    this._toggleButtonState();
    this._popupFormElement.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonState();
      }, 0);
    });

    this._inputList.forEach((formInputElement) => {
      formInputElement.addEventListener('input', () => {
        this._checkInputValidity(formInputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation = () => {
    this._setEventListeners();
  };

};
