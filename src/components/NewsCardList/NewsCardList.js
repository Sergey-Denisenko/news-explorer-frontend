import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({
  cards,
  showMore,
  setShowMore,
  isMainPageOpen,
  isSavedNewsPageOpen,
  handleShowTooltip,
  isShowTooltip,
  searchPhrase,
  showMoreClickCount,
  // setIsAllNewsShowOnPage,
  // handleIsAllNewsShowOnPage,
  endPosition,
  loggedIn,
  handleSaveArticleToSavedNews,
  handleDeleteArticleFromSavedNews,
  isArticleSaved,
  handleHeaderAuthButtonClick,
  routePathAuth,
}) {

  return (

    <section className="news-card-list__card-container">
      {
        cards.slice(0, endPosition).map((card, index) => (
          <div key={index}>
            <NewsCard
              card={card}
              isMainPageOpen={isMainPageOpen}
              isSavedNewsPageOpen={isSavedNewsPageOpen}
              handleShowTooltip={handleShowTooltip}
              isShowTooltip={isShowTooltip}
              searchPhrase={searchPhrase}
              loggedIn={loggedIn}
              handleSaveArticleToSavedNews={handleSaveArticleToSavedNews}
              handleDeleteArticleFromSavedNews={handleDeleteArticleFromSavedNews}
              isArticleSaved={isArticleSaved}
              handleHeaderAuthButtonClick={handleHeaderAuthButtonClick}
              routePathAuth={routePathAuth}
            />
          </div>
        ))
      }
    </section>
  );
}

export default NewsCardList;
