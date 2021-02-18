import { useCallback } from 'react';
import useRequest from '../useRequest';
import { UpdateProfileOptions, UpdatePasswordOptions } from './types';
import { UserInfo } from '../useAuthApi/types';

export default function useProfileApi() {
  const { put } = useRequest('https://ya-praktikum.tech/api/v2/user');

  const editProfile = useCallback(
    (data: UpdateProfileOptions) => put('/profile', data) as Promise<UserInfo>, // User
    [put],
  );

  const changePassword = useCallback(
    (data: UpdatePasswordOptions) => put('/password', data) as Promise<string>, // OK string
    [put],
  );

  const changeAvatar = useCallback(
    (data: FormData) => put('/profile/avatar', data, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }) as Promise<{avatar: string}>,
    [put],
  );

  return { editProfile, changePassword, changeAvatar };
}
