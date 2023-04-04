//Импорт стилей
import '../pages/index.css';

//Импорт констант
import {formsObjConfig,
  popupAddButtonElement,
  popupOpenButtonElement,
  popupAvatarEditButtonElement,
  formEditElement,
  profileName,
  profileJob,
  profileAvatar,
  formAddElement,
  formEditAvatar,
  cardsList
} from '../utils/const.js';

//Импорт классов
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';


//--------------------подключение Api--------------------

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63/',
  headers: {
    Authorization: '578ac007-c2ae-493c-88ff-1df9d86bdf70',
    'Content-type': 'application/json'
  }
});

const getDataFromServer = [api.getUserInfo(), api.getInitialCards()]; //--Получение данных с сервера
let userId; //--Изменяемый id пользователя

//--------------------InitialCards--------------------

//Созадние карточки
const createCard = (data) => {
  const newCard = new Card({
    data: data,
    userId: userId,
    templateSelector: '#card-template',
    handleCardClick,
    handleDelCard: (cardId, cards) => {
      popupWithConfirmDelCard.open(cardId, cards);
      popupWithConfirmDelCard.updateSubmitHandler((data) => {
        api
        .deleteUserCard(data.cardId)
        .then(() => {
          popupWithConfirmDelCard.close();
          newCard.delCard();
        })
        .catch((err) => {
          console.log(err);
        });
      });
    },
    handleLikeCard: (data) => {
      if (!newCard.isLiked()) {
        api
        .addLikeCard(data.cardId)
        .then((data) => {
          newCard.updateLikeData(data);
          newCard.handleLike();
        })
        .catch((err) => {
          console.log(err);
        });
      } else {
        api
        .deleteLikeCard(data.cardId)
        .then((data) => {
          newCard.updateLikeData(data);
          newCard.handleLike();
        })
        .catch((err) => {
          console.log(err);
        });
      };
    },
  });
  return newCard.generateCard(data);
};

//Отрисовка карточек
const newSection = new Section({
  renderer: (data) => {
    newSection.addItem(createCard(data));
  },
}, '.elements');


//Открытие попапа картинки
const handleCardClick = (data) => {
  imgPopup.open(data);
};

//Попап картинки
const imgPopup = new PopupWithImage('.popup_type_image');
imgPopup.setEventListeners();

//Попап добавления новой карточки
const addCardPopupForm = new PopupWithForm({
  popupSelector: '.popup_type_add',
  handleFormSubmit: (data) => {
    addCardPopupForm.loading(true)
    api
    .addNewCard({
      name: data.name,
      link: data.url})
    .then((res) => {
      newSection.addItem(createCard(res), true);
      addCardPopupForm.close();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      addCardPopupForm.loading(false);
    });
  }
});

addCardPopupForm.setEventListeners();

//Попап удаления карточки
const popupWithConfirmDelCard = new PopupWithConfirmation('.popup_type_del-card');
popupWithConfirmDelCard.setEventListeners();

//--------------------Профиль пользователя--------------------

//Попап редактирования профиля
const userInfo = new UserInfo({profileName, profileJob, profileAvatar});

const editProfilePopapForm = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleFormSubmit: (data) => {
    editProfilePopapForm.loading(true);
    api
    .editUserProfile(data)
    .then((res) => {
      userInfo.setUserInfo(res);
      editProfilePopapForm.close();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      editProfilePopapForm.loading(false);
    });
  }
});

editProfilePopapForm.setEventListeners();

//Попап редактирования аватара
const editAvatarProfileForm = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  handleFormSubmit: (data) => {
    editAvatarProfileForm.loading(true);
    api
    .editUserAvatar(data)
    .then((res) => {
      userInfo.setUserAvatar(res);
      editAvatarProfileForm.close();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      editAvatarProfileForm.loading(false);
    });
  }
});

editAvatarProfileForm.setEventListeners();


//--------------------Слушатели событий--------------------

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

//--------------------Валидация форм--------------------

const formEditProfileValidate = new FormValidator(formsObjConfig, formEditElement);
formEditProfileValidate.enableValidation();


const formAddCardValidate = new FormValidator(formsObjConfig, formAddElement);
formAddCardValidate.enableValidation();

const formEditAvatarValidate = new FormValidator(formsObjConfig, formEditAvatar);
formEditAvatarValidate.enableValidation();


//--------------------Запрос данных с сервера--------------------

Promise.all(getDataFromServer)
  .then(([userData, cards]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    newSection.renderItems(cards);
  })
  .catch((err) => {
    console.log(err)
  });
