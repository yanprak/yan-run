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
import { getThemeById } from '../../API/theme';
// import { setCurrentTheme } from '../theme/actions';

const thunkSignin = <T>(data:T) => (dispatch: Dispatch) => {
  signin(data)
    .then(() => {
      window.console.log('Successful signin');
      return fetchUserInfo();
    })
    .then(r => {
      const { id } = r.data;
      return getUserById(id);
    })
    .then(r => {
      const { result } = r.data;
      return dispatch(setUser(result));
    })
    .then(r => {
      if (r.payload.user) {
        const { themeId } = r.payload.user;
        return getThemeById(themeId);
      }
      return getThemeById(0);
    })
    .then(r => {
      // todo(Nail): THEME
      console.log('Theme => ', r);
    })
    .catch(() => {});
};

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
      return getUserById(id);
    })
    .then(r => {
      const { result } = r.data;
      return dispatch(setUser(result));
    })
    // .then(r => dispatch(setUser(r.data)))
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
  .then(r => dispatch(setUser(r.data)))
  .catch(() => {});

const thunkSignYa = <T>(data:T) => (dispatch: Dispatch) => {
  signinYa(data)
    .then(() => {
      console.info('Successful signin');
      return fetchUserInfo();
    })
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
      const { result } = r.data;
      return dispatch(setUser(result));
    })
    .catch(() => {});
};

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
};
