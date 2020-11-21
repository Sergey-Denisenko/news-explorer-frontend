import React from 'react';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { newsCardDeleteIconTooltipText, newsCardAddIconTooltipText } from '../../utils/constants';

function NewsCard({
  card,
  isMainPageOpen,
  // isSavedNewsPageOpen,
  handleShowTooltip,
  isShowTooltip,
}) {
  return (
    <div className="card" id="card">
      <img className="card__image" alt={card.title} src={card.image} />
      <div className="card__info">
        <div>
          <p className="card__date">{card.date}</p>
          <h2 className="card__title">{card.title}</h2>
          <p className="card__text">{card.text}</p>
        </div>
        <p className="card__source">{card.source}</p>
      </div>
      <p className={`card__keyword ${isMainPageOpen === true ? 'card__keyword_disable' : ''}`}>
        {card.keyword}
      </p>

      <button
        type="button"
        id="like-trash-button"
        aria-label="Button like or trash"
        className={`${isMainPageOpen === true ? 'card__like' : 'card__trash'}`}
        onMouseEnter={handleShowTooltip}
        onMouseLeave={handleShowTooltip}
        // onClick={handleShowTooltipAdd}
      />

      <p className={`card__tooltip ${!isShowTooltip ? 'card__tooltip_disable' : ''}`}>{isMainPageOpen === true ? newsCardAddIconTooltipText : newsCardDeleteIconTooltipText }</p>

    </div>
  );
}

export default NewsCard;
