import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import Input from '../../components/input';
import { useApiUser, useForm } from '../../hooks';
import Button from '../../components/button/Button';
import { UserDetailsFormProps } from './types';
import { User, UserState } from '../../store/user/types';

const ProfileEditInfoForm: FC<UserDetailsFormProps> = () => {
  const { handleProfile } = useApiUser();
  const user = useSelector<UserState, User>(
    state => state.user!,
  );
  const initState = {
    email: { value: user.email, type: 'email' },
    phone: { value: user.phone, type: 'tel' },
    first_name: { value: user.first_name, type: 'text' },
    second_name: { value: user.second_name, type: 'text' },
    display_name: { value: user.display_name || '', type: 'text' },
    login: { value: user.login, type: 'text' },
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    getErrorMessage,
    getFieldValue,
  } = useForm(initState, handleProfile);

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
        defaultValue={getFieldValue('email')}
      />
      <Input
        type="tel"
        name="phone"
        title="Телефон"
        placeholder="Номер вашего телефона"
        errorMessage={getErrorMessage('phone')}
        defaultValue={getFieldValue('phone')}
      />
      <Input
        type="text"
        name="first_name"
        title="Имя"
        placeholder="Как тебя звать?"
        errorMessage={getErrorMessage('first_name')}
        defaultValue={getFieldValue('first_name')}
      />
      <Input
        type="text"
        name="second_name"
        title="Фамилия"
        placeholder="Ну как в школе"
        errorMessage={getErrorMessage('second_name')}
        defaultValue={getFieldValue('second_name')}
      />
      <Input
        type="text"
        name="display_name"
        title="Никнейм"
        placeholder="Например 1337_H@ck3r"
        errorMessage={getErrorMessage('display_name')}
        defaultValue={getFieldValue('display_name')}
      />
      <Input
        type="text"
        name="login"
        title="Login"
        placeholder="Ваш логин"
        errorMessage={getErrorMessage('login')}
        defaultValue={getFieldValue('login')}
      />
      <Button type="submit" size="large" styleType="secondary" className="margin_t_s-5">Обновить профиль</Button>
    </form>
  );
};

export default memo<UserDetailsFormProps>(ProfileEditInfoForm);
