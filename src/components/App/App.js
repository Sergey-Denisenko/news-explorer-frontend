import React from 'react';

// import { useEffect } from 'react';
import {
  Route, Switch, Redirect,
  // useHistory,
  withRouter,
} from 'react-router-dom';

import Register from '../Register/Register';
import Login from '../Login/Login';
import InfoTooltip from '../infotooltip/InfoTooltip';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import About from '../About/About';
import Footer from '../Footer/Footer';

import { routePathMainPage, routePathSavedNews } from '../../utils/constants';

function App() {
  const [showMore, setShowMore] = React.useState(false);
  const handleShowMoreClick = () => {
    setShowMore(!showMore);
    alert('При нажатии "Показать еще" будут подгружаться новости с сервера из списка найденных');
  };

  // const [loggedIn, setLoggedIn] = React.useState(false);
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');
  const [onClose, setOnClose] = React.useState(false);
  // const [isCardDeletePopupOpen, setIsCardDeletePopupOpen] = React.useState(false); //Перем.сост.
  // Текст на кнопках / состояние
  // const [isSubmitDataSendState, setIsSubmitDataSendState] = React.useState(false);
  const [isRegister, setIsRegister] = React.useState(false); // Состояние зарег пользователь или нет
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isSavedNewsPageOpen, setIsSavedNewsPageOpen] = React.useState(false);
  const [isMainPageOpen, setIsMainPageOpen] = React.useState(true);
  const [isInfoTooltipAuthOpen, setIsInfoTooltipAuthOpen] = React.useState(false);
  const [isShowTooltip, setIsShowTooltip] = React.useState(false);
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = React.useState(false);
  const [onSignOut, setOnSignOut] = React.useState(false);

  const handleHeaderMenuOpenClick = () => {
    setIsHeaderMenuOpen(!isHeaderMenuOpen);
    console.log('OPEN');
  };

  const handleShowTooltip = () => {
    setIsShowTooltip(!isShowTooltip);
  };

  const handleInfoTooltipAuth = () => {
    setIsInfoTooltipAuthOpen(!isInfoTooltipAuthOpen);
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
  };

  // const [cards, setCards] = React.useState([]);
  // const [currentUser,
  // setCurrentUser] = React.useState({ name: '', description: '', avatar: ' ', _id: '' });
  // const [message, setMessage] = React.useState(''); // Устанавливаю сообщение об ошибке
  // const [tempCardForDelete, setTempCardForDelete] = React.useState(); //Переменная состояния

  // const history = useHistory();

  const handleHeaderAuthButtonClick = () => {
    setIsRegisterPopupOpen(!isRegisterPopupOpen);
    // setClearMessage();// Устанавливаю в message пустую строку (отработка ошибок)
    setOnClose(false);
  };

  const handleRegisterLinkClick = () => {
    setIsRegisterPopupOpen(true);
    setIsLoginPopupOpen(false);
    setOnClose(false);
    setIsInfoTooltipAuthOpen(false);
  };

  const handleLoginLinkClick = () => {
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(true);
    setOnClose(false);
    setIsInfoTooltipAuthOpen(false);
  };

  const handleSavedNewsPageLinkClick = () => {
    setIsMainPageOpen(false);
    setIsSavedNewsPageOpen(true);

    setIsHeaderMenuOpen(false);
  };

  const handleMainPageLinkClick = () => {
    setIsSavedNewsPageOpen(false);
    setIsMainPageOpen(true);

    setIsHeaderMenuOpen(false);
  };

  // Очистка поля message
  // const setClearMessage = () => {
  //   setMessage('');
  // }

  const closeAllPopups = () => {
    setOnClose(!onClose);
    // setIsCardDeletePopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
    setIsInfoTooltipAuthOpen(false);
  };

  // Установка состояния нажатия кнопки для отображения на кнопке другого текста
  // const handleSubmitDataSendState = () => {
  //   setIsSubmitDataSendState(!isSubmitDataSendState);
  // };

  // Установка стейта зарегистрирован пользователь или нет
  const handleIsRegister = () => {
    // evt.preventDefault();
    setIsRegister(true);
    setOnSignOut(false);
    handleInfoTooltipAuth();
  };

  const handleOnSignOut = () => {
    setOnSignOut(!onSignOut);
    setIsRegister(false);
  };

  // console.log('isRegisterPopupOpen');
  // console.log(isRegisterPopupOpen);
  // console.log('isLoginPopupOpen');
  // console.log(isLoginPopupOpen);
  // console.log('isMainPageOpen');
  // console.log(isMainPageOpen);
  // console.log('isSavedNewsPageOpen');
  // console.log(isSavedNewsPageOpen);
  // console.log('isHeaderMenuOpen');
  // console.log(isHeaderMenuOpen);
  // console.log('isShowTooltip');
  // console.log(isShowTooltip);
  // console.log('isRegister');
  // console.log(isRegister);
  // console.log('isInfoTooltipAuthOpen');
  // console.log(isInfoTooltipAuthOpen);
  // console.log('routePathMainPage app');
  // console.log(routePathMainPage);
  // console.log('routePathSavedNews app');
  // console.log(routePathSavedNews);
  // console.log('showMore app');
  // console.log(showMore);

  return (
    <div className="app">
      {/* <CurrentUserContext.Provider value={currentUser}> */}
      <div className="page">
        {/* {loggedIn && email ? <Header emailUser={email} routePathName={ 'Выход' }
        routePath={ '/sign-in' } loggedIn={loggedIn} onSignOut={onSignOut} /> : ''} */}

        <Switch>
          <Route path={routePathSavedNews}>
            <Header
              handleHeaderMenuOpenClick={handleHeaderMenuOpenClick}
              isHeaderMenuOpen={isHeaderMenuOpen}
              routePath={routePathMainPage}
              routePathAuth="/sign-up"
              handleHeaderAuthButtonClick={handleHeaderAuthButtonClick}
              // routePathSavedNews={routePathSavedNews}
              // routePathMainPage={routePathMainPage}
              handleSavedNewsPageLinkClick={handleSavedNewsPageLinkClick}
              isSavedNewsPageOpen={isSavedNewsPageOpen}
              handleMainPageLinkClick={handleMainPageLinkClick}
              isMainPageOpen={isMainPageOpen}
              onSignOut={handleOnSignOut}
            />
            <SavedNews
              isMainPageOpen={isMainPageOpen}
              isSavedNewsPageOpen={isSavedNewsPageOpen}
              handleShowTooltip={handleShowTooltip}
              isShowTooltip={isShowTooltip}
            />
          </Route>

          <Route path={routePathMainPage}>
            <Header
              handleHeaderMenuOpenClick={handleHeaderMenuOpenClick}
              isHeaderMenuOpen={isHeaderMenuOpen}
              routePath={routePathMainPage}
              routePathAuth="/sign-up"
              handleHeaderAuthButtonClick={handleHeaderAuthButtonClick}
              // routePathSavedNews={routePathSavedNews}
              // routePathMainPage={routePathMainPage}
              handleSavedNewsPageLinkClick={handleSavedNewsPageLinkClick}
              isSavedNewsPageOpen={isSavedNewsPageOpen}
              handleMainPageLinkClick={handleMainPageLinkClick}
              isMainPageOpen={isMainPageOpen}
            />
            <SearchForm />
            <Main
              showMore={showMore}
              isMainPageOpen={isMainPageOpen}
              isSavedNewsPageOpen={isSavedNewsPageOpen}
              handleShowTooltip={handleShowTooltip}
              isShowTooltip={isShowTooltip}
              handleShowMoreClick={handleShowMoreClick}
            />
            <Preloader />
            <NotFound />
            <About />
          </Route>
        </Switch>

      </div>

      <Footer />
      <Route path="/sign-up">
        <Register
          closePopup={closeAllPopups}
          onClose={onClose}
          isOpen={isRegisterPopupOpen}
          handleLoginLinkClick={handleLoginLinkClick}
          handleInfoTooltipAuth={handleInfoTooltipAuth}
          handleIsRegister={handleIsRegister}
          isHeaderMenuOpen={isHeaderMenuOpen}
        />
      </Route>

      <Route path="/sign-in">
        <Login
          closePopup={closeAllPopups}
          onClose={onClose}
          isOpen={isLoginPopupOpen}
          handleRegisterLinkClick={handleRegisterLinkClick}
          isHeaderMenuOpen={isHeaderMenuOpen}
        />
      </Route>

      <Route path="*">
        <Redirect to={routePathMainPage} />
      </Route>

      <InfoTooltip
        closePopup={closeAllPopups}
        onClose={onClose}
        isOpen={isInfoTooltipAuthOpen}
        isRegister={isRegister}
        handleLoginLinkClick={handleLoginLinkClick}
        isHeaderMenuOpen={isHeaderMenuOpen}
      />

    </div>
  );
}

export default withRouter(App);
