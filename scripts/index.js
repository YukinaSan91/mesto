//Передаем данные в переменные от пользователя
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

// Открытие попапа
const openPopup = function(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleClosePopupByEsc);
};

// Закрытие попапа
const closePopup = function(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleClosePopupByEsc);
};

popupElement.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    };
  });
});

//Закрытие по оверлею
const closePopupClickOnOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  };
};

popupElement.forEach((popup) => {
  popup.addEventListener('click', closePopupClickOnOverlay);
});

//Закрытие по Esc
function handleClosePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  };
};

//Функция карточки
function createCard(item) {
  const card = cardTemplate.cloneNode(true);
    const cardTitle = card.querySelector('.element__text');
    const cardImg = card.querySelector('.element__image');
    const delButton = card.querySelector('.element__del-button');
    const likeButton = card.querySelector('.element__like-button');

    cardTitle.textContent = item.name;
    cardImg.src = item.link;
    cardImg.alt = item.name;
    cardImg.addEventListener('click', function() {
      openPopup(popupImgElement);
      cardImgElement.src = item.link;
      cardImgElement.alt = item.name;
      cardTitleElement.textContent = item.name;
    });

    delButton.addEventListener('click', (evt) => {
      evt.target.closest('.element').remove()});

    likeButton.addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like-button_active')});

    return card;
};

function renderCards (initialCards) {
  const cards = initialCards.map((item) => {
    return createCard(item);
  });

  cardsList.prepend(...cards);
};

renderCards(initialCards);


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
};

function handleFormAddSubmit (evt) {
  evt.preventDefault();

  const addCard = [{
    name: nameAddInput.value,
    link: urlAddInput.value,
  }];

  renderCards(addCard);
  closePopup(popupAddElement);
  evt.target.reset();
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditElement.addEventListener('submit', handleFormSubmit);
formAddElement.addEventListener('submit', handleFormAddSubmit);

//Слушатели событий
popupOpenButtonElement.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(profilePopup)});
popupAddButtonElement.addEventListener('click', function() {
  openPopup(popupAddElement)});

