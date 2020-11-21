import React from 'react';
import iconGithubPath from '../../images/icon-github.png';
import iconFacebookPath from '../../images/icon-facebook.png';
import {
  footerInfoText,
  footerMenuLinkMainPageText,
  footerMenuLinkYPText,
  footerMenuLinkMainPage,
  footerMenuLinkYP,
  footerMenuLinkGH,
  footerMenuLinkFB,
} from '../../utils/constants';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__info">
        &copy;
        {footerInfoText}
      </p>
      <div className="footer__links">
        <ul className="footer__menu">
          <li className="footer__menu-item">
            <a className="footer__menu-item_link" href={footerMenuLinkMainPage}>{footerMenuLinkMainPageText}</a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-item_link" href={footerMenuLinkYP} target="_blank" rel="noreferrer">{footerMenuLinkYPText}</a>
          </li>
        </ul>
        <ul className="footer__social">
          <li className="footer__social-item">
            <a className="footer__social-item_link" href={footerMenuLinkGH} target="_blank" rel="noreferrer">
              <img className="footer__social-item-image" src={iconGithubPath} alt="Иконка Github" />
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-item_link" href={footerMenuLinkFB} target="_blank" rel="noreferrer">
              <img className="footer__social-item-image" src={iconFacebookPath} alt="Иконка Facebook" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
