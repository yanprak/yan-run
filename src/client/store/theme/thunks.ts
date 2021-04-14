import { Dispatch } from 'redux';
import { setCurrentTheme, setThemes } from './actions';
import { UserTheme } from './types';
import changeTheme from '../../utils/theme';

// todo: Abdeev.N add work with the api

const thunkSetCurrentTheme = (data:UserTheme) => (dispatch: Dispatch) => {
  dispatch(setCurrentTheme(data));
  changeTheme(data);
};

const thunkSetThemes = <T>(data:T) => (dispatch: Dispatch) => {
  dispatch(setThemes(data));
};

export {
  thunkSetCurrentTheme,
  thunkSetThemes,
};
