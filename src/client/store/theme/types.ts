import { Action } from 'redux';
// import { Nullable } from '../../types';

export type ThemeState = {
  themes: UserTheme[]
  current?: UserTheme,
};

export type UserTheme = {
  id: number,
  name: string,
  style: string,
};

export interface SetThemesAction extends Action {
  type: 'SET_THEMES';
  payload: UserTheme[];
}

export interface SetCurrentThemeAction extends Action {
  type: 'SET_CURRENT_THEME';
  payload: UserTheme;
}

export interface SetRemoveThemeAction extends Action {
  type: 'REMOVE_THEME';
  payload: UserTheme;
}

export type ThemeAction = SetThemesAction | SetCurrentThemeAction | SetRemoveThemeAction;
