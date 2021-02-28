import React, { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setUser } from '../../store/user/actions';
import Input from '../../components/input';
import Button from '../../components/button';
import { useForm, useAuthApi } from '../../hooks';
import { FormState } from '../../hooks/useForm/types';
import { RequestError } from '../../hooks/useRequest/types';
import { Nullable } from '../../types';

const initState = {
  login: { value: '', type: 'text' },
  password: { value: '', type: 'password' },
};

export default function Signin() {
  const [errorSign, stateError] = useState<Nullable<string>>(null);
  const { signin, fetchUserInfo } = useAuthApi();
  const dispath = useDispatch();

  const submitHandler = useCallback((data: FormState) => {
    const {
      login: { value: login },
      password: { value: password },
    } = data;
    signin({ login, password })
      .then(r => {
        window.console.log('Successful signin');
        window.console.dir(r);
        return fetchUserInfo();
      })
      .then(r => {
        const userAction = setUser(r);
        dispath(userAction);
      })
      .catch((e: Error) => {
        const error = JSON.parse(e.message) as RequestError;
        window.console.log(error.status, error.message);
        if (error.status === 401) {
          stateError('некорректный логин или пароль');
        }
      });
  }, [signin, fetchUserInfo, dispath]);

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
          onChange={(e:ChangeEvent<HTMLFormElement>) => {
            stateError(null);
            handleChange(e);
          }}
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            name="login"
            title="Логин"
            placeholder="Ваш логин"
            errorMessage={errorSign || getErrorMessage('login')}
          />
          <Input
            type="password"
            name="password"
            title="Пароль"
            placeholder="@#)**^_!~"
            errorMessage={errorSign || getErrorMessage('password')}
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
