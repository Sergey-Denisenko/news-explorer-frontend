import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import { newsCardListAddCardToListButtonText } from '../../utils/constants';

function Main({
  cards,
  handleShowMoreClick,
  showMore,
  setShowMore,
  isMainPageOpen,
  isSavedNewsPageOpen,
  handleShowTooltip,
  isShowTooltip,
  searchPhrase,
  handleShowMoreClickCount,
  showMoreClickCount,
  isAllNewsShowOnPage,
  setIsAllNewsShowOnPage,
  // handleIsAllNewsShowOnPage,
  isDataReceive,
  isSearchEmpty,
  endPosition,
  loggedIn,
  handleSaveArticleToSavedNews,
  isArticleSaved,
  isRequestError,
  handleHeaderAuthButtonClick,
  routePathAuth,
}) {
  return (
    // ((isDataReceive === true && isSearchEmpty === false) || ((searchPhrase !== '') && loggedIn === true)) &&
    ((isDataReceive === true && isSearchEmpty === false) || (localStorage.getItem('data') !== null && loggedIn === true && isRequestError === false)) &&
    <main className="main">
      <p className="main__search-result-header">Результаты поиска</p>
      <NewsCardList
        cards={cards}
        showMore={showMore}
        setShowMore={setShowMore}
        isMainPageOpen={isMainPageOpen}
        isSavedNewsPageOpen={isSavedNewsPageOpen}
        handleShowTooltip={handleShowTooltip}
        isShowTooltip={isShowTooltip}
        searchPhrase={searchPhrase}
        showMoreClickCount={showMoreClickCount}
        setIsAllNewsShowOnPage={setIsAllNewsShowOnPage}
        // handleIsAllNewsShowOnPage={handleIsAllNewsShowOnPage}
        endPosition={endPosition}
        loggedIn={loggedIn}
        handleSaveArticleToSavedNews={handleSaveArticleToSavedNews}
        isArticleSaved={isArticleSaved}
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
