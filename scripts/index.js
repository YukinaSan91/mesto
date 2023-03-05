//Импорт массива
import {initialCards} from '../utils/massiv.js';

//Импорт констант
import {formsObjConfig,
  popupElement,
  profilePopup,
  popupAddElement,
  popupImgElement,
  cardImgElement,
  cardTitleElement,
  popupCloseButtonElements,
  popupAddButtonElement,
  popupOpenButtonElement,
  popupSaveButtonElement,
  popupFormElement,
  formInputElement,
  formEditElement,
  nameInput,
  jobInput,
  profileName,
  profileJob,
  formAddElement,
  nameAddInput,
  urlAddInput,
  cardsList
} from '../utils/const.js';

//Импорт классов
import Card from './Card.js';
import FormValidator from './FormValidator.js';


//Передаем данные в переменные от пользователя
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

// Открытие попапа
const openPopup = function (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleClosePopupByEsc);
};

//Открытие попапа картинки
function handleOpenPopup(name, link) {
  cardImgElement.src = link;
  cardImgElement.alt = name;
  cardTitleElement.textContent = name;
  openPopup(popupImgElement);
};

// Закрытие попапа
const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleClosePopupByEsc);
};

popupElement.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
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

//Созадние экземпляра класса карточки
const createCard = (data) => {
  const newCard = new Card(data, '#card-template', handleOpenPopup);
  const cardElement = newCard.generateCard();
  return cardElement;
};

function renderCards(initialCards) {
  initialCards.forEach((item) => {
    cardsList.prepend(createCard(item));
  });
};

renderCards(initialCards);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
};

function handleFormAddSubmit(evt) {
  evt.preventDefault();

  const addCard = [
    {
      name: nameAddInput.value,
      link: urlAddInput.value,
    },
  ];

  renderCards(addCard);
  closePopup(popupAddElement);
  evt.target.reset();
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditElement.addEventListener('submit', handleFormSubmit);
formAddElement.addEventListener('submit', handleFormAddSubmit);

//Слушатели событий
popupOpenButtonElement.addEventListener('click', function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  formEditProfileValidate.resetValidation();
  openPopup(profilePopup);
});

popupAddButtonElement.addEventListener('click', function () {
  formAddCardValidate.resetValidation();
  openPopup(popupAddElement);
});

//initialCards.forEach((item) => {
  //const newCard = new Card(item, data, templateSelector, handleOpenPopup);

  //return newCard.createCard(cardsList);
//});

//Создание экземпляра класса валидации
const formEditProfileValidate = new FormValidator(formsObjConfig, formEditElement);
formEditProfileValidate.enableValidation();


const formAddCardValidate = new FormValidator(formsObjConfig, formAddElement);
formAddCardValidate.enableValidation();
