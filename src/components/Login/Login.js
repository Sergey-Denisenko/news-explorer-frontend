import React from 'react';
import { withRouter } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

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
}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onLogin(email, password);
  };

  return (
    <PopupWithForm name="login" title="Вход" isOpen={isOpen} closePopup={closePopup} onClose={onClose} onSubmit={handleSubmit} isSubmitDataSendState={isSubmitDataSendState} submitButtonText = {isSubmitDataSendState === false ? 'Войти' : 'Выполняется вход...'} handleSubmitDataSendState={handleSubmitDataSendState} setClearMessage={setClearMessage} handleRegisterLinkClick={handleRegisterLinkClick} isHeaderMenuOpen={isHeaderMenuOpen}>
      <p className="register__form-input-title">Email</p>
      <input id="email-input" type="email" value={email} onChange={handleChangeEmail} className="register__form-email register__input" name="email" minLength="2" maxLength="40" autoComplete="off" required placeholder="Email" />
      <span id="email-input-error" className="register__error" />

      <p className="register__form-input-title">Пароль</p>
      <input id="password-input" type="password" value={password} onChange={handleChangePassword} className="register__form-password register__input" name="password" minLength="2" maxLength="200" autoComplete="off" required placeholder="Пароль" />
      <span id="password-input-error" className="register__error" />

      <span id="message-error" className="register__auth-error-message" >{message}</span>
    </PopupWithForm>
  );
}

export default withRouter(Login);
