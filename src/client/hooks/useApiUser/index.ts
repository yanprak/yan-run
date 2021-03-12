import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { FormState } from '../useForm/types';
import { thunkProfile, thunkPassword, thunkAvatar } from '../../store/user/thunks';

export default function useApiUser() {
  const dispath = useDispatch();

  const handleProfile = useCallback((data: FormState) => {
    const {
      login: { value: login },
      email: { value: email },
      phone: { value: phone },
      first_name: { value: first_name },
      second_name: { value: second_name },
      display_name: { value: display_name },
    } = data;
    dispath(thunkProfile({ login, email, phone, first_name, second_name, display_name }));
  }, [dispath]);

  const handleChangePassword = useCallback((data: FormState) => {
    const {
      oldPassword: { value: oldPassword },
      newPassword: { value: newPassword },
    } = data;
    dispath(thunkPassword({ oldPassword, newPassword }));
  }, [dispath]);

  const handleChangeAvatar = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement;
    const { files } = element;
    if (!files || files.length === undefined) {
      return;
    }
    const avatar = files[0];
    const formData = new FormData();
    formData.append('avatar', avatar);
    dispath(thunkAvatar(formData));
  }, [dispath]);

  return { handleProfile, handleChangePassword, handleChangeAvatar };
}
