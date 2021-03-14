import { Dispatch } from 'redux';
import { fetchUserInfo, signin, signup, signout } from '../../API/auth';
import { changeProfile, changePassword, changeAvatar } from '../../API/user';
import { removeUser, setUser } from './actions';
import showNotification from '../../utils/notification';

const thunkSignin = <T>(data:T) => (dispath: Dispatch) => {
  signin(data)
    .then(() => fetchUserInfo())
    .then(r => dispath(setUser(r.data)))
    .catch(() => {});
};

const thunkSignup = <T>(data:T) => (dispath: Dispatch) => {
  signup(data)
    .then(() => fetchUserInfo())
    .then(r => dispath(setUser(r.data)))
    .catch(() => {});
};

const thunkSignout = () => (dispath: Dispatch) => {
  signout()
    .then(() => {
      dispath(removeUser());
    })
    .catch(() => {});
};

const thunkProfile = <T>(data:T) => (dispath: Dispatch) => {
  changeProfile(data)
    .then(() => fetchUserInfo())
    .then(r => dispath(setUser(r.data)))
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

const thunkAvatar = <T>(data:T) => (dispath: Dispatch) => {
  changeAvatar(data)
    .then(() => {
      window.console.log('Successful update avatar');
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      showNotification('success', 'Update Avatar');
      return fetchUserInfo();
    })
    .then(r => dispath(setUser(r.data)))
    .catch(() => {});
};

export {
  thunkSignin,
  thunkSignup,
  thunkSignout,
  thunkProfile,
  thunkPassword,
  thunkAvatar,
};
