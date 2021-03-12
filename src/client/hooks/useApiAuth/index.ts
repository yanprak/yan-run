import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { FormState } from '../useForm/types';
import { thunkSignin, thunkSignup, thunkSignout } from '../../store/user/thunks';

export default function useApiAuth() {
  const dispath = useDispatch();

  const handleSignin = useCallback((data: FormState) => {
    const {
      login: { value: login },
      password: { value: password },
    } = data;
    dispath(thunkSignin({ login, password }));
  }, [dispath]);

  const handleSignup = useCallback((data: FormState) => {
    const {
      login: { value: login },
      password: { value: password },
      email: { value: email },
      phone: { value: phone },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      first_name: { value: first_name },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      second_name: { value: second_name },
    } = data;
    dispath(thunkSignup({ login, password, email, phone, first_name, second_name }));
  }, [dispath]);

  const handleSignout = useCallback(() => {
    dispath(thunkSignout());
  }, [dispath]);

  return {
    handleSignin,
    handleSignup,
    handleSignout,
  };
}
