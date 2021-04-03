import { Dispatch } from 'redux';
import { setCurrentTheme, setThemes } from './actions';

// todo: Abdeev.N add work with the api

const thunkSetCurrentTheme = <T>(data:T) => (dispatch: Dispatch) => {
  dispatch(setCurrentTheme(data));
};

const thunkSetThemes = <T>(data:T) => (dispatch: Dispatch) => {
  dispatch(setThemes(data));
};

export {
  thunkSetCurrentTheme,
  thunkSetThemes,
};
