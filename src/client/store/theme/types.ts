import { Action } from 'redux';

export type ThemeState = {
  current: UserTheme,
  themes: UserTheme[]
};

export type UserTheme = {
  id: number,
  name: string,
  style: string,
};

export interface SetThemeAction extends Action {
  type: 'SET_THEME';
  payload: UserTheme[];
}

export interface SetCurrentThemeAction extends Action {
  type: 'SET_CURRENT_THEME';
  payload: UserTheme;
}

export type ThemeAction = SetThemeAction | SetCurrentThemeAction;
