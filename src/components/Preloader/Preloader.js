import React from 'react';

function Preloader() {
  return (

    <div className="preloader">
      <i className="preloader__circle-preloader" />
      <p className="preloader__info-text">Идет поиск новостей</p>
    </div>
  );
}

export default Preloader;
