import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { ApplicationState } from '../../store/types';
import { ThemeState } from '../../store/theme/types';
import themeChange from '../../utils/themeChange';
import { thunkThemeCur } from '../../store/theme/thunks';

const useTheme = () => {
  const theme = useSelector<ApplicationState, ThemeState>(
    state => state.theme,
  );

  const { current, themes } = theme;
  const dispatch = useDispatch();

  const handleTheme = useCallback(
    () => {
      const num = current.id === 0 ? 1 : 0;
      themeChange(themes[num]);
      dispatch(thunkThemeCur(themes[num]));
    }, [current, themes],
  );

  return {
    current,
    themes,
    handleTheme,
  };
};

export default useTheme;
