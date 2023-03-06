export default class Card {
  constructor(data, templateSelector, handleOpenPopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleOpenPopup = handleOpenPopup;
  };

  _getTemplate = () => {
    const cardTemplate = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardTemplate;
  };

  generateCard = () => {
    this._element = this._getTemplate();

    this._cardTitle = this._element.querySelector('.element__text');
    this._cardImg = this._element.querySelector('.element__image');
    this._delButton = this._element.querySelector('.element__del-button');
    this._likeButton = this._element.querySelector('.element__like-button');

    this._cardTitle.textContent = this._name;
    this._cardImg.src = this._link;
    this._cardImg.alt = this._name;

    this._setEventListeners();

    return this._element;
  };

  _delCard = () => {
    this._element.remove();
    this._element = null;
  };

  _likeCard = () => {
    this._likeButton.classList.toggle('element__like-button_active');
  };

  _setEventListeners = () => {
    this._cardImg.addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._link);
    });

    this._delButton.addEventListener('click', this._delCard);

    this._likeButton.addEventListener('click', this._likeCard);
  };
};


