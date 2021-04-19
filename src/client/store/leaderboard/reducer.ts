import { LeaderboardState, LeaderboardActions } from './types';
import { FETCH_LEADERBOARD_FAILURE, FETCH_LEADERBOARD_REQUEST, FETCH_LEADERBOARD_SUCCESS } from './actions';

const initialState: LeaderboardState = {
  error: false,
  loading: true,
  data: [],
};

export default function reducer(state = initialState, action: LeaderboardActions) {
  switch (action.type) {
    case FETCH_LEADERBOARD_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case FETCH_LEADERBOARD_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case FETCH_LEADERBOARD_SUCCESS:
      return {
        data: action.payload,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
}
