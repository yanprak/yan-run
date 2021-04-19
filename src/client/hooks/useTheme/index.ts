import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store/types';
import { ThemeState } from '../../store/theme/types';
import { thunkSetCurrentTheme, thunkSetThemes } from '../../store/theme/thunks';
import { User, UserState } from '../../store/user/types';
import { thunkUpdateUser } from '../../store/user/thunks';
import { getThemeById } from '../../API/theme';
import changeTheme from '../../utils/theme';

const useTheme = () => {
  const dispatch = useDispatch();
  const currentThemeState = useSelector<ApplicationState, ThemeState>(
    state => state.theme,
  );

  const user = useSelector<UserState, User>(
    state => state.user!,
  );
  const { current } = currentThemeState;

  const toggleTheme = () => {
    const currentThemeId = user.themeId === 1 ? 2 : 1;
    getThemeById(currentThemeId)
      .then(r => {
        const { result } = r.data;
        changeTheme(result);
        user.themeId = currentThemeId;
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
