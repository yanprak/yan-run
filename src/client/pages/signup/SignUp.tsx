import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/form';
import Input from '../../components/input';
import Button from '../../components/button';
import './signin.scss';

export default function SignUp() {
  return (
    <div className="container container_center container_center-start">
      <div className="theme-bg-secondary sign round padding_s-3 margin_s-6">
        <Form>
          <Input type="email" name="email" title="Почта" placeholder="mail@box.xxx" />
          <Input type="tel" name="phone" title="Телефон" placeholder="Номер вашего телефона" />
          <Input type="text" name="first_name" title="Имя" placeholder="Как тебя звать?" />
          <Input type="text" name="second_name" title="Фамилия" placeholder="Ну как в школе" />
          <Input type="text" name="login" title="Login" placeholder="Ваш логин" />
          <Input type="password" name="password" title="Пароль" placeholder="@#)**^_!~" />
          <Input type="password" name="passwordRepl" title="Повторить пароль" placeholder="@#)**^_!~" />
          <div className="container container_stretch container_is-column container_center-items padding_tb_s-3">
            <Button type="submit" size="large" styleType="primary">Зарегистрироваться</Button>
            <Link className="margin_t_s-2" to="/signin">
              <Button size="large" styleType="secondary">
                Авторизоваться
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
