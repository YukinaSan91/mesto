import {cardImgElement, cardTitleElement, popupImgElement} from '../utils/const.js';
import {handleClosePopupByEsc} from './index.js';

export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  };

  _getTemplate() {
    const cardTemplate = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardTemplate;
  };

  generateCard() {
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

  _setEventListeners() {
    this._cardImg.addEventListener('click', () => {
      document.addEventListener('keydown', handleClosePopupByEsc);
      this._handleOpenPopup();
    });

    this._delButton.addEventListener('click', (evt) => {
      this._element.remove();
      this._element = null;
    });

    this._likeButton.addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__like-button_active');
    });
  };

  _handleOpenPopup() {
    cardImgElement.src = this._link;
    cardImgElement.alt = this._name;
    cardTitleElement.textContent = this._name;
    popupImgElement.classList.add('popup_opened');
  };
};


