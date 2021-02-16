import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/input';
import Button from '../../components/button';
import useForm from '../../hooks';

const initState = {
  login: { value: '', type: 'text' },
  password: { value: '', type: 'password' },
};

// function for working with useForm data
function submitHandler<T>(data:T) {
  console.log(data);
}

export default function Signin() {
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
