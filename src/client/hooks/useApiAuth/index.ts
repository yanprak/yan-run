import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { FormState } from '../useForm/types';
import { thunkSignin, thunkSignup, thunkSignout } from '../../store/user/thunks';

export default function useApiAuth() {
  const dispatch = useDispatch();

  const handleSignin = useCallback((data: FormState) => {
    const {
      login: { value: login },
      password: { value: password },
    } = data;
    dispatch(thunkSignin({ login, password }));
  }, [dispatch]);

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
    dispatch(thunkSignup({ login, password, email, phone, first_name, second_name }));
  }, [dispatch]);

  const handleSignout = useCallback(() => {
    dispatch(thunkSignout());
  }, [dispatch]);

  return {
    handleSignin,
    handleSignup,
    handleSignout,
  };
}
