import { ThemeState, ThemeAction } from './types';
import { SET_THEME, SET_THEME_CUR } from './actions';
import themes from '../../utils/themeChange/themes';

const initialState: ThemeState = {
  current: themes[1],
  themes,
};

export default function reducer(state = initialState, action: ThemeAction) {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        themes: action.payload,
      };
    case SET_THEME_CUR:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
}
