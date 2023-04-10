import Popup from '../components/Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._saveButton = this._popupForm.querySelector('.popup__save-button');
    this._saveButtonText = this._saveButton.textContent;
  };

  updateSubmitHandler(action) {
    this._handleSubmit = action;
  };

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit({cardId: this._cardId, cards: this._cards});
    });
  };

  open({cardId, cards}) {
    super.open();
    this._cardId = cardId;
    this._cards = cards;
  };

  //Изменяем текст кнопки submit пока сохраняются данные
  loading(isLoading, loadingText = 'Удаление...') {
    if (isLoading) {
      this._saveButton.textContent = loadingText;
    } else {
      this._saveButton.textContent = this._saveButtonText;
    };
  };
}
