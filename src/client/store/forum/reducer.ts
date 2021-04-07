import { TopicsActions, TopicsState } from './types';

const initialState: TopicsState = {
  error: false,
  loading: true,
  data: [],
};

export default function reducer(state = initialState, action: TopicsActions) {
  switch (action.type) {
    case 'FETCH_TOPICS_REQUEST':
      return {
        ...state,
        error: false,
        loading: true,
      };
    case 'FETCH_TOPICS_FAILURE':
      return {
        ...state,
        error: true,
        loading: false,
      };
    case 'FETCH_TOPICS_SUCCESS':
      return {
        data: action.payload,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
}
