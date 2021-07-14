'use strict';

(function () {
  const Keys = {
    ESCAPE: 'Escape',
    ESC: 'Esc',
  }

  const popupOpenButton = document.querySelector('.header__link--button');
  const popup = document.querySelector('.popup');
  const popupButtonClose = popup.querySelector('.popup__button-close');
  const accordions = Array.from(document.querySelectorAll('.accordion'));
  const accordionsTitle = Array.from(document.querySelectorAll('.accordion__title'));
  const linksForSmooth = Array.from(document.querySelectorAll('.smooth-link'));
  const popupBack = document.querySelector('.outside-popap-forcloseclick');

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

  if (accordionsTitle) {
    accordionsTitle.forEach(element => {
      element.addEventListener('click', onAccordionsTitleClick);
    });
  }

  const onpopupOpenButtonClick = (evt) => {
    evt.preventDefault();
    popup.classList.add('popup--show');
    document.addEventListener('keydown', onpopupCloseKeydown);
    if (document.body) {
      document.body.classList.add('overflow-hidden');
    }
    popupBack.addEventListener('click', onOutsidepopupClick);
    popupBack.classList.add('outside-popap-forcloseclick--show');
  }



  const onpopupButtonCloseClick = (evt) => {
    popup.classList.remove('popup--show');
    document.body.classList.remove('overflow-hidden');
    popupBack.classList.remove('outside-popap-forcloseclick--show');
  }

  const onpopupCloseKeydown = (evt) => {
    if (evt.key === Keys.ESCAPE ||evt.key === Keys.ESC) {
      popup.classList.remove('popup--show');
      document.body.classList.remove('overflow-hidden');
      popupBack.classList.remove('outside-popap-forcloseclick--show');
    }
  }

  const onOutsidepopupClick = (evt) => {
    popup.classList.remove('popup--show');
    document.body.classList.remove('overflow-hidden');
    popupBack.classList.remove('outside-popap-forcloseclick--show');
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

  if (linksForSmooth) {
    linksForSmooth.forEach(element => {
      element.addEventListener('click', onLinksForSmoothClick);
    });
  }

  if (popupOpenButton) {
    popupOpenButton.addEventListener('click', onpopupOpenButtonClick);
  }

  if (popupButtonClose) {
    popupButtonClose.addEventListener('click', onpopupButtonCloseClick);
  }
}())
