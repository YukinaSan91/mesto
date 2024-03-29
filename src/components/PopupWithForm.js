import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupInput = this._popupForm.querySelectorAll('.popup__text');
    this._saveButton = this._popupForm.querySelector('.popup__save-button');
    this._saveButtonText = this._saveButton.textContent;
    this._handleFormSubmit = handleFormSubmit;
  };

  _getInputValues() {
    const formValues = {};
    this._popupInput.forEach(input => {
      formValues[input.name] = input.value;
    });

    return formValues;
  };

  setInputValues(data) {
    this._popupInput.forEach(input => {
      input.value = data[input.name];
    });
  };

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  };

  close() {
    super.close();
    this._popupForm.reset();
  };


//Изменяем текст кнопки submit пока сохраняются данные
  loading(isLoading, loadingText = 'Сохранение...') {
    if (isLoading) {
      this._saveButton.textContent = loadingText;
    } else {
      this._saveButton.textContent = this._saveButtonText;
    };
  };
}
