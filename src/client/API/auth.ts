import API from './index';

const signout = () => API.post('auth/logout');

const signin = <T>(data:T) => API.post('auth/signin', JSON.stringify(data));

const fetchUserInfo = () => API.get('auth/user');

export { signin, signout, fetchUserInfo };
