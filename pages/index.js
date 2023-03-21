//Импорт массива
import {initialCards} from '../utils/massiv.js';

//Импорт констант
import {formsObjConfig,
  popupSelector,
  profilePopup,
  popupAddElement,
  popupImgElement,
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
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

//Созадние карточки
const createCard = (data) => {
  const newCard = new Card(data, '#card-template', handleCardClick);
  const cardElement = newCard.generateCard();
  return cardElement;
};

//Отрисовка карточек
const newSection = new Section({
  items: initialCards,
  renderer: (data) => {
    newSection.addItem(createCard(data));
  },
}, cardsList);

newSection.renderItems();

//Открытие попапа картинки
function handleCardClick(data) {
  imgPopup.open(data);
};

//Попап картинки
const imgPopup = new PopupWithImage(popupImgElement);
imgPopup.setEventListeners();

//Попап редактирования профиля
const userInfo = new UserInfo({profileName, profileJob});

const editProfilePopapForm = new PopupWithForm({
  popupSelector: profilePopup,
  handleFormSubmit: ({forename, job}) => {
    userInfo.setUserInfo({forename, job});
    editProfilePopapForm.close();
  }
});

editProfilePopapForm.setEventListeners();

//Попап добавления новой карточки
const addCardPopupForm = new PopupWithForm({
  popupSelector: popupAddElement,
  handleFormSubmit: ({name, url}) => {
    newSection.addItem(createCard({name: name, link: url}));
    addCardPopupForm.close();
  }
});

addCardPopupForm.setEventListeners();

//Слушатели событий
popupOpenButtonElement.addEventListener('click', () => {
  editProfilePopapForm.getInputValues(userInfo.getUserInfo());
  formEditProfileValidate.resetValidation();
  editProfilePopapForm.open();
});

popupAddButtonElement.addEventListener('click', () => {
  formAddCardValidate.resetValidation();
  addCardPopupForm.open();
});

//Создание экземпляра класса валидации
const formEditProfileValidate = new FormValidator(formsObjConfig, formEditElement);
formEditProfileValidate.enableValidation();


const formAddCardValidate = new FormValidator(formsObjConfig, formAddElement);
formAddCardValidate.enableValidation();
