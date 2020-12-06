import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  searchFormTextHeader,
  searchFormTextParagraph,
  // searchFormTextParagraphIfNotFound,
  placeholderText,
} from '../../utils/constants';

function SearchForm({handleSearchNewsSubmit}) {

const [searchPhrase, setSearchPhrase] = React.useState('');

function handleChangeSearchPhrase(evt) {
  setSearchPhrase(evt.target.value);
}

const handleSubmit = (evt) => {
  evt.preventDefault();
  handleSearchNewsSubmit(searchPhrase);
}

  return (
    <section className="search-form">

      <div className="search-form__text-container">
        <h1 className="search-form__text-header">{searchFormTextHeader}</h1>
        <p className="search-form__text-paragraph">{searchFormTextParagraph}</p>
        {/* <p className="search-form__text-paragraph">{searchFormTextParagraphIfNotFound}</p> */}
      </div>

      <div className="search-form__form-input-field-container">
        <input type="text" className="search-form__form-input" autoComplete="off" placeholder={placeholderText} onChange={handleChangeSearchPhrase} required />
        <button type="submit" className="search-form__form-button" onClick={handleSubmit}>Искать</button>
      </div>

    </section>
  );
}

export default withRouter(SearchForm);
