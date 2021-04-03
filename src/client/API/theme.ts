import themes from '../utils/theme/themes';
import { UserTheme } from '../store/theme/types';
import { Nullable } from '../types';

// todo: Abdeev.Na refactor after API create

const getAllThemes = () => themes;

const getThemeById = (id:number): Nullable<UserTheme> => {
  const searchResult = themes.find(theme => theme.id === id);
  return searchResult || null;
};

export {
  getAllThemes,
  getThemeById,
};
