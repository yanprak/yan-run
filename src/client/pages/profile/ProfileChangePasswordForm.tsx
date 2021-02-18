import React, { FC, memo, useCallback } from 'react';
import Input from '../../components/input';
import { useForm, useUsersApi } from '../../hooks';
import Button from '../../components/button/Button';
import { FormProps } from './types';
import { FormState } from '../../hooks/useForm/types';

const initState = {
  oldPassword: { value: '', type: 'password' },
  newPassword: { value: '', type: 'password' },
};

const ProfileChangePasswordForm: FC<FormProps> = () => {
  const { changePassword } = useUsersApi();

  const submitHandler = useCallback((data: FormState) => {
    const {
      oldPassword: { value: oldPassword },
      newPassword: { value: newPassword },
    } = data;

    changePassword({ oldPassword, newPassword })
      .then(r => {
        window.console.log(typeof r);
        window.console.dir(r);
      })
      .catch((e: Error) => {
        const error = JSON.parse(e.message) as { status: string, message: string };
        window.console.log(error.status, error.message);
      });
  }, [changePassword]);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    getErrorMessage,
  } = useForm(initState, submitHandler);

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
