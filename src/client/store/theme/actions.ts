import { ActionCreator } from 'redux';
import { ThemeAction, UserTheme } from './types';

export const SET_THEME = 'SET_THEME';
export const SET_THEME_CUR = 'SET_THEME_CUR';

export const setThemes: ActionCreator<ThemeAction> = (themes: UserTheme[]) => ({
  type: SET_THEME,
  payload: themes,
});

export const setThemeCur: ActionCreator<ThemeAction> = (current: UserTheme) => {
  return ({
    type: SET_THEME_CUR,
    payload: current,
  });
};
