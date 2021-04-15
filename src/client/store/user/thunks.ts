import { Dispatch } from 'redux';
import {
  fetchUserInfo,
  signin,
  signup,
  signout,
  signinYa,
  fetchUserInfoWithCookies,
  createUser,
  getUserById, updateUser,
} from '../../API/auth';
import { changeProfile, changePassword, changeAvatar } from '../../API/user';
import { removeUser, setUser } from './actions';
import showNotification from '../../utils/notification';
import { setCurrentTheme } from '../theme/actions';
import { HandlerSign } from './types';

const syncUser = <T>(handler: HandlerSign, data: T, dispatch: Dispatch) => {
  handler(data)
    .then(() => fetchUserInfo())
    .then(r => {
      const { id } = r.data;
      return getUserById(id)
        .then(res => {
          const { result } = res.data;
          if (result) {
            return Promise.resolve(res);
          }
          return createUser(r.data);
        });
    })
    .then(r => {
      const { result, theme } = r.data;
      if (theme) {
        dispatch(setCurrentTheme(theme));
      }
      return dispatch(setUser(result));
    })
    .catch(e => console.log(e));
};

const thunkSignin = <T>(data:T) => (dispatch: Dispatch) => syncUser(signin, data, dispatch);
const thunkSignYa = <T>(data:T) => (dispatch: Dispatch) => syncUser(signinYa, data, dispatch);

const thunkSignup = <T>(data:T) => (dispatch: Dispatch) => {
  signup(data)
    .then(() => fetchUserInfo())
    .then(r => createUser(r.data))
    .then(r => {
      const { result } = r.data;
      return dispatch(setUser(result));
    })
    .catch(e => console.log('SignUp ERROR => ', e));
};

const thunkCheckLogin = () => (dispatch: Dispatch) => {
  fetchUserInfo()
    .then(r => {
      const { id } = r.data;
      return getUserById(id)
        .then(res => {
          const { result } = res.data;
          if (result) {
            return Promise.resolve(res);
          }
          return createUser(r.data);
        });
    })
    .then(r => {
      const { result, them } = r.data;
      if (them) {
        dispatch(setCurrentTheme(them));
      }
      return dispatch(setUser(result));
    })
    .catch(() => dispatch(removeUser()));
};

const thunkSignout = () => (dispatch: Dispatch) => signout()
  .then(() => {
    dispatch(removeUser());
  })
  .catch(() => {});

const thunkProfile = <T>(data:T) => (dispatch: Dispatch) => {
  changeProfile(data)
    .then(() => {
      window.console.log('Successful save profile');
      return fetchUserInfo();
    })
    .then(r => {
      const { id } = r.data;
      return updateUser(id, r.data);
    })
    .then(r => {
      const { result } = r.data;
      return dispatch(setUser(result));
    })
    .catch(() => {});
};

const thunkUpdateUser = <T>(id:number, data:T) => (dispatch: Dispatch) => {
  updateUser(id, data)
    .then(r => {
      const { result } = r.data;
      return dispatch(setUser(result));
    })
    .catch(() => {});
};

const thunkPassword = <T>(data:T) => () => {
  changePassword(data)
    .then(() => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      showNotification('success', 'Update password');
    })
    .catch(() => {});
};

const thunkAvatar = <T>(data:T) => (dispatch: Dispatch) => {
  changeAvatar(data)
    .then(() => {
      window.console.log('Successful update avatar');
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      showNotification('success', 'Update Avatar');
      return fetchUserInfo();
    })
    .then(r => {
      const { id } = r.data;
      return updateUser(id, r.data);
    })
    .then(r => {
      const { result } = r.data;
      return dispatch(setUser(result));
    })
    .catch(() => {});
};

const thunkFetchUser = (cookies: string) => (dispatch: Dispatch) => fetchUserInfoWithCookies(cookies)
  .then(r => {
    const { id } = r.data;
    return getUserById(id)
      .then(res => {
        const { result } = res.data;
        if (result) {
          return Promise.resolve(res);
        }
        return createUser(r.data);
      });
  })
  .then(r => {
    const { result, them } = r.data;
    if (them) {
      dispatch(setCurrentTheme(them));
    }
    return dispatch(setUser(result));
  })
  .catch(() => {
  });

export {
  thunkSignin,
  thunkSignup,
  thunkSignout,
  thunkProfile,
  thunkCheckLogin,
  thunkPassword,
  thunkAvatar,
  thunkSignYa,
  thunkFetchUser,
  thunkUpdateUser,
};
