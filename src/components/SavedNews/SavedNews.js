import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({isMainPageOpen, isSavedNewsPageOpen, handleShowTooltip, isShowTooltip}) {
  return (

    <main className="saved-news">
      <SavedNewsHeader />
      <NewsCardList
        isMainPageOpen={isMainPageOpen}
        isSavedNewsPageOpen={isSavedNewsPageOpen}
        handleShowTooltip={handleShowTooltip}
        isShowTooltip={isShowTooltip}
      />
    </main>
  );
}

export default SavedNews;
