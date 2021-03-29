import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { FormState } from '../useForm/types';
import { thunkProfile, thunkPassword, thunkAvatar } from '../../store/user/thunks';

export default function useApiUser() {
  const dispatch = useDispatch();

  const handleProfile = useCallback((data: FormState) => {
    const {
      login: { value: login },
      email: { value: email },
      phone: { value: phone },
      first_name: { value: first_name },
      second_name: { value: second_name },
      display_name: { value: display_name },
    } = data;
    dispatch(thunkProfile({ login, email, phone, first_name, second_name, display_name }));
  }, [dispatch]);

  const handleChangePassword = useCallback((data: FormState) => {
    const {
      oldPassword: { value: oldPassword },
      newPassword: { value: newPassword },
    } = data;
    dispatch(thunkPassword({ oldPassword, newPassword }));
  }, [dispatch]);

  const handleChangeAvatar = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement;
    const { files } = element;
    if (!files || files.length === undefined) {
      return;
    }
    const avatar = files[0];
    const formData = new FormData();
    formData.append('avatar', avatar);
    dispatch(thunkAvatar(formData));
  }, [dispatch]);

  return { handleProfile, handleChangePassword, handleChangeAvatar };
}
