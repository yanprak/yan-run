import themes from '../utils/themeChange/themes';
import { UserTheme } from '../store/theme/types';
import { Nullable } from '../types';

// todo: Abdeev.Na refactor after API create

const getThemeAll = () => themes;

const getTheme = (id:number): Nullable<UserTheme> => {
  const searchResult = themes.find(theme => theme.id === id);
  return searchResult || null;
};

export {
  getThemeAll,
  getTheme,
};
