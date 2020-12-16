import React from 'react';
import { newsCardDeleteIconTooltipText, newsCardAddIconTooltipText } from '../../utils/constants';
import dateTransform from '../../utils/dateTransform';
import { Link } from 'react-router-dom';

function NewsCard({
  card,
  isMainPageOpen,
  isSavedNewsPageOpen,
  loggedIn,
  handleSaveArticleToSavedNews,
  handleDeleteArticleFromSavedNews,
  handleHeaderAuthButtonClick,
  routePathAuth,
}) {

// dateTransform - траесформация даты, приходящей от сервера новостей в нужный формат

  function handleSaveTrashCardClick(evt) {
    evt.preventDefault();
    if ((isMainPageOpen === true && loggedIn === true) && !evt.target.classList.contains('card__like_active')) {
      handleSaveArticleToSavedNews(card);
    }

    if ((isMainPageOpen === true && loggedIn === true) && evt.target.classList.contains('card__like_active')) {
      const cardForDelete = (JSON.parse(localStorage.getItem('savedData'))).find((i) => {
        if (i.url === card.url)
        {
          return i;
        }
      })
      handleSaveArticleToSavedNews(cardForDelete);
    }

    if (evt.target.classList.contains('card__trash')) {
      handleDeleteArticleFromSavedNews(card);
    }
  }

  function handleTooltipOn(evt) {
    evt.preventDefault();
    if ((isMainPageOpen === true && loggedIn === false) && evt.target.classList.contains('card__like')) {
      evt.target.closest('.card').querySelector('.card__tooltip').classList.remove('card__tooltip_disable');
    } else
    if ((isSavedNewsPageOpen === true) && evt.target.classList.contains('card__trash')) {
      evt.target.closest('.card').querySelector('.card__tooltip').classList.remove('card__tooltip_disable');
    } else return;
  }

  function handleTooltipOff(evt) {
    evt.preventDefault();
    if ((isMainPageOpen === true && loggedIn === false) && evt.target.classList.contains('card__like')) {
      evt.target.closest('.card').querySelector('.card__tooltip').classList.add('card__tooltip_disable');
    } else
    if ((isSavedNewsPageOpen === true) && evt.target.classList.contains('card__trash')) {
      evt.target.closest('.card').querySelector('.card__tooltip').classList.add('card__tooltip_disable');
    } else return;
  }

  function articleAddedOrNotSimbol() {
    if ((isMainPageOpen === true && loggedIn === true) && (localStorage.getItem('savedData') === null)) {
      return (
        <button
          type="button"
          id="like-trash-button"
          aria-label="Button like or trash"
          className={'card__like card__like_normal'}
          onMouseOver={handleTooltipOn}
          onMouseLeave={handleTooltipOff}
          onClick={handleSaveTrashCardClick}
        />
      )
    }
    if ((isMainPageOpen === true && loggedIn === true) && (localStorage.getItem('savedData') !== null)) {
      const savedItem = (JSON.parse(localStorage.getItem('savedData'))).find((i) => i.url === card.url)
      return (
        <button
          type="button"
          id="like-trash-button"
          aria-label="Button like or trash"
          className={`card__like
          ${!savedItem ? 'card__like_normal' : 'card__like_active'}`} // Если карточка добавлена ставлю синий флажок
          onMouseOver={handleTooltipOn}
          onMouseLeave={handleTooltipOff}
          onClick={handleSaveTrashCardClick}
        />
      )
    }
    if (isMainPageOpen === true && loggedIn === false) {
      return (
        <Link
          to={routePathAuth}
          id="like-trash-button"
          aria-label="Button like or trash"
          className={'card__like card__like_normal'}
          onMouseOver={handleTooltipOn}
          onMouseLeave={handleTooltipOff}
          onClick={handleHeaderAuthButtonClick}
        />
      )
    }
    if (isSavedNewsPageOpen === true) {
      return (
        <button
          type="button"
          id="like-trash-button"
          aria-label="Button like or trash"
          className={'card__trash'}
          onMouseOver={handleTooltipOn}
          onMouseLeave={handleTooltipOff}
          onClick={handleSaveTrashCardClick}
        />
      )
    }
  }

  return (
    <div className="card" id="card">
      <a href={card.url} target="_blank" rel="noreferrer">
      <img className="card__image" alt={card.title} src={card.urlToImage} />
      </a>
      <div className="card__info">
        <div>
          <p className="card__date">{dateTransform(card.publishedAt)}</p>
          <h2 className="card__title">{card.title}</h2>
          <p className="card__text">{card.description}</p>
        </div>
        <p className="card__source">{card.source.name}</p>
      </div>
      <p className={`card__keyword ${isMainPageOpen === true ? 'card__keyword_disable' : ''}`}>
        {card.keyword}
      </p>

      <>
        {articleAddedOrNotSimbol()}
      </>

      {(isMainPageOpen === true && loggedIn === false)
      &&
      <p className={`card__tooltip card__tooltip_disable`}>
        {newsCardAddIconTooltipText}
      </p>}

      {(isSavedNewsPageOpen === true)
      &&
      <p className={`card__tooltip card__tooltip_disable`}>
        {newsCardDeleteIconTooltipText}
      </p>}

    </div>
  );
}

export default NewsCard;
