//Объект валидации
const formsObjConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text-input-error_active'
};

//Попапы
const popupSelector = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('.popup_type_edit');
const popupAddElement = document.querySelector('.popup_type_add');
const popupImgElement = document.querySelector('.popup_type_image');
const popupAvatarEdit = document.querySelector('.popup_type_avatar');
const popupDeleteCard = document.querySelector('.popup_type_del-card');

//Кнопки для управления попапами
const popupCloseButtonElements = document.querySelectorAll('.popup__close');
const popupAddButtonElement = document.querySelector('.profile__add-button');
const popupOpenButtonElement = document.querySelector('.profile__popup-open');
const popupSaveButtonElement = document.querySelector('.popup__save-button');
const popupAvatarEditButtonElement = document.querySelector('.profile__btn-avatar');

//Формы
const popupFormElement = document.querySelector('.popup__form');
const formInputElement = document.querySelector('.popup__text');

const formEditElement = document.querySelector('.popup__form_type_edit');
const nameInput = formEditElement.querySelector('.popup__text_type_name');
const jobInput = formEditElement.querySelector('.popup__text_type_job');

const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__text');
const profileAvatar = document.querySelector('.profile__avatar');

const formAddElement = document.querySelector('.popup__form_type_add');
const nameAddInput = formAddElement.querySelector('.popup__text_type_title');
const urlAddInput = formAddElement.querySelector('.popup__text_type_url');

const formEditAvatar = document.querySelector('.popup__form_type_avatar');
const urlEditAvatarInput = formEditAvatar.querySelector('.popup__text_type_url-avatar');

//Темплейты
const cardsList = document.querySelector('.elements');

export {formsObjConfig,
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
};
