import { Dispatch } from 'redux';
import { AxiosError } from 'axios';
import { fetchUserInfo, signin, signup, signout } from '../../API/auth';
import { removeUser, setUser } from './actions';
import showNotification from '../../utils/notification';

const thunkSignin = <T>(data:T) => (dispath: Dispatch) => {
  signin(data)
    .then(r => {
      window.console.log('Successful signin');
      window.console.dir(r.status);
      return fetchUserInfo();
    })
    .then(r => dispath(setUser(r.data)))
    .catch((e: AxiosError) => {
      const { response } = e;
      window.console.log(response!.status, response!.data);
      if (response && response.status === 409) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        showNotification('warn', 'Некорректный логин или пароль');
      }
    });
};

const thunkSignup = <T>(data:T) => (dispath: Dispatch) => {
  signup(data)
    .then(r => {
      window.console.log('Successful signup');
      window.console.dir(r.status);
      return fetchUserInfo();
    })
    .then(r => dispath(setUser(r.data)))
    .catch((e: AxiosError) => {
      const { response } = e;
      window.console.log(response);
      window.console.log(response!.status, response!.data);
      if (response && response.status === 409) {
        const { reason } = response.data;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        showNotification('warn', reason);
      }
    });
};

const thunkSignout = () => (dispath: Dispatch) => {
  signout()
    .then(r => {
      dispath(removeUser());
    })
    .catch((e: AxiosError) => {
      const { response } = e;
      window.console.log(response);
      window.console.log(response!.status, response!.data);
      if (response) {
        const { reason } = response.data;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        showNotification('warn', reason);
      }
    });
};

export {
  thunkSignin,
  thunkSignup,
  thunkSignout,
};
