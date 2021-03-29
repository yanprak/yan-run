import API from './index';
import { UserInfo } from '../pages/profile/types';

const changeProfile = <T>(data:T) => API.put('/user/profile', JSON.stringify(data));
const changePassword = <T>(data:T) => API.put('/user/password', JSON.stringify(data));
const changeAvatar = <T>(data:T) => API.put('/user/profile/avatar', data, { headers: {} });
const getUserInfo = (id: number) => API.get<UserInfo>(`/user/${id}`);

export { changeProfile, changePassword, changeAvatar, getUserInfo };
