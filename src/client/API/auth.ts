import API, { BACKEND_API } from './index';

const signout = () => API.post('auth/logout');
const signin = <T>(data:T) => API.post('auth/signin', JSON.stringify(data));
const signup = <T>(data:T) => API.post('auth/signup', JSON.stringify(data));
const fetchUserInfo = () => API.get('auth/user');

const signYaGetId = () => API.get('/oauth/yandex/service-id');
const signinYa = <T>(data:T) => API.post('/oauth/yandex', JSON.stringify(data));

const fetchUserInfoWithCookies = (cookies: string) => API.get('auth/user', {
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
    Cookie: cookies,
  },
});

const createUser = <T>(data:T) => {
  console.log('Data => ', data);
  return BACKEND_API.post('/users', JSON.stringify(data));
};

const updateUser = <T>(userId:number, data:T) => BACKEND_API.put(`/users/${userId}`, JSON.stringify(data));
const getUserById = (userId:number) => BACKEND_API.get(`/users/${userId}`);

export {
  signin,
  signout,
  fetchUserInfo,
  signup,
  signYaGetId,
  signinYa,
  fetchUserInfoWithCookies,
  createUser,
  updateUser,
  getUserById,
};
