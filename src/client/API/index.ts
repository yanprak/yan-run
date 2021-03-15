import axios, { AxiosError } from 'axios';
import showNotification from '../utils/notification';
import isServer from '../utils/isServer';

const BASE_URL = 'https://ya-praktikum.tech/api/v2/';

const API = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  withCredentials: true,
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
      showNotification('warn', reason);
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
