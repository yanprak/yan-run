import axios from 'axios';

const GH_API = axios.create({
  baseURL: 'https://api.github.com/users',
  responseType: 'json',
  headers: {
    'content-type': 'application/json',
  },
});

const getUser = (username:string) => GH_API.get(`/${username}`);

export default getUser;
