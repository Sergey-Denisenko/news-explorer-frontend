import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

import {
  headerLogoText,
  routePathMainPage,
} from '../../utils/constants';

function Header({
  handleHeaderMenuOpenClick,
  isHeaderMenuOpen,
  handleHeaderAuthButtonClick,
  routePathAuth,
  handleSavedNewsPageLinkClick,
  isSavedNewsPageOpen,
  handleMainPageLinkClick,
  isMainPageOpen,
  loggedIn,
  onSignOut,
}) {
  return (
    <header className={`header ${isHeaderMenuOpen === true ? 'header_mobile-color-back-dark' : ''} ${isSavedNewsPageOpen === true ? 'header_color-background' : ''} `}>

      <Link
        to={routePathMainPage}
        className={`header__logo-text ${(isSavedNewsPageOpen === true  && isHeaderMenuOpen === false) ? 'header__logo-text_dark-style' : ''}`}
        onClick={handleMainPageLinkClick}
      >
        {headerLogoText}
      </Link>
      <Navigation
        handleHeaderMenuOpenClick={handleHeaderMenuOpenClick}
        isHeaderMenuOpen={isHeaderMenuOpen}
        routePathAuth={routePathAuth}
        handleHeaderAuthButtonClick={handleHeaderAuthButtonClick}
        handleSavedNewsPageLinkClick={handleSavedNewsPageLinkClick}
        isSavedNewsPageOpen={isSavedNewsPageOpen}
        handleMainPageLinkClick={handleMainPageLinkClick}
        isMainPageOpen={isMainPageOpen}
        loggedIn={loggedIn}
        onSignOut={onSignOut}
      />
    </header>
  );
}

export default Header;
