import { useDispatch, useSelector } from 'react-redux';
// import { useCallback } from 'react';
import { ApplicationState } from '../../store/types';
import { ThemeState } from '../../store/theme/types';
import { thunkSetCurrentTheme, thunkSetThemes } from '../../store/theme/thunks';
import { User, UserState } from '../../store/user/types';
import { thunkUpdateUser } from '../../store/user/thunks';
import { getThemeById } from '../../API/theme';
import changeTheme from '../../utils/theme';
// import changeTheme from '../../utils/theme';

const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector<ApplicationState, ThemeState>(
    state => state.theme,
  );

  const user = useSelector<UserState, User>(
    state => state.user!,
  );
  const { current } = theme;

  const toggleTheme = () => {
    const themeId = user.themeId === 1 ? 2 : 1;
    getThemeById(themeId)
      .then(r => {
        const { result } = r.data;
        changeTheme(result);
        user.themeId = themeId;
        dispatch(thunkUpdateUser(user.id, user));
        dispatch(thunkSetCurrentTheme(result));
      })
      .catch(() => {});
  };

  const getThemes = () => dispatch(thunkSetThemes());

  return {
    current,
    toggleTheme,
    getThemes,
  };
};

export default useTheme;
