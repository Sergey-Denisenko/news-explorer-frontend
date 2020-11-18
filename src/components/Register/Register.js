import React from 'react';
import { withRouter } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register({
  isSubmitDataSendState,
  handleSubmitDataSendState,
  onRegister,
  message,
  setClearMessage,

  isOpen,
  closePopup,
  onClose,
  handleLoginLinkClick,
  handleIsRegister,
  isHeaderMenuOpen,
}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onRegister(email, password);
  };

  return (
    <PopupWithForm name="register" title="Регистрация" isOpen={isOpen} closePopup={closePopup} onClose={onClose} onSubmit={handleSubmit} isSubmitDataSendState={isSubmitDataSendState} submitButtonText = {isSubmitDataSendState === false ? 'Зарегистрироваться' : 'Идет регистрация...'} handleSubmitDataSendState={handleSubmitDataSendState} setClearMessage={setClearMessage} handleLoginLinkClick={handleLoginLinkClick} handleIsRegister={handleIsRegister} isHeaderMenuOpen={isHeaderMenuOpen}>
      <p className="register__form-input-title">Email</p>
      <input id="email-input" type="email" value={email} onChange={handleChangeEmail} className="register__form-email register__input" name="email" minLength="2" maxLength="40" autoComplete="off" required placeholder="Введите Email" />
      <span id="email-input-error" className="register__error register__error_visible" >Тут будет сообщения об ошибке поля Email</span>
      <p className="register__form-input-title">Пароль</p>
      <input id="password-input" type="password" value={password} onChange={handleChangePassword} className="register__form-password register__input" name="password" minLength="2" maxLength="200" autoComplete="off" required placeholder="Введите пароль" />
      <span id="password-input-error" className="register__error" />
      <p className="register__form-input-title">Имя</p>
      <input id="name-input" type="name" value={name} onChange={handleChangeName} className="register__form-name register__input" name="name" minLength="2" maxLength="30" autoComplete="off" required placeholder="Введите своё имя" />
      <span id="password-input-error" className="register__error" />
      <span id="message-error" className="register__auth-error-message" >Тут будут сообщения об ошибке формы{message}</span>
    </PopupWithForm>
  );
}

export default withRouter(Register);
