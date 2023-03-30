//Импорт стилей
import '../pages/index.css';

//Импорт массива
import {initialCards} from '../utils/massiv.js';

//Импорт констант
import {formsObjConfig,
  popupSelector,
  profilePopup,
  popupAddElement,
  popupImgElement,
  popupAvatarEdit,
  popupDeleteCard,
  popupCloseButtonElements,
  popupAddButtonElement,
  popupOpenButtonElement,
  popupSaveButtonElement,
  popupAvatarEditButtonElement,
  popupFormElement,
  formInputElement,
  formEditElement,
  nameInput,
  jobInput,
  profileName,
  profileJob,
  profileAvatar,
  formAddElement,
  nameAddInput,
  urlAddInput,
  formEditAvatar,
  urlEditAvatarInput,
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
const userInfo = new UserInfo({profileName, profileJob, profileAvatar});

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

//Попап редактирования аватара
const editAvatarProfileForm = new PopupWithForm({
  popupSelector: popupAvatarEdit,
  handleFormSubmit: ({avatar}) => {
    userInfo.setUserInfo({avatar});
    editAvatarProfileForm.close();
  }
});

editAvatarProfileForm.setEventListeners();

//Слушатели событий
popupOpenButtonElement.addEventListener('click', () => {
  editProfilePopapForm.setInputValues(userInfo.getUserInfo());
  formEditProfileValidate.resetValidation();
  editProfilePopapForm.open();
});

popupAddButtonElement.addEventListener('click', () => {
  formAddCardValidate.resetValidation();
  addCardPopupForm.open();
});

popupAvatarEditButtonElement.addEventListener('click', () => {
  formEditAvatarValidate.resetValidation();
  editAvatarProfileForm.open();
});

//Создание экземпляра класса валидации
const formEditProfileValidate = new FormValidator(formsObjConfig, formEditElement);
formEditProfileValidate.enableValidation();


const formAddCardValidate = new FormValidator(formsObjConfig, formAddElement);
formAddCardValidate.enableValidation();

const formEditAvatarValidate = new FormValidator(formsObjConfig, formEditAvatar);
formEditAvatarValidate.enableValidation();
