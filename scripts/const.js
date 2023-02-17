//Попапы
const popupElement = document.querySelectorAll('.popup');
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
const popupFormElement = document.querySelector('.popup__form');
const formInputElement = document.querySelector('.popup__text');

const formEditElement = document.querySelector('.popup__form_type_edit');
const nameInput = popupFormElement.querySelector('.popup__text_type_name');
const jobInput = popupFormElement.querySelector('.popup__text_type_job');

const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__text');

const formAddElement = document.querySelector('.popup__form_type_add');
const nameAddInput = formAddElement.querySelector('.popup__text_type_title');
const urlAddInput = formAddElement.querySelector('.popup__text_type_url');

//Темплейты
const cardsList = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.element');
