import React from 'react';

import Button from '../../components/button';
import Input from '../../components/input';
import { useForm } from '../../hooks';
import { FormState, FormSubmitHandler } from '../../hooks/useForm/types';
import { createFeedback } from '../../API/feedback';
import showNotification from '../../utils/notification';

import './contact.scss';

const initState: FormState = {
  email: { value: '', type: 'email' },
  message: { value: '', type: 'textarea' },
};

const submitHandler: FormSubmitHandler = state => {
  createFeedback({
    email: state.email.value,
    message: state.message.value,
  }).then(result => {
    showNotification('success', result.data.message).then(() => {}, () => {});
  }, () => {
    showNotification('error', 'Something went wrong.\nReload page and try again.').then(() => {}, () => {});
  });
};

/*
  todo(anton.kagakin): the page name Contact, the API method is createFeedback
    refactor this mess
 */

export default function Contact() {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    getErrorMessage,
  } = useForm(initState, submitHandler);

  return (
    <div className="container container_center">
      <div className="contact">
        <form
          onBlur={handleBlur}
          onChange={handleChange}
          onSubmit={handleSubmit}
        >
          <Input
            type="email"
            name="email"
            title="Почта"
            placeholder="Почта"
            errorMessage={getErrorMessage('email')}
          />
          <label className="input">
            <h6 className="input__title">Сообщение</h6>
            <textarea
              className="input__control contact__message-form"
              autoComplete="off"
              name="message"
              defaultValue=""
            />
            <span className="input__error">{getErrorMessage('message')}</span>
          </label>
          <div className="container container_stretch container_is-column container_center-items padding_tb_s-3">
            <Button type="submit" size="small" styleType="primary">Отправить</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
