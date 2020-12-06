import React from 'react';
import { Link } from 'react-router-dom';
import InfoTooltip from '../infotooltip/InfoTooltip';

function PopupWithForm({
  name,
  title,
  isOpen,
  closePopup,
  onClose,
  onSubmit,
  submitButtonText = '',
  submitDeleteButtonText = '',
  handleSubmitDataSendState,
  setClearMessage,
  handleLoginLinkClick, handleRegisterLinkClick, handleIsRegister,
  isHeaderMenuOpen,
  children,
}) {
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
    alert('При нажатии "Войти" будет выполнен запрос на сервер для входа');
  };

  return (

    <div className={`register register_type_${name} ${isHeaderMenuOpen ? '' : 'register_overlay'} ${isOpen ? 'register_opened' : ''}`}>
      {(isOpen && (name === 'register'))
        && (
          <div className={`register register_type_${name} ${isHeaderMenuOpen ? '' : 'register_overlay'} ${isOpen ? 'register_opened' : ''}`}>
            <form className="register__container popup__form" noValidate name={name}>
              <h2 className="register__form-title">{title}</h2>
              <fieldset className="register__form-profile popup__fieldset">
                {children}
                <button
                  type="button"
                  className="register__form-submit register__button"
                  onClick={handleIsRegister}
                >
                  {submitButtonText}
                </button>
                <div className="register__form-login-link">
                  или&nbsp;
                  <Link to="/sign-in" className="register__login-link" onClick={handleLoginLinkClick}>Войти</Link>
                </div>
              </fieldset>
              <button aria-label="Close popup button" onClick={closePopup} type="button" className="register__form-close-button popup__close-button" />
            </form>
          </div>
        )
      }

      {(isOpen && (name === 'login'))
      && (
        <div className={`register register_type_${name} ${isHeaderMenuOpen ? '' : 'register_overlay'} ${isOpen ?'register_opened' : ''}`}>
          <form className="register__container popup__form" noValidate name={name}>
            <h2 className="register__form-title">{title}</h2>
            <fieldset className="register__form-profile popup__fieldset">
              {children}
              <button
                type="button"
                className="register__form-submit register__button register__button_disabled"
                onClick={alertTempMessage}
              >
                {submitButtonText}
              </button>
              <div className="register__form-login-link">
                или&nbsp;
                <Link to="/sign-up" className="register__login-link " onClick={handleRegisterLinkClick}>Зарегистрироваться</Link>
              </div>
            </fieldset>
            <button aria-label="Close popup button" onClick={closePopup} type="button" className="register__form-close-button popup__close-button" />
          </form>
        </div>
        )
      }

      {(isOpen && (name === 'infotooltip'))
      &&
      <InfoTooltip />
      }
    </div>
  );
}

export default PopupWithForm;
