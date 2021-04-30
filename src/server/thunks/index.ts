import { Dispatch } from 'redux';
import { AxiosError } from 'axios';
import { signout } from '../../client/API/auth';
import { removeUser, setUser } from '../../client/store/user/actions';
import { setCurrentTheme } from '../../client/store/theme/actions';
import { createUserWithCookies, fetchUserInfoWithCookies, getUserByIdWithCookies } from './proxy';

const serverThunkFetchUser = (cookies: string) => (dispatch: Dispatch) => fetchUserInfoWithCookies(cookies)
  .then(r => {
    const { id } = r.data;
    console.log('server thunk fetch user: data =', r.data);
    console.log('server thunk fetch user: cookies =', cookies);
    return getUserByIdWithCookies(id, cookies)
      .then(res => {
        const { result } = res.data;
        if (result) {
          return Promise.resolve(res);
        }
        return createUserWithCookies(r.data, cookies);
      });
  })
  .then(r => {
    const { result, theme } = r.data;
    if (theme) {
      dispatch(setCurrentTheme(theme));
    }
    dispatch(setUser(result));
  })
  .catch((e: AxiosError) => {
    console.log('server thunk fetch user failed:');
    console.log(' - message: ', e.message);
    console.log(' - data   : ', e.response?.data);
  });

const serverThunkSignout = () => (dispatch: Dispatch) => signout()
  .then(() => dispatch(removeUser()))
  .catch(() => {
  });

export {
  serverThunkSignout,
  serverThunkFetchUser,
};
