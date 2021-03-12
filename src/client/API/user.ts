import API from './index';

const changeProfile = <T>(data:T) => API.put('/user/profile', JSON.stringify(data));
const changePassword = <T>(data:T) => API.put('/user/password', JSON.stringify(data));
const changeAvatar = <T>(data:T) => API.put('/user/profile/avatar', data, { headers: {} });

export { changeProfile, changePassword, changeAvatar };
