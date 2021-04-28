import API, { BACKEND_API } from './index';

const signout = () => API.post('auth/logout');
const signin = <T>(data: T) => API.post('auth/signin', JSON.stringify(data));
const signup = <T>(data: T) => API.post('auth/signup', JSON.stringify(data));
const fetchUserInfo = () => API.get('auth/user');

const signYaGetId = (redirectUrl:string) => API.get(`/oauth/yandex/service-id?redirect_uri=${redirectUrl}`);
const signinYa = <T>(data:T) => API.post('/oauth/yandex', JSON.stringify(data));

const createUser = <T>(data: T) => BACKEND_API.post('/users', JSON.stringify(data));
const updateUser = <T>(userId: number, data: T) => BACKEND_API.put(`/users/${userId}`, JSON.stringify(data));
const getUserById = (userId: number) => BACKEND_API.get(`/users/${userId}`);

export {
  signin,
  signout,
  fetchUserInfo,
  signup,
  signYaGetId,
  signinYa,
  createUser,
  updateUser,
  getUserById,
};
