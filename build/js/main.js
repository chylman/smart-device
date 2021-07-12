'use strict';

(function () {
  const Keys = {
    ESCAPE: 'Escape',
    ESC: 'Esc',
  }

  const PRE_PHONE = '+7 (9';

  const pageBody = document.querySelector('.page-body');
  const popapOpenButton = document.querySelector('.header__link--button');
  const popap = document.querySelector('.popap');
  const popapButtonClose = popap.querySelector('.popap__button-close');
  const inputsPhone = Array.from(document.querySelectorAll('input[type=tel]'));
  const accordions = Array.from(document.querySelectorAll('.accordion'));
  const accordionsTitle = Array.from(document.querySelectorAll('.accordion__title'));
  const linksForSmooth = Array.from(document.querySelectorAll('.smooth-link'));
  const popapBack = document.createElement('div');



  if (accordions) {
    accordions.forEach((element) => {
      element.classList.add('accordion--close');
    })
  }

  const onAccordionsTitleClick = (evt) => {
    accordions.forEach(element => {
      if (element !== evt.target.parentNode) {
        if (element.classList.contains('accordion--open')) {
          element.classList.remove('accordion--open');
        }
        if (!element.classList.contains('accordion--close')) {
          element.classList.add('accordion--close');
        }
      }
    });

    if (evt.target.parentNode.classList.contains('accordion--open')) {
      evt.target.parentNode.classList.remove('accordion--open');
      evt.target.parentNode.classList.add('accordion--close');
    } else {
      evt.target.parentNode.classList.remove('accordion--close');
      evt.target.parentNode.classList.add('accordion--open');
    }
  }

  if (accordionsTitle) {
    accordionsTitle.forEach(element => {
      element.addEventListener('click', onAccordionsTitleClick);
    });
  }

  const onInputPhoneFocus = (evt) => {
    console.log(evt);
    evt.target.value = PRE_PHONE;
  }

  popapBack.classList.add('popap__background');

  const onPopapOpenButtonClick = (evt) => {
    evt.preventDefault();
    pageBody.prepend(popapBack);
    popap.classList.add('popap--show');
    document.addEventListener('keydown', onPopapCloseKeydown);
    if (pageBody) {
      pageBody.classList.add('overflow-hidden');
    }
    popapBack.addEventListener('click', onOutsidePopapClick);
  }



  const onPopapButtonCloseClick = (evt) => {
    if (popap.classList.contains('popap--show')) {
      popap.classList.remove('popap--show');
    }
    if (pageBody) {
      if (pageBody.classList.contains('overflow-hidden')) {
        pageBody.classList.remove('overflow-hidden');
      }
    }
    popapBack.remove();
  }

  const onPopapCloseKeydown = (evt) => {
    if (evt.key === Keys.ESCAPE ||evt.key === Keys.ESC) {
      popap.classList.remove('popap--show');
      if (pageBody) {
        if (pageBody.classList.contains('overflow-hidden')) {
          pageBody.classList.remove('overflow-hidden');
        }
      }
    }
    popapBack.remove();
  }

  const onOutsidePopapClick = (evt) => {
    if (popap.classList.contains('popap--show')) {
      popap.classList.remove('popap--show');
    }
    if (pageBody) {
      if (pageBody.classList.contains('overflow-hidden')) {
        pageBody.classList.remove('overflow-hidden');
      }
    }
    popapBack.remove();
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

  if (popapOpenButton) {
    popapOpenButton.addEventListener('click', onPopapOpenButtonClick);
  }

  if (popapButtonClose) {
    popapButtonClose.addEventListener('click', onPopapButtonCloseClick);
  }

  if (inputsPhone) {
    inputsPhone.forEach(element => {
      element.addEventListener('focus', onInputPhoneFocus);
    })
  }
}())
