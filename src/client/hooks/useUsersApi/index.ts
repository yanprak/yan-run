import { useCallback } from 'react';
import useRequest from '../useRequest';
import { UpdateProfileOptions, UpdatePasswordOptions, SearchUserByLoginOptions } from './types';
import { UserInfo } from '../useAuthApi/types';

export default function useProfileApi() {
  const { put, get, post } = useRequest('https://ya-praktikum.tech/api/v2/user');

  const editProfile = useCallback(
    (data: UpdateProfileOptions) => put<UserInfo>('/profile', data),
    [put],
  );

  const changePassword = useCallback(
    (data: UpdatePasswordOptions) => put<string>('/password', data), // OK string
    [put],
  );

  const changeAvatar = useCallback(
    (data: FormData) => put<{ avatar: string }>('/profile/avatar', data, {
      headers: {},
      // 'content-type': 'multipart/form-data', // This header is expected to work, but returns 500 error
    }),
    [put],
  );

  const getUserById = useCallback(
    (userId: number) => get<UserInfo>(`/${userId}`),
    [get],
  );

  const searchUserByLogin = useCallback(
    (data: SearchUserByLoginOptions) => post<UserInfo[]>('/search', data),
    [post],
  );

  return { editProfile, changePassword, changeAvatar, getUserById, searchUserByLogin };
}
