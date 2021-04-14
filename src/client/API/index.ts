import axios, { AxiosError } from 'axios';
import showNotification from '../utils/notification';
import isServer from '../utils/isServer';

export const HOST_URL = 'https://ya-praktikum.tech';
export const BASE_URL = `${HOST_URL}/api/v2/`;
export const RESOURCES_URL = `${BASE_URL}resources`;

const BACKEND_HOST_URL = 'https://local.ya-praktikum.tech:3500';
const BACKEND_BASE_URL = `${BACKEND_HOST_URL}/api/v1`;

const API = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
});

export const BACKEND_API = axios.create({
  baseURL: BACKEND_BASE_URL,
  responseType: 'json',
  // withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
});

if (!isServer) {
  API.interceptors.response.use(undefined, (error: AxiosError) => {
    const { response } = error;
    if (response) {
      window.console.log(response.status);
      window.console.log(response.data);
      const { reason } = response.data;
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      showNotification('warn', reason)
        .catch(() => {});
    }
    return Promise.reject();
  });

  API.interceptors.request.use(undefined, (error: AxiosError) => {
    const { request } = error;
    window.console.log(request);
    return Promise.reject(error);
  });
}

export default API;
