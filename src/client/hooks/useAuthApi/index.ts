import { useCallback } from 'react';
import useRequest from '../useRequest';
import { RegisterOptions, SignInOptions, UserInfo } from './types';

export default function useAuthApi() {
  const { post, get } = useRequest('https://ya-praktikum.tech/api/v2/auth');

  const signin = useCallback(
    (data: SignInOptions) => post('/signin', data) as Promise<string>, // OK string
    [post],
  );

  const signout = useCallback(
    () => post('/logout') as Promise<string>, // OK string
    [post],
  );

  const signup = useCallback(
    (data: RegisterOptions) => post('/signup', data) as Promise<{id: number}>, // id of newly created user
    [post],
  );

  const fetchUserInfo = useCallback(
    () => get('/user') as Promise<UserInfo>,
    [get],
  );

  return { signin, signout, signup, fetchUserInfo };
}
