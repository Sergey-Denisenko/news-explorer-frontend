import React from 'react';

// import { useEffect } from 'react';
import {
  Route, Switch, Redirect,
  useHistory,
  withRouter,
} from 'react-router-dom';
// import { initialCards } from '../../utils/constants';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import Login from '../Login/Login';
import InfoTooltip from '../infotooltip/InfoTooltip';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import RequestError from '../RequestError/RequestError';
import About from '../About/About';
import Footer from '../Footer/Footer';
import * as newsApi from '../../utils/NewsApi';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { routePathMainPage, routePathSavedNews } from '../../utils/constants';
import { newsCardListRequestErrorMessage } from '../../utils/constants';
import { displayCardQuantity } from '../../utils/constants';

function App() {

  const [cards, setCards] = React.useState([]);
  const [savedCards, setSavedCards] = React.useState([]);
  // const [keyword, setKeyword] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [onClose, setOnClose] = React.useState(false);
  const [isSubmitDataSendState, setIsSubmitDataSendState] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isRegister, setIsRegister] = React.useState(false); // Состояние зарег пользователь или нет
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isSavedNewsPageOpen, setIsSavedNewsPageOpen] = React.useState(false);
  const [isMainPageOpen, setIsMainPageOpen] = React.useState(true);
  const [isInfoTooltipAuthOpen, setIsInfoTooltipAuthOpen] = React.useState(false);
  const [isShowTooltip, setIsShowTooltip] = React.useState(false);
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = React.useState(false);
  const [isSignOut, setIsSignOut] = React.useState(false);
  const [searchPhrase, setSearchPhrase] = React.useState('');
  const [isSearchEmpty, setIsSearchEmpty] = React.useState(false); // стейт - пустой ли запрос
  const [isNewsRequestToApiInProrgess, setIsNewsRequestToApiInProrgess] = React.useState(false); // стейт - запрос в процессе
  const [isAllNewsShowOnPage, setIsAllNewsShowOnPage] = React.useState(false); // стейт - все ли новости показаны
  const [isDataReceive, setIsDataReceive] = React.useState(false); // стейт - данные получены от apiNews
  const [showMore, setShowMore] = React.useState(false);
  const [showMoreClickCount, setShowMoreClickCount] = React.useState(1);
  const [currentUser,  setCurrentUser] = React.useState({ email: '', name: '', _id: '' });
  const [isHaveSavedArticles, setIsHaveSavedArticles] = React.useState(false);
  const [isArticleSaved, setIsArticleSaved] = React.useState(false);
  const [tempCardForDelete, setTempCardForDelete] = React.useState({}); //Переменная состояния
  const [disabled, setDisabled] = React.useState(false);
  const [authError, setAuthError] = React.useState('');
  const [isRequestError, setIsRequestError] = React.useState(false);
  const [isButtonDisable, setIsButtonDisable] = React.useState(false); //Откл кнопки при запросе рег или лог

  // const handleKeyword = () => {
  //   setKeyword(localStorage.getItem('searchPhrase') || '');
  // };

  // const handleIsArticleSaved = () => {
  //   setIsArticleSaved(!isArticleSaved);
  // };

  // const handleLoggedIn = () => {
  //   setLoggedIn(!loggedIn);
  // };

  const handleShowMoreClickCount = () => {
    setShowMoreClickCount(showMoreClickCount + 1);
    // handleSetMoreCards();
  };

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
    handleShowMoreClickCount();
    handleEndOfArray();
  };

  const endPosition = (showMoreClickCount * displayCardQuantity);

  const handleEndOfArray = () => {
    if (endPosition >= cards.length - displayCardQuantity) {
      setIsAllNewsShowOnPage(true);
    }
  }

  // const handleIsAllNewsShowOnPage = () => {
  //   setIsAllNewsShowOnPage(!isAllNewsShowOnPage);
  // };

  // const handleIsNewsRequestToApiInProrgess = () => {
  //   setIsNewsRequestToApiInProrgess(!isNewsRequestToApiInProrgess);
  // };

  // const handleIsSearchEmpty = () => {
  //   setIsSearchEmpty(!isSearchEmpty);
  // };

  // const handleSetCards = () => {
  //   setCards([...cards, ...initialCards]);
  //   console.log('cards');
  //   console.log(cards);
  // };


  // React.useEffect(() => {
  //   handleSetCards();
  // },[]);

  const handleHeaderMenuOpenClick = () => {
    setIsHeaderMenuOpen(!isHeaderMenuOpen);
    // console.log('OPEN');
  };

  const handleShowTooltip = () => {
    setIsShowTooltip(!isShowTooltip);
  };

  const handleInfoTooltipAuth = () => {
    setIsInfoTooltipAuthOpen(!isInfoTooltipAuthOpen);
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
  };

  const [message, setMessage] = React.useState(''); // Устанавливаю сообщение об ошибке

  const history = useHistory();

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
    setAuthError('');
  };

  const handleLoginLinkClick = () => {
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(true);
    setOnClose(false);
    setIsInfoTooltipAuthOpen(false);
    setAuthError('');
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
  const setClearMessage = () => {
    setMessage('');
  }

  const closeAllPopups = () => {
    setOnClose(!onClose);
    // setIsCardDeletePopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
    setIsInfoTooltipAuthOpen(false);
  };

  // Установка состояния нажатия кнопки для отображения на кнопке другого текста
  const handleSubmitDataSendState = () => {
    setIsSubmitDataSendState(!isSubmitDataSendState);
  };

  // Установка стейта зарегистрирован пользователь или нет
  const handleIsRegister = () => {
    // evt.preventDefault();
    setIsRegister(true);
    setIsSignOut(false);
    handleInfoTooltipAuth();
  };

  const handleIsSignOut = () => {
    setIsSignOut(!isSignOut);
    setIsRegister(false);
    setLoggedIn(false);
  };

  // Получение данных пользователя и массива новостей при загрузке страницы
  React.useEffect(() => {
    tokenCheck();
  }, []);

  // Функция запроса новостей
  function handleSearchNewsSubmit(searchPhrase) {
    setIsSearchEmpty(false); // устанавливаю ПС запроса в кот ничего не найдено
    setIsNewsRequestToApiInProrgess(false);
    setIsAllNewsShowOnPage(false)
    setIsDataReceive(false);
    setIsRequestError(false);
    setIsSignOut(false);
    setShowMoreClickCount(1);
    cards.length = 0;
    if (searchPhrase.length === 0) {
      setMessage('Нужно ввести ключевое слово!');
      setIsRequestError(true);
      return;
    } else if (searchPhrase.trim() === '') {
      setMessage('Нужно ввести ключевое слово!');
      setIsRequestError(true);
      return;
    } else if (searchPhrase) {
      localStorage.setItem('searchPhrase', searchPhrase);
      setIsNewsRequestToApiInProrgess(true); // уст ПС в true - вкл preloader
      setIsRequestError(false);
      newsApi.getNewsByKeywordFromNewsApi(searchPhrase)
        .then(res => res)
        .then((data) => {
          if (data.articles.length === 0) {
            setIsNewsRequestToApiInProrgess(false);// уст ПС в false - откл preloader
            setIsSearchEmpty(true);
          }
          setIsNewsRequestToApiInProrgess(false);// уст ПС в false - откл preloader
          setIsDataReceive(true);

          if (data) {
            const correctData = data.articles.map((item) => ({
              author: item.author || ' ',
              content: item.content || ' ',
              description: item.description || ' ',
              publishedAt: item.publishedAt || ' ',
              title: item.title || ' ',
              url: item.url || 'https://api.allnews.students.nomoreparties.site',
              urlToImage:item.urlToImage || 'https://ventil34.ru/upload/no_image.jpg',
              source: {
                name:item.source.name || ' ',
                id:item.source.name || ' ',
               },
            }))
            localStorage.setItem('data', JSON.stringify(correctData));
          }
          setCards([...cards, ...(JSON.parse(localStorage.getItem('data')))]);
        })
        .catch((err) => {
            setMessage(newsCardListRequestErrorMessage);// Отработка ошибок при вводе запроса поиска
            setIsRequestError(true);
            setIsNewsRequestToApiInProrgess(false);// уст ПС в false - откл preloader
        })
        .finally(() => {
          // setIsSubmitDataSendState(false);
        })
        return () => {
        }
      }
    }

  // Регистрация нового пользователя
  const onRegister = (email, password, name) => {
    setAuthError('');
    setIsButtonDisable(true);
    mainApi.register(email, password, name)
    .then(res => res)
    .then((data) => {
      if(data) {
        handleIsRegister();
        handleInfoTooltipAuth();
      }
    })
    .catch((err) => {
      if(err.status === 400) {
        setAuthError('Некорректно заполнено одно из полей ');
      } else
      if (err.status === 409) {
        setAuthError('Пользователь с таким email уже существует');
      } else
      {
        setAuthError('Что-то пошло не так!');
      }
    })
    .finally(() => {
      handleSubmitDataSendState();
      setIsButtonDisable(false);
    });
  };

  // Авторизация пользователя
  const onLogin = (email, password) => {
    setAuthError('');
    setIsButtonDisable(true);
    console.log(isButtonDisable);
    mainApi.login(email, password)
    .then((res) => {
      closeAllPopups();
      if (res.token) {
        setEmail(localStorage.getItem('email'));
        tokenCheck();
      }
    })
    .catch((err) => {
      if(err.status === 401) {
        setAuthError('Пользователь не найден');
      } else if (err.status === 400) {
        setAuthError('Не передано одно из полей');
      } else {
        setAuthError('Что-то пошло не так!');
      }
    })
    .finally(() => {
      handleSubmitDataSendState();
      setIsButtonDisable(false);
    });
  };

// Выход из аккаунта пользователя
const onSignOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
  localStorage.removeItem('name');
  localStorage.removeItem('data');
  localStorage.removeItem('searchPhrase');
  localStorage.removeItem('savedData');
  // setIsSearchEmpty(true);
  setSearchPhrase('');
  setIsSignOut(true);
  history.push('/');
  setEmail('');
  setPassword('');
  setLoggedIn(false);
  setIsRegister(false);
  setClearMessage();// Устанавливаю в message пустую строку (отработка ошибок)
  setIsDataReceive(false);
  setIsRequestError(false);
  setIsHaveSavedArticles(false);
  setCurrentUser({
    ...currentUser,
    email: '',
    name: '',
    _id: '',
  });
};

// Проверка токена
const tokenCheck = () => {
  const token = localStorage.getItem('token');
  if(token) {
    mainApi.getContent(token)
    .then(res => {
      return res;
    })
    .then((userData) => {
      setCurrentUser({
        ...currentUser,
        name: userData.data.name,
        email: userData.data.email,
        _id: userData.data._id,
      })
      localStorage.setItem('name', userData.data.name);
      setLoggedIn(true);
      setName(localStorage.getItem('name'));

      if (localStorage.getItem('data') !== null) {
        setCards([...cards, ...(JSON.parse(localStorage.getItem('data')))]);
        // setCards([...(JSON.parse(localStorage.getItem('data')))]);
      }

      // localStorage.setItem('savedData', []);
      if ((localStorage.getItem('savedData') === null)) {
        // if ((JSON.parse(localStorage.getItem('savedData'))).length !== 0) {
          handleGetSavedArticlesFromServer();
        // }
      }
      if ((localStorage.getItem('savedData') !== null)) {
        setSavedCards([...savedCards, ...(JSON.parse(localStorage.getItem('savedData')))]);
        setIsHaveSavedArticles(true);

        // if ((JSON.parse(localStorage.getItem('savedData'))).length !== 0) {
        // }
      }
    })
    .catch((err) => {
      if(err.status === 401) {
        console.log('Переданный токен некорректен');
        console.log(err);
      } else if(err.status === 400) {
        console.log('Токен не передан или передан не в том формате');
        console.log(err);
      } else {
        setLoggedIn(false);
        history.push('/');
        console.log(err);
      }
    });
  }
  // Загрузка предыдущего поиска, не зависимо от рег или не рег
  if(!token) {
    if (localStorage.getItem('data') !== null) {
      setCards([...cards, ...(JSON.parse(localStorage.getItem('data')))]);
      // setCards([...(JSON.parse(localStorage.getItem('data')))]);
    }
  }
};

function handleSaveArticleToSavedNews(card) {
  if (loggedIn === false) {
    console.log('Пользователь не авторизован');
  } else {
      const saved = savedCards.find((i) => {
        if (i.url === card.url) {
          return true;
        }
      });

      if (!saved) {
        setSearchPhrase(localStorage.getItem('searchPhrase'));
        mainApi.addArticleToSavedNews(card, localStorage.getItem('searchPhrase'))
        .then(res => res)
        .then(() => {
          handleGetSavedArticlesFromServer();
        })
        .catch((err) => {
            setMessage('Статья не сохранена!');
            console.log('Статья не сохранена!');
        })
        .finally(() => {
          setIsSubmitDataSendState(false);
        })
        return () => {
        }
      }

      if (saved) {
        handleDeleteArticleFromSavedNews(card);
      }
  }
}

function handleGetSavedArticlesFromServer() {
  mainApi.getSavedArticlesFromServer()
  .then(res => res)
  .then((savedCardFromServer) => {
    if (savedCardFromServer) {
      const savedCardFromServerUpdateField = savedCardFromServer.map((item) => ({
        keyword:item.keyword,
        title:item.title,
        description:item.text,
        publishedAt:item.date,
        source: { name:item.source},
        url:item.link,
        urlToImage:item.image,
        owner:item.owner,
        _id:item._id,
      }))
      localStorage.setItem('savedData', JSON.stringify(savedCardFromServerUpdateField));
      setSavedCards([...savedCards, ...(JSON.parse(localStorage.getItem('savedData')))]);
      setSavedCards([...(JSON.parse(localStorage.getItem('savedData')))]);
      setIsHaveSavedArticles(true);
    } else {
      setIsHaveSavedArticles(false);
    }
  })
  .catch((err) => {
    setMessage('Сохраненных статей не найдено');
    console.log(err + ' - Сохраненных статей не найдено'); // 404
  })
  return () => {
  };
}

function handleDeleteArticleFromSavedNews(card) {
  mainApi.deleteCardFromServer(card._id)
  .then((res => {
    const newCards = (JSON.parse(localStorage.getItem('savedData'))).filter((item) => item._id !== card._id ? true : false);
    localStorage.setItem('savedData', JSON.stringify(newCards));
    setSavedCards([...(JSON.parse(localStorage.getItem('savedData')))]);
    return res;
  }))
  .catch((err) => {
    if(err === 404) {
      setMessage('Такой статьи нет');// Отработка ошибок в попапе редактирования инфо о пользователе
    } else
    {
      setMessage('Что-то пошло не так!');// Отработка ошибок в попапе редактирования инфо о пользователе
    }
  })
  .finally(() => {
    // setIsSubmitDataSendState(false);
  })
}

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">

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
            loggedIn={loggedIn}
            onSignOut={onSignOut}
          />

          <Switch>
            <ProtectedRoute
              // path задан ссылкой из списка констант - файл utils/constants.js
              path={routePathSavedNews}
              loggedIn={loggedIn}
              component={SavedNews}
              isMainPageOpen={isMainPageOpen}
              isSavedNewsPageOpen={isSavedNewsPageOpen}
              handleShowTooltip={handleShowTooltip}
              isShowTooltip={isShowTooltip}
              cards={savedCards}
              isHaveSavedArticles={isHaveSavedArticles}
              handleDeleteArticleFromSavedNews={handleDeleteArticleFromSavedNews}
            />

            <Route path={routePathMainPage}>
              <SearchForm handleSearchNewsSubmit={handleSearchNewsSubmit}/>
              <Main
                cards={cards}
                showMore={showMore}
                setShowMore={setShowMore}
                isMainPageOpen={isMainPageOpen}
                isSavedNewsPageOpen={isSavedNewsPageOpen}
                handleShowTooltip={handleShowTooltip}
                isShowTooltip={isShowTooltip}
                searchPhrase={searchPhrase}
                handleShowMoreClick={handleShowMoreClick}
                handleShowMoreClickCount={handleShowMoreClickCount}
                showMoreClickCount={showMoreClickCount}
                isAllNewsShowOnPage={isAllNewsShowOnPage}
                setIsAllNewsShowOnPage={setIsAllNewsShowOnPage}
                // handleIsAllNewsShowOnPage={handleIsAllNewsShowOnPage}
                isDataReceive={isDataReceive}
                isSearchEmpty={isSearchEmpty}
                endPosition={endPosition}
                loggedIn={loggedIn}
                handleSaveArticleToSavedNews={handleSaveArticleToSavedNews}
                isArticleSaved={isArticleSaved}
                isRequestError={isRequestError}
                handleHeaderAuthButtonClick={handleHeaderAuthButtonClick}
                routePathAuth="/sign-up"
              />
              <Preloader isNewsRequestToApiInProrgess={isNewsRequestToApiInProrgess}/>
              <NotFound isSearchEmpty={isSearchEmpty}/>
              <RequestError isRequestError={isRequestError} message={message}/>
              <About />
            </Route>
          </Switch>
        </div>

        <Footer />
        <Route path="/sign-up">
          <Register
            onRegister={onRegister}
            closePopup={closeAllPopups}
            onClose={onClose}
            isOpen={isRegisterPopupOpen}
            handleLoginLinkClick={handleLoginLinkClick}
            handleInfoTooltipAuth={handleInfoTooltipAuth}
            handleIsRegister={handleIsRegister}
            isHeaderMenuOpen={isHeaderMenuOpen}
            isSubmitDataSendState={isSubmitDataSendState}
            handleSubmitDataSendState={handleSubmitDataSendState}
            authError={authError}
            isButtonDisable={isButtonDisable}
          />
        </Route>

        <Route path="/sign-in">
          <Login
            onLogin={onLogin}
            closePopup={closeAllPopups}
            onClose={onClose}
            isOpen={isLoginPopupOpen}
            handleRegisterLinkClick={handleRegisterLinkClick}
            isHeaderMenuOpen={isHeaderMenuOpen}
            isSubmitDataSendState={isSubmitDataSendState}
            handleSubmitDataSendState={handleSubmitDataSendState}
            authError={authError}
            isButtonDisable={isButtonDisable}
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default withRouter(App);
