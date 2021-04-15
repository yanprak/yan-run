import { useDispatch, useSelector } from 'react-redux';
// import { useCallback } from 'react';
import { ApplicationState } from '../../store/types';
import { ThemeState } from '../../store/theme/types';
import { thunkSetCurrentTheme, thunkSetThemes } from '../../store/theme/thunks';
import { User, UserState } from '../../store/user/types';
import { thunkUpdateUser } from '../../store/user/thunks';
// import changeTheme from '../../utils/theme';

const useTheme = () => {
  const currentThemeState = useSelector<ApplicationState, ThemeState>(state => state.theme);
  const user = useSelector<UserState, User>(state => state.user!);

  const { current, themes } = currentThemeState;
  const dispatch = useDispatch();

  const toggleTheme = () => {
    const currentThemeId = current!.id === 1 ? 2 : 1;
    // changeTheme(themes[num]);
    const theme = themes.find(t => t.id === currentThemeId);
    if (theme) {
      dispatch(thunkSetCurrentTheme(theme));
      user.themeId = currentThemeId;
      console.log('USER =>', user);
      dispatch(thunkUpdateUser(user.id, user));
    }
  };

  const getThemes = () => dispatch(thunkSetThemes());

  return {
    current,
    themes,
    toggleTheme,
    getThemes,
  };
};

export default useTheme;
