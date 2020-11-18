import React from 'react';

// import { newsCardListNotFoundHeader, newsCardListNotFoundtParagraph }
// from '../../utils/constants';

import { initialCards } from '../../utils/constants';
// console.log(initialCards.length);

// Условия вывода нужного окончания фразы для других ключевых слов
let endOfSentence = '';
const endOfWord = () => {
  if ((initialCards.length - 2) < 0) {
    endOfSentence = ' других';
  } else if ((initialCards.length - 2) === 0) {
    endOfSentence = ' других';
  } else if ((initialCards.length - 2) === 1) {
    endOfSentence = '-му другому';
  } else if (((initialCards.length - 2) !== 1) && ((initialCards.length - 2) < 5)) {
    endOfSentence = '-м другим';
  } else if ((initialCards.length - 2) > 4) {
    endOfSentence = '-и другим';
  } else (endOfSentence = '');
};
endOfWord();

let endOfSentenceHeader = '';
const endOfHeader = () => {
  if (initialCards.length === 0) {
    endOfSentenceHeader = 'сохранённых статей';
  } else if (initialCards.length === 1) {
    endOfSentenceHeader = 'сохранённая статья';
  } else if ((initialCards.length > 1) && (initialCards.length < 5)) {
    endOfSentenceHeader = 'сохранённые статьи';
  } else if (initialCards.length > 4) {
    endOfSentenceHeader = 'сохранённых статей';
  } else (endOfSentence = '');
};
endOfHeader();

// Условия вывода числового значения оставшихся ключевых слов
let elseKeywordNumber = '';
const elseKeywordCounter = () => {
  if ((initialCards.length - 2) < 0) {
    elseKeywordNumber = 0;
  } else { elseKeywordNumber = (initialCards.length - 2); }
};
elseKeywordCounter();

function SavedNewsHeader() {
  return (

    <div className="saved-news-header">
      <h1 className="saved-news-header__title-saved-search-result">Сохранённые статьи</h1>
      <h2 className="saved-news-header__title">Грета, у вас {initialCards.length}</h2>
      <h2 className="saved-news-header__title">{endOfSentenceHeader}</h2>
      <p className="saved-news-header__subtitle">По ключевым словам:&nbsp;
        <strong>
          {initialCards.map((card) => (card.keyword)).slice(0, 2).join(', ')}
        </strong> и <strong>
          {elseKeywordNumber}{endOfSentence}
        </strong>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
