import React, { FC, memo } from 'react';
import Input from '../../components/input';
import { useApiUser, useForm } from '../../hooks';
import Button from '../../components/button/Button';
import { FormProps } from './types';

const initState = {
  oldPassword: { value: '', type: 'password' },
  newPassword: { value: '', type: 'password' },
};

const ProfileChangePasswordForm: FC<FormProps> = () => {
  const { handleChangePassword } = useApiUser();

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    getErrorMessage,
  } = useForm(initState, handleChangePassword);

  return (
    <form
      className="profile__password-form"
      onBlur={handleBlur}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <Input
        type="password"
        name="oldPassword"
        title="Старый пароль"
        placeholder="@#)**^_!~"
        errorMessage={getErrorMessage('password')}
      />
      <Input
        type="password"
        name="newPassword"
        title="Новый пароль"
        placeholder="@#)**^_!~"
        errorMessage={getErrorMessage('password')}
      />
      <Button type="submit" size="large" styleType="secondary" className="margin_t_s-5">Поменять пароль</Button>
    </form>
  );
};

export default memo<FormProps>(ProfileChangePasswordForm);
