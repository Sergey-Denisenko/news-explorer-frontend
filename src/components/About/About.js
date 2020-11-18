import React from 'react';
import authorImagePath from '../../images/author-foto.jpeg';
import { aboutTextHeader, aboutTextParagraph } from '../../utils/constants';

function About() {
  return (
    <section className="about">
        <img className="about__author-image" src={authorImagePath} alt="Изображение автора" />
        <div className="about__text-container">
          <h2 className="about__text-header">{aboutTextHeader}</h2>
          <p className="about__text-paragraph">{aboutTextParagraph}</p>
        </div>
    </section>
  );
}

export default About;
