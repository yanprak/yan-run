import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { AxiosResponse } from 'axios';
import { FormState } from '../useForm/types';
import { thunkSignin, thunkSignup, thunkSignout, thunkSignYa } from '../../store/user/thunks';
import { signYaGetId } from '../../API/auth';
import urlOauth from '../../config';

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

  const handleSignYa = useCallback((code: string) => {
    dispatch(thunkSignYa({ code }));
  }, [dispatch]);

  const handleRedirectYa = useCallback(() => {
    signYaGetId()
      .then((r:AxiosResponse) => {
        const { service_id } = r.data;
        const loc = window.location;
        // const port = loc.port ? `:${loc.port}` : '';
        const redirectUrl = `${loc.protocol}//${loc.host}`;
        const urlYa = urlOauth(service_id, redirectUrl);
        loc.replace(urlYa);
      })
      .catch(() => {});
  }, []);

  return {
    handleSignin,
    handleSignup,
    handleSignout,
    handleSignYa,
    handleRedirectYa,
  };
}
