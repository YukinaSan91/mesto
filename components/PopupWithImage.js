import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardImgElement = this._popup.querySelector('.popup__image');
    this._cardTitleElement = this._popup.querySelector('.popup__title');
  };

  open(data) {
    this._cardImgElement.src = data.link;
    this._cardTitleElement.textContent = data.name;
    this._cardImgElement.alt = data.name;
    super.open();
  };
}
