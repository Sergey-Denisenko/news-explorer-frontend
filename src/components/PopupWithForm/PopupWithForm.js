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
  handleLoginLinkClick,
  handleRegisterLinkClick,
  handleIsRegister,
  isHeaderMenuOpen,
  children,
  isDisable,
  isButtonDisable,
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

  return (

    <div className={`register register_type_${name} ${isHeaderMenuOpen ? '' : 'register_overlay'} ${isOpen ? 'register_opened' : ''}`}>
      {(isOpen && (name === 'register'))
        && (
          <div className={`register register_type_${name} ${isHeaderMenuOpen ? '' : 'register_overlay'} ${isOpen ? 'register_opened' : ''}`}>
            <form className="register__container popup__form" noValidate name={name} onSubmit={onSubmit}>
              <h2 className="register__form-title">{title}</h2>
              <fieldset className="register__form-profile popup__fieldset" disabled={isButtonDisable === true}>
                {children}

                {(isDisable === true || isButtonDisable === true)
                &&
                <button
                  type="submit"
                  className="register__form-submit register__button register__button_disabled"
                  disabled
                >
                  {submitButtonText}
                </button>
                }

                {(isDisable === false && isButtonDisable === false)
                &&
                <button
                  type="submit"
                  className="register__form-submit register__button"
                  // onClick={handleIsRegister}
                  onClick={handleSubmitDataSendState}
                >
                  {submitButtonText}
                </button>
                }
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
          <form className="register__container popup__form" noValidate name={name} onSubmit={onSubmit}>
            <h2 className="register__form-title">{title}</h2>
            <fieldset className="register__form-profile popup__fieldset" disabled={isButtonDisable === true}>
              {children}

                {(isDisable === true || isButtonDisable === true)
                &&
                <button
                  type="submit"
                  className="register__form-submit register__button register__button_disabled"
                  disabled
                >
                  {submitButtonText}
                </button>
                }

                {(isDisable === false && isButtonDisable === false)
                &&
                <button
                  type="submit"
                  className="register__form-submit register__button"
                  // onClick={handleIsRegister}
                  onClick={handleSubmitDataSendState}
                >
                  {submitButtonText}
                </button>
                }

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
