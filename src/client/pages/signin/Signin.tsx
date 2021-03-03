import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { initLoginThunk } from '../../store/user/thunks';
import Input from '../../components/input';
import Button from '../../components/button';
import { useForm } from '../../hooks';
import { FormState } from '../../hooks/useForm/types';

const initState = {
  login: { value: '', type: 'text' },
  password: { value: '', type: 'password' },
};

export default function Signin() {
  const dispath = useDispatch();

  const submitHandler = useCallback((data: FormState) => {
    const {
      login: { value: login },
      password: { value: password },
    } = data;
    dispath(initLoginThunk({ login, password }));
  }, [dispath]);

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
            type="text"
            name="login"
            title="Логин"
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
            <Button type="submit" size="large" styleType="primary">Войти</Button>
            <Link className="margin_t_s-2" to="/signup">
              <Button size="large" styleType="secondary">Регистрация</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
