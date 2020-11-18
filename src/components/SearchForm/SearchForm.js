import React from 'react';

import {
  searchFormTextHeader,
  searchFormTextParagraph,
  // searchFormTextParagraphIfNotFound,
  placeholderText,
} from '../../utils/constants';

const alertTempMessage = () => {
  alert('Тут будет запрос на сервер');
};

function SearchForm() {
  return (
    <section className="search-form">

        <div className="search-form__text-container">
          <h1 className="search-form__text-header">{searchFormTextHeader}</h1>
          <p className="search-form__text-paragraph">{searchFormTextParagraph}</p>
          {/* <p className="search-form__text-paragraph">{searchFormTextParagraphIfNotFound}</p> */}
        </div>

        <div className="search-form__form-input-field-container">
          <input type="text" className="search-form__form-input" autoComplete="off" placeholder={placeholderText} required ></input>
          <button type="button" className="search-form__form-button" onClick={alertTempMessage}>Искать</button>
        </div>

    </section>
  );
}

export default SearchForm;
