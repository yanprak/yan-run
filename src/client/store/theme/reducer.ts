import { ThemeState, ThemeAction } from './types';
import { SET_THEME, SET_CURRENT_THEME } from './actions';
import themes from '../../utils/theme/themes';

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
    case SET_CURRENT_THEME:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
}
