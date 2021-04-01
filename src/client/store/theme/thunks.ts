import { Dispatch } from 'redux';
import { setThemeCur, setThemes } from './actions';

// todo: Abdeev.N add work with the api

const thunkThemeCur = <T>(data:T) => (dispatch: Dispatch) => {
  dispatch(setThemeCur(data));
};

const thunkThemes = <T>(data:T) => (dispatch: Dispatch) => {
  dispatch(setThemes(data));
};

export {
  thunkThemeCur,
  thunkThemes,
};
