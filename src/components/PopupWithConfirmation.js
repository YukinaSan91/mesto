import Popup from '../components/Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
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
}
