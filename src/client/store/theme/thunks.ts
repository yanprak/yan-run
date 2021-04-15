import { Dispatch } from 'redux';
import { setCurrentTheme, setThemes } from './actions';
import { UserTheme } from './types';
import changeTheme from '../../utils/theme';
import { getAllThemes } from '../../API/theme';

const thunkSetCurrentTheme = (data:UserTheme) => (dispatch: Dispatch) => {
  dispatch(setCurrentTheme(data));
  changeTheme(data);
};

const thunkSetThemes = () => (dispatch: Dispatch) => {
  getAllThemes()
    .then(r => {
      const { result } = r.data;
      const allThemes: UserTheme[] = result;
      dispatch(setThemes(allThemes));
      dispatch(setCurrentTheme(allThemes[0]));
    })
    .catch(() => {});
};

export {
  thunkSetCurrentTheme,
  thunkSetThemes,
};
