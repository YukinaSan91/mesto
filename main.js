(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__text",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__text_type_error",errorClass:"popup__text-input-error_active"},t=(document.querySelectorAll(".popup"),document.querySelector(".popup_type_edit")),n=document.querySelector(".popup_type_add"),r=document.querySelector(".popup_type_image"),o=document.querySelector(".popup_type_avatar"),i=document.querySelector(".popup_type_del-card"),u=(document.querySelectorAll(".popup__close"),document.querySelector(".profile__add-button")),a=document.querySelector(".profile__popup-open"),c=(document.querySelector(".popup__save-button"),document.querySelector(".profile__btn-avatar")),l=(document.querySelector(".popup__form"),document.querySelector(".popup__text"),document.querySelector(".popup__form_type_edit")),s=(l.querySelector(".popup__text_type_name"),l.querySelector(".popup__text_type_job"),document.querySelector(".profile__title")),f=document.querySelector(".profile__text"),p=document.querySelector(".profile__avatar"),y=document.querySelector(".popup__form_type_add"),d=(y.querySelector(".popup__text_type_title"),y.querySelector(".popup__text_type_url"),document.querySelector(".popup__form_type_avatar")),m=(d.querySelector(".popup__text_type_url-avatar"),document.querySelector(".elements"));function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var b=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_checkingResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"users/me"),{method:"GET",headers:this._headers}).then(this._checkingResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"cards"),{method:"GET",headers:this._headers}).then(this._checkingResponse)}},{key:"editUserProfile",value:function(e){return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.forename,about:e.job})}).then(this._checkingResponse)}},{key:"editUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkingResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkingResponse)}},{key:"deleteUserCard",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkingResponse)}},{key:"addLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkingResponse)}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkingResponse)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,k(r.key),r)}}function g(e,t,n){return(t=k(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){var t=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===v(t)?t:String(t)}var w=function(){function e(t){var n=this,r=t.data,o=t.userId,i=t.templateSelector,u=t.handleCardClick,a=t.handleDelCard,c=t.handleLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,"_getTemplate",(function(){return document.querySelector(n._templateSelector).content.querySelector(".element").cloneNode(!0)})),g(this,"generateCard",(function(){return n._element=n._getTemplate(),n._cardTitle=n._element.querySelector(".element__text"),n._cardImg=n._element.querySelector(".element__image"),n._delButton=n._element.querySelector(".element__del-button"),n._likeButton=n._element.querySelector(".element__like-button"),n._likeCounter=n._element.querySelector(".element__like-counter"),n._cardTitle.textContent=n._name,n._cardImg.src=n._link,n._cardImg.alt=n._name,n._likeCounter.textContent=n._likes.length,n._likeCard(),n._hasDelBtn(),n._setEventListeners(),n._element})),g(this,"_hasDelBtn",(function(){n._owner!==n._userId&&n._delButton.remove()})),g(this,"_likeCard",(function(){n.isLiked()&&n._likeButton.classList.add("element__like-button_active")})),g(this,"_setEventListeners",(function(){n._cardImg.addEventListener("click",(function(){n._handleCardClick({name:n._name,link:n._link})})),n._delButton.addEventListener("click",(function(){n._handleDelCard({cardId:n._cardId})})),n._likeButton.addEventListener("click",(function(){n._handleLikeCard({cardId:n._cardId})}))})),this._name=r.name,this._link=r.link,this._likes=r.likes,this._cardId=r._id,this._userId=o,this._owner=r.owner._id,this._templateSelector=i,this._handleCardClick=u,this._handleDelCard=a,this._handleLikeCard=c}var t,n;return t=e,(n=[{key:"delCard",value:function(){this._element.remove(),this._element=null}},{key:"isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"updateLikeData",value:function(e){this._likes=e.likes}},{key:"handleLike",value:function(){this._likeCounter.textContent=this._likes.length,this.isLiked()?this._likeButton.classList.add("element__like-button_active"):this._likeButton.classList.remove("element__like-button_active")}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,C(r.key),r)}}function O(e,t,n){return(t=C(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){var t=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===j(t)?t:String(t)}var P=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),O(this,"_showInputError",(function(e,t){var n=r._popupFormElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._object.inputErrorClass),n.textContent=t,n.classList.add(r._object.errorClass)})),O(this,"_hideInputError",(function(e){var t=r._popupFormElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._object.inputErrorClass),t.textContent="",t.classList.remove(r._object.errorClass)})),O(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),O(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),O(this,"_toggleButtonState",(function(){r._hasInvalidInput()?(r._buttonElement.classList.add(r._object.inactiveButtonClass),r._buttonElement.setAttribute("disabled","")):(r._buttonElement.classList.remove(r._object.inactiveButtonClass),r._buttonElement.removeAttribute("disabled"))})),O(this,"_setEventListeners",(function(){r._toggleButtonState(),r._popupFormElement.addEventListener("reset",(function(){setTimeout((function(){r._toggleButtonState()}),0)})),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))}))})),O(this,"enableValidation",(function(){r._setEventListeners()})),this._object=t,this._popupFormElement=n,this._inputList=Array.from(this._popupFormElement.querySelectorAll(this._object.inputSelector)),this._buttonElement=this._popupFormElement.querySelector(this._object.submitButtonSelector)}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,T(r.key),r)}}function T(e){var t=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===L(t)?t:String(t)}var q=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.close()},(r=T(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=t,this._escClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._escClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._escClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup__close")&&e.close(),t.target===t.currentTarget&&e.close()}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupForm=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"updateSubmitHandler",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;B(A(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit({cardId:e._cardId,cards:e._cards})}))}},{key:"open",value:function(e){var t=e.cardId,n=e.cards;B(A(u.prototype),"open",this).call(this),this._cardId=t,this._cards=n}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(q);function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==F(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},N.apply(this,arguments)}function J(e,t){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},J(e,t)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===F(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._popupForm=t._popup.querySelector(".popup__form"),t._popupInput=t._popupForm.querySelectorAll(".popup__text"),t._saveButton=t._popupForm.querySelector(".popup__save-button"),t._saveButtonText=t._saveButton.textContent,t._handleFormSubmit=r,t}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._popupInput.forEach((function(t){e[t.name]=t.value})),e}},{key:"setInputValues",value:function(e){this._popupInput.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;N(H(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){N(H(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"loading",value:function(e){this._saveButton.textContent=e?"Сохранение...":this._saveButtonText}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(q);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==M(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}function $(){return $="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},$.apply(this,arguments)}function K(e,t){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},K(e,t)}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Q(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&K(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Q(r);if(o){var n=Q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._cardImgElement=t._popup.querySelector(".popup__image"),t._cardTitleElement=t._popup.querySelector(".popup__title"),t}return t=u,(n=[{key:"open",value:function(e){this._cardImgElement.src=e.link,this._cardTitleElement.textContent=e.name,this._cardImgElement.alt=e.name,$(Q(u.prototype),"open",this).call(this)}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(q);function X(e){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X(e)}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==X(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==X(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===X(o)?o:String(o)),r)}var o}var Z=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&Y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ee(e){return ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee(e)}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==ee(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==ee(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===ee(o)?o:String(o)),r)}var o}var ne=function(){function e(t){var n=t.profileName,r=t.profileJob,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._forename=n,this._job=r,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{forename:this._forename.textContent,job:this._job.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._forename.textContent=t,this._job.textContent=n}},{key:"setUserAvatar",value:function(e){var t=e.avatar;this._avatar.src=t}}])&&te(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var oe,ie=new b({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-63/",headers:{Authorization:"578ac007-c2ae-493c-88ff-1df9d86bdf70","Content-type":"application/json"}}),ue=[ie.getUserInfo(),ie.getInitialCards()],ae=function(e){var t=new w({data:e,userId:oe,templateSelector:"#card-template",handleCardClick:le,handleDelCard:function(e,n){pe.open(e,n),pe.updateSubmitHandler((function(e){ie.deleteUserCard(e.cardId).then((function(){pe.close(),t.delCard()})).catch((function(e){console.log(e)}))}))},handleLikeCard:function(e){t.isLiked()?ie.deleteLikeCard(e.cardId).then((function(e){t.updateLikeData(e),t.handleLike()})).catch((function(e){console.log(e)})):ie.addLikeCard(e.cardId).then((function(e){t.updateLikeData(e),t.handleLike()})).catch((function(e){console.log(e)}))}});return t.generateCard(e)},ce=new Z({renderer:function(e){ce.addItem(ae(e))}},m),le=function(e){se.open(e)},se=new W(r);se.setEventListeners();var fe=new G({popupSelector:n,handleFormSubmit:function(e){fe.loading(!0),ie.addNewCard({name:e.name,link:e.url}).then((function(e){ce.addItem(ae(e),!0),fe.close()})).catch((function(e){console.log(e)})).finally((function(){fe.loading(!1)}))}});fe.setEventListeners();var pe=new D(i);pe.setEventListeners();var ye=new ne({profileName:s,profileJob:f,profileAvatar:p}),de=new G({popupSelector:t,handleFormSubmit:function(e){de.loading(!0),ie.editUserProfile(e).then((function(e){ye.setUserInfo(e),de.close()})).catch((function(e){console.log(e)})).finally((function(){de.loading(!1)}))}});de.setEventListeners();var me=new G({popupSelector:o,handleFormSubmit:function(e){me.loading(!0),ie.editUserAvatar(e).then((function(e){ye.setUserAvatar(e),me.close()})).catch((function(e){console.log(e)})).finally((function(){me.loading(!1)}))}});me.setEventListeners(),a.addEventListener("click",(function(){de.setInputValues(ye.getUserInfo()),he.resetValidation(),de.open()})),u.addEventListener("click",(function(){_e.resetValidation(),fe.open()})),c.addEventListener("click",(function(){be.resetValidation(),me.open()}));var he=new P(e,l);he.enableValidation();var _e=new P(e,y);_e.enableValidation();var be=new P(e,d);be.enableValidation(),Promise.all(ue).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?re(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];oe=o._id,ye.setUserInfo(o),ye.setUserAvatar(o),ce.renderItems(i)})).catch((function(e){console.log(e)}))})();