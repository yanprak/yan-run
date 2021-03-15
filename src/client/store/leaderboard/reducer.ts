import { LeaderboardState, LeaderboardActions } from './types';

const initialState: LeaderboardState = {
  error: false,
  loading: true,
  data: [],
};

export default function reducer(state = initialState, action: LeaderboardActions) {
  switch (action.type) {
    case 'FETCH_LEADERBOARD_REQUEST':
      return {
        ...state,
        error: false,
        loading: true,
      };
    case 'FETCH_LEADERBOARD_FAILURE':
      return {
        ...state,
        error: true,
        loading: false,
      };
    case 'FETCH_LEADERBOARD_SUCCESS':
      return {
        data: action.payload,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
}
