import { useDispatch, useSelector } from 'react-redux';
// import { useCallback } from 'react';
import { ApplicationState } from '../../store/types';
import { ThemeState } from '../../store/theme/types';
import { thunkSetCurrentTheme } from '../../store/theme/thunks';
import { User, UserState } from '../../store/user/types';
import { thunkUpdateUser } from '../../store/user/thunks';
// import changeTheme from '../../utils/theme';

const useTheme = () => {
  const theme = useSelector<ApplicationState, ThemeState>(
    state => state.theme,
  );
  const user = useSelector<UserState, User>(
    state => state.user!,
  );

  const { current, themes } = theme;
  const dispatch = useDispatch();
  console.log('current THEMES', current, themes);

  const toggleTheme = () => {
    const num = current!.id === 1 ? 2 : 1;
    // changeTheme(themes[num]);
    const theme = themes.find(t => t.id === num);
    if (theme) {
      dispatch(thunkSetCurrentTheme(theme));
    }
    user.themeId = num;
    console.log('USER =>', user);
    dispatch(thunkUpdateUser(user.id, user));
  };

  // const toggleTheme = useCallback(
  //   () => {
  //     const num = current!.id === 1 ? 2 : 1;
  //     // changeTheme(themes[num]);
  //     const theme = themes.find(t => t.id === num);
  //     if (theme) {
  //       dispatch(thunkSetCurrentTheme(theme));
  //     }
  //     user.themeId = num;
  //     console.log('USER =>', user);
  //     dispatch(thunkUpdateUser(user.id, user));
  //   }, [theme],
  // );

  return {
    current,
    themes,
    toggleTheme,
  };
};

export default useTheme;
