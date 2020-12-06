import React from 'react';

import { Link } from 'react-router-dom';
import {
  headerButtonAuthText, routePathMainPage, routePathSavedNews,
} from '../../utils/constants';

function Navigation({
  handleHeaderMenuOpenClick,
  isHeaderMenuOpen,
  handleHeaderAuthButtonClick,
  routePathName,
  routePath,
  routePathAuth,
  handleSavedNewsPageLinkClick,
  isSavedNewsPageOpen,
  handleMainPageLinkClick,
  isMainPageOpen,
  onSignOut,
}) {
  return (
    <>
      <div className={`navigation navigation__menu ${(isSavedNewsPageOpen === true && isHeaderMenuOpen === false) ? 'navigation__menu_dark-style' : ''} ${isHeaderMenuOpen === true ? 'navigation__menu_opened-mobile' : ''}`}>

        <Link
          to={routePathMainPage}
          className={`navigation__menu-item navigation__menu-item_link ${isMainPageOpen === true ? 'navigation__menu-item_active' : ''}`}
          onClick={handleMainPageLinkClick}
        >
          Главная
        </Link>

        <Link
          to={routePathSavedNews}
          className={`navigation__menu-item navigation__menu-item_link ${isSavedNewsPageOpen === true ? 'navigation__menu-item_active navigation__menu-item_active_dark-style' : ''}`}
          onClick={handleSavedNewsPageLinkClick}
        >
          Сохранённые статьи
        </Link>

        {isMainPageOpen === true
        && (
        <div className={`navigation__auth ${isSavedNewsPageOpen === true ? 'navigation__auth_dark-style' : ''}`}>
          <Link
            to={routePathAuth}
            className={`navigation__auth_link ${isSavedNewsPageOpen === true ? 'navigation__auth_link-exit_dark-style' : ''}`}
            onClick={handleHeaderAuthButtonClick}
          >
            {headerButtonAuthText}
          </Link>
        </div>
        )}

        {isSavedNewsPageOpen === true
        && (
        <Link
          to={routePathMainPage}
          onClick={handleMainPageLinkClick}
          className={`navigation__auth ${(isSavedNewsPageOpen === true && isHeaderMenuOpen === false) ? 'navigation__auth_dark-style' : ''}`}
        >
          <p className="navigation__auth_user-name navigation__auth_user-name_visible">
            Грета
          </p>
          <div
            aria-hidden="true"
            onClick={onSignOut}
            className={`navigation__auth_link navigation__auth_link-exit navigation__auth_link_visible ${(isSavedNewsPageOpen === true && isHeaderMenuOpen === false)  ? 'navigation__auth_link-exit_dark-style' : ''}`}
          />
        </Link>
        )}

      </div>

      {/* Кнопка мобильного меню */}
      {isMainPageOpen === true
        &&
        <button
          aria-label="Mobile menu open button"
          // aria-hidden="true"
          type="button"
          className={`navigation__menu-mobile-icon ${isHeaderMenuOpen === false ? 'navigation__menu-mobile-icon_open-white' : 'navigation__menu-mobile-icon_close-white'}`}
          onClick={handleHeaderMenuOpenClick}
        />}
        {isSavedNewsPageOpen === true
        &&
        <button
          aria-label="Mobile menu open button"
          // aria-hidden="true"
          type="button"
          className={`navigation__menu-mobile-icon ${isHeaderMenuOpen === false ? 'navigation__menu-mobile-icon_open-dark' : 'navigation__menu-mobile-icon_close-white'}`}
          onClick={handleHeaderMenuOpenClick}
        />}

    </>
  );
}

export default Navigation;
