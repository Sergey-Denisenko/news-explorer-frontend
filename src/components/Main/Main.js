import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import { newsCardListAddCardToListButtonText } from '../../utils/constants';

function Main({
  cards,
  isMainPageOpen,
  isSavedNewsPageOpen,
  handleShowMoreClick,
  isAllNewsShowOnPage,
  setIsAllNewsShowOnPage,
  isDataReceive,
  isSearchEmpty,
  endPosition,
  loggedIn,
  handleSaveArticleToSavedNews,
  isRequestError,
  handleHeaderAuthButtonClick,
  routePathAuth,
  isNewsRequestToApiInProrgess,
}) {
  return (
    (
      (isDataReceive === true && isSearchEmpty === false)
      ||
      (
        (
          localStorage.getItem('data') !== null
          &&
          (JSON.parse(localStorage.getItem('data'))).length !== 0
        )
        &&
        (isRequestError === false && isNewsRequestToApiInProrgess === false)
      )
    )
    &&
    <main className="main">
      <p className="main__search-result-header">Результаты поиска</p>
      <NewsCardList
        cards={cards}
        isMainPageOpen={isMainPageOpen}
        isSavedNewsPageOpen={isSavedNewsPageOpen}
        setIsAllNewsShowOnPage={setIsAllNewsShowOnPage}
        endPosition={endPosition}
        loggedIn={loggedIn}
        handleSaveArticleToSavedNews={handleSaveArticleToSavedNews}
        handleHeaderAuthButtonClick={handleHeaderAuthButtonClick}
        routePathAuth={routePathAuth}
      />
      <button
        type="button"
        className={`main__add-card-to-list-button ${isAllNewsShowOnPage === true ? 'main__add-card-to-list-button_not-visible' : ''}`}
        onClick={handleShowMoreClick}
      >
        {newsCardListAddCardToListButtonText}
      </button>
    </main>
  );
}

export default Main;
