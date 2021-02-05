import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({
  isMainPageOpen,
  isSavedNewsPageOpen,
  cards,
  isHaveSavedArticles,
  handleDeleteArticleFromSavedNews
}) {

  return (

    <main className="saved-news">
      <SavedNewsHeader />
      {(isHaveSavedArticles === true)
      &&
      <NewsCardList
        isMainPageOpen={isMainPageOpen}
        isSavedNewsPageOpen={isSavedNewsPageOpen}
        cards={cards}
        handleDeleteArticleFromSavedNews={handleDeleteArticleFromSavedNews}
      />
      }
    </main>
  );
}

export default SavedNews;
