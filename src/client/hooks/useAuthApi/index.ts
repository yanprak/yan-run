// todo: remove this hook
import { useCallback } from 'react';
import useRequest from '../useRequest';
import { RegisterOptions, SignInOptions, UserInfo } from './types';

export default function useAuthApi() {
  const { post, get } = useRequest('https://ya-praktikum.tech/api/v2/auth');

  const signin = useCallback(
    (data: SignInOptions) => post<string>('/signin', data), // OK string
    [post],
  );

  const signout = useCallback(
    () => post<string>('/logout'), // OK string
    [post],
  );

  const signup = useCallback(
    (data: RegisterOptions) => post<{ id: number }>('/signup', data), // id of newly created user
    [post],
  );

  const fetchUserInfo = useCallback(
    () => get<UserInfo>('/user'),
    [get],
  );

  return { signin, signout, signup, fetchUserInfo };
}
