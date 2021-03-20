import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/input';
import Button from '../../components/button';
import { useForm, useApiAuth } from '../../hooks';
// import {signYagetId} from "../../API/authYa";

const initState = {
  login: { value: '', type: 'text' },
  password: { value: '', type: 'password' },
};

export default function Signin() {
  const { handleSignin, handleGetIdYa } = useApiAuth();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    getErrorMessage,
  } = useForm(initState, handleSignin);

  // let serviceId = '243f5d3b0fa04e5aa9b8ff6508db3a64';
  // const REDIRECT_URI = 'https://yanrun.herokuapp.com/';
  // eslint-disable-next-line max-len
  // const urlYa = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceId}&redirect_uri=`;
  // const redirectYa = () => {
  //
  //   window.location.replace(urlYa);
  // };

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
        <Button type="submit" onClick={handleGetIdYa} size="large" styleType="primary">Войти через Ya</Button>
      </div>
    </div>
  );
}
