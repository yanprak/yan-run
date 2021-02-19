import React, { FC, memo, useCallback } from 'react';
import Input from '../../components/input';
import { useForm, useUsersApi } from '../../hooks';
import Button from '../../components/button/Button';
import { UserDetailsFormProps } from './types';
import { FormState } from '../../hooks/useForm/types';
import { prepareStringValue } from '../../utils/nullable';

const ProfileEditInfoForm: FC<UserDetailsFormProps> = (props: UserDetailsFormProps) => {
  const { editProfile } = useUsersApi();

  const submitHandler = useCallback((data: FormState) => {
    const {
      login: { value: login },
      email: { value: email },
      phone: { value: phone },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      first_name: { value: first_name },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      second_name: { value: second_name },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      display_name: { value: display_name },
    } = data;

    editProfile({ login, email, phone, first_name, second_name, display_name })
      .then(r => {
        window.console.log(typeof r);
        window.console.dir(r);
      })
      .catch((e: Error) => {
        const error = JSON.parse(e.message) as { status: string, message: string };
        window.console.log(error.status, error.message);
      });
  }, [editProfile]);

  const { user } = props;
  const initState = {
    email: { value: user.email, type: 'email' },
    phone: { value: user.phone, type: 'tel' },
    first_name: { value: user.first_name, type: 'text' },
    second_name: { value: user.second_name, type: 'text' },
    display_name: { value: prepareStringValue(user.display_name), type: 'text' },
    login: { value: user.login, type: 'text' },
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    getErrorMessage,
    getFieldValue,
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
        value={getFieldValue('email')}
      />
      <Input
        type="tel"
        name="phone"
        title="Телефон"
        placeholder="Номер вашего телефона"
        errorMessage={getErrorMessage('phone')}
        value={getFieldValue('phone')}
      />
      <Input
        type="text"
        name="first_name"
        title="Имя"
        placeholder="Как тебя звать?"
        errorMessage={getErrorMessage('first_name')}
        value={getFieldValue('first_name')}
      />
      <Input
        type="text"
        name="second_name"
        title="Фамилия"
        placeholder="Ну как в школе"
        errorMessage={getErrorMessage('second_name')}
        value={getFieldValue('second_name')}
      />
      <Input
        type="text"
        name="display_name"
        title="Никнейм"
        placeholder="Например 1337_H@ck3r"
        errorMessage={getErrorMessage('display_name')}
        value={getFieldValue('display_name')}
      />
      <Input
        type="text"
        name="login"
        title="Login"
        placeholder="Ваш логин"
        errorMessage={getErrorMessage('login')}
        value={getFieldValue('login')}
      />
      <Button type="submit" size="large" styleType="secondary" className="margin_t_s-5">Обновить профиль</Button>
    </form>
  );
};

export default memo<UserDetailsFormProps>(ProfileEditInfoForm);
