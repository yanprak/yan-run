import { Action } from 'redux';

export type ThemeState = {
  current: UserTheme,
  themes: UserTheme[]
};

export type UserTheme = {
  id: number,
  name:string,
  style: string
};

export interface SetThemeAction extends Action {
  type: 'SET_THEME';
  payload: UserTheme[];
}

export interface SetThemeCurAction extends Action {
  type: 'SET_THEME_CUR';
  payload: UserTheme;
}

export type ThemeAction = SetThemeAction | SetThemeCurAction;
