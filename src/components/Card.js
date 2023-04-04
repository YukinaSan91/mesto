export default class Card {
  constructor({data, userId, templateSelector,  handleCardClick, handleDelCard, handleLikeCard}) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._userId = userId;
    this._owner = data.owner._id;

    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDelCard = handleDelCard;
    this._handleLikeCard = handleLikeCard;
  };

  //Получаем шаблон карточки
  _getTemplate = () => {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardTemplate;
  };

  //Генерируем карточку и заполняем данными
  generateCard = () => {
    this._element = this._getTemplate();

    this._cardTitle = this._element.querySelector('.element__text');
    this._cardImg = this._element.querySelector('.element__image');
    this._delButton = this._element.querySelector('.element__del-button');
    this._likeButton = this._element.querySelector('.element__like-button');
    this._likeCounter = this._element.querySelector('.element__like-counter');
    this._cardTitle.textContent = this._name;
    this._cardImg.src = this._link;
    this._cardImg.alt = this._name;
    this._likeCounter.textContent = this._likes.length;
    this._likeCard();
    this._hasDelBtn();
    this._setEventListeners();

    return this._element;
  };

  //Удаление карточки из разметки
  delCard() {
    this._element.remove();
    this._element = null;
  };

  //Сравниванием id для корзины
  _hasDelBtn = () => {
    if (this._owner !== this._userId) {
       this._delButton.remove();
    };
  };

  //Лайки
  isLiked() {
    return this._likes.some((item) => item._id === this._userId);
  };

  _likeCard = () => {
    if (this.isLiked()){
      this._likeButton.classList.add('element__like-button_active');
    };
  };

  updateLikeData(newData) {
    this._likes = newData.likes;
  };

  handleLike() {
    this._likeCounter.textContent = this._likes.length;
    if (this.isLiked()) {
      this._likeButton.classList.add('element__like-button_active');
    } else {
      this._likeButton.classList.remove('element__like-button_active');
    };
  };

  //Вешаем слушатели
  _setEventListeners = () => {
    this._cardImg.addEventListener('click', () => {
      this._handleCardClick({name: this._name, link: this._link});
    });

    this._delButton.addEventListener('click', () => {
      this._handleDelCard({cardId: this._cardId});
    });

    this._likeButton.addEventListener('click', () => {
      this._handleLikeCard({cardId: this._cardId});
    });
  };
};


