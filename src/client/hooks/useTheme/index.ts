import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { ApplicationState } from '../../store/types';
import { ThemeState } from '../../store/theme/types';
import changeTheme from '../../utils/theme';
import { thunkSetCurrentTheme } from '../../store/theme/thunks';

const useTheme = () => {
  const theme = useSelector<ApplicationState, ThemeState>(
    state => state.theme,
  );

  const { current, themes } = theme;
  const dispatch = useDispatch();

  const toggleTheme = useCallback(
    () => {
      const num = current.id === 0 ? 1 : 0;
      changeTheme(themes[num]);
      dispatch(thunkSetCurrentTheme(themes[num]));
    }, [current, themes],
  );

  return {
    current,
    themes,
    toggleTheme,
  };
};

export default useTheme;
