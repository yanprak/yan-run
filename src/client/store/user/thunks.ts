import { Dispatch } from 'redux';
import { fetchUserInfo, signin } from '../../API/auth';
import { RequestError } from '../../hooks/useRequest/types';
import { setUser } from './actions';

// eslint-disable-next-line import/prefer-default-export
export const initLoginThunk = <T>(data:T) => (dispath: Dispatch) => {
  signin(data)
    .then(r => {
      window.console.log('Successful signin');
      window.console.dir(r.status);
      return fetchUserInfo();
    })
    .then(r => dispath(setUser(r.data)))
    .catch((e: Error) => {
      const error = JSON.parse(e.message) as RequestError;
      window.console.log(error.status, error.message);
    });
};
