import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/input';
import Button from '../../components/button';

import { useForm, useAuthApi } from '../../hooks';
import { FormState } from '../../hooks/useForm/types';

const initState = {
  email: { value: '', type: 'email' },
  phone: { value: '', type: 'tel' },
  first_name: { value: '', type: 'text' },
  second_name: { value: '', type: 'text' },
  login: { value: '', type: 'text' },
  password: { value: '', type: 'password' },
};

export default function Signup() {
  const { signup } = useAuthApi();

  const submitHandler = useCallback((data: FormState) => {
    const {
      login: { value: login },
      password: { value: password },
      email: { value: email },
      phone: { value: phone },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      first_name: { value: first_name },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      second_name: { value: second_name },
    } = data;

    signup({ login, password, email, phone, first_name, second_name })
      .then(r => {
        window.console.log(typeof r);
        window.console.dir(r);
      })
      .catch((e: Error) => {
        const error = JSON.parse(e.message) as { status: string, message: string };
        window.console.log(error.status, error.message);
      });
  }, [signup]);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    getErrorMessage,
  } = useForm(initState, submitHandler);

  return (
    <div className="container container_center container_center-start">
      <div
        className="theme-bg-secondary sign round padding_s-3 margin_s-6"
        style={{ width: '320px' }}
      >
        <form
          onBlur={handleBlur}
          onChange={handleChange}
          onSubmit={handleSubmit}
        >
          <Input
            type="email"
            name="email"
            title="Почта"
            placeholder="mail@box.xxx"
            errorMessage={getErrorMessage('email')}
          />
          <Input
            type="tel"
            name="phone"
            title="Телефон"
            placeholder="Номер вашего телефона"
            errorMessage={getErrorMessage('phone')}
          />
          <Input
            type="text"
            name="first_name"
            title="Имя"
            placeholder="Как тебя звать?"
            errorMessage={getErrorMessage('first_name')}
          />
          <Input
            type="text"
            name="second_name"
            title="Фамилия"
            placeholder="Ну как в школе"
            errorMessage={getErrorMessage('second_name')}
          />
          <Input
            type="text"
            name="login"
            title="Login"
            placeholder="Ваш логин"
            errorMessage={getErrorMessage('login')}
          />
          <Input
            type="password"
            name="password"
            title="Пароль"
            placeholder="@#)**^_!~"
            errorMessage={getErrorMessage('password')}
          />
          <div className="container container_stretch container_is-column container_center-items padding_tb_s-3">
            <Button type="submit" size="large" styleType="primary">Зарегистрироваться</Button>
            <Link className="margin_t_s-2" to="/signin">
              <Button size="large" styleType="secondary">Авторизоваться</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
