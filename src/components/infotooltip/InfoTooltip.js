import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { infoTooltipSuccessText, infoTooltipUnSuccessText } from '../../utils/constants';

function InfoTooltip({
  closePopup, onClose, isOpen, isRegister, handleLoginLinkClick, isHeaderMenuOpen,
}) {
  return (

    <PopupWithForm
      name="infotooltip"
      title="Пользователь успешно зарегистрирован!"
      closePopup={closePopup}
      onClose={onClose}
      isOpen={isOpen}
      isRegister={isRegister}
      handleLoginLinkClick={handleLoginLinkClick}
      isHeaderMenuOpen={isHeaderMenuOpen}
    >
      {/* {isRegister === true && isOpen ? (
            <h2 className="infotooltip__title">{infoTooltipSuccessText}</h2>
      ) : isRegister === false && isOpen ? (
        <h2 className="infotooltip__title">{infoTooltipUnSuccessText}</h2>
      ) : ''} */}

      {isRegister === true && isOpen
      && <h2 className="infotooltip__title">{infoTooltipSuccessText}</h2>
      }
      {isRegister === false && isOpen
      && <h2 className="infotooltip__title">{infoTooltipUnSuccessText}</h2>
      }

      {/* </div> */}
    </PopupWithForm>
  );
}

export default InfoTooltip;
