import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/form';
import Input from '../../components/input';
import Button from '../../components/button';
import './signin.scss';

export default function SignIn() {
  const log = (data: unknown) => {
    console.log(data);
  };
  return (
    <div className="container container_center container_center-start">
      <div className="sign round theme-bg-secondary padding_s-3 margin_s-6">
        <Form cb={log}>
          <Input type="text" name="login" title="Логин" placeholder="Ваш логин" />
          <Input type="password" name="password" title="Пароль" placeholder="@#)**^_!~" />
          <div className="container container_stretch container_is-column container_center-items padding_tb_s-3">
            <Button type="submit" size="large" styleType="primary">Войти</Button>
            <Link className="margin_t_s-2" to="/signup">
              <Button size="large" styleType="secondary">Регистрация</Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
