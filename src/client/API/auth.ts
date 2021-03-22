import API from './index';

const signout = () => API.post('auth/logout');

const signin = <T>(data:T) => API.post('auth/signin', JSON.stringify(data));

const signup = <T>(data:T) => API.post('auth/signup', JSON.stringify(data));

const fetchUserInfo = () => API.get('auth/user');

const fetchUserInfoWithCookies = (cookies: string) => API.get('auth/user', {
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
    Cookie: cookies,
  },
});

export { signin, signout, fetchUserInfo, signup, fetchUserInfoWithCookies };
