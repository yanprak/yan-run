import React from 'react';
import { Link } from 'react-router-dom';
import './signin.scss';
import Input from '../../components/input';
import Button from '../../components/button';
import { useForm } from '../../utils/form/useForm';

const initState = {
  email: { value: '', type: 'email' },
  phone: { value: '', type: 'tel' },
  first_name: { value: '', type: 'text' },
  second_name: { value: '', type: 'text' },
  login: { value: '', type: 'text' },
  password: { value: '', type: 'password' },
  passwordRepl: { value: '', type: 'password' },
};

// function for working with form data
function fun<T>(data:T) {
  console.log(data);
}

export default function SignUp() {
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
            type="email"
            name="email"
            title="Почта"
            placeholder="mail@box.xxx"
            errorMessage={errorMessage('email')}
          />
          <Input
            type="tel"
            name="phone"
            title="Телефон"
            placeholder="Номер вашего телефона"
            errorMessage={errorMessage('phone')}
          />
          <Input
            type="text"
            name="first_name"
            title="Имя"
            placeholder="Как тебя звать?"
            errorMessage={errorMessage('first_name')}
          />
          <Input
            type="text"
            name="second_name"
            title="Фамилия"
            placeholder="Ну как в школе"
            errorMessage={errorMessage('second_name')}
          />
          <Input
            type="text"
            name="login"
            title="Login"
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
          <Input
            type="password"
            name="passwordRepl"
            title="Повторить пароль"
            placeholder="@#)**^_!~"
            errorMessage={errorMessage('passwordRepl')}
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
