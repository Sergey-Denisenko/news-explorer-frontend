import React from 'react';
import { Link } from 'react-router-dom';

function PopupWithForm({
  name,
  title,
  isOpen,
  closePopup,
  // onClose,
  // onSubmit,
  submitButtonText = '',
  // submitDeleteButtonText = '',
  // handleSubmitDataSendState,
  // setClearMessage,
  handleLoginLinkClick, handleRegisterLinkClick, handleIsRegister, isHeaderMenuOpen,
  children,
}) {
  // console.log('onClose');
  // console.log(onClose);

  // if (onClose === true && name === "register") {
  //   document.querySelector(`.register`).classList.remove('register_opened');
  // }

  // Закрытие попапов по нажатию ESC и клику на overlay
  React.useEffect(() => {
    function handleEscClose(evt) {
      const openedPopup = document.querySelector('.register_opened');
      const openedPopupInfoTooltip = document.querySelector('.infotooltip_opened');
      if (evt.key === 'Escape' && openedPopup) {
        closePopup();
      } else if (evt.key === 'Escape' && openedPopupInfoTooltip) {
        closePopup();
      }
    }
    document.addEventListener('keydown', handleEscClose);

    function handleOverlayClose(evt) {
      if (evt.target.classList.contains('register_overlay')) {
        closePopup();
      } else if (evt.target.classList.contains('infotooltip_overlay')) {
        closePopup();
      }
    }
    document.addEventListener('click', handleOverlayClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('click', handleOverlayClose);
    };
  });

  const alertTempMessage = () => {
    alert('При нажатии "Войти" будет выполнен запрос на сервер и дальнейшее получение токена для входа');
  };

  return (
    isOpen && (name === 'register') ? (
      // <div className={`popup popup_type_${name} popup__overlay ${isOpen ? 'popup_opened' : ''}`}>
      <div className={`register register_type_${name} ${isHeaderMenuOpen ? '' : 'register_overlay'} ${isOpen ? 'register_opened' : ''}`}>
        <form className="register__container popup__form" noValidate name={name} >
        <h2 className="register__form-title">{title}</h2>
        <fieldset className="register__form-profile popup__fieldset">
          {children}
          <button type="button"
            // type="submit"
            className="register__form-submit register__button" onClick={handleIsRegister}>
            {submitButtonText}
          </button>
          <div className="register__form-login-link">
              или <Link to="/sign-in" className="register__login-link" onClick={handleLoginLinkClick} >Войти</Link>
          </div>
        </fieldset>
        <button onClick={closePopup} type="button" className="register__form-close-button popup__close-button" />
        </form>
      </div>
    ) : (
      isOpen && (name === 'login')) ? (
        // <div className={`popup popup_type_${name} popup__overlay ${isOpen ?
        // 'popup_opened' : ''}`}>
        <div className={`register register_type_${name} ${isHeaderMenuOpen ? '' : 'register_overlay'} ${isOpen ? 'register_opened' : ''}`}>
          <form className="register__container popup__form" noValidate name={name} >
          <h2 className="register__form-title">{title}</h2>
          <fieldset className="register__form-profile popup__fieldset">
            {children}
            <button type="button"
              // type="submit"
              className="register__form-submit register__button register__button_disabled" onClick={alertTempMessage}>
              {submitButtonText}
            </button>
            <div className="register__form-login-link">
              или <Link to="/sign-up" className="register__login-link " onClick={handleRegisterLinkClick}>Зарегистрироваться</Link>
            </div>
          </fieldset>
          <button onClick={closePopup} type="button" className="register__form-close-button popup__close-button" />
          </form>
        </div>
      ) : (
        isOpen && (name === 'infotooltip')) ? (
      // <div className={`popup popup_type_${name} popup__overlay ${isOpen ? 'popup_opened' : ''}`}>
      <div className={`infotooltip ${isHeaderMenuOpen ? '' : 'infotooltip_overlay'} ${isOpen ? 'infotooltip_opened' : ''}`}>
        <form id="form-popup" className="infotooltip__container">
          {children}
          {/* <div className="infotooltip__form-login-link"> */}
            <Link to="/sign-in" className="infotooltip__login-link" onClick={handleLoginLinkClick} >Войти</Link>
          {/* </div> */}
          <button onClick={closePopup} type="button" className="infotooltip__form-close-button" />
        </form>
      </div>
        ) : ('')
  );
}

export default PopupWithForm;
