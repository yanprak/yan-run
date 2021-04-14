import { ThemeState, ThemeAction, UserTheme } from './types';
import { SET_THEMES, SET_CURRENT_THEME } from './actions';
import { getAllThemes } from '../../API/theme';
// import themes from '../../utils/theme/themes';

const initialState: ThemeState = {
  themes: [],
  // current: null,
};

getAllThemes()
  .then(r => {
    const { result } = r.data;
    initialState.themes = result;
    initialState.current = result[0] as UserTheme;
    console.log('-= InitialState =-', initialState);
  })
  .catch(() => {});

export default function reducer(state = initialState, action: ThemeAction) {
  switch (action.type) {
    case SET_THEMES:
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
