'use strict';

(function () {
  const Keys = {
    ESCAPE: 'Escape',
    ESC: 'Esc',
  }

  const popupOpenButton = document.querySelector('.header__link--button');
  const popup = document.querySelector('.popup');
  const popupButtonClose = document.querySelector('.popup__button-close');
  const accordions = Array.from(document.querySelectorAll('.accordion'));
  const accordionsTitle = Array.from(document.querySelectorAll('.accordion__title'));
  const linksForSmooth = Array.from(document.querySelectorAll('.smooth-link'));
  const popupOverlay = document.querySelector('.popup-overlay');
  const popupInputName = document.querySelector('#name-popup');
  const selector = document.querySelectorAll("input[type='tel']");

  accordions.forEach((element) => {
    element.classList.add('accordion--close');
  })

  const onAccordionsTitleClick = (evt) => {
    accordions.forEach(element => {
      if (element !== evt.target.parentNode) {
          element.classList.remove('accordion--open');
          element.classList.add('accordion--close');
      }
    });

      evt.target.parentNode.classList.toggle('accordion--open');
      evt.target.parentNode.classList.toggle('accordion--close');
  }

  accordionsTitle.forEach(element => {
    element.addEventListener('click', onAccordionsTitleClick);
  });

  const onPopupOpenButtonClick = (evt) => {
    evt.preventDefault();
    popup.classList.add('popup--show');
    document.addEventListener('keydown', onPopupCloseKeydown);
    document.body.classList.add('overflow-hidden');
    popupOverlay.addEventListener('click', onPopupOverlayClick);
    popupOverlay.classList.add('popup-overlay--show');
    if (popupInputName) {
      popupInputName.focus();
    }
  }

  const onPopupButtonCloseClick = (evt) => {
    popup.classList.remove('popup--show');
    document.body.classList.remove('overflow-hidden');
    popupOverlay.classList.remove('popup-overlay--show');
  }

  const onPopupCloseKeydown = (evt) => {
    if (evt.key === Keys.ESCAPE ||evt.key === Keys.ESC) {
      popup.classList.remove('popup--show');
      document.body.classList.remove('overflow-hidden');
      popupOverlay.classList.remove('popup-overlay--show');
    }
  }

  const onPopupOverlayClick = (evt) => {
    popup.classList.remove('popup--show');
    document.body.classList.remove('overflow-hidden');
    popupOverlay.classList.remove('popup-overlay--show');
  }

  const scrollTo = (element) => {
    window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth',
    });
  };

  const onLinksForSmoothClick = (evt) => {
    evt.preventDefault();
    scrollTo(document.querySelector(evt.target.hash));
  }

  linksForSmooth.forEach(element => {
    element.addEventListener('click', onLinksForSmoothClick);
  });

  if (popupOpenButton) {
    popupOpenButton.addEventListener('click', onPopupOpenButtonClick);
  }

  if (popupButtonClose) {
    popupButtonClose.addEventListener('click', onPopupButtonCloseClick);
  }

  const im = new Inputmask({"placeholder":" "});
  im.mask(selector);
}())
