import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { initialCards } from '../../utils/constants';

function NewsCardList({
  isMainPageOpen, isSavedNewsPageOpen, handleShowTooltip, isShowTooltip,
}) {
  return (

    <section className="news-card-list__card-container">
      {initialCards.map((card) => (
        <div key={card._id}>
          <NewsCard
            card={card}
            isMainPageOpen={isMainPageOpen}
            isSavedNewsPageOpen={isSavedNewsPageOpen}
            handleShowTooltip={handleShowTooltip}
            isShowTooltip={isShowTooltip}
          />
        </div>
      ))}
    </section>
  );
}

export default NewsCardList;
