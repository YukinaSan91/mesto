let popupElement = document.querySelector('.popup');
let popupCloseButtonElement = popupElement.querySelector('.popup__close');
let popupOpenButtonElement = document.querySelector('.profile__popup-open');
let formElement = popupElement.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__text_type_name');
let jobInput = formElement.querySelector('.popup__text_type_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__text');


// Открытие попапа
let popupOpen = function() {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// Закрытие попапа
let popupClose = function() {
  popupElement.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

popupOpenButtonElement.addEventListener('click', popupOpen);
popupCloseButtonElement.addEventListener('click', popupClose);
