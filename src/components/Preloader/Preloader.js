import React from 'react';

function Preloader({isNewsRequestToApiInProrgess}) {
  return (

    <div className={`preloader ${isNewsRequestToApiInProrgess === true ? 'preloader_visible' : ''}`}>
      <i className="preloader__circle-preloader" />
      <p className="preloader__info-text">Идет поиск новостей</p>
    </div>
  );
}

export default Preloader;
