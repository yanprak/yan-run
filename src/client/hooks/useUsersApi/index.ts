import { useCallback } from 'react';
import useRequest from '../useRequest';
import { UpdateProfileOptions, UpdatePasswordOptions, SearchUserByLoginOptions } from './types';
import { UserInfo } from '../useAuthApi/types';

export default function useProfileApi() {
  const { put, get, post } = useRequest('https://ya-praktikum.tech/api/v2/user');

  const editProfile = useCallback(
    (data: UpdateProfileOptions) => put('/profile', data) as Promise<UserInfo>,
    [put],
  );

  const changePassword = useCallback(
    (data: UpdatePasswordOptions) => put('/password', data) as Promise<string>, // OK string
    [put],
  );

  const changeAvatar = useCallback(
    (data: FormData) => put('/profile/avatar', data, {
      headers: {},
      // 'content-type': 'multipart/form-data', // This header is expected to work, but returns 500 error
    }) as Promise<UserInfo>,
    [put],
  );

  const getUserById = useCallback(
    (userId: number) => get(`/${userId}`) as Promise<UserInfo>,
    [get],
  );

  const searchUserByLogin = useCallback(
    (data: SearchUserByLoginOptions) => post('/search', data) as Promise<UserInfo[]>,
    [post],
  );

  return { editProfile, changePassword, changeAvatar, getUserById, searchUserByLogin };
}
