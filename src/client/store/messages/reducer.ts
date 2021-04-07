import { MessagesActions, MessagesState } from './types';
import { FETCH_MESSAGES_REQUEST, FETCH_MESSAGES_SUCCESS, FETCH_MESSAGES_FAILURE } from './actions';

const initialState: MessagesState = {
  error: false,
  loading: true,
  data: [],
};

export default function reducer(state = initialState, action: MessagesActions) {
  switch (action.type) {
    case FETCH_MESSAGES_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case FETCH_MESSAGES_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case FETCH_MESSAGES_SUCCESS:
      return {
        data: action.payload,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
}
