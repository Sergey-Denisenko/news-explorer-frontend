import React from 'react';
import { Link } from 'react-router-dom';
import { infoTooltipSuccessText, infoTooltipUnSuccessText } from '../../utils/constants';

function InfoTooltip({
  closePopup,
  isOpen,
  isRegister,
  handleLoginLinkClick,
  isHeaderMenuOpen,
}) {
  return (
        <div className={`infotooltip ${isHeaderMenuOpen ? '' : 'infotooltip_overlay'} ${isOpen ? 'infotooltip_opened' : ''}`}>
          <form id="form-popup" className="infotooltip__container">
            {(isRegister === true && isOpen)
            && <h2 className="infotooltip__title">{infoTooltipSuccessText}</h2>}
            {(isRegister === false && isOpen)
            && <h2 className="infotooltip__title">{infoTooltipUnSuccessText}</h2>}
            <Link to="/sign-in" className="infotooltip__login-link" onClick={handleLoginLinkClick}>Войти</Link>
            <button aria-label="Close popup button" onClick={closePopup} type="button" className="infotooltip__form-close-button" />
          </form>
        </div>
  );
}

export default InfoTooltip;
