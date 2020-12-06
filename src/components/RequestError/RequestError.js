import React from 'react';

// import { newsCardListRequestErrorMessage } from '../../utils/constants';

function RequestError({isRequestError, message}) {
  return (

    <section className={`request-error ${isRequestError === true ? 'request-error_visible' : ''}`}>
        <h2 className="request-error__text-header">{message}</h2>
    </section>
  );
}

export default RequestError;
