import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import { newsCardListAddCardToListButtonText } from '../../utils/constants';

function Main({
  handleShowMoreClick,
  showMore,
  isMainPageOpen,
  isSavedNewsPageOpen,
  handleShowTooltip,
  isShowTooltip,
}) {
  return (

    <main className="main">
      <p className="main__search-result-header">Результаты поиска</p>
      <NewsCardList
        showMore={showMore}
        isMainPageOpen={isMainPageOpen}
        isSavedNewsPageOpen={isSavedNewsPageOpen}
        handleShowTooltip={handleShowTooltip}
        isShowTooltip={isShowTooltip}
      />
      <button type="button" className="main__add-card-to-list-button" onClick={handleShowMoreClick}>{newsCardListAddCardToListButtonText}</button>
    </main>
  );
}

export default Main;
