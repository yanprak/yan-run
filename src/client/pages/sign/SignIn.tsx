import React from 'react';
import { Link } from 'react-router-dom';
import './signin.scss';
import Input from '../../components/input';
import Button from '../../components/button';
import { useForm } from '../../utils/form/useForm';

const initState = {
  login: { value: '', type: 'text' },
  password: { value: '', type: 'password' },
};

// function for working with form data
function fun<T>(data:T) {
  console.log(data);
}

export default function SignIn() {
  const {
    onSubmit,
    handleChange,
    handleBlur,
    errorMessage,
  } = useForm(initState, fun);

  return (
    <div className="container container_center container_center-start">
      <div className="theme-bg-secondary sign round padding_s-3 margin_s-6">
        <form onBlur={handleBlur} onChange={handleChange} onSubmit={onSubmit}>
          <Input
            type="text"
            name="login"
            title="Логин"
            placeholder="Ваш логин"
            errorMessage={errorMessage('login')}
          />
          <Input
            type="password"
            name="password"
            title="Пароль"
            placeholder="@#)**^_!~"
            errorMessage={errorMessage('password')}
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
