import { ActionCreator } from 'redux';
import { ThemeAction, UserTheme } from './types';

export const SET_THEMES = 'SET_THEMES';
export const SET_CURRENT_THEME = 'SET_CURRENT_THEME';

export const setThemes: ActionCreator<ThemeAction> = (themes: UserTheme[]) => ({
  type: SET_THEMES,
  payload: themes,
});

export const setCurrentTheme: ActionCreator<ThemeAction> = (current: UserTheme) => ({
  type: SET_CURRENT_THEME,
  payload: current,
});
