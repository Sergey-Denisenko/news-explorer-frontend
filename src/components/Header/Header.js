import React from 'react';
// import headerPath from '../images/Vector_white.svg';
import { Link } from 'react-router-dom';

import { headerLogoText, headerButtonAuthText } from '../../utils/constants';
// import exitIconPath from '../../images/exit-icon.png';
// import headerMenuOpenIconMobileViewPath from '../../images/icon-menu-white.png';
// import headerMenuCloseIconMobileViewPath from '../../images/icon-close-cross-white.png';

function Header({
  handleHeaderMenuOpenClick,
  isHeaderMenuOpen,
  handleHeaderAuthButtonClick,
  // routePathName,
  // routePath,
  routePathAuth,
  routePathSavedNews,
  routePathMainPage,
  handleSavedNewsPageLinkClick,
  isSavedNewsPageOpen,
  handleMainPageLinkClick,
  isMainPageOpen,
  onSignOut,
}) {
  // {routePathName, routePath
  // emailUser, loggedIn, onSignOut, setClearMessage
  // }

  return (
  // loggedIn === true ? (
    isHeaderMenuOpen === true ? (

      <header className={`header ${isHeaderMenuOpen ? 'header_mobile-color-back-dark' : ''} `}>
      {/* ${isSavedNewsPageOpen === true ? 'header_mobile-color-back-light' : '' } */}

        {/* <img className="header__logo" src={headerPath} alt="Логотип"/> */}
        {/* <p className="header__logo-text">{headerLogoText}</p> */}
        <Link
            to={routePathMainPage}
            className={'header__logo-text '}
            // ${isSavedNewsPageOpen === true ? 'header__logo-text_dark-style' : '' }
            onClick={handleMainPageLinkClick}
            >{headerLogoText}
          </Link>

        <div className={'header__menu header__menu_opened-mobile '}>
        {/* ${isSavedNewsPageOpen === true ? 'header__menu_dark-style' : '' } */}

          <Link
            to={routePathMainPage}
            className={`header__menu-item header__menu-item_link ${isMainPageOpen === true ? 'header__menu-item_active' : ''}`}
            onClick={handleMainPageLinkClick}
            >Главная
          </Link>

          <Link
            to={routePathSavedNews}
            className={`header__menu-item header__menu-item_link
            ${isSavedNewsPageOpen === true ? 'header__menu-item_active' : ''}`} // header__menu-item_active_dark-style
            onClick={handleSavedNewsPageLinkClick}
            >Сохранённые статьи
          </Link>

          {isMainPageOpen === true ? (
            <div className={'header__auth '}>
            {/* ${isSavedNewsPageOpen === true ? 'header__auth_dark-style' : '' } */}

              <Link className={'header__auth_link '}
              // ${isSavedNewsPageOpen === true ? 'header__auth_link-exit_dark-style' : '' }
              to={routePathAuth}
              onClick={handleHeaderAuthButtonClick}
              >{headerButtonAuthText}
              </Link>
            </div>
          ) : (
            <Link onClick={handleMainPageLinkClick} to={routePathMainPage} className={'header__auth'}>
            {/* ${isSavedNewsPageOpen === true ? 'header__auth_dark-style' : '' } */}
              <p className="header__auth_user-name header__auth_user-name_visible">Грета
              </p>
              <div
                className={'header__auth_link header__auth_link-exit header__auth_link_visible'}>
                {/* ${isSavedNewsPageOpen === true ? 'header__auth_link-exit_dark-style' : '' } */}
              </div>
            </Link>
          ) }

        </div>

        <button className={`header__menu-mobile-icon ${!isHeaderMenuOpen ? 'header__menu-mobile-icon_open-white' : 'header__menu-mobile-icon_close-white'}
        `}
          onClick={handleHeaderMenuOpenClick}
          >
        </button>

      </header>

    ) : (
      <header className={`header ${isSavedNewsPageOpen === true ? 'header_color-background' : ''}`}>
        {/* <img className="header__logo" src={headerPath} alt="Логотип"/> */}
        {/* <p className="header__logo-text">{headerLogoText}</p> */}
        <Link
            to={routePathMainPage}
            className={`header__logo-text ${isSavedNewsPageOpen === true ? 'header__logo-text_dark-style' : ''}`}
            onClick={handleMainPageLinkClick}
            // onClick={setClearMessage}
            >{headerLogoText}
          </Link>

        <div className={`header__menu ${isSavedNewsPageOpen === true ? 'header__menu_dark-style' : ''}`}>
          {/* <button
          onClick={}
          className="header__menu-item header__menu-item_link"
          href={routePath}
          >Главная</button>
          <button
          onClick={}
          className="header__menu-item header__menu-item_link
          header__menu_link_visible"
          href={routePath}
          >Сохраненные статьи</button> */}

          <Link
            to={routePathMainPage}
            className={`header__menu-item header__menu-item_link ${isMainPageOpen === true ? 'header__menu-item_active' : ''}`}
            onClick={handleMainPageLinkClick}
            // onClick={setClearMessage}
            >Главная
              {/* {routePathName} */}
          </Link>

          <Link
            to={routePathSavedNews}
            className={`header__menu-item header__menu-item_link ${isSavedNewsPageOpen === true ? 'header__menu-item_active header__menu-item_active_dark-style' : ''}`}
             // header__menu-item_active header__menu-item_disable
            onClick={handleSavedNewsPageLinkClick}

            // onClick={setClearMessage}
            >Сохранённые статьи
              {/* {routePathName} */}
          </Link>

          {/* <div className="header__auth">
            <Link
              to={routePath}
              className="header__auth_user-name header__auth_user-name_visible"
              header__menu-item_disable
              onClick={setClearMessage}
              >Авторизоваться
              {routePathName}
            </Link>
          </div> */}
          {isMainPageOpen === true ? (
            <div className={`header__auth ${isSavedNewsPageOpen === true ? 'header__auth_dark-style' : ''}`}>
              {/* Ссылка на страницу регистрации */}

              <Link className={`header__auth_link ${isSavedNewsPageOpen === true ? 'header__auth_link-exit_dark-style' : ''}`}
              to={routePathAuth}
              onClick={handleHeaderAuthButtonClick}
              // onClick={setClearMessage}
              >{headerButtonAuthText}
              {/* {routePathName} */}
              </Link>
            </div>
          ) : (
            <Link onClick={handleMainPageLinkClick} to={routePathMainPage} className={`header__auth ${isSavedNewsPageOpen === true ? 'header__auth_dark-style' : ''}`}>
              <p className="header__auth_user-name header__auth_user-name_visible">Грета
                {/* {emailUser} */}
              </p>
              <div
                onClick={onSignOut}
                className={`header__auth_link header__auth_link-exit header__auth_link_visible ${isSavedNewsPageOpen === true ? 'header__auth_link-exit_dark-style' : ''}`}
                // href={routePath}
                >
                  {/* {routePathName} */}
              </div>
            </Link>
          ) }

        </div>

        {/* {(isMainPageOpen === true) ? (
        <button className={`header__menu-mobile-icon ${!isHeaderMenuOpen ?
          'header__menu-mobile-icon_open-white' : 'header__menu-mobile-icon_close-white'}`}
          onClick={handleHeaderMenuOpenClick}></button>
        ) : (isSavedNewsPageOpen === true) ? (
          <button type="button" className={`header__menu-mobile-icon ${!isHeaderMenuOpen ?
            'header__menu-mobile-icon_open-dark' : 'header__menu-mobile-icon_close-dark'}`}
            onClick={handleHeaderMenuOpenClick}
            >
          </button>
        ) : ('')} */}

        {isMainPageOpen === true
        && <button className={`header__menu-mobile-icon ${!isHeaderMenuOpen ? 'header__menu-mobile-icon_open-white' : 'header__menu-mobile-icon_close-white'}`}
          onClick={handleHeaderMenuOpenClick}>
        </button>}
        {isSavedNewsPageOpen === true
        && <button type="button" className={`header__menu-mobile-icon ${!isHeaderMenuOpen ? 'header__menu-mobile-icon_open-dark' : 'header__menu-mobile-icon_close-dark'}`}
          onClick={handleHeaderMenuOpenClick}>
        </button>}

      </header>
    )
  );
}

export default Header;
