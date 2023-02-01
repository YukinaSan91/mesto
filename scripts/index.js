//Попапы
const popupElement = document.querySelector('.popup');
const popupAddElement = document.querySelector('.popup_type_add');
const popupImgElement = document.querySelector('.popup_type_image');

//Кнопки для управления попапами
const popupCloseButtonElement = document.querySelectorAll('.popup__close');
const popupAddButtonElement = document.querySelector('.profile__add-button');
const popupOpenButtonElement = document.querySelector('.profile__popup-open');
const popupSaveButtonElement = document.querySelector('.popup__save-button');

//Формы
const formElement = popupElement.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__text_type_name');
const jobInput = formElement.querySelector('.popup__text_type_job');

const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__text');

const formAddElement = document.querySelector('.popup__form_type_add');
const nameAddInput = formAddElement.querySelector('.popup__text_type_title');
const urlAddInput = formAddElement.querySelector('.popup__text_type_url');

//Темплейты
const cardsList = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.element');



// Открытие попапа
const popupOpen = function() {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

const openPopup = function() {
  popupAddElement.classList.add('popup_opened');
};

const openImgPopup = function() {
  popupImgElement.classList.add('popup_opened');
};

// Закрытие попапа
const popupClose = function(evt) {
   evt.target.closest('.popup').classList.remove('popup_opened');
};

popupCloseButtonElement.forEach((CloseButton) => {
  CloseButton.addEventListener('click', popupClose);
});

//Функция карточки
function renderCards (initialCards) {
  const cards = initialCards.map((item) => {
    const card = cardTemplate.cloneNode(true);
    card.querySelector('.element__text').textContent = item.name;
    card.querySelector('.element__image').src = item.link;
    card.querySelector('.element__image').alt = item.name;

    const cardImgElement = document.querySelector('.popup__image');
    const cardAltElement = document.querySelector('.popup__image');
    const cardTitleElement = document.querySelector('.popup__title');

    card.querySelector('.element__image').addEventListener('click', function() {
      openImgPopup();
      cardImgElement.src = item.link;
      cardAltElement.alt = item.name;
      cardTitleElement.textContent = item.name;
    });

    card.querySelector('.element__del-button').addEventListener('click', (evt) => {
      evt.target.closest('.element').remove()});
    card.querySelector('.element__like-button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like-button_active')});

    return card;
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
  popupClose(evt);
};

function handleFormAddSubmit (evt) {
  evt.preventDefault();

  const addCard = [{
    name: nameAddInput.value,
    link: urlAddInput.value,
  }];

  renderCards(addCard);
  popupClose(evt);
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
formAddElement.addEventListener('submit', handleFormAddSubmit);

//Слушатели событий
popupOpenButtonElement.addEventListener('click', popupOpen);
popupAddButtonElement.addEventListener('click', openPopup);

