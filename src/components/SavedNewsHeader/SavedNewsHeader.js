import React from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader() {

  const actualUserData = React.useContext(CurrentUserContext);

  const savedDataInLocalStorageArray = (JSON.parse(localStorage.getItem('savedData')));
  let savedDataInLocalStorageLength = '';

  if (localStorage.getItem('savedData') !== null) {
    savedDataInLocalStorageLength = savedDataInLocalStorageArray.length;
  }

  // Условия вывода нужного окончания фразы для других ключевых слов
  let endOfSentence = '';
  const endOfWord = () => {
    if ((savedDataInLocalStorageLength - 2) < 0) {
      endOfSentence = ' других';
    } else if ((savedDataInLocalStorageLength - 2) === 0) {
      endOfSentence = ' других';
    } else if ((savedDataInLocalStorageLength - 2) === 1) {
      endOfSentence = '-му другому';
    } else if (((savedDataInLocalStorageLength - 2) !== 1) && ((savedDataInLocalStorageLength - 2) < 5)) {
      endOfSentence = '-м другим';
    } else if ((savedDataInLocalStorageLength - 2) > 4) {
      endOfSentence = '-и другим';
    } else (endOfSentence = '');
  };
  endOfWord();

  let endOfSentenceHeader = '';
  const endOfHeader = () => {
    if (savedDataInLocalStorageLength === 0) {
      endOfSentenceHeader = 'сохранённых статей';
    } else if (savedDataInLocalStorageLength === 1) {
      endOfSentenceHeader = 'сохранённая статья';
    } else if ((savedDataInLocalStorageLength > 1) && (savedDataInLocalStorageLength < 5)) {
      endOfSentenceHeader = 'сохранённые статьи';
    } else if (savedDataInLocalStorageLength > 4) {
      endOfSentenceHeader = 'сохранённых статей';
    } else (endOfSentenceHeader = 'сохранённых статей');
  };
  endOfHeader();

  // Условия вывода числового значения оставшихся ключевых слов
  let elseKeywordNumber = '';
  const elseKeywordCounter = () => {
    if ((savedDataInLocalStorageLength - 2) < 0) {
      elseKeywordNumber = 0;
    } else { elseKeywordNumber = (savedDataInLocalStorageLength - 2); }
  };
  elseKeywordCounter();

  return (

    <div className="saved-news-header">
      <h1 className="saved-news-header__title-saved-search-result">Сохранённые статьи</h1>
      <h2 className="saved-news-header__title">
      {actualUserData.name}, у вас&nbsp;
        {(localStorage.getItem('savedData') !== null) ? savedDataInLocalStorageLength : '0' }
      </h2>
      <h2 className="saved-news-header__title">{endOfSentenceHeader}</h2>

      {(savedDataInLocalStorageLength !== 0 && localStorage.getItem('savedData') !== null)
      ?
      <p className="saved-news-header__subtitle">
        По ключевым словам:&nbsp;
        <strong>
          {(JSON.parse(localStorage.getItem('savedData'))).map((card) => (card.keyword)).slice(0, 2).join(', ')}
        </strong>
        &nbsp;и&nbsp;
        <strong>
          {elseKeywordNumber}
          {endOfSentence}
        </strong>
      </p>
      :
      <p className="saved-news-header__subtitle">
      По ключевым словам:&nbsp;
      &nbsp;
      <strong>
        ключевых слов нет
      </strong>
    </p>
      }
    </div>
  );
}

export default SavedNewsHeader;
