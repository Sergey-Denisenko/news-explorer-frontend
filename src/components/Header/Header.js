import React from 'react';
// import headerPath from '../images/Vector_white.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

import {
  headerLogoText,
  // headerButtonAuthText,
  routePathMainPage, routePathSavedNews,
} from '../../utils/constants';

function Header({
  handleHeaderMenuOpenClick,
  isHeaderMenuOpen,
  handleHeaderAuthButtonClick,
  // routePathName,
  // routePath,
  routePathAuth,
  handleSavedNewsPageLinkClick,
  isSavedNewsPageOpen,
  handleMainPageLinkClick,
  isMainPageOpen,
  // onSignOut,
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
        // routePath={routePathMainPage}
        routePathAuth="/sign-up"
        handleHeaderAuthButtonClick={handleHeaderAuthButtonClick}
        handleSavedNewsPageLinkClick={handleSavedNewsPageLinkClick}
        isSavedNewsPageOpen={isSavedNewsPageOpen}
        handleMainPageLinkClick={handleMainPageLinkClick}
        isMainPageOpen={isMainPageOpen}
      />
    </header>
  );
}

export default Header;
