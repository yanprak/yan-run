import { Dispatch } from 'redux';
import { fetchUserInfo, signin, signup, signout } from '../../API/auth';
import { changeProfile, changePassword, changeAvatar } from '../../API/user';
import { removeUser, setUser } from './actions';
import showNotification from '../../utils/notification';

const thunkSignin = <T>(data:T) => (dispatch: Dispatch) => {
  signin(data)
    .then(() => {
      window.console.log('Successful signin');
      return fetchUserInfo();
    })
    .then(r => dispatch(setUser(r.data)))
    .catch(() => {});
};

const thunkSignup = <T>(data:T) => (dispatch: Dispatch) => {
  signup(data)
    .then(() => {
      window.console.log('Successful signup');
      return fetchUserInfo();
    })
    .then(r => dispatch(setUser(r.data)))
    .catch(() => {});
};

const thunkSignout = () => (dispatch: Dispatch) => {
  signout()
    .then(() => {
      dispatch(removeUser());
    })
    .catch(() => {});
};

const thunkProfile = <T>(data:T) => (dispatch: Dispatch) => {
  changeProfile(data)
    .then(() => {
      window.console.log('Successful save profile');
      return fetchUserInfo();
    })
    .then(r => dispatch(setUser(r.data)))
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
    .then(r => dispatch(setUser(r.data)))
    .catch(() => {});
};

const thunkFetchUser = (cookies: string) => (dispatch: Dispatch) => fetchUserInfoWithCookies(cookies)
  .then(r => dispatch(setUser(r.data)))
  .catch(() => {});

const thunkSignYa = <T>(data:T) => (dispatch: Dispatch) => {
  signinYa(data)
    .then(() => {
      window.console.log('Successful signin');
      return fetchUserInfo();
    })
    .then(r => dispatch(setUser(r.data)))
    .catch(() => {});
};

export {
  thunkSignin,
  thunkSignup,
  thunkSignout,
  thunkProfile,
  thunkPassword,
  thunkAvatar,
  thunkSignYa,
  thunkFetchUser,
};
