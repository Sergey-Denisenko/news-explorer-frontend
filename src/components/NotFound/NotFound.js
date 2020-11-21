import React from 'react';
import notFoundImagePath from '../../images/not-found_v1.png';
import { newsCardListNotFoundHeader, newsCardListNotFoundtParagraph } from '../../utils/constants';

function NotFound() {
  return (

    <section className="not-found">
      <img className="not-found__not-found-image" src={notFoundImagePath} alt="Картинка не найденного изображения" />
      <div className="not-found__text-container">
        <h2 className="not-found__text-header">{newsCardListNotFoundHeader}</h2>
        <p className="not-found__text-paragraph">{newsCardListNotFoundtParagraph}</p>
      </div>
    </section>
  );
}

export default NotFound;
