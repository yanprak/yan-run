import axios from 'axios';

const {
  NODE_ENV = 'development',
  API_HOST = 'https://local.ya-praktikum.tech',
  API_PORT = '3000'
} = process.env;

const IS_DEV = NODE_ENV === 'development';

const BACKEND_BASE_URL = IS_DEV ? `${API_HOST}:${API_PORT}/api/v1` : 'localhost:3001/api/v1';

const BACKEND_API = axios.create({
  baseURL: BACKEND_BASE_URL,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
});

const YA_API_BASE_URL = 'https://ya-praktikum.tech/api/v2';

const fetchUserInfoWithCookies = (cookies: string) => axios.get(`${YA_API_BASE_URL}/auth/user`, {
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
    Cookie: cookies,
  },
});

const getUserByIdWithCookies = (userId: number, cookies: string) => BACKEND_API.get(`/users/${userId}`, {
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
    Cookie: cookies,
  },
});

const createUserWithCookies = <T>(data: T, cookies: string) => BACKEND_API.post('/users', JSON.stringify(data), {
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
    Cookie: cookies,
  },
});

export {
  fetchUserInfoWithCookies,
  createUserWithCookies,
  getUserByIdWithCookies
};
