import React from 'react';
import { withRouter } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useFormWithValidation from '../../utils/formValidation';

function Login({
  isSubmitDataSendState,
  handleSubmitDataSendState,
  onLogin,
  message,
  setClearMessage,
  isOpen,
  closePopup,
  onClose,
  handleRegisterLinkClick,
  isHeaderMenuOpen,
  authError,
}) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(evt) {
    evt.preventDefault();
    setEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    evt.preventDefault();
    setPassword(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // onLogin(email, password);
    onLogin(values.email, values.password);
    // console.log(values.email, values.password)
  };

  return (
    <PopupWithForm name="login" title="Вход" isOpen={isOpen} closePopup={closePopup} onClose={onClose} onSubmit={handleSubmit} isSubmitDataSendState={isSubmitDataSendState} submitButtonText={isSubmitDataSendState === false ? 'Войти' : 'Выполняется вход...'} handleSubmitDataSendState={handleSubmitDataSendState} setClearMessage={setClearMessage} handleRegisterLinkClick={handleRegisterLinkClick} isHeaderMenuOpen={isHeaderMenuOpen} isDisable={!isValid}>
      <p className="register__form-input-title">Email</p>
      <input
        id="email-input"
        type="email"
        value={values.email || ''}
        onChange={handleChange}
        className="register__form-email register__input"
        name="email"
        minLength="2"
        maxLength="40"
        autoComplete="off"
        required
        placeholder="Email" />
      <span id="email-input-error" className="register__error register__error_visible" >{errors.email || ''}</span>

      <p className="register__form-input-title">Пароль</p>
      <input
        id="password-input"
        type="password"
        value={values.password || ''}
        onChange={handleChange}
        className="register__form-password register__input"
        name="password"
        minLength="2"
        maxLength="200"
        autoComplete="off"
        required
        placeholder="Пароль" />
      <span id="password-input-error" className="register__error" >{errors.password  || ''}</span>

      <span id="message-error" className="register__auth-error-message">
        {/* {message} */}
        {authError}
      </span>
    </PopupWithForm>
  );
}

export default withRouter(Login);
