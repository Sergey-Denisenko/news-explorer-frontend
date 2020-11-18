import React from 'react';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
// import { initialCards } from '../../utils/constants';
import { newsCardDeleteIconTooltipText, newsCardAddIconTooltipText } from '../../utils/constants';

// function showTooltip() {
// const carditem = document.querySelector('.card');
//   let iconLikedNews = document.getElementById("card-like");
//   iconLikedNews.addEventListener("mouseover", function(evt) {
//     if (evt) {
//       iconLikedNews.closest('.card__tooltip').classList.remove('card__tooltip_disable');
//     }
//   });

// const [isShowTooltip, setIsShowTooltip] = React.useState(false);

//   const handleShowTooltip = () => {
//     setIsShowTooltip(!isShowTooltip);
//   }

// const t = evt.target();
// T.closest('.card__tooltip').classList.remove('card__tooltip_disable');
// t.mouseover()
//  = function() {
//   target.closest('.card-tooltip').classList.remove('card__tooltip_disable');
// }
// }
// showTooltip();

function NewsCard({
  card, isMainPageOpen,
  // isSavedNewsPageOpen,
  handleShowTooltip, isShowTooltip,
}) {
// function NewsCard({card, onCardClick, onCardLike, onCardDeleteClick}) {

  // const actualUserData = React.useContext(CurrentUserContext);

  // function handleClick() {
  //   onCardClick(card);
  // }

  // function handleLikeClick() {
  //   onCardLike(card);
  // }

  // function handleDeleteClick() {
  //   onCardDeleteClick(card);
  // }
  // const isOwn = card.owner._id === actualUserData._id;
  // const isOwn = (card.owner._id === actualUserData._id) ? true :
  //   (card.owner === actualUserData._id) ? true : false;
  // const cardDeleteButtonClassName = (`card__trash ${!isOwn ? 'card__trash_disabled' : ''}`);
  // const isLiked = card.likes.some(i => i === actualUserData._id);
  // const cardLikeButtonClassName = (`card__like ${isLiked ? 'card__like_active-black' : ''}`);

  // return (
  //   <div className="card">
  //     <img className="card__image" alt="" src=""
  // style={{ backgroundImage: `url(${card.link})`}} onClick={handleClick} />
  //     <div className="card__info">
  //       <h2 className="card__title">{card.name}</h2>
  //       <button type="button" className={`card__like ${cardLikeButtonClassName}`}
  // onClick={handleLikeClick}/>
  //       <p className="card__like-counter">{card.likes.length}</p>
  //     </div>
  //     <button type="button" className={`card__trash ${cardDeleteButtonClassName}`}
  // onClick={handleDeleteClick} />
  //   </div>
  // );

  // const isOwn = card.owner._id === actualUserData._id;
  // const isOwn = (card.owner._id === actualUserData._id) ? true :
  //   (card.owner === actualUserData._id) ? true : false;
  // const cardDeleteButtonClassName = (`card__trash ${!isOwn ? 'card__trash_disabled' : ''}`);
  // const isLiked = card.likes.some(i => i === actualUserData._id);
  // const cardLikeButtonClassName = (`card__like ${isLiked ? 'card__like_active-black' : ''}`);

  // const currentCardId = card._id;

  // function handleShowTooltipAdd() {
  //   document.querySelectorAll('.card__tooltip').classList.remove('card__tooltip_disable');
  // }

  // function handleShowTooltipRemove() {
  //   document.querySelectorAll('.card__tooltip').classList.add('card__tooltip_disable');
  // }

  return (
    <div className="card" id="card">
      {/* <img className="card__image" alt="Картинка" src=""
        style={{ backgroundImage: `url(${initialCards[0].image})`}} /> */}
      <img className="card__image" alt={card.title} src={card.image} />
      <div className="card__info">
        <div>
          <p className="card__date">{card.date}</p>
          <h2 className="card__title">{card.title}</h2>
          {/* <button type="button" className={`card__like ${cardLikeButtonClassName}`} /> */}
          {/* <p className="card__like-counter">{card.likes.length}</p> */}
          <p className="card__text">{card.text}</p>
        </div>
        <p className="card__source">{card.source}</p>
      </div>
      {/* <div> */}
        {/* <img className="card__image" alt="" src=""
        style={{ backgroundImage: `url(${card.link})`}} /> */}
        {/* <p className="card__like-counter">{card.likes.length}</p> */}
      {/* </div> */}

      <p className={`card__keyword ${isMainPageOpen === true ? 'card__keyword_disable' : ''}`}
      // "card__keyword"
      >{card.keyword}</p>

      <button type="button" id="like-trash-button"
        className={`${isMainPageOpen === true ? 'card__like' : 'card__trash'}`}
        // onMouseEnter={handleShowTooltipAdd}
        // onMouseLeave={handleShowTooltipRemove}

        onMouseEnter={handleShowTooltip}
        onMouseLeave={handleShowTooltip}

        // onClick={handleShowTooltipAdd}
      />
      {/* {isMainPageOpen && <button type="button"
        className='card__like'
        // onMouseEnter={handleShowTooltip}
        onMouseLeave={handleShowTooltip}
      />} */}
      {/* {!isSavedNewsPageOpen && <button type="button"
        className='card__trash'
        // onMouseEnter={handleShowTooltip}
        onMouseLeave={handleShowTooltip}
      />} */}

      {/* {isMainPageOpen === true ? (
        <button type="button"
        className='card__like'
        onMouseEnter={handleShowTooltip}
        onMouseLeave={handleShowTooltip}
      />
      ) : ''} */}
      {/* {isSavedNewsPageOpen === true ?
        <button type="button"
        className='card__trash'
        onMouseEnter={handleShowTooltip}
        onMouseLeave={handleShowTooltip}
      />
       : ''} */}

      {/* <button type="button" className='card__like'
      className={`${isMainPageOpen === true ? 'card__like' : '' }
      ${isSavedNewsPageOpen === true ? 'card__trash' : '' }`}
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleShowTooltip}
      /> */}
      {/* {`card__trash `} */}
      {/* className={`card__trash `} */}

      <p className={`card__tooltip ${!isShowTooltip ? 'card__tooltip_disable' : ''}`}>{isMainPageOpen === true ? newsCardAddIconTooltipText : newsCardDeleteIconTooltipText }</p>

      {/* {isMainPageOpen && !isSavedNewsPageOpen &&
        <p className={`card__tooltip ${!isShowTooltip ? 'card__tooltip_disable' : '' }`}>
        </p>{newsCardAddIconTooltipText}</p>} */}

      {/* {isSavedNewsPageOpen &&
        <p className={`card__tooltip ${!isShowTooltip ? 'card__tooltip_disable' : '' }`}>
        {newsCardDeleteIconTooltipText}</p>} */}

      {/* <p className={`card__tooltip ${!isShowTooltip ? 'card__tooltip_disable' : '' }`}
        >{isMainPageOpen === true ? newsCardAddIconTooltipText : newsCardDeleteIconTooltipText}
        </p> */}

      {/* ${(isMainPageOpen === true) && (isShowTooltip === false) ? 'card__tooltip_disable' : '' }
      ${(isSavedNewsPageOpen === true) && (isShowTooltip === false) ? 'card__tooltip_disable' : '' }
${card._id && isShowTooltip === false ? 'card__tooltip_disable' : '' }
      "card__tooltip" */}

    </div>
  );
}

export default NewsCard;
