import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({
  cards,
  isMainPageOpen,
  isSavedNewsPageOpen,
  endPosition,
  loggedIn,
  handleSaveArticleToSavedNews,
  handleDeleteArticleFromSavedNews,
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
              loggedIn={loggedIn}
              handleSaveArticleToSavedNews={handleSaveArticleToSavedNews}
              handleDeleteArticleFromSavedNews={handleDeleteArticleFromSavedNews}
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
