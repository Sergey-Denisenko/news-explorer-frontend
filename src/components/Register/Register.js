import React from 'react';
import { withRouter } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useFormWithValidation from '../../utils/formValidation';

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
  isRegister,
  authError,
}) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(values.email, values.password, values.name);
    // console.log(values.email, values.password, values.name)
  };

  React.useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  return (
    <PopupWithForm name="register" title="Регистрация" isOpen={isOpen} closePopup={closePopup} onClose={onClose} onSubmit={handleSubmit} isSubmitDataSendState={isSubmitDataSendState} submitButtonText={isSubmitDataSendState === false ? 'Зарегистрироваться' : 'Идет регистрация...'} handleSubmitDataSendState={handleSubmitDataSendState} setClearMessage={setClearMessage} handleLoginLinkClick={handleLoginLinkClick} handleIsRegister={handleIsRegister} isHeaderMenuOpen={isHeaderMenuOpen}
    isDisable={!isValid}
    >
      <p className="register__form-input-title">Email</p>
      <input
        id="email-input"
        type="email"
        value={values.email || ''}
        // onChange={handleChangeEmail}
        onChange={handleChange}
        className="register__form-email register__input"
        name="email"
        minLength="2"
        maxLength="40"
        autoComplete="off"
        required
        placeholder="Введите Email" />
      <span id="email-input-error" className="register__error register__error_visible" >{errors.email || ''}</span>
      <p className="register__form-input-title">Пароль</p>
      <input
        id="password-input"
        type="password"
        value={values.password || ''}
        // onChange={handleChangePassword}
        onChange={handleChange}
        className="register__form-password register__input"
        name="password"
        minLength="2"
        maxLength="200"
        autoComplete="off"
        required
        placeholder="Введите пароль" />
      <span id="password-input-error" className="register__error" >{errors.password  || ''}</span>
      <p className="register__form-input-title">Имя</p>
      <input
        id="name-input"
        type="name"
        value={values.name}
        // onChange={handleChangeName}
        onChange={handleChange}
        className="register__form-name register__input"
        name="name"
        minLength="2"
        maxLength="30"
        autoComplete="off"
        required
        placeholder="Введите своё имя" />
      <span id="password-input-error" className="register__error" >{errors.name || ''}</span>
      <span id="message-error" className="register__auth-error-message">
        {/* {message} */}
        {authError}
      </span>
    </PopupWithForm>
  );
}

export default withRouter(Register);
