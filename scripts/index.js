//Попапы
const profilePopup = document.querySelector('.popup_type_edit');
const popupAddElement = document.querySelector('.popup_type_add');
const popupImgElement = document.querySelector('.popup_type_image');

const cardImgElement = document.querySelector('.popup__image');
const cardTitleElement = document.querySelector('.popup__title');

//Кнопки для управления попапами
const popupCloseButtonElements = document.querySelectorAll('.popup__close');
const popupAddButtonElement = document.querySelector('.profile__add-button');
const popupOpenButtonElement = document.querySelector('.profile__popup-open');
const popupSaveButtonElement = document.querySelector('.popup__save-button');

//Формы
const formElement = profilePopup.querySelector('.popup__form');
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

//Передаем данные в переменные от пользователя
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

// Открытие попапа
const openPopup = function(popup) {
  popup.classList.add('popup_opened');
};

// Закрытие попапа
const closePopup = function(evt) {
   evt.target.closest('.popup').classList.remove('popup_opened');
};

popupCloseButtonElements.forEach((closeButton) => {
  closeButton.addEventListener('click', closePopup);
});

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
  closePopup(evt);
};

function handleFormAddSubmit (evt) {
  evt.preventDefault();

  const addCard = [{
    name: nameAddInput.value,
    link: urlAddInput.value,
  }];

  evt.target.reset();

  renderCards(addCard);
  closePopup(evt);
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
formAddElement.addEventListener('submit', handleFormAddSubmit);

//Слушатели событий
popupOpenButtonElement.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(profilePopup)});
popupAddButtonElement.addEventListener('click', function() {
  openPopup(popupAddElement)});

