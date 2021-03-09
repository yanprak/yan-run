import axios from 'axios';

const BASE_URL = 'https://ya-praktikum.tech/api/v2/';

export default axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
});
