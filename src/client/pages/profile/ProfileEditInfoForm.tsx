import React, { FC, memo } from 'react';
import Input from '../../components/input';
import useForm from '../../hooks';
import Button from '../../components/button/Button';
import { FormProps } from './types';

const initState = {
  email: { value: '', type: 'email' },
  phone: { value: '', type: 'tel' },
  first_name: { value: '', type: 'text' },
  second_name: { value: '', type: 'text' },
  login: { value: '', type: 'text' },
};

function submitHandler<T>(data:T) {
  console.log(data);
}

const ProfileEditInfoForm: FC<FormProps> = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    getErrorMessage,
  } = useForm(initState, submitHandler);

  return (
    <form
      className="profile__info-form"
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
      <Button type="submit" size="large" styleType="secondary" className="margin_t_s-5">Обновить профиль</Button>
    </form>
  );
};

export default memo<FormProps>(ProfileEditInfoForm);
